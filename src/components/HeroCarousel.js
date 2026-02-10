"use client";

import { useEffect, useRef, useState } from "react";

const AUTO_TIME = 15000;
const slides = [
  { image: "/hero/hero1.jpg" },
  { image: "/hero/hero2.png" },
  { image: "/hero/hero3.png" },
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
      className="relative overflow-hidden h-[240px] sm:h-[320px] md:h-[70vh] lg:h-screen dark:bg-gray-800"
    >
      {/* SIDE BUTTONS */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/85 hover:bg-white text-green-900 shadow-md p-3 rounded-full border border-green-200"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/85 hover:bg-white text-green-900 shadow-md p-3 rounded-full border border-green-200"
      >
        ›
      </button>

      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="h-full w-full bg-top md:bg-center bg-no-repeat bg-contain md:bg-cover"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        </div>
      ))}
    </section>
  );
}
