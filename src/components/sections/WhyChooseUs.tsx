"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Gem, Clock, Landmark, Users } from "lucide-react";

const reasons = [
  {
    icon: Landmark,
    title: "Government Approved Experience",
    desc: "Licensed and certified builders trusted by regulatory bodies and ministries to execute public infrastructure works.",
  },
  {
    icon: Award,
    title: "Embassy Projects Expertise",
    desc: "Uncompromising standards of security, privacy, and architecture needed for foreign missions and high-profile diplomatic chanceries.",
  },
  {
    icon: Gem,
    title: "Premium Quality Materials",
    desc: "Access to elite local and imported supply lines, delivering durable, certified structural and aesthetic materials.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Rigorous planning protocols and active schedule tracking ensure projects are delivered exactly when promised.",
  },
  {
    icon: ShieldCheck,
    title: "Experienced Project Management",
    desc: "A veteran team of site engineers, interior designers, safety officers, and supervisors managing every lifecycle step.",
  },
  {
    icon: Users,
    title: "Trusted By Leading Institutions",
    desc: "Chosen by Serena Hotels, PC Hotels, PTA, and prominent corporations to craft their high-traffic showcase spaces.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-24 md:py-32 bg-primary border-y border-gold/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-xs md:text-sm font-semibold tracking-[0.4em] text-gold uppercase block mb-4">
            Our Edge
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Why Discerning Clients Choose Us
          </h2>
          <p className="text-light-gray text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            From regulatory clearance to final detailing, our commitment to elite standards of safety, styling, and scheduling sets us apart.
          </p>
        </div>

        {/* Timeline Grid (Vertical timeline alternating left/right on desktop) */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central bar */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold/30 via-gold/10 to-transparent pointer-events-none -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  } relative`}
                >
                  {/* central node marker */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full border border-gold bg-primary flex items-center justify-center z-10 shadow-lg">
                    <Icon size={14} className="text-gold" />
                  </div>

                  {/* Empty placeholder column to align timeline */}
                  <div className="hidden md:block w-1/2" />

                  {/* Timeline Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 flex"
                  >
                    <div className="flex-grow p-6 sm:p-8 bg-card-bg/70 backdrop-blur-md border border-gold/10 hover:border-gold/30 transition-all duration-500 relative group flex flex-col justify-center">
                      <h3 className="font-serif text-lg md:text-xl font-bold tracking-wide text-white mb-3 group-hover:text-gold transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <p className="text-light-gray text-xs md:text-sm font-light leading-relaxed">
                        {reason.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
