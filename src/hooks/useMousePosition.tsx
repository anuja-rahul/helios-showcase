"use client";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

export default function useMousePosition() {
  const mousePosition = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const springMousePosition = {
    x: useSpring(mousePosition.x, { stiffness: 70, damping: 30, mass: 2 }),
    y: useSpring(mousePosition.y, { stiffness: 70, damping: 30, mass: 2 }),
  };
  const getMousePosition = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mousePosition.x.set((clientX / window.innerWidth - 0.5) * 2);
    mousePosition.y.set((clientY / window.innerHeight - 0.5) * 2);
  };
  useEffect(() => {
    window.addEventListener("mousemove", getMousePosition);
    return () => {
      window.removeEventListener("mousemove", getMousePosition);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { x: springMousePosition.x, y: springMousePosition.y };
}
