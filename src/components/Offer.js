"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchProducts } from "@/lib/fetchProduct";
import ProductCard from "./ProductCard";
import { TagIcon } from "@heroicons/react/24/outline";

export default function OfferProducts() {
  const [offerProducts, setOfferProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const products = await fetchProducts();
        const offer = products.filter((p) => p.offer === "yes");
        setOfferProducts(offer);
      } catch (err) {
        console.error("Failed to fetch offer products", err);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="py-12 text-center text-slate-500 dark:text-slate-400 text-sm">
        Loading special offer items...
      </div>
    );
  }

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto">
        
        {offerProducts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 p-12 text-center text-slate-500 dark:text-slate-400">
            No discounted offers available at the moment. Please check back soon!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {offerProducts.map((product, idx) => (
              <ProductCard key={product.id || idx} product={product} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
