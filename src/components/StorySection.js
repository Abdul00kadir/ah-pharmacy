"use client";

import { motion } from "framer-motion";
import { Leaf, Heart, Shield, Activity } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    title: "Herbal Equilibrium",
    subtitle: "Purity from Source",
    description: "Compounded using raw botanical herbs carefully selected for high natural potency, avoiding synthetic fillers."
  },
  {
    icon: Activity,
    title: "Holistic Temperament",
    subtitle: "Balanced Care",
    description: "Unani medicine harmonizes the body’s internal temperaments (Akhlat) to address underlying health conditions."
  },
  {
    icon: Shield,
    title: "Certified Safety",
    subtitle: "GMP Standard",
    description: "Every batch is prepared under strict GMP quality compliance to deliver reliable, safe healthcare remedies."
  },
  {
    icon: Heart,
    title: "Vitality & Longevity",
    subtitle: "Sustainable Wellness",
    description: "Formulated to strengthen natural immunity, support digestion, and encourage long-term vitality."
  }
];

export default function StorySection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase font-extrabold tracking-widest text-emerald-600 dark:text-emerald-400 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300/40 dark:border-emerald-800/50 inline-block"
        >
          The Unani Philosophy
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          Balancing Mind, Body & Nature
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed"
        >
          Discover how traditional compounding wisdom creates safe, effective remedies for modern healthcare challenges.
        </motion.p>
      </div>

      {/* 4 Pillars Interactive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {pillars.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <item.icon className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-1">
                {item.subtitle}
              </span>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              <span>Pillar {idx + 1}</span>
              <span>0{idx + 1}</span>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
