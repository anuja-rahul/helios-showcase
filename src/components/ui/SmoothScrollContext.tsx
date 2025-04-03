"use client";

import Lenis from "lenis";
import { createContext, useContext, useLayoutEffect, useRef } from "react";

interface SmoothScrollContextProps {
  children: React.ReactNode;
}

const SmoothScrollerContext = createContext<Lenis | null>(null);
export const useSmoothScroller = () => useContext(SmoothScrollerContext);

export default function SmoothScrollContext({
  children,
}: SmoothScrollContextProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const scroller = new Lenis();
    lenisRef.current = scroller;

    const raf = (time: number) => {
      scroller.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      scroller.destroy();
    };
  }, []);

  return (
    <SmoothScrollerContext.Provider value={lenisRef.current}>
      {children}
    </SmoothScrollerContext.Provider>
  );
}
