export default function BlogDetailPage({ params }) {
  return (
    <div className="p-10 max-w-3xl">
      <h1 className="text-3xl font-bold capitalize">
        {params.slug.replaceAll("-", " ")}
      </h1>

      <p className="mt-4 text-gray-600">
        Blog content will come from Google Sheet.
      </p>
    </div>
  );
}
