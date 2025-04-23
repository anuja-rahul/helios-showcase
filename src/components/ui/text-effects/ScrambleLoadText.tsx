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
  const ref = useRef<HTMLSpanElement[]>([]);
  const hasRun = useRef<boolean[]>([]);

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

  const textArray = text.split("<br />");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.forEach((lineRef, index) => {
            if (!hasRun.current[index] && lineRef) {
              scrambleEffect(lineRef, textArray[index]);
              hasRun.current[index] = true;
            }
          });
        }
      },
      { threshold: 0.5 }
    );

    ref.current.forEach((lineRef, index) => {
      hasRun.current[index] = false;
      if (lineRef) observer.observe(lineRef);
    });

    const linesAtMount = [...ref.current];

    return () => {
      linesAtMount.forEach((lineRef) => {
        if (lineRef) {
          observer.unobserve(lineRef);
        }
      });
    };
  }, [textArray]);

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
            }}
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
