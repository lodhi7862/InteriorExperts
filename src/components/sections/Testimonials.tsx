"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  text: string;
  author: string;
  position: string;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Interior Experts Company delivered outstanding finishes for our executive suite renovation. Their project management team handled complex site clearances smoothly and stayed on-schedule throughout the process. Absolute professionals.",
    author: "M. Tariq",
    position: "Senior Projects Coordinator",
    project: "Serena Hotel Islamabad",
  },
  {
    text: "Working with them on our administrative sector facade upgrade was a seamless experience. They met all our strict material specifications and delivered superior craftsmanship while adhering to tight security protocols.",
    author: "A. J. Henderson",
    position: "Facilities Management Director",
    project: "Diplomatic Sector Project",
  },
  {
    text: "Their attention to detail in material procurement is exceptional. The structural durability combined with the aesthetic elegance of their woodwork surpassed our expectations.",
    author: "Zainab Malik",
    position: "Principal Interior Architect",
    project: "Premium Residential Villa",
  },
];

export default function Testimonials() {
  const [curr, setCurr] = useState(0);

  const handleNext = () => {
    setCurr((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurr((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-24 bg-dark-gray/35 border-y border-gold/5 overflow-hidden z-20">
      {/* Decorative quote mark */}
      <div className="absolute right-10 top-10 opacity-5 pointer-events-none select-none text-gold">
        <Quote size={200} />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        
        {/* Header */}
        <span className="text-xs md:text-sm font-semibold tracking-[0.4em] text-gold uppercase block mb-6">
          Endorsements
        </span>

        {/* Carousel */}
        <div className="relative min-h-[260px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={curr}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="text-gold mb-6 opacity-80">
                <Quote size={40} className="mx-auto rotate-180" />
              </div>
              
              <blockquote className="font-serif text-lg sm:text-2xl leading-relaxed text-white font-light tracking-wide max-w-2xl mb-8">
                "{testimonials[curr].text}"
              </blockquote>
              
              <cite className="not-italic block">
                <span className="text-sm font-semibold tracking-widest uppercase text-gold block mb-1">
                  {testimonials[curr].author}
                </span>
                <span className="text-xs text-light-gray font-light uppercase tracking-[0.15em]">
                  {testimonials[curr].position} — <span className="text-white">{testimonials[curr].project}</span>
                </span>
              </cite>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-4 justify-center items-center mt-10">
          <button
            onClick={handlePrev}
            className="w-10 h-10 border border-white/10 hover:border-gold text-light-gray hover:text-gold flex items-center justify-center transition-all duration-300 rounded-none cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="text-xs text-light-gray font-light tracking-widest">
            {curr + 1} / {testimonials.length}
          </div>
          <button
            onClick={handleNext}
            className="w-10 h-10 border border-white/10 hover:border-gold text-light-gray hover:text-gold flex items-center justify-center transition-all duration-300 rounded-none cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
