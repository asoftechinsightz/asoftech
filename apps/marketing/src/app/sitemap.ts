import type { MetadataRoute } from "next";
import { industrySlugs } from "@/content/industries";
import { insightSlugs } from "@/content/insights";
import { productSlugs } from "@/content/products";
import { serviceSlugs } from "@/content/services";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    "/careers",
    "/insights",
    "/products",
    "/services",
    "/industries",
    "/privacy-policy",
    "/terms-and-conditions",
    "/cookie-policy",
    "/disclaimer",
  ];

  const dynamicRoutes = [
    ...productSlugs.map((slug) => `/products/${slug}`),
    ...serviceSlugs.map((slug) => `/services/${slug}`),
    ...industrySlugs.map((slug) => `/industries/${slug}`),
    ...insightSlugs.map((slug) => `/insights/${slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
