"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer suppressHydrationWarning className="relative bg-[#070707] border-t border-gold/10 pt-20 pb-10 z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Col 1: Logo and Summary */}
          <div className="lg:col-span-4 flex flex-col">
            <a href="#" onClick={handleScrollTop} className="flex flex-col mb-6">
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white">
                INTERIOR<span className="text-gold">EXPERTS</span>
              </span>
              <span className="text-[10px] tracking-[0.5em] text-gold uppercase mt-0.5">
                Building Excellence
              </span>
            </a>
            <p className="text-light-gray text-sm font-light leading-relaxed max-w-sm">
              Pakistan's premier interior architectural firm and construction site supervision authority. Shaping luxury offices, embassy properties, and grand hotels.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-xs tracking-[0.2em] font-semibold text-white uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Projects", href: "#projects" },
                { name: "Gallery", href: "#gallery" },
                { name: "Why Us", href: "#why-choose-us" },
                { name: "Process", href: "#process" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-light-gray text-xs tracking-wider uppercase hover:text-gold transition-colors duration-300 font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Short-list */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs tracking-[0.2em] font-semibold text-white uppercase mb-6">Services</h4>
            <ul className="space-y-3 text-light-gray text-xs font-light tracking-wide">
              <li>Interior Architecture & Styling</li>
              <li>Structural Facade & Finishes</li>
              <li>High-End Office & Hotel Renovations</li>
              <li>Site Management & Supervision</li>
              <li>Procurement & Material Logistics</li>
            </ul>
          </div>

          {/* Col 4: Small Office Contact Info */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs tracking-[0.2em] font-semibold text-white uppercase mb-6">Office info</h4>
            <ul className="space-y-3 text-light-gray text-xs font-light tracking-wide">
              <li>656, St. 41, Sector E-11/4, Islamabad.</li>
              <li>rashidhumayun.cci@gmail.com</li>
              <li>+92-333 510 45 98</li>
              <li>+92-321 559 73 89</li>
              <li>Monday - Saturday: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>

        </div>

        {/* Bottom row: socials and copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-6">
          <p className="text-[11px] tracking-widest text-light-gray font-light uppercase text-center sm:text-left">
            &copy; {new Date().getFullYear()} INTERIOR EXPERTS COMPANY. ALL RIGHTS RESERVED.
          </p>

          {/* Socials & Top Scroll Button */}
          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-white/5 hover:border-gold hover:text-gold text-light-gray flex items-center justify-center transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/5 hover:border-gold hover:text-gold text-light-gray flex items-center justify-center transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-white/5 hover:border-gold hover:text-gold text-light-gray flex items-center justify-center transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>

            {/* Back to top arrow */}
            <button
              onClick={handleScrollTop}
              className="w-10 h-10 border border-gold/30 hover:border-gold text-gold hover:bg-gold hover:text-primary transition-all duration-500 rounded-none cursor-pointer flex items-center justify-center"
              aria-label="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
