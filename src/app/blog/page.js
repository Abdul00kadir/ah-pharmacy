import Link from "next/link";
import { fetchBlogs } from "@/lib/fetchBlog";
import { CalendarIcon, ArrowRightIcon, NewspaperIcon } from "@heroicons/react/24/outline";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const blogs = await fetchBlogs();

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header Banner */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-10 shadow-sm">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-3 border border-emerald-300/40 dark:border-emerald-800/50">
          <NewspaperIcon className="w-4 h-4" />
          <span>Health & Wellness Journal</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Articles & Insights
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-2xl">
          Explore expert advice, holistic health tips, and the science behind traditional Unani medicine.
        </p>
      </div>

      {/* Blog Post List */}
      {blogs.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 p-12 text-center bg-white dark:bg-slate-900/50">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            No articles published yet. Check back soon for health & wellness guides!
          </p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                {/* Featured Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  {blog.image ? (
                    <img
                      alt={blog.title}
                      src={blog.image}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-slate-400 dark:text-slate-600 text-xs">
                      No Preview Image
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {blog.date && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      <span>{blog.date}</span>
                    </div>
                  )}

                  <Link href={`/blog/${blog.slug}`} className="block focus:outline-none">
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
                      {blog.title}
                    </h3>
                  </Link>

                  <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {blog.excerpt || "Read this article for more details."}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

    </div>
  );
}
