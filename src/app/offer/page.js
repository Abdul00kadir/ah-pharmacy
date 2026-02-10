import Offer from "@/components/Offer";
import { fetchProducts } from "@/lib/fetchProduct";

export default async function OffersPage() {
  const products = await fetchProducts();

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Offers
      </h1>

      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Latest deals and promotions.
      </p>

      <div className="mt-8">
        <Offer products={products} />
      </div>
    </div>
  );
}
