import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchBlogs } from "@/lib/fetchBlog";

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
    <section className="px-4 py-10 md:px-8">
      <article className="mx-auto max-w-5xl">
        <div className="mb-6 text-sm text-gray-500">
          <Link href="/blog" className="hover:text-[#255f39] dark:text-amber-50">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="dark:text-amber-50 uppercase">{blog.title}</span>
        </div>

        <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-amber-50 md:text-5xl">
          {blog.title}
        </h1>

        {blog.date ? (
          <p className="mt-3 text-sm font-medium tracking-wide text-gray-500">
            {blog.date}
          </p>
        ) : null}

        {images.length === 1 ? (
          <img
            src={images[0]}
            alt={blog.title}
            className="mt-8 h-[420px] w-full rounded-2xl object-cover"
          />
        ) : null}

        {hasMultipleImages ? (
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {images.map((image, index) => (
              <img
                key={`${blog.slug}-image-${index + 1}`}
                src={image}
                alt={`${blog.title} ${index + 1}`}
                className={`h-64 w-full rounded-xl object-cover ${
                  index === 0 ? "md:col-span-2 md:h-[420px]" : ""
                }`}
              />
            ))}
          </div>
        ) : null}

        <div className="prose mt-8 max-w-none whitespace-pre-line text-gray-700 dark:text-amber-50">
          {blog.content || blog.excerpt || "Content coming soon."}
        </div>
      </article>
    </section>
  );
}
