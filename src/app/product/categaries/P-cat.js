export default function CategoryPage({ params }) {
  const { category } = params;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold capitalize">
        {category} Products
      </h1>
      <p className="mt-2 text-gray-600">
        Products under {category} category.
      </p>
    </div>
  );
}
