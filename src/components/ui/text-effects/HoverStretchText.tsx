"use client";

import { cn } from "@/lib/util";
import { motion } from "motion/react";
import { useRef, useState } from "react";

interface HoverStretchTextProps {
  className?: string;
  text?: string;
}

export default function HoverStretchText({
  className,
  text,
}: HoverStretchTextProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [skewX, setSkewX] = useState(0);
  const [skewY, setSkewY] = useState(0);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const width = rect.width;
      const skewIntensity = 20;
      setSkewX((mouseX / width - 0.5) * skewIntensity);
      setSkewY((mouseY / rect.height - 0.5) * skewIntensity);
    }
  };

  const handleMouseLeave = () => {
    setSkewX(0);
    setSkewY(0);
  };

  return (
    <motion.div
      ref={targetRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        skewX: skewX,
        skewY: skewY,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      style={{
        transformOrigin: "top",
      }}
      className={cn(
        "w-screen text-[25vw] uppercase text-white font-extrabold tracking-[-0.03em] font-mona-sans flex flex-col items-center justify-center",
        className
      )}
    >
      {text}
    </motion.div>
  );
}
