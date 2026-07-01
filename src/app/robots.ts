import type { MetadataRoute } from "next";
import { org } from "@/data/org";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${org.url}/sitemap.xml`,
    host: org.url,
  };
}
