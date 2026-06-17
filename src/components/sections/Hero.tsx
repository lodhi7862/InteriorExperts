"use client";

import { useRef } from "react";
import { ArrowDown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const bgImage = bgImageRef.current;
    const glow = glowRef.current;
    if (!container || !bgImage) return;

    // Parallax background scale & translation on scroll
    gsap.fromTo(
      bgImage,
      { y: 0, scale: 1.1 },
      {
        y: "25%",
        scale: 1.0,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Mouse-following radial glow effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!glow) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Animate the light spot position
      gsap.to(glow, {
        x: x,
        y: y,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Floating animation for thin architectural lines
    if (linesRef.current) {
      gsap.to(linesRef.current.querySelectorAll("line"), {
        x: "random(-15, 15)",
        y: "random(-15, 15)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    }

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, { scope: containerRef });

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-primary px-6 md:px-12"
    >
      {/* Background Image Container with parallax */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 w-full h-full select-none pointer-events-none"
      >
        <img
          src="/images/hero_bg.png"
          alt="Luxury Architecture"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        {/* Gradients to blend image */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary" />
      </div>

      {/* Interactive spotlight cursor-following gradient */}
      <div
        ref={glowRef}
        className="absolute w-[800px] h-[800px] -left-[400px] -top-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none select-none z-10 mix-blend-screen"
      />

      {/* Floating Architectural Lines SVG */}
      <svg
        ref={linesRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Horizontal grid lines */}
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#d4af37" strokeWidth="0.5" />
        <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#d4af37" strokeWidth="0.5" />
        {/* Vertical grid lines */}
        <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#d4af37" strokeWidth="0.5" />
        <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#d4af37" strokeWidth="0.5" />
        {/* Angular structural wireframes */}
        <line x1="10%" y1="10%" x2="40%" y2="50%" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="5,5" />
        <line x1="90%" y1="80%" x2="60%" y2="40%" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="5,5" />
      </svg>

      {/* Corner brackets simulating architectural drawing markers */}
      <div className="absolute top-28 left-8 w-8 h-8 border-t border-l border-gold/30 pointer-events-none" />
      <div className="absolute top-28 right-8 w-8 h-8 border-t border-r border-gold/30 pointer-events-none" />
      <div className="absolute bottom-12 left-8 w-8 h-8 border-b border-l border-gold/30 pointer-events-none" />
      <div className="absolute bottom-12 right-8 w-8 h-8 border-b border-r border-gold/30 pointer-events-none" />

      {/* Main Content Content */}
      <div className="relative max-w-5xl mx-auto text-center z-20 flex flex-col items-center">
        {/* Pre-title */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm font-semibold tracking-[0.4em] text-gold uppercase mb-6"
        >
          Interior Experts Company
        </motion.span>

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl font-medium tracking-tight mb-8 leading-tight">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="block text-white"
          >
            Building Excellence.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="block text-stroke-gold"
          >
            Creating Spaces.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="block text-white"
          >
            Delivering Trust.
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="max-w-2xl text-light-gray text-base md:text-lg tracking-wide leading-relaxed mb-12 font-light"
        >
          Specialized in luxury <span className="text-white font-medium">Interior</span>,{" "}
          <span className="text-white font-medium">Exterior</span>,{" "}
          <span className="text-white font-medium">Renovation</span> &{" "}
          <span className="text-white font-medium">Construction Management</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <button
            onClick={() => handleScrollTo("#projects")}
            className="w-full sm:w-auto px-8 py-4 bg-gold text-primary font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:text-primary rounded-none cursor-pointer"
          >
            View Projects
          </button>
          
          <button
            onClick={() => handleScrollTo("#contact")}
            className="w-full sm:w-auto px-8 py-4 border border-white/20 bg-transparent text-white font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:border-gold hover:text-gold rounded-none cursor-pointer flex items-center justify-center gap-2"
          >
            Get Consultation
            <ChevronRight size={14} />
          </button>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 select-none cursor-pointer"
        onClick={() => handleScrollTo("#about")}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-light-gray font-light">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: -1, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
