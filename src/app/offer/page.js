import Offer from "@/components/Offer";
import { fetchProducts } from "@/lib/fetchProduct";
import { TagIcon } from "@heroicons/react/24/outline";

export const dynamic = "force-dynamic";

export default async function OffersPage() {
  const products = await fetchProducts();

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-10 shadow-sm">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 text-xs font-semibold mb-3 border border-amber-300/40 dark:border-amber-800/50">
          <TagIcon className="w-4 h-4" />
          <span>Exclusive Promotions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Special Healthcare Offers
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-xl">
          Discover discounted unani medicine bundles and seasonal promotional deals.
        </p>
      </div>

      <Offer products={products} />
    </div>
  );
}
