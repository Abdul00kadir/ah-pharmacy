"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, HeartPulse, ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    image: "/hero/hero1.png",
    tag: "Authentic Unani Care",
    title: "Timeless Herbal Wisdom, Modern Efficacy.",
    subtitle: "Experience natural healing blended with certified pharmaceutical standards."
  },
  {
    image: "/hero/hero2.png",
    tag: "GMP Certified Quality",
    title: "Pure Formulations for Complete Wellness.",
    subtitle: "Handcrafted from 100% natural herbs with zero artificial additives."
  },
  {
    image: "/hero/hero3.png",
    tag: "Doorstep Healthcare",
    title: "Holistic Remedies Delivered Direct to You.",
    subtitle: "Targeted medicine for immunity, digestion, pain relief, and vitality."
  }
];

const metrics = [
  { label: "Herbal Remedies", value: "100%", icon: Sparkles },
  { label: "GMP Certified", value: "Verified", icon: ShieldCheck },
  { label: "Holistic Health", value: "Trusted", icon: HeartPulse },
];

export default function InteractiveHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Pointer Parallax effect setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 20 };
  const dx = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), springConfig);
  const dy = useSpring(useTransform(mouseY, [-300, 300], [-15, 15]), springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-4 bg-slate-950 text-white shadow-2xl border border-slate-800/80 flex items-center"
    >
      {/* Animated Ambient Background Meshes & Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -45, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Slide Images Container */}
      {heroSlides.map((s, idx) => (
        <motion.div
          key={idx}
          initial={false}
          animate={{
            opacity: idx === currentSlide ? 1 : 0,
            scale: idx === currentSlide ? 1 : 1.05
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <div 
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${s.image})` }}
          />
          {/* Overlay Gradient for optimal readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />
        </motion.div>
      ))}

      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full py-12 grid lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Tag Badge */}
          <motion.div 
            key={`tag-${currentSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 backdrop-blur-md text-emerald-400 text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>{slide.tag}</span>
          </motion.div>

          {/* Animated Headline */}
          <motion.h1 
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white"
          >
            {slide.title.split(" ").map((word, i) => (
              <span key={i} className={i % 3 === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300" : ""}>
                {word}{" "}
              </span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            key={`sub-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            {slide.subtitle}
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/products/Tablets"
              className="group relative inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-6 py-3.5 text-sm font-bold shadow-lg shadow-emerald-950/40 hover:shadow-emerald-500/30 transition-all duration-300 active:scale-95"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </Link>

            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/15 px-6 py-3.5 text-sm font-bold transition-all duration-300 active:scale-95"
            >
              <span>Consult Pharmacist</span>
            </Link>
          </motion.div>

          {/* Metric Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg"
          >
            {metrics.map((m, i) => (
              <div key={i} className="flex flex-col space-y-0.5">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                  <m.icon className="w-3.5 h-3.5" />
                  <span>{m.value}</span>
                </div>
                <span className="text-slate-400 text-xs font-medium">{m.label}</span>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Right Column: Floating 3D Depth Card */}
        <div className="hidden lg:flex lg:col-span-5 justify-center relative">
          <motion.div
            style={{ x: dx, y: dy }}
            className="relative w-80 h-96 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/15 p-6 shadow-2xl flex flex-col justify-between overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

            <div className="space-y-3 relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-[11px] font-bold uppercase tracking-wider border border-emerald-400/30">
                Pure Herbal Formula
              </span>
              <h3 className="text-xl font-bold text-white leading-tight">
                Authentic Unani Healing
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Formulated using traditional compounding methods to target health at its root source.
              </p>
            </div>

            {/* Micro Badge */}
            <div className="relative z-10 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Efficacy Assurance</span>
                <span className="text-xs font-bold text-emerald-400">100% Quality Tested</span>
              </div>
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
          </motion.div>
        </div>

      </div>

      {/* Slider Controls Bottom Floating Rail */}
      <div className="absolute bottom-6 right-6 sm:right-10 z-20 flex items-center gap-3 bg-slate-950/60 backdrop-blur-md p-2 rounded-full border border-white/10">
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="p-2 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Previous Hero Slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-1.5 px-1">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentSlide ? "w-6 bg-emerald-400" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="p-2 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Next Hero Slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
}
