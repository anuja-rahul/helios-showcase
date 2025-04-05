"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    gsap.set("#hero", {
      clipPath: "polygon(50% 50%, 50.1% 50.1%, 50.2% 50.2%, 50.3% 50.3%)",
      borderRadius: "0% 0% 40% 10%",
    });

    gsap.from("#hero", {
      // clipPath: "polygon(5% 10%, 90% 20%, 95% 85%, 10% 95%)",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#hero",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
    // gsap.to("#hero", {
    //   y: -15,
    //   repeat: -1,
    //   yoyo: true,
    //   duration: 3,
    //   ease: "power1.inOut",
    // });
  });

  return (
    <section className="relative h-dvh w-screen !overflow-hidden">
      <div
        id="hero"
        className="section relative z-10 h-dvh w-full max-w-screen !overflow-hidden rounded-none text-white bg-gray-800"
      >
        Hero Section
      </div>
    </section>
  );
}
