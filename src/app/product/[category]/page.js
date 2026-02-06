export default function CategoryPage({ params }) {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold capitalize">
        {params.category}
      </h1>

      <p className="mt-2 text-gray-600">
        Products under {params.category} category
      </p>

      {/* Products grid yahin aayega */}
    </div>
  );
}
