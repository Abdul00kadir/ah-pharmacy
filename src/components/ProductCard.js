"use client";

import { motion } from "framer-motion";
import { ArrowRight, Tag } from "lucide-react";

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-4 shadow-sm hover:shadow-2xl hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300"
    >
      
      {/* Product Image Frame */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800/60 flex items-center justify-center">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name || "Product Image"}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-slate-400 dark:text-slate-600 text-xs">
            No Image
          </div>
        )}

        {/* Category Tag Badge */}
        {product.category && (
          <span className="absolute top-2.5 left-2.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 text-[10px] font-extrabold text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 shadow-sm uppercase tracking-wider">
            {product.category}
          </span>
        )}

        {/* Offer Tag Badge if active */}
        {product.offer === "yes" && (
          <span className="absolute top-2.5 right-2.5 rounded-full bg-amber-500 text-slate-950 font-black px-2.5 py-0.5 text-[10px] uppercase shadow-md flex items-center gap-1">
            <Tag className="w-3 h-3" /> Special
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="mt-4 flex flex-1 flex-col justify-between space-y-3">
        <div>
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
            {product.name || "Unnamed Product"}
          </h3>
          
          {product.description && (
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          )}
        </div>

        {/* Price & Action Button */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">Price</span>
            <span className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">
              ₹{product.price || "N/A"}
            </span>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 text-emerald-700 dark:text-emerald-300 px-3.5 py-2 text-xs font-bold border border-emerald-200/80 dark:border-emerald-800/50 transition-all duration-200 cursor-pointer active:scale-95"
          >
            <span>View</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

    </motion.div>
  );
}
