"use client";

import { navBarConfig } from "@/config/site";
import { ReactNode, useRef, useState } from "react";
// import TransitionLink from "../page-transition/TransitionLink";
import { motion } from "motion/react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-fit font-mona-sans z-10 relative opacity-90 hover:opacity-100 transition-opacity duration-500 ease-in-out">
      <SlideTabs />
    </div>
  );
}

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex items-center justify-center w-fit rounded-full border-2 border-none bg-transparent p-1"
    >
      {navBarConfig.map((item) => (
        <Tab
          key={item.name}
          href={item.href}
          setPosition={setPosition}
          external={item.name === "CV"}
        >
          <span className="hidden md:flex">{item.name}</span>
          <span className="flex md:hidden">{item.icon}</span>
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  href,
  setPosition,
}: {
  external?: boolean;
  children: ReactNode;
  href: string;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
      }}
      className="relative z-10 block cursor-pointer px-3 uppercase
            text-white mix-blend-difference text-[10px] font-bold place-items-center"
    >
      <Link href={href} rel="noopener noreferrer">
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.li
      className="absolute !top-[50%] !translate-y-[-50%] inset-0 z-0 h-[25px] rounded-full bg-white md:h-8"
      animate={position}
      transition={{
        ease: "easeInOut",
        type: "spring",
        stiffness: 500,
        damping: 35,
      }}
    />
  );
};
