"use client";

import Link from "next/link";

export default function FeaturedProducts({ products }) {
    const featured = products.filter(p => p.featured === "yes");

  return (
    <section className="py-5 bg-gray-50 dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-5 mb-3">
        
        <div className="flex justify-between products-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Our Products
          </h2>

         
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featured.slice(0, 4).map(product => (
            <div
              key={product.id}
              className="p-3 shadow-2xl md:shadow md:hover:shadow-2xl md:hover:bg-gray-200 dark:shadow-black dark:bg-gray-800 rounded-2xl  overflow-hidden
         md:transform transition duration-300
         md:hover:-translate-y-2 md:hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-t-2xl md:h-fit"
              />
              <div className="flex flex-col items-center text-center justify-center mt-3 mb-3">

              <h3 className="font-bold text-[18px]  text-gray-800 dark:text-gray-300">
                {product.name}
              </h3>

               <p className="text-gray-800 dark:text-gray-200 font-extrabold">
                ₹{product.price}
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-500">
                {product.description}
              </p>
</div>
             
            </div>
          ))}
        </div>
         <Link
            href="/products/tablets"
            className="text-green-600 hover:underline font-medium products-end flex justify-end mt-3"
          >
            View All →
          </Link>
      </div>
    </section>
  );
}
