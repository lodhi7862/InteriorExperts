"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Parliament House", subtitle: "Government of Pakistan" },
  { name: "Serena Hotels", subtitle: "Hospitality & Leisure" },
  { name: "PC Hotels", subtitle: "Pearl Continental" },
  { name: "PTA", subtitle: "Pakistan Telecommunication Authority" },
  { name: "US Embassy", subtitle: "Diplomatic Sector" },
  { name: "Qatar Embassy", subtitle: "Diplomatic Sector" },
  { name: "Australian Embassy", subtitle: "Diplomatic Sector" },
  { name: "French School", subtitle: "International Education" },
];

export default function Clients() {
  return (
    <section className="relative py-20 bg-primary border-t border-gold/5 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] font-semibold text-gold uppercase block mb-3">
            Institutional Trust
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-wider text-light-gray">
            Trusted by Elite Public & Private Organizations
          </h3>
        </div>

        {/* Logo Wall Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {clients.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center justify-center p-6 border border-white/5 bg-dark-gray/10 hover:border-gold/30 hover:bg-dark-gray/30 transition-all duration-500 text-center relative group h-[130px] rounded-none cursor-default select-none"
            >
              {/* Corner mark */}
              <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-gold/0 group-hover:border-gold/45 transition-colors duration-500" />
              
              <span className="font-serif text-base sm:text-lg font-bold tracking-wide text-white group-hover:text-gold transition-colors duration-500">
                {client.name.toUpperCase()}
              </span>
              <span className="text-[9px] tracking-widest uppercase text-light-gray mt-1 font-light opacity-65 group-hover:opacity-100 transition-opacity duration-500">
                {client.subtitle}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
