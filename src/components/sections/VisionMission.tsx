"use client";

import { Eye, Compass, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="relative py-24 bg-dark-gray/40 border-y border-gold/5 overflow-hidden z-20">
      {/* Background architectural element grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            whileHover={{ y: -5 }}
            className="flex flex-col p-8 md:p-12 bg-card-bg/60 backdrop-blur-md border border-gold/10 hover:border-gold/30 transition-all duration-500 relative group overflow-hidden"
          >
            {/* Hover Glow Spot */}
            <div className="absolute -right-20 -top-20 w-48 h-48 bg-gold/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-gold/20 transition-all duration-500" />
            
            {/* Top border line indicator */}
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500" />

            <div className="w-14 h-14 border border-gold/20 bg-gold/5 flex items-center justify-center mb-8 group-hover:bg-gold group-hover:border-gold transition-all duration-500">
              <Eye size={24} className="text-gold group-hover:text-primary transition-all duration-500" />
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-4 text-white">
              Our Vision
            </h3>
            
            <p className="text-light-gray text-base md:text-lg leading-relaxed font-light">
              To become Pakistan's leading building and interior solutions company through continuous innovation, peerless quality, and unyielding trust. We aim to design structures and curate environments that set benchmarks for excellence globally.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="flex flex-col p-8 md:p-12 bg-card-bg/60 backdrop-blur-md border border-gold/10 hover:border-gold/30 transition-all duration-500 relative group overflow-hidden"
          >
            {/* Hover Glow Spot */}
            <div className="absolute -right-20 -top-20 w-48 h-48 bg-gold/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-gold/20 transition-all duration-500" />
            
            {/* Top border line indicator */}
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500" />

            <div className="w-14 h-14 border border-gold/20 bg-gold/5 flex items-center justify-center mb-8 group-hover:bg-gold group-hover:border-gold transition-all duration-500">
              <Compass size={24} className="text-gold group-hover:text-primary transition-all duration-500" />
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-4 text-white">
              Our Mission
            </h3>
            
            <p className="text-light-gray text-base md:text-lg leading-relaxed font-light">
              Deliver world-class interior and exterior projects while maintaining superior craftsmanship and client satisfaction. We achieve this by utilizing premium materials, keeping schedules strict, and maintaining absolute operational transparency.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
