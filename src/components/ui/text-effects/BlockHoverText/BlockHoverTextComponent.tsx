"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface TextShaderProps {
  text: string; // Prop for dynamic text
}   

const TextShaderComponent: React.FC<TextShaderProps> = ({ text }) => {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const easeFactorRef = useRef(0.02);
  const mousePositionRef = useRef<{ x: number; y: number }>({ x: 0.5, y: 0.5 });
  const prevPositionRef = useRef<{ x: number; y: number }>({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const textContainer = textContainerRef.current;
    if (!textContainer) return;

    const vertexShader = `
      varying vec2 vUv;
      void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      uniform sampler2D u_texture;
      uniform vec2 u_mouse;
      uniform vec2 u_prevMouse;

      void main() {
          vec2 gridUV = floor(vUv * vec2(40.0, 40.0)) / vec2(40.0, 40.0);
          vec2 centerOfPixel = gridUV + vec2(1.0 / 40.0, 1.0 / 40.0);

          vec2 mouseDirection = u_mouse - u_prevMouse;
          vec2 pixelToMouseDirection = centerOfPixel - u_mouse;

          float pixelDistanceToMouse = length(pixelToMouseDirection);
          float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);

          vec2 uvOffset = strength * -mouseDirection * 0.3;
          vec2 uv = vUv - uvOffset;

          vec4 color = texture2D(u_texture, uv);
          gl_FragColor = color;
      }
    `;

    function createTextTexture(
      text: string,
      font: string = "mona-sans",
      size: number | null = null,
      color: string = "#ffffff",
      fontWeight: string = "100"
    ): THREE.Texture {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      const canvasWidth = window.innerWidth * 2;
      const canvasHeight = window.innerHeight * 2;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      ctx.fillStyle = color;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      const fontSize = size || Math.floor(canvasWidth * 0.1);
      ctx.font = `${fontWeight} ${fontSize}px "${font}"`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const textMetrics = ctx.measureText(text);
      const textWidth = textMetrics.width;

      const scaleFactor = Math.min(1, (canvasWidth * 0.8) / textWidth);
      const aspectCorrection = canvasWidth / canvasHeight;

      ctx.setTransform(
        scaleFactor,
        0,
        0,
        scaleFactor / aspectCorrection,
        canvasWidth / 2,
        canvasHeight / 2
      );
      ctx.fillStyle = "#1a1a1a";
      ctx.fillText(text, 0, 0);

      return new THREE.CanvasTexture(canvas);
    }

    const scene = new THREE.Scene();
    const aspectRatio = window.innerWidth / window.innerHeight;
    const camera = new THREE.OrthographicCamera(
      -1,
      1,
      1 / aspectRatio,
      -1 / aspectRatio,
      0.1,
      100
    );
    camera.position.z = 1;

    const texture = createTextTexture(text);
    const shaderUniforms = {
      u_mouse: { value: new THREE.Vector2() },
      u_prevMouse: { value: new THREE.Vector2() },
      u_texture: { value: texture },
    };

    const planeMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({
        uniforms: shaderUniforms,
        vertexShader,
        fragmentShader,
      })
    );

    scene.add(planeMesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0xffffff, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    textContainer.appendChild(renderer.domElement);

    function animate() {
      requestAnimationFrame(animate);

      // Smooth interpolation using easeFactor
      mousePositionRef.current.x +=
        (prevPositionRef.current.x - mousePositionRef.current.x) *
        easeFactorRef.current;
      mousePositionRef.current.y +=
        (prevPositionRef.current.y - mousePositionRef.current.y) *
        easeFactorRef.current;

      planeMesh.material.uniforms.u_mouse.value.set(
        mousePositionRef.current.x,
        1.0 - mousePositionRef.current.y
      );
      planeMesh.material.uniforms.u_prevMouse.value.set(
        prevPositionRef.current.x,
        1.0 - prevPositionRef.current.y
      );

      renderer.render(scene, camera);
    }

    animate();

    const handleMouseMove = (event: MouseEvent) => {
      if (!textContainer) return;
      const rect = textContainer.getBoundingClientRect();
      prevPositionRef.current = { ...mousePositionRef.current };
      mousePositionRef.current = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      };
    };

    const handleMouseEnter = (event: MouseEvent) => {
      easeFactorRef.current = 0.02; // Reset for smoother entry
      const rect = textContainer.getBoundingClientRect();
      mousePositionRef.current = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      };
      prevPositionRef.current = { ...mousePositionRef.current };
    };

    const handleMouseLeave = () => {
      easeFactorRef.current = 0.02; // Decelerate on exit
    };

    textContainer.addEventListener("mousemove", handleMouseMove);
    textContainer.addEventListener("mouseenter", handleMouseEnter);
    textContainer.addEventListener("mouseleave", handleMouseLeave);

    window.addEventListener("resize", () => {
      const aspectRatio = window.innerWidth / window.innerHeight;
      camera.left = -1;
      camera.right = 1;
      camera.top = 1 / aspectRatio;
      camera.bottom = -1 / aspectRatio;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      textContainer.removeEventListener("mousemove", handleMouseMove);
      textContainer.removeEventListener("mouseenter", handleMouseEnter);
      textContainer.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", () => {});
      renderer.dispose();
    };
  }, [text]);

  return <div id="textContainer" ref={textContainerRef} />;
};

export default TextShaderComponent;
