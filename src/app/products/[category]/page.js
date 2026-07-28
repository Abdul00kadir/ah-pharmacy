import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { fetchProducts } from "@/lib/fetchProduct";
import { ChevronRightIcon, BuildingStorefrontIcon } from "@heroicons/react/24/outline";

export const dynamic = "force-dynamic";

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const products = await fetchProducts();

  const list = products.filter(
    (p) =>
      p.category &&
      p.category.toLowerCase() === category.toLowerCase()
  );

  const formattedCategoryName =
    category ? category.charAt(0).toUpperCase() + category.slice(1) : "Products";

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Breadcrumb & Header Banner */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
          <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400">Home</Link>
          <ChevronRightIcon className="w-3 h-3" />
          <Link href="/products/Tablets" className="hover:text-emerald-600 dark:hover:text-emerald-400">Products</Link>
          <ChevronRightIcon className="w-3 h-3" />
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">{formattedCategoryName}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {formattedCategoryName}
            </h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-xl">
              Browse our complete range of certified Unani & herbal remedies formulated for {formattedCategoryName.toLowerCase()}.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 px-4 py-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
            <BuildingStorefrontIcon className="w-4 h-4" />
            <span>{list.length} {list.length === 1 ? 'Product' : 'Products'} Available</span>
          </div>
        </div>
      </div>

      {/* Product List Grid */}
      {list.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 p-12 text-center bg-white dark:bg-slate-900/50">
          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-3 text-slate-400">
            <BuildingStorefrontIcon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">No Products Found</h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            No products are currently cataloged under the "{formattedCategoryName}" category. Please check back soon or explore other categories.
          </p>
          <Link
            href="/products/Tablets"
            className="inline-block mt-4 rounded-xl bg-emerald-600 text-white px-4 py-2 text-xs font-semibold hover:bg-emerald-500 transition-colors"
          >
            Explore Other Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {list.map((item, idx) => (
            <ProductCard key={item.id || idx} product={item} />
          ))}
        </div>
      )}

    </div>
  );
}
