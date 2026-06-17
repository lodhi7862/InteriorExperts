"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Collaborative strategy meetings to align project scope, aesthetic preferences, and budget targets.",
  },
  {
    num: "02",
    title: "Site Survey",
    desc: "Rigorous site dimensions check, structural feasibility assessment, and zoning regulatory checks.",
  },
  {
    num: "03",
    title: "Project Planning",
    desc: "Detailed scheduling timelines, materials pricing, cost estimation, and resource allocation mapping.",
  },
  {
    num: "04",
    title: "Interior/Exterior Design",
    desc: "Bespoke mood boards, 3D architectural renderings, lighting design, and material sample selection.",
  },
  {
    num: "05",
    title: "Execution",
    desc: "Structural work, luxury finishes, site engineering, and assembly managed by veteran leads.",
  },
  {
    num: "06",
    title: "Quality Assurance",
    desc: "Multi-point inspection checks verifying compliance with building codes and our premium finishes.",
  },
  {
    num: "07",
    title: "Project Handover",
    desc: "Client walkthrough review, key transfer, operational manuals, and post-occupancy support activation.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-primary z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-20">
          <span className="text-xs md:text-sm font-semibold tracking-[0.4em] text-gold uppercase block mb-4">
            Workflow
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Our Building Process
          </h2>
          <div className="w-20 h-[1px] bg-gold" />
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col p-6 bg-dark-gray/20 border border-white/5 relative group hover:border-gold/30 hover:bg-dark-gray/40 transition-all duration-500"
            >
              {/* Connect line overlay for grid items */}
              <div className="absolute top-6 left-6 text-stroke-gold-solid font-serif text-3xl sm:text-4xl font-bold opacity-30 group-hover:text-gold group-hover:opacity-100 transition-all duration-500">
                {step.num}
              </div>

              <div className="pt-12 mt-4 flex flex-col h-full justify-between">
                <div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-light-gray text-xs md:text-sm font-light leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>
                {/* Visual status dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
