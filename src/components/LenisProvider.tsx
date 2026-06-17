"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins once at module level — shared across all components
gsap.registerPlugin(ScrollTrigger);


export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Sync Lenis scroll updates with GSAP ScrollTrigger
    const lenisInstance = lenisRef.current?.lenis;
    if (lenisInstance) {
      lenisInstance.on("scroll", ScrollTrigger.update);

      // Connect GSAP ticker to Lenis RAF
      gsap.ticker.add((time) => {
        lenisInstance.raf(time * 1000);
      });

      // Disable lagSmoothing in GSAP when scrolling is active
      gsap.ticker.lagSmoothing(0);
    }

    // Refresh ScrollTrigger when window loads (to count completed image heights)
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", handleLoad);

    // Re-trigger layout calculations at intervals as content renders
    const timer1 = setTimeout(() => ScrollTrigger.refresh(), 500);
    const timer2 = setTimeout(() => ScrollTrigger.refresh(), 1500);
    const timer3 = setTimeout(() => ScrollTrigger.refresh(), 3000);

    return () => {
      // Clean up ticker connection
      const lenisInstance = lenisRef.current?.lenis;
      if (lenisInstance) {
        lenisInstance.off("scroll", ScrollTrigger.update);
      }
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for premium Apple-like feel
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
