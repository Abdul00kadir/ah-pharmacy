export async function fetchProducts() {
  try {
    const res = await fetch(
      "https://opensheet.elk.sh/1tU2kRyuhsVY_p3-HlLY7MzHGYZQx_7Mke07UXDEwW3c/Products",
      {
        cache: "no-store",
        next: { revalidate: 0 },
      }
    );

    if (!res.ok) {
      console.error("fetchProducts non-OK response:", res.status);
      return [];
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
  } catch (err) {
    console.error("fetchProducts failed:", err);
    return [];
  }
}
