"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  name: string;
  location: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "Parliament House",
    location: "Islamabad",
    category: "Government",
    image: "/images/parlimenthouse.jpg",
  },
  {
    name: "Serena Hotel",
    location: "Islamabad",
    category: "Hospitality / Luxury",
    image: "/images/serenahotel.jpg",
  },
  {
    name: "PC Hotel",
    location: "Rawalpindi",
    category: "Hospitality / Luxury",
    image: "/images/pchotel.jpg",
  },
  {
    name: "US Embassy",
    location: "Islamabad",
    category: "Diplomatic Sector",
    image: "/images/usembassy.jpg",
  },
  {
    name: "PTA Building",
    location: "Islamabad",
    category: "Government Institution",
    image: "/images/ptabuilding.jpeg",
  },
  {
    name: "Qatar Embassy",
    location: "Islamabad",
    category: "Diplomatic Sector",
    image: "/images/exterior_1.png",
  },
  {
    name: "UAE Embassy Residences",
    location: "Islamabad",
    category: "Diplomatic Residences",
    image: "/images/exterior_1.png",
  },
  {
    name: "Australian High Commission",
    location: "Islamabad",
    category: "Diplomatic Sector",
    image: "/images/office_1.png",
  },
  {
    name: "Australian Embassy Chancery",
    location: "Islamabad",
    category: "Diplomatic Sector",
    image: "/images/office_1.png",
  },
  {
    name: "Crown Plaza Hotel",
    location: "Islamabad",
    category: "Hospitality",
    image: "/images/interior_1.png",
  },
  {
    name: "French School",
    location: "Islamabad",
    category: "Educational",
    image: "/images/exterior_1.png",
  },
];

export default function PrestigiousProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    // Check media query - only run horizontal scroll pinning on desktop
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const scrollWidth = container.scrollWidth;
      const sectionWidth = section.clientWidth;
      const xVal = -(scrollWidth - sectionWidth);

      gsap.to(container, {
        x: xVal,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.0,
          start: "top top",
          end: () => `+=${scrollWidth - sectionWidth}`,
          invalidateOnRefresh: true,
          pinSpacing: true,
        },
      });
    });

    return () => {
      mm.revert();
    };
  }, { scope: sectionRef });

  return (
    <div id="projects" ref={sectionRef} className="relative bg-gradient-to-r from-slate-950/80 via-slate-900/75 to-blue-900/70 z-20 lg:h-screen lg:flex lg:flex-col lg:justify-center py-24 lg:py-0 border-t border-gold/15">
      {/* Background architectural guides */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gold/5 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gold/5 pointer-events-none z-0" />

      {/* Static header block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-12 lg:mb-6 z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div>
          <span className="text-xs md:text-sm font-semibold tracking-[0.4em] text-gold uppercase block mb-4">
            Showcase
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white">
            Prestigious Portfolio
          </h2>
        </div>
        <p className="text-light-gray text-sm md:text-base font-light max-w-md tracking-wide">
          A collection of landmark government edifices, luxury hotels, and international embassies designed and executed to perfection.
        </p>
      </div>

      {/* Showcase slider container */}
      <div className="lg:w-full overflow-x-auto lg:overflow-x-hidden no-scrollbar px-6 md:px-12 lg:px-0">
        <div
          ref={containerRef}
          className="flex gap-8 lg:gap-12 w-max lg:pl-24 lg:pr-32 py-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
              className="w-[280px] sm:w-[360px] md:w-[420px] shrink-0 border border-gold/10 bg-dark-gray/20 hover:border-gold/35 hover:bg-dark-gray/50 transition-all duration-500 relative group overflow-hidden"
            >
              {/* Image box */}
              <div className="relative h-[200px] sm:h-[260px] md:h-[300px] w-full overflow-hidden select-none">
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Text box */}
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.2em] font-semibold text-gold uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-bold tracking-wide text-white mb-2 group-hover:text-gold transition-colors duration-300">
                    {project.name}
                  </h3>
                </div>
                <div className="border-t border-gold/5 pt-4 mt-4 flex items-center justify-between">
                  <span className="text-xs text-light-gray font-light tracking-widest">
                    {project.location}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 group-hover:border-gold transition-all duration-500">
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
