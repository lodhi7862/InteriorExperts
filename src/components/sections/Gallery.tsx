"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ✅ Gallery items with string paths (no imports needed)
const galleryItems = [
  { id: 1, title: "Gallery 01", image: "/Gallery/1.jpeg" },
  { id: 2, title: "Gallery 02", image: "/Gallery/2.jpeg" },
  { id: 3, title: "Gallery 03", image: "/Gallery/3.jpeg" },
  { id: 4, title: "Gallery 04", image: "/Gallery/4.jpeg" },
  { id: 5, title: "Gallery 05", image: "/Gallery/5.jpeg" },
  { id: 6, title: "Gallery 06", image: "/Gallery/6.jpeg" },
  { id: 7, title: "Gallery 07", image: "/Gallery/7.jpeg" },
  { id: 8, title: "Gallery 08", image: "/Gallery/8.jpeg" },
  { id: 9, title: "Gallery 09", image: "/Gallery/9.jpeg" },
  { id: 10, title: "Gallery 10", image: "/Gallery/10.jpeg" },
  { id: 11, title: "Gallery 11", image: "/Gallery/11.jpeg" },
  { id: 12, title: "Gallery 12", image: "/Gallery/12.jpeg" },
  { id: 13, title: "Gallery 13", image: "/Gallery/13.jpeg" },
  { id: 14, title: "Gallery 14", image: "/Gallery/14.jpeg" },
  { id: 15, title: "Gallery 15", image: "/Gallery/15.jpeg" },
  { id: 16, title: "Gallery 16", image: "/Gallery/16.jpeg" },
  { id: 17, title: "Gallery 17", image: "/Gallery/17.jpeg" },
  { id: 18, title: "Gallery 18", image: "/Gallery/18.jpeg" },
  { id: 19, title: "Gallery 19", image: "/Gallery/19.jpeg" },
  { id: 20, title: "Gallery 20", image: "/Gallery/20.jpeg" },
  { id: 21, title: "Gallery 21", image: "/Gallery/21.jpeg" },
  { id: 22, title: "Gallery 22", image: "/Gallery/22.jpeg" },
  { id: 23, title: "Gallery 23", image: "/Gallery/23.jpeg" },
  { id: 24, title: "Gallery 24", image: "/Gallery/24.jpeg" },
];

const duplicatedGalleryItems = [...galleryItems, ...galleryItems];

export default function Gallery() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const lastFrameRef = useRef(0);
  const visibleCardStep = 1;

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }

    let animationFrame = 0;
    const speed = 0.15;

    const step = (timestamp: number) => {
      if (!lastFrameRef.current) {
        lastFrameRef.current = timestamp;
      }

      const delta = timestamp - lastFrameRef.current;
      lastFrameRef.current = timestamp;

      if (!pausedRef.current) {
        carousel.scrollLeft += Math.max(delta * speed, 0.5);

        const loopWidth = carousel.scrollWidth / 2;
        if (carousel.scrollLeft >= loopWidth) {
          carousel.scrollLeft -= loopWidth;
        }
      }

      animationFrame = window.requestAnimationFrame(step);
    };

    animationFrame = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const getCardStep = () => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return 0;
    }

    const firstCard = carousel.querySelector<HTMLElement>("[data-gallery-card]");
    const gap = 24;
    return ((firstCard?.offsetWidth ?? 0) + gap) * visibleCardStep;
  };

  const handlePrev = () => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }

    const step = getCardStep();
    const loopWidth = carousel.scrollWidth / 2;

    if (carousel.scrollLeft <= 4) {
      carousel.scrollLeft = loopWidth - step;
      return;
    }

    carousel.scrollBy({ left: -step, behavior: "smooth" });
  };

  const handleNext = () => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }

    const step = getCardStep();
    const loopWidth = carousel.scrollWidth / 2;

    if (carousel.scrollLeft >= loopWidth - step - 4) {
      carousel.scrollLeft = 0;
      return;
    }

    carousel.scrollBy({ left: step, behavior: "smooth" });
  };

  const handlePause = () => {
    pausedRef.current = true;
  };

  const handleResume = () => {
    pausedRef.current = false;
  };

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-primary z-10 overflow-hidden scroll-mt-48 md:scroll-mt-56">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_30%)] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-4"
        >
          <div>
            <span className="text-xs md:text-sm font-semibold tracking-[0.4em] text-gold uppercase block mb-4">
              Showcase
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white">
              Gallery
            </h2>
          </div>
        </motion.div>

        <div
          className="flex items-center justify-between gap-4 mb-6"
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
        >
          <div className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-light-gray">
            From concept to completion, delivering excellence in every project.
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center justify-center w-11 h-11 border border-gold/20 bg-card-bg/70 text-white hover:text-gold hover:border-gold/60 transition-all duration-300 cursor-pointer"
              aria-label="Previous gallery images"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center justify-center w-11 h-11 border border-gold/20 bg-card-bg/70 text-white hover:text-gold hover:border-gold/60 transition-all duration-300 cursor-pointer"
              aria-label="Next gallery images"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth select-none pb-3"
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
        >
          {duplicatedGalleryItems.map((item, index) => (
            <motion.article
              key={`${item.id}-${index}`}
              data-gallery-card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (index % galleryItems.length) * 0.01 }}
              className="group relative shrink-0 w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] border border-gold/10 bg-dark-gray/20 hover:border-gold/35 transition-all duration-500 overflow-hidden"
            >
              <div className="relative h-[300px] sm:h-[340px] lg:h-[420px] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/35 transition-colors duration-500" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
