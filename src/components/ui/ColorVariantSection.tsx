"use client";

import { cn } from "@/lib/util";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useSmoothScroller } from "./SmoothScrollContext";

interface ColorVariantSectionProps {
  bgColor?: string;
  textColor?: string;
  children: React.ReactNode;
  className?: string;
}
gsap.registerPlugin(ScrollTrigger);

export default function ColorScrollParent({
  children,
  className,
}: ColorVariantSectionProps) {
  const lenis = useSmoothScroller();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const sectionColor = document.querySelectorAll("[data-bg-color]");
    sectionColor.forEach((section, i) => {
      const prevBgColor =
        i === 0 ? "" : (sectionColor[i - 1] as HTMLElement).dataset.bgColor;
      const prevTextColor =
        i === 0 ? "" : (sectionColor[i - 1] as HTMLElement).dataset.textColor;

      ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        onEnter: () => {
          gsap.to(".scroller", {
            backgroundColor: (section as HTMLElement).dataset.bgColor,
            color: (section as HTMLElement).dataset.textColor,
            overwrite: "auto",
            duration: 0,
          });

          gsap.to("[data-bg-color]", {
            color: (section as HTMLElement).dataset.textColor,
            backgroundColor: (section as HTMLElement).dataset.bgColor,
            overwrite: "auto",
            duration: 0,
          });
        },
        onLeaveBack: () => {
          gsap.to(".scroller", {
            backgroundColor: prevBgColor,
            color: prevTextColor,
            overwrite: "auto",
            duration: 0,
          });

          gsap.to("[data-bg-color]", {
            color: prevTextColor,
            backgroundColor: prevBgColor,
            overwrite: "auto",
            duration: 0,
          });
        },
      });
    });

    lenis?.on("scroll", ScrollTrigger.update);
    // return () => {
    //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    // };
  }, [lenis, isVisible]);

  return (
    <div
      ref={containerRef}
      className={cn("w-full !overflow-x-hidden p-0 m-0 box-border", className)}
    >
      {children}
    </div>
  );
}

export const ColorScrollSection = ({
  bgColor = "#000000",
  textColor = "#ffffff",
  className,
  children,
}: ColorVariantSectionProps) => {
  return (
    <section
      data-bg-color={bgColor}
      data-text-color={textColor}
      className={cn(
        "scroller w-full !overflow-x-hidden h-full p-0 m-0 box-border",
        className
      )}
    >
      {children}
    </section>
  );
};
