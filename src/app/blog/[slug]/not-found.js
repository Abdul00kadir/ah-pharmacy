import Link from "next/link";

export default function BlogNotFound() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-lg md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#255f39]">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
          Blog Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Jo blog aap dekhna chahte the wo available nahi hai ya slug mismatch ho
          gaya hai.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/blog"
            className="rounded-xl bg-[#255f39] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1d4d2d]"
          >
            Back to Blogs
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
