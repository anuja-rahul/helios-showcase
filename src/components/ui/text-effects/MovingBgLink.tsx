"use client";

import { cn } from "@/lib/util";
import { motion } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import ScrambleHoverText from "./ScrambleHoverText";

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
      className={cn("relative w-fit h-fit bg-transparent overflow-hidden mx-2", className)}
    >
      <Link
        className="hover:mix-blend-difference w-fit h-auto z-10 text-white relative bg-transparent"
        ref={linkRef}
        href={href}
      >
        <ScrambleHoverText text={text} className="font-general text-xl" />
      </Link>
      <motion.div className="w-40 bg-white h-full absolute inset-0 -translate-x-40" />
    </div>
  );
}
