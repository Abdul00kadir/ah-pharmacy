import ProductCard from "@/components/ProductCard";
import { fetchProducts } from "@/lib/fetchProduct";

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const products = await fetchProducts();

  const list = products.filter(
    (p) =>
      p.category &&
      p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="py-10 px-5 md:px-20 bg-gray-100 dark:bg-black">
      <h1 className="text-3xl mb-6">{category}</h1>

      {list.length === 0 ? (
        <p className="text-sm text-gray-600 dark:text-gray-100">
          No products available for this category right now.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {list.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}
