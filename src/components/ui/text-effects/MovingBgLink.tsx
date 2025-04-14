"use client";

import { cn } from "@/lib/util";
import { motion } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

interface AnimatedHoverBgProps {
  text: string;
  className?: string;
  href: string;
}

export default function AnimatedHoverBg({
  href,
  text,
  className,
}: AnimatedHoverBgProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const handleMouseEnter = () => {};
  const handleMouseLeave = () => {};
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative w-fit h-fit bg-transparent", className)}
    >
      <Link
        className="mix-blend-difference w-fit h-auto z-10 text-white relative bg-transparent"
        ref={linkRef}
        href={href}
      >
        {text}
      </Link>
      <motion.div className="w-full bg-white h-full absolute inset-0" />
    </div>
  );
}
