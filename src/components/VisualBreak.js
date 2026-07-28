"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function VisualBreak() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-950 to-teal-950 border border-emerald-500/20 p-8 sm:p-16 lg:p-20 text-white text-center shadow-2xl">
        
        {/* Animated Backdrop Mesh Glows */}
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/30 rounded-full blur-[100px] pointer-events-none"
        />
        <motion.div 
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold uppercase tracking-widest"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Uncompromising Commitment</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white"
          >
            "Nature heals in harmony when pure ingredients meet centuries of wisdom."
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed"
          >
            AH Pharmacy guarantees 100% natural herbal compounding, zero artificial colors, zero added sugars, and strict GMP laboratory compliance.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
