"use client";

import { cn } from "@/lib/util";
import { motion } from "motion/react";
import { useRef, useEffect } from "react";

interface ScrambleLoadTextProps {
  text: string;
  direction?: "left" | "right";
  className?: string;
  margin?: number;
}

export default function ScrambleLoadText({
  text,
  direction = "left",
  margin = 30,
  className,
}: ScrambleLoadTextProps) {
  const ref = useRef<HTMLSpanElement[]>([]); // Use array of refs for multiple lines

  const scrambleEffect = (lineRef: HTMLSpanElement, originalText: string) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iterations = 0;
    const interval = setInterval(() => {
      lineRef.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return originalText.charAt(index);
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations > originalText.length) clearInterval(interval);
      iterations += 1;
    }, 30);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.forEach((lineRef, index) => {
            scrambleEffect(lineRef, textArray[index]); // Trigger scramble for each line
          });
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    ref.current.forEach((lineRef) => {
      if (lineRef) {
        observer.observe(lineRef);
      }
    });

    return () => {
      ref.current.forEach((lineRef) => {
        if (lineRef) {
          observer.unobserve(lineRef);
        }
      });
    };
  }, []);

  // Preprocess text into an array of strings
  const textArray = text.split("<br />");

  return (
    <div
      className={cn(
        `flex flex-col justify-center overflow-x-hidden w-fit ${
          direction === "left" ? "items-start" : "items-end"
        }`,
        className
      )}
    >
      {textArray.map((line, index) => {
        const marginValue = index * margin;
        return (
          <motion.span
            ref={(el) => {
              if (el) {
                ref.current[index] = el;
              }
            }} // Dynamically assign ref for each line
            className="flex flex-col flex-nowrap gap-2 overflow-x-hidden w-fit font-general uppercase"
            style={{
              marginLeft: direction === "left" ? `${marginValue}px` : undefined,
              marginRight:
                direction === "right" ? `${marginValue}px` : undefined,
            }}
            key={index}
          >
            {line}
          </motion.span>
        );
      })}
    </div>
  );
}
