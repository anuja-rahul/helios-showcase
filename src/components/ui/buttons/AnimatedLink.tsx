"use client";

import { cn } from "@/lib/util";
import Link from "next/link";
import { ComponentProps, useState } from "react";
import { motion, animate, useMotionValue, useTransform } from "motion/react";
import { useRef } from "react";
import { initialPath, finalPath } from "./ButtonPaths";
import { interpolate } from "flubber";

interface AnimatedLinkProps extends ComponentProps<typeof Link> {
  href: string;
  title: string;
  className?: string;
}

export default function AnimatedLink({
  href,
  title,
  className,
}: AnimatedLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [indexOfPath, setIndexOfPath] = useState(0);
  const paths = [initialPath, finalPath];
  const progress = useMotionValue(0);
  const getIndex = paths.map((__, index) => index);
  const path = useTransform(progress, getIndex, paths, {
    mixer: (a, b) => interpolate(a, b),
  });
  const handleMouseEnter = () => {
    const targetIndex = indexOfPath === paths.length - 1 ? 0 : indexOfPath + 1;

    animate(progress, targetIndex, {
      ease: "easeInOut",
      duration: 0.3,
      onComplete: () => {
        setIndexOfPath(targetIndex);
      },
    });
  };

  const handleMouseLeave = () => {
    setIndexOfPath(0);
    animate(progress, 0, {
      ease: "easeInOut",
      duration: 0.3,
    });
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 20,
        },
      }}
      className={cn(
        "text-black bg-transparent font-semibold w-fit h-fit relative",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        ref={ref}
        className="px-4 py-2 text-center inline-block bg-transparent relative z-10"
        href={href}
      >
        <h1
          style={{ transform: "none" }}
          className="!text-[11px] !transform-none font-bold flex relative z-10"
        >
          {title}
        </h1>
      </Link>
      <svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 395 173"
        className="absolute inset-0 w-full h-full"
      >
        <motion.path ref={pathRef} fill={"white"} d={path} />
      </svg>
    </motion.div>
  );
}
