export async function fetchProducts() {
  const res = await fetch(
    "https://opensheet.elk.sh/1tU2kRyuhsVY_p3-HlLY7MzHGYZQx_7Mke07UXDEwW3c/Products",
    {
      cache: "no-store",
      next: { revalidate: 0 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.map((row) => {
    const cleaned = {};
    for (const [key, value] of Object.entries(row)) {
      const trimmedKey = key.trim();
      cleaned[trimmedKey] =
        typeof value === "string" ? value.trim() : value;
    }
    return cleaned;
  });
}
