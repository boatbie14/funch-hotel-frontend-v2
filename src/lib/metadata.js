// lib/metadata.js
import { getSlug } from "./getSlug";

export async function generateSeoMetadata(pathname, params, searchParams) {
  const slug = getSlug(pathname, params);

  const search = await searchParams;
  const lang = search?.lang || "th";

  try {
    // Fetch SEO data from backend
    const res = await fetch(`${process.env.API_BASE}/api/seo-metadata?slug=${slug}`);
    const data = await res.json();

    if (data.success && data.data[lang]) {
      const seo = data.data[lang];

      return {
        title: seo.title || "Funch Hotel",
        description: seo.description || "Welcome to Funch Hotel",
        openGraph: {
          title: seo.title,
          description: seo.description,
          images: seo.og_image ? [{ url: seo.og_image }] : [],
          locale: lang === "th" ? "th_TH" : "en_US",
          type: "website",
        },
        twitter: {
          card: "summary_large_image",
          title: seo.title,
          description: seo.description,
          images: seo.og_image ? [seo.og_image] : [],
        },
      };
    }
  } catch (error) {
    console.error("SEO fetch error:", error);
  }

  // Default metadata if fetch fails
  return {
    title: "Funch Hotel",
    description: "Welcome to Funch Hotel",
  };
}
