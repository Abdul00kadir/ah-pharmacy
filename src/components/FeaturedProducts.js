"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FeaturedProducts({ products = [] }) {
  const featured = products.filter((p) => p.featured === "yes");

  return (
    <section className="py-16 sm:py-20 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-2 border border-emerald-300/40 dark:border-emerald-800/50"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Handpicked Formulations</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              Featured Products
            </motion.h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Discover our most popular unani medicine formulations and trusted remedies.
            </p>
          </div>

          <Link
            href="/products/Tablets"
            className="group inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* Grid */}
        {featured.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 p-10 text-center text-slate-500 dark:text-slate-400 text-sm">
            No featured products cataloged right now.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {featured.slice(0, 4).map((product, idx) => (
              <ProductCard key={product.id || idx} product={product} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
