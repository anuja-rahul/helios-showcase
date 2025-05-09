"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedTitle from "../ui/text-effects/AnimatedTitle";
import HeroCanvas from "../three/HeroCanvas";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  // useGSAP(() => {
  //   gsap.set("#hero", {
  //     // clipPath: "polygon(50% 50%, 50.1% 50.1%, 50.2% 50.2%, 50.3% 50.3%)",
  //     clipPath: "polygon(17% 20%, 79% 28%, 86% 84%, 18% 93%)",
  //     borderRadius: "0% 0% 40% 10%",
  //   });

  //   gsap.from("#hero", {
  //     // clipPath: "polygon(5% 10%, 90% 20%, 95% 85%, 10% 95%)",
  //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //     borderRadius: "0% 0% 0% 0%",
  //     ease: "power1.inOut",
  //     scrollTrigger: {
  //       trigger: "#hero",
  //       start: "center center",
  //       end: "bottom center",
  //       scrub: true,
  //     },
  //   });
  // });
  // gsap.to("#hero", {
  //   y: -15,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 3,
  //   ease: "power1.inOut",
  // });

  return (
    <section className="relative h-dvh w-screen !overflow-hidden">
      <div
        id="hero"
        className="section relative z-10 h-dvh w-full max-w-screen !overflow-hidden rounded-none text-white bg-transparent"
      >
        <div className="flex flex-col items-center justify-center px-6 gap-6 w-full h-full">
          <AnimatedTitle
            title="AXEZ <br />"
            sectionId="hero"
            className="z-10 !text-inherit opacity-90 text-shadow-sm text-shadow-black/30"
          />
          <p className="font-general tracking-tighter z-10 opacity-90 max-w-sm text-balance text-center text-xs md:text-sm text-shadow-sm text-shadow-black/30">
            Built for impact. Delivered like a product
          </p>
        </div>

        <HeroCanvas />
      </div>
    </section>
  );
}
