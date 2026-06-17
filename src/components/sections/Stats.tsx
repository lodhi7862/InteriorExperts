"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import gsap from "gsap";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
}

function StatItem({ value, suffix, label }: StatItemProps) {
  const numRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && numRef.current) {
      const counter = { val: 0 };
      gsap.to(counter, {
        val: value,
        duration: 2.5,
        ease: "power3.out",
        onUpdate: () => {
          if (numRef.current) {
            numRef.current.textContent = Math.floor(counter.val).toString();
          }
        },
      });
    }
  }, [isInView, value]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center p-6 md:p-8 text-center border border-gold/5 bg-dark-gray/30 backdrop-blur-sm relative group hover:border-gold/20 transition-all duration-500"
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold/30 group-hover:border-gold transition-colors duration-500" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold/30 group-hover:border-gold transition-colors duration-500" />

      <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gold tracking-tight mb-2 flex items-center">
        <span ref={numRef}>0</span>
        <span>{suffix}</span>
      </div>
      
      <p className="text-light-gray text-xs md:text-sm tracking-[0.2em] uppercase font-light mt-2">
        {label}
      </p>
    </div>
  );
}

const statsData: StatItemProps[] = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Government Projects" },
  { value: 500, suffix: "+", label: "Happy Clients" },
];

export default function Stats() {
  return (
    <section className="relative py-20 bg-primary border-y border-gold/5 z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statsData.map((stat, idx) => (
            <StatItem
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
