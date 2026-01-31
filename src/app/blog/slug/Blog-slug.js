export default function BlogDetail({ params }) {
  const { slug } = params;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold capitalize">
        {slug.replaceAll("-", " ")}
      </h1>
      <p className="mt-4 text-gray-600">
        Blog content will come from Google Sheet.
      </p>
    </div>
  );
}
