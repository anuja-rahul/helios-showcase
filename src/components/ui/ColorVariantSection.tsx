"use client";

import { cn } from "@/lib/util";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ColorVariantSectionProps {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

export default function ColorVariantSection({
  children,
  bgColor = "#000000",
  textColor = "#ffffff",
  className,
}: ColorVariantSectionProps) {
  return (
    <section
      bg-color={bgColor}
      text-color={textColor}
      className={cn("", className)}
    >
      {children}
    </section>
  );
}
