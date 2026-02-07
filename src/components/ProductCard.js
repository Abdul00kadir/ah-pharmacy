export default function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-base-200/20">
      <div className="relative bg-base-200 p-4 dark:bg-base-300/10">
        <img
          src={product.image}
          alt={product.name}
          className="h-32 w-full rounded-xl object-contain object-top transition duration-300 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="p-4">
        <h3 className="line-clamp-1 text-base font-semibold text-base-content">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-base-content/70">
          {product.description}
        </p>
        <p className="mt-3 text-lg font-bold text-base-content">
          ₹{product.price}
        </p>
      </div>

      <div className="px-4 pb-4">
        <button className="w-full rounded-xl bg-orange-500 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600">
          Enquiry Now
        </button>
      </div>
    </div>
  );
}
