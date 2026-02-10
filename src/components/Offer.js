"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchProducts } from "@/lib/fetchProduct";

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
      <div className="py-10 text-center text-gray-500 dark:text-gray-400">
        Loading offers...
      </div>
    );
  }

  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Heading */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Offers
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {offerProducts.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="p-3 rounded-2xl bg-white dark:bg-gray-800 shadow
              transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl w-full object-cover"
              />

              <div className="flex flex-col items-center text-center mt-3 space-y-1">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  {product.name}
                </h3>

                <p className="font-bold text-green-600">
                  ₹{product.price}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-end mt-4">
          <Link
            href="/products/tablets"
            className="text-green-600 hover:underline font-medium"
          >
            View All →
          </Link>
        </div>
      </div>
    </section>
  );
}
