import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchBlogs } from "@/lib/fetchBlog";
import { ChevronRightIcon, CalendarIcon } from "@heroicons/react/24/outline";

export const dynamic = "force-dynamic";

function normalizeSlug(value = "") {
  return decodeURIComponent(value.toString()).trim().toLowerCase();
}

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params;
  const routeSlug = normalizeSlug(resolvedParams?.slug || "");
  const blogs = await fetchBlogs();
  const blog = blogs.find(
    (item) => normalizeSlug(item.slug || "") === routeSlug
  );

  if (!blog) {
    notFound();
  }

  const images = blog.images || [];
  const hasMultipleImages = images.length > 1;

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl space-y-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400">Home</Link>
          <ChevronRightIcon className="w-3 h-3" />
          <Link href="/blog" className="hover:text-emerald-600 dark:hover:text-emerald-400">Blog</Link>
          <ChevronRightIcon className="w-3 h-3" />
          <span className="text-slate-800 dark:text-slate-200 truncate max-w-xs">{blog.title}</span>
        </div>

        {/* Header Title & Metadata */}
        <div className="space-y-3 border-b border-slate-200/80 dark:border-slate-800/80 pb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {blog.title}
          </h1>

          {blog.date && (
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <CalendarIcon className="w-4 h-4" />
              <span>Published on {blog.date}</span>
            </div>
          )}
        </div>

        {/* Media Gallery / Images */}
        {images.length === 1 && (
          <div className="overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-md">
            <img
              src={images[0]}
              alt={blog.title}
              className="h-[360px] sm:h-[480px] w-full object-cover"
            />
          </div>
        )}

        {hasMultipleImages && (
          <div className="grid gap-4 sm:grid-cols-2">
            {images.map((image, index) => (
              <div
                key={`${blog.slug}-image-${index + 1}`}
                className={`overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-md ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${blog.title} ${index + 1}`}
                  className={`w-full object-cover ${
                    index === 0 ? "h-[360px] sm:h-[480px]" : "h-64"
                  }`}
                />
              </div>
            ))}
          </div>
        )}

        {/* Article Body */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-10 shadow-sm text-slate-700 dark:text-slate-200 leading-relaxed text-base sm:text-lg whitespace-pre-line space-y-4">
          {blog.content || blog.excerpt || "Content coming soon."}
        </div>

        {/* Back Link Footer */}
        <div className="pt-4 flex justify-between items-center border-t border-slate-200/80 dark:border-slate-800/80">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors"
          >
            &larr; Back to all articles
          </Link>
        </div>

      </article>
    </div>
  );
}
