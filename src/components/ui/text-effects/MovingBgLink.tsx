"use client";

import { cn } from "@/lib/util";
import { motion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
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
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const handleMouseEnter = () => {
    if (!linkRef.current) return;

    const { width } = linkRef.current.getBoundingClientRect();
    setPosition({ width, opacity: 1, left: linkRef.current.offsetLeft });
    // console.log(position);
  };
  // const handleMouseLeave = () => {
  //   console.log(position);
  //   setPosition((pv) => ({
  //     left: pv.width,
  //     width: pv.width,
  //     opacity: pv.opacity,
  //   }));

  //   setTimeout(() => {
  //     setPosition({ left: 0, width: 0, opacity: 0 });
  //   }, 500);
  // };
  const handleMouseLeave = () => {
    setPosition((prevValues) => ({
      left: prevValues.width,
      width: prevValues.width,
      opacity: prevValues.opacity,
    }));

    setTimeout(() => {
      setPosition((prevValues) => ({
        left: prevValues.left,
        width: prevValues.width,
        opacity: 0,
      }));

      setTimeout(() => {
        setPosition({ left: 0, width: 0, opacity: 0 });
      }, 300);
    }, 200);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative w-fit h-fit bg-transparent overflow-hidden mx-2 z-10 text-sm",
        className
      )}
    >
      <Link
        className="mix-blend-difference w-fit h-auto z-10 text-white relative bg-transparent"
        ref={linkRef}
        href={href}
      >
        <ScrambleHoverText text={text} className="font-general" />
      </Link>
      <motion.div
        animate={position}
        transition={{
          ease: "easeInOut",
          type: "spring",
          stiffness: 500,
          damping: 35,
          duration: 0.5,
        }}
        className="w-40 bg-white h-full absolute inset-0"
      />
    </div>
  );
}
