import { Float } from "@react-three/drei";
import Crystal from "./Crystal";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";
import useMousePosition from "@/hooks/useMousePosition";

export default function Model() {
  const { x, y } = useMousePosition();
  const groupRef = useRef<Group>(null);
  useFrame(({ camera }) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((mesh) => {
        mesh.rotation.y = x.get() * 0.4;
      });
      camera.position.y = y.get() * 0.2;
    }
  });
  return (
    <Float
      speed={1}
      rotationIntensity={1}
      floatIntensity={3}
      scale={[1.4, 1.4, 1.4]}
    >
      <group position={[0, -1, 0]} ref={groupRef} scale={[1.4, 1.4, 1.4]}>
        <Crystal />
      </group>
    </Float>
  );
}
