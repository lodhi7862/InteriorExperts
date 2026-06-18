"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-primary z-20 overflow-hidden">
      <div className="absolute right-0 bottom-0 w-80 h-80 border-b border-r border-gold/10 pointer-events-none translate-x-10 translate-y-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs md:text-sm font-semibold tracking-[0.4em] text-gold uppercase block mb-4">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white mb-8">
              Start Your Luxury Project
            </h2>
            <p className="text-light-gray text-base font-light leading-relaxed mb-12 max-w-md">
              Whether you require a complete interior redesign, facade finishing, or institutional procurement management, our veteran project leads are ready to consult.
            </p>

            {/* <div className="space-y-8">
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 border border-gold/20 flex items-center justify-center text-gold bg-gold/5 group-hover:bg-gold group-hover:text-primary transition-all duration-300">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-light-gray block mb-1">Phone & WhatsApp</span>
                  <a href="tel:+923001234567" className="text-white hover:text-gold transition-colors duration-300 font-medium tracking-wide">
                    +92-333 510 45 98<br />+92-321 559 73 89
                  </a>
                  <span className="text-xs text-light-gray/70 block mt-0.5">Available for WhatsApp consulting</span>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 border border-gold/20 flex items-center justify-center text-gold bg-gold/5 group-hover:bg-gold group-hover:text-primary transition-all duration-300">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-light-gray block mb-1">Email Inquiry</span>
                  <a href="mailto:info@interiorexperts.com" className="text-white hover:text-gold transition-colors duration-300 font-medium tracking-wide">
                    rashidhumayun.cci@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 border border-gold/20 flex items-center justify-center text-gold bg-gold/5 group-hover:bg-gold group-hover:text-primary transition-all duration-300">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-light-gray block mb-1">Office Address</span>
                  <p className="text-white font-light leading-relaxed">
                    656, St. 41, Sector E-11/4, Islamabad.<br />
                    Pakistan
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          <div className="lg:col-span-7 bg-dark-gray/25 border border-gold/10 p-8 sm:p-10 relative">
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/25" />
            <h3 className="font-serif text-2xl font-semibold tracking-wide text-white mb-8">
              Contact Details
            </h3>
            <p className="text-light-gray text-base font-light leading-relaxed mb-10">
              We have removed the submission form from the site. Please use the contact details below to reach our team directly for quotes, consultations, or project inquiries.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-primary/40 p-6">
                <span className="text-[10px] tracking-[0.2em] uppercase text-light-gray block mb-3">Phone & WhatsApp</span>
                <p className="text-white font-medium leading-relaxed">+92-333 510 45 98</p>
                <p className="text-white font-medium leading-relaxed">+92-321 559 73 89</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-primary/40 p-6">
                <span className="text-[10px] tracking-[0.2em] uppercase text-light-gray block mb-3">Email Address</span>
                <p className="text-white font-medium leading-relaxed">rashidhumayun.cci@gmail.com</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-primary/40 p-6 sm:col-span-2">
                <span className="text-[10px] tracking-[0.2em] uppercase text-light-gray block mb-3">Office Location</span>
                <p className="text-white font-medium leading-relaxed">
                  656, St. 41, Sector E-11/4, Islamabad.<br />
                  Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
