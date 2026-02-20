import Link from "next/link";
import { fetchBlogs } from "@/lib/fetchBlog";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const blogs = await fetchBlogs();

  return (
    <section className="px-4 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-gray-100">Blog</h1>
        <p className="mt-2 text-gray-600">Health tips & articles</p>

        {blogs.length === 0 ? (
          <p className="mt-8 text-sm text-gray-500">
            No blogs found. Check `BLOG_SHEET_URL` or `BLOG_SHEET_ID` and
            `BLOG_SHEET_TAB`.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.slug}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                {blog.image ? (
                  <img
                    alt={blog.title}
                    src={blog.image}
                    className="h-52 w-full object-cover"
                  />
                ) : (
                  <div className="h-52 w-full bg-gray-100" />
                )}

                <div className="p-5 dark:bg-gray-800">
                  {blog.date ? (
                    <p className="text-xs font-medium tracking-wide text-gray-500">
                      {blog.date} 
                    </p>
                  ) : null}

                  <Link href={`/blog/${blog.slug}`}>
                    <h3 className="mt-2 text-xl font-semibold leading-snug text-gray-900  dark:text-amber-50">
                      {blog.title}
                    </h3>
                  </Link>

                  <p className="mt-3 line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
                    {blog.excerpt || "Read this article for more details."}
                  </p>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-[#255f39] hover:text-[#255f39]/80 dark:text-amber-50"
                  >
                    Read Full Blog
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
