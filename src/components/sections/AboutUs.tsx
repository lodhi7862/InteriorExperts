"use client";

import { useRef } from "react";
import { Check } from "lucide-react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import ceoPortrait from "../../../Gallery/CEO.jpeg";
// import gmPortrait from "../../../Gallery/GM.jpeg";

const ceoPortrait = "/Gallery/CEO.jpeg";
const gmPortrait = "/Gallery/GM.jpeg";

gsap.registerPlugin(ScrollTrigger);

const ceoSpecializations = [
  "Premium Interior Works",
  "Facade & Exterior Solutions",
  "High-End Commercial & Hotel Renovations",
  "Construction Site Management & Supervision",
  "Material Supply Chain & Project Procurement",
];

const gmSpecializations = [
  "Space Design & Aesthetics",
  "Functional Environment Planning",
  "Corporate & Private Office Design",
  "Client Vision Execution",
  "Interior Project Coordination",
];

const ceoMessage = [
  "At our company, we are committed to delivering excellence in interior and exterior building works, renovations, and construction site management.",
  "Our goal is to transform ideas into high-quality spaces through innovation, craftsmanship, and professional project execution.",
  "We thank our clients and partners for their trust and look forward to creating lasting value through every project we undertake.",
];

const gmMessage = [
  "Welcome to Interior Experts. Our mission is simple: to transform spaces into beautiful, functional environments that inspire you every day.",
  "Whether designing a corporate hub or a refined private office, we combine timeless aesthetics with top-tier craftsmanship.",
  "We appreciate the trust you place in our team, and we look forward to bringing your unique vision to life.",
];

export default function AboutUs() {
  const ceoSectionRef = useRef<HTMLDivElement>(null);
  const gmSectionRef = useRef<HTMLDivElement>(null);
  const ceoIsInView = useInView(ceoSectionRef, { once: true, margin: "-100px" });
  const gmIsInView = useInView(gmSectionRef, { once: true, margin: "-100px" });

  useGSAP(() => {
    if (ceoIsInView && ceoSectionRef.current) {
      const animatedElements = ceoSectionRef.current.querySelectorAll(".about-animate");
      
      gsap.fromTo(
        animatedElements,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.14,
          ease: "power3.out",
        }
      );
    }
  }, [ceoIsInView]);

  useGSAP(() => {
    if (gmIsInView && gmSectionRef.current) {
      const animatedElements = gmSectionRef.current.querySelectorAll(".about-animate");
      
      gsap.fromTo(
        animatedElements,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.14,
          ease: "power3.out",
        }
      );
    }
  }, [gmIsInView]);

  return (
    <section id="about" className="relative py-24 md:py-32 bg-primary overflow-hidden z-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_30%)] pointer-events-none select-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/3 rounded-full blur-[100px] pointer-events-none select-none" />

      {/* CEO Section */}
      <div ref={ceoSectionRef} className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <span className="about-animate text-xs md:text-sm font-semibold tracking-[0.3em] text-gold uppercase mb-4">
              CEO Message
            </span>
            <h2 className="about-animate font-serif text-3xl md:text-5xl font-medium tracking-tight mb-8 leading-tight text-white">
              A Message From Our CEO
            </h2>

            <div className="about-animate space-y-5 mb-10">
              {ceoMessage.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-light-gray text-base md:text-lg font-light leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="about-animate rounded-2xl border border-gold/15 bg-card-bg/70 p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <h3 className="text-sm tracking-[0.2em] font-semibold text-white uppercase mb-4">
                Specialized in:
              </h3>
              <div className="space-y-4">
                {ceoSpecializations.map((spec, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.45 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-1 flex items-center justify-center w-5 h-5 border border-gold/40 rounded-full bg-gold/5 group-hover:bg-gold/20 group-hover:border-gold transition-all duration-300">
                      <Check size={10} className="text-gold" />
                    </div>
                    <span className="text-white font-light tracking-wide text-sm sm:text-base group-hover:text-gold transition-colors duration-300">
                      {spec}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="about-animate mt-8 flex flex-wrap items-center gap-4">
              <div className="h-px w-16 bg-gold/40" />
              <div>
                <p className="text-white font-medium text-lg">Rashid Humayun</p>
                <p className="text-light-gray text-sm uppercase tracking-[0.2em]">
                  Chief Executive Officer
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85 }}
            className="about-animate relative w-full"
          >
            <div className="absolute -inset-4 rounded-[2rem] border border-gold/15 translate-x-4 translate-y-4" />
            <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-card-bg shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-[4/5] w-full">
                <img
                  src={ceoPortrait}
                  alt="Rashid Humayun, Chief Executive Officer"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-70" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="inline-flex items-center gap-3 rounded-full border border-gold/25 bg-primary/80 px-4 py-2 backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
                    <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.28em] text-white">
                      Leadership That Builds Trust
                    </span>
                  </div>
                  <div className="mt-5 max-w-xs rounded-2xl border border-white/10 bg-primary/75 p-4 backdrop-blur-md">
                    <p className="text-sm md:text-base text-light-gray leading-relaxed">
                      Delivering excellence through craftsmanship, precision, and accountable project execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* General Manager Section */}
      <div ref={gmSectionRef} className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85 }}
            className="about-animate relative w-full order-2 lg:order-1"
          >
            <div className="absolute -inset-4 rounded-[2rem] border border-gold/15 -translate-x-4 translate-y-4" />
            <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-card-bg shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-[4/5] w-full">
                <img
                  src={gmPortrait}
                  alt="Malik Amir, General Manager"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-70" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="inline-flex items-center gap-3 rounded-full border border-gold/25 bg-primary/80 px-4 py-2 backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
                    <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.28em] text-white">
                      Vision Into Reality
                    </span>
                  </div>
                  <div className="mt-5 max-w-xs rounded-2xl border border-white/10 bg-primary/75 p-4 backdrop-blur-md">
                    <p className="text-sm md:text-base text-light-gray leading-relaxed">
                      Transforming spaces into beautiful, functional environments that inspire.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col order-1 lg:order-2"
          >
            <span className="about-animate text-xs md:text-sm font-semibold tracking-[0.3em] text-gold uppercase mb-4">
              General Manager Message
            </span>
            <h2 className="about-animate font-serif text-3xl md:text-5xl font-medium tracking-tight mb-8 leading-tight text-white">
              A Message From Our General Manager
            </h2>

            <div className="about-animate space-y-5 mb-10">
              {gmMessage.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-light-gray text-base md:text-lg font-light leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="about-animate rounded-2xl border border-gold/15 bg-card-bg/70 p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <h3 className="text-sm tracking-[0.2em] font-semibold text-white uppercase mb-4">
                Specialized in:
              </h3>
              <div className="space-y-4">
                {gmSpecializations.map((spec, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.45 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-1 flex items-center justify-center w-5 h-5 border border-gold/40 rounded-full bg-gold/5 group-hover:bg-gold/20 group-hover:border-gold transition-all duration-300">
                      <Check size={10} className="text-gold" />
                    </div>
                    <span className="text-white font-light tracking-wide text-sm sm:text-base group-hover:text-gold transition-colors duration-300">
                      {spec}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="about-animate mt-8 flex flex-wrap items-center gap-4">
              <div className="h-px w-16 bg-gold/40" />
              <div>
                <p className="text-white font-medium text-lg">Malik Amir</p>
                <p className="text-light-gray text-sm uppercase tracking-[0.2em]">
                  General Manager
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}