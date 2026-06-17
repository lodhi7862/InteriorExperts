"use client";

import { Paintbrush, Building2, Hammer, ClipboardList, Truck, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Paintbrush,
    title: "Interior Works",
    items: ["Office Interiors", "Hotel Interiors", "Residential Interiors"],
    desc: "Bespoke custom-designed interior solutions catering to corporate offices, upscale hospitality, and premium residences.",
  },
  {
    icon: Building2,
    title: "Exterior Works",
    items: ["Facade Solutions", "Building Finishes", "Landscape Elements"],
    desc: "Stunning external facade designs and finishes that enhance structural insulation, stability, and aesthetic marvel.",
  },
  {
    icon: Hammer,
    title: "Renovation Works",
    items: ["Commercial Renovation", "Hotel Renovation", "Residential Upgrades"],
    desc: "Breathing new life into older projects with comprehensive structural upgrades, luxury additions, and finishes.",
  },
  {
    icon: ClipboardList,
    title: "Construction Management",
    items: ["Site Supervision", "Project Planning", "Procurement Management"],
    desc: "Rigorous site coordination, strict project scheduling, quality control protocols, and administrative workflows.",
  },
  {
    icon: Truck,
    title: "Material Supply Chain",
    items: ["Building Materials", "Interior Materials", "Project Procurement"],
    desc: "High-grade local and imported material logistics, ensuring quality checks and steady flow for timely delivery.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-primary z-20">
      {/* Decorative vertical floating line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold/10 to-transparent pointer-events-none select-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-xs md:text-sm font-semibold tracking-[0.4em] text-gold uppercase block mb-4"
          >
            What We Deliver
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white"
          >
            Our Specialized Architecture & Building Services
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="flex flex-col p-8 bg-dark-gray/30 border border-gold/10 hover:border-gold/30 hover:bg-dark-gray/50 transition-all duration-500 relative group overflow-hidden"
              >
                {/* Gold glowing hover accent */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Top Corner Graphic accent */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/10 group-hover:border-gold/30 transition-colors duration-500" />

                {/* Icon wrapper */}
                <div className="w-12 h-12 border border-gold/25 bg-gold/5 flex items-center justify-center mb-6 group-hover:bg-gold transition-all duration-500">
                  <Icon size={20} className="text-gold group-hover:text-primary transition-all duration-500" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold tracking-wide text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-light-gray text-sm font-light leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>

                {/* Sub items */}
                <div className="border-t border-gold/5 pt-4 mt-auto">
                  <ul className="space-y-2.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs md:text-sm font-light tracking-wide text-light-gray group-hover:text-white transition-colors duration-300">
                        <ChevronRight size={12} className="text-gold opacity-65" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
