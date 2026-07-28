"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = [
  { name: "Immunity", image: "/icon/immunity.jpg", link: "/products/Tablets", desc: "Strengthen natural defense" },
  { name: "Digestive Health", image: "/icon/digestive.jpg", link: "/products/Tablets", desc: "Restore gut equilibrium" },
  { name: "Pain Relief", image: "/icon/pain.png", link: "/products/ForPain", desc: "Joint & muscle comfort" },
  { name: "Clear Skin", image: "/icon/skin.png", link: "/products/Tablets", desc: "Herbal skin vitality" },
  { name: "Cardiac Wellness", image: "/icon/cardiac.png", link: "/products/Tablets", desc: "Heart & vascular care" },
  { name: "Blood Purifier", image: "/icon/blood.png", link: "/products/Tablets", desc: "Cleanse bodily humors" },
];

export default function InteractiveCategories() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-600 dark:text-emerald-400">
            Targeted Treatments
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            Shop by Health Category
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-lg">
            Explore authentic herbal remedies tailored to your personal health needs.
          </p>
        </div>

        <Link
          href="/products/Tablets"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:underline"
        >
          <span>All Categories</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Interactive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300 cursor-pointer"
          >
            <Link href={cat.link} className="flex flex-col items-center text-center">
              
              {/* Category Icon Frame */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 p-1.5 border border-slate-200/60 dark:border-slate-700/60 group-hover:scale-105 group-hover:border-emerald-500/50 transition-all duration-300 shadow-sm">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="mt-4 text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {cat.name}
              </h3>

              <p className="mt-1 text-[11px] text-slate-400 line-clamp-1">
                {cat.desc}
              </p>

            </Link>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex justify-center text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
