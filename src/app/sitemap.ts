import type { MetadataRoute } from "next";

const siteUrl = "https://saguarodigitalventures.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/products/monte-estate", "/privacy", "/terms"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
