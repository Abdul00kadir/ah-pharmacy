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
    <div className="p-10">
      <h1 className="text-3xl mb-6">{category}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {list.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
