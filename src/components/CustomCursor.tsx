"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device supports touch
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Set initial positions offscreen
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    const xDotTo = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3.out" });
    const yDotTo = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3.out" });
    const xRingTo = gsap.quickTo(ring, "x", { duration: 0.25, ease: "power3.out" });
    const yRingTo = gsap.quickTo(ring, "y", { duration: 0.25, ease: "power3.out" });

    let activeHoverListeners = new Set<Element>();

    const onMouseMove = (e: MouseEvent) => {
      xDotTo(e.clientX);
      yDotTo(e.clientY);
      xRingTo(e.clientX);
      yRingTo(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);

    const onMouseEnter = () => {
      ring.classList.add("hovered");
      gsap.to(dot, { scale: 0, duration: 0.2 });
    };

    const onMouseLeave = () => {
      ring.classList.remove("hovered");
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    const addHoverListeners = () => {
      const hoverables = document.querySelectorAll(
        "a, button, select, input, textarea, [role='button'], .hover-target, iframe, select option"
      );
      
      hoverables.forEach((el) => {
        if (!activeHoverListeners.has(el)) {
          el.addEventListener("mouseenter", onMouseEnter);
          el.addEventListener("mouseleave", onMouseLeave);
          activeHoverListeners.add(el);
        }
      });
    };

    addHoverListeners();

    // Use MutationObserver to wire up hover listeners on newly added DOM elements
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
      activeHoverListeners.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
      activeHoverListeners.clear();
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor hidden lg:block" />
      <div ref={dotRef} className="custom-cursor-dot hidden lg:block" />
    </>
  );
}
