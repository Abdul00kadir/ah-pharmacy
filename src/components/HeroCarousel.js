"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const AUTO_TIME = 8000;
const slides = [
  { 
    image: "/hero/hero1.png",
    title: "Pure Herbal & Unani Healthcare",
    subtitle: "Formulated with authentic natural ingredients for timeless wellness."
  },
  { 
    image: "/hero/hero2.png",
    title: "Certified Quality Assurance",
    subtitle: "GMP certified processes delivering maximum potency and purity."
  },
  { 
    image: "/hero/hero3.png",
    title: "Holistic Remedies Delivered",
    subtitle: "Trusted healthcare products brought straight to your doorstep."
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_TIME);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX.current - endX > 50) nextSlide();
    if (endX - startX.current > 50) prevSlide();
  };

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative overflow-hidden h-[260px] sm:h-[360px] md:h-[480px] lg:h-[560px] bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-4 shadow-xl border border-slate-200/20 dark:border-slate-800"
    >
      {/* Side Control Buttons */}
      <button
        onClick={prevSlide}
        type="button"
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-slate-950/40 hover:bg-slate-950/70 text-white backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        type="button"
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-slate-950/40 hover:bg-slate-950/70 text-white backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Slide Images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-1000 transform scale-100 hover:scale-105"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Subtle gradient vignette at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
        </div>
      ))}

      {/* Bottom Slider Indicators / Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/50 backdrop-blur-md border border-white/10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === index 
                ? "w-6 bg-emerald-400" 
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
