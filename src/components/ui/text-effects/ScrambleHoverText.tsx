"use client";

import { cn } from "@/lib/util";
import { useRef } from "react";

interface ScrambleHoverTextProps {
  text: string;
  className?: string;
}

export default function ScrambleHoverText({
  text,
  className,
}: ScrambleHoverTextProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const handleMouseEnter = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (ref.current) {
      const event = ref.current;
      let iterations = 0;
      const interval = setInterval(() => {
        event.innerText = event.innerText
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return text.charAt(index);
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iterations > text.length) clearInterval(interval);
        iterations += 1 / 3;
      }, 30);
    }
  };
  return (
    <h1
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className={cn(
        "bg-transparent text-white font-mona-sans uppercase",
        className
      )}
    >
      {text}
    </h1>
  );
}
