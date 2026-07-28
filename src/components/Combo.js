"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { ArrowRight, Layers } from "lucide-react";

export default function Combo({ products = [] }) {
  const comboList = products.filter((p) => p.combo === "yes");

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      
      {/* Background Watermark Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[120px] sm:text-[200px] font-black text-slate-100 dark:text-slate-900/40 uppercase tracking-tighter z-0">
        SYNERGY
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 text-xs font-bold mb-2 border border-teal-300/40 dark:border-teal-800/50"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Synergistic Wellness Packs</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              Combo Products
            </motion.h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-lg">
              Specially curated medicine combinations for comprehensive health treatment.
            </p>
          </div>

          <Link
            href="/products/Combos"
            className="group inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
          >
            <span>View All Combos</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* Grid */}
        {comboList.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 p-10 text-center text-slate-500 dark:text-slate-400 text-sm">
            No combo packages available right now.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {comboList.slice(0, 4).map((product, idx) => (
              <ProductCard key={product.id || idx} product={product} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
