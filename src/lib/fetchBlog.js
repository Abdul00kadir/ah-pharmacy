function slugify(value = "") {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function parseImages(value) {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value
      .map((item) => item?.toString().trim())
      .filter(Boolean);
  }

  return value
    .toString()
    .split(/\r?\n|,|\|/g)
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeRow(row) {
  const cleaned = {};

  for (const [key, value] of Object.entries(row || {})) {
    const safeKey = key.trim().toLowerCase().replace(/\s+/g, "");
    cleaned[safeKey] = typeof value === "string" ? value.trim() : value;
  }

  return cleaned;
}

function buildEndpoint() {
  const directUrl = process.env.BLOG_SHEET_URL;
  if (directUrl) return directUrl;

  const sheetId = process.env.BLOG_SHEET_ID;
  const sheetTab = process.env.BLOG_SHEET_TAB || "Blog";
  if (!sheetId) return null;

  return `https://opensheet.elk.sh/${sheetId}/${encodeURIComponent(sheetTab)}`;
}

export async function fetchBlogs() {
  try {
    const endpoint = buildEndpoint();
    if (!endpoint) return [];

    const res = await fetch(endpoint, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("fetchBlogs non-OK response:", res.status);
      return [];
    }

    const data = await res.json();
    if (!Array.isArray(data)) return [];

    return data
      .map(normalizeRow)
      .map((row) => {
        const title = row.title || row.blogtitle || row.name || "";
        const slug = row.slug || slugify(title);
        const images = parseImages(
          row.images || row.image || row.imageurl || row.thumbnail || ""
        );

        return {
          title,
          slug,
          excerpt: row.excerpt || row.summary || row.description || "",
          content: row.content || row.body || row.blog || "",
          image: images[0] || "",
          images,
          date: row.date || row.publishedon || "",
        };
      })
      .filter((blog) => blog.title && blog.slug);
  } catch (err) {
    console.error("fetchBlogs failed:", err);
    return [];
  }
}
