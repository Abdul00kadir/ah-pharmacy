import Link from "next/link";
import { SparklesIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function ProductsPage() {
  const categories = [
    { name: "Tablets", href: "/products/Tablets", description: "Herbal tablets for daily health and vigor" },
    { name: "Majoon", href: "/products/Majoon", description: "Traditional authentic unani paste formulations" },
    { name: "Capsules", href: "/products/Capsules", description: "Potent natural extracts in convenient capsules" },
    { name: "Combos", href: "/products/Combos", description: "Specialized value medicine bundles" },
    { name: "For Pain", href: "/products/ForPain", description: "Targeted joint and muscle pain relief formulas" },
  ];

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-10 shadow-sm">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Product Categories
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-xl">
          Select a category below to discover authentic Unani medicines and herbal healthcare solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.href}
            className="group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <SparklesIcon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {cat.name}
              </h3>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {cat.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span>View Products</span>
              <ChevronRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
