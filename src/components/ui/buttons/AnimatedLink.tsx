"use client";

import { cn } from "@/lib/util";
import Link from "next/link";
import { ComponentProps, useEffect, useState } from "react";
import { motion } from "motion/react";
import { useRef } from "react";

interface AnimatedLinkProps extends ComponentProps<typeof Link> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedLink({
  href,
  children,
  className,
}: AnimatedLinkProps) {
  const [position, setPosition] = useState({
    height: 0,
    width: 0,
    scale: 0,
    opacity: 0,
  });

  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    setPosition({
      width,
      height,
      opacity: 1,
      scale: 1,
    });
  }, []);

  return (
    <motion.div
      className={cn(
        "text-black bg-transparent font-semibold w-fit h-fit relative",
        className
      )}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {/* Link element */}
      <Link
        ref={ref}
        className="px-4 py-2 text-center inline-block bg-transparent text-black text-xs font-bold relative z-10"
        href={href}
      >
        {children}
      </Link>

      {/* Animated Shape */}
      <Shape position={position} isHovered={isHovered} />
    </motion.div>
  );
}

const Shape = ({
  position,
  isHovered = false,
}: {
  position: { height: number; width: number; opacity: number; scale: number };
  isHovered: boolean;
}) => {
  return (
    <motion.div className="absolute inset-0">
      <motion.svg
        width={position.width} // Use width from position
        height={position.height} // Use height from position
        viewBox="0 0 144 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          // Unified animation logic for both hover and non-hover states
          animate={{
            d: isHovered
              ? "M130.876 6.17869L11.4165 0.384009C7.03246 0.17135 3.29574 3.5307 3.04225 7.91257L0.489539 52.038C0.223873 56.6302 3.87627 60.5 8.47618 60.5H135.812C140.668 60.5 144.404 56.2091 143.736 51.3994L138.412 13.0687C137.883 9.25899 134.718 6.36504 130.876 6.17869Z"
              : "M117 0.5H25.5C11.6929 0.5 0.5 11.6929 0.5 25.5V37.5C0.5 51.3071 11.6929 62.5 25.5 62.5H117C130.807 62.5 142 51.3071 142 37.5V25.5C142 11.6929 130.807 0.5 117 0.5Z",

            opacity: isHovered ? 1 : 0.8, // Optional fade effect
            scale: isHovered ? 1.2 : 1, // Optional scale effect
          }}
          transition={{
            type: "spring", // Spring animation
            stiffness: 200, // Bounce intensity
            damping: 25, // Smooth out the overshoot
          }}
          fill="white"
        />
      </motion.svg>

      {/* <svg
        width="142"
        height="63"
        viewBox="0 0 142 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M117 0.5H25.5C11.6929 0.5 0.5 11.6929 0.5 25.5V37.5C0.5 51.3071 11.6929 62.5 25.5 62.5H117C130.807 62.5 142 51.3071 142 37.5V25.5C142 11.6929 130.807 0.5 117 0.5Z"
          fill="white"
        />
      </svg> */}
      {/* <svg
        width="144"
        height="61"
        viewBox="0 0 144 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M130.876 6.17869L11.4165 0.384009C7.03246 0.17135 3.29574 3.5307 3.04225 7.91257L0.489539 52.038C0.223873 56.6302 3.87627 60.5 8.47618 60.5H135.812C140.668 60.5 144.404 56.2091 143.736 51.3994L138.412 13.0687C137.883 9.25899 134.718 6.36504 130.876 6.17869Z"
          fill="white"
        />
      </svg> */}
    </motion.div>
  );
};
