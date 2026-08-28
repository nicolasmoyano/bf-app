import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.brandform.studio/sitemap.xml",
    host: "https://www.brandform.studio",
  };
}
