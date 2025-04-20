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
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  altTitle?: string;
}

export default function AnimatedLink({
  href,
  title,
  className,
  leftIcon,
  rightIcon,
  altTitle = title,
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
    if (pathRef.current) {
      pathRef.current.setAttribute("fill", "#cd92fc");
    }
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
    if (pathRef.current) {
      pathRef.current.setAttribute("fill", "#ffffff");
    }
    setIndexOfPath(0);
    animate(progress, 0, {
      ease: "easeInOut",
      duration: 0.3,
    });
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 20,
        },
      }}
      className={cn(
        "text-black bg-transparent font-semibold w-fit h-fit relative group",
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
          className="!text-[11px] font-bold flex relative z-10 flex-row items-center justify-center gap-2 flex-nowrap"
        >
          {/* Text effect start */}
          {leftIcon}

          <span className="relative inline-flex overflow-hidden font-general text-[10px] uppercase">
            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
              {altTitle ? (
                <span className="hidden lg:flex">{title}</span>
              ) : (
                <>{title}</>
              )}
              {altTitle && <span className="flex lg:hidden">{altTitle}</span>}
            </div>
            <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              {altTitle ? (
                <span className="hidden lg:flex">{title}</span>
              ) : (
                <>{title}</>
              )}
              {altTitle && <span className="flex lg:hidden">{altTitle}</span>}
            </div>
          </span>

          {rightIcon}
          {/* Text effect end */}
        </h1>
      </Link>
      <svg
        width="200%"
        height="200%"
        viewBox="0 0 395 173"
        className="absolute inset-0 w-full h-full scale-x-[130%] scale-y-[105%]"
      >
        <motion.path ref={pathRef} d={path} fill={"white"} />
      </svg>
    </motion.div>
  );
}
