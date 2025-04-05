"use client";

import { cn } from "@/lib/util";
import Link from "next/link";
import { ComponentProps } from "react";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      className={cn(
        "text-black bg-transparent font-semibold w-fit h-fit",
        className
      )}
    >
      <Link
        className="px-4 py-2 text-center inline-block bg-transparent"
        href={href}
      >
        <span className="flex !z-20 text-black">{children}</span>
        <BgSvg />
      </Link>
    </motion.div>
  );
}

const BgSvg = () => {
  return (
    <motion.svg
      className="absolute inset-0 w-fit h-fit z-[1]"
      width="225"
      height="81"
      viewBox="0 0 225 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.rect
        width="225"
        height="81"
        initial={{ rx: 25 }} // Starting shape
        whileHover={{ rx: 50 }} // Shape on hover (rounded corners)
        transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
        fill="white"
      />
    </motion.svg>
  );
};
