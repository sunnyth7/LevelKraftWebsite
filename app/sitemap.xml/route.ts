import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/config";

export function GET() {
  const posts = getAllPosts();

  const staticPages = [
    { url: siteConfig.url, lastmod: new Date().toISOString(), priority: "1.0", changefreq: "weekly" },
    { url: `${siteConfig.url}/telc-a1-pruefung`, lastmod: "2025-02-17T00:00:00.000Z", priority: "0.9", changefreq: "monthly" },
    { url: `${siteConfig.url}/telc-a2-pruefung`, lastmod: "2025-02-17T00:00:00.000Z", priority: "0.9", changefreq: "monthly" },
    { url: `${siteConfig.url}/telc-b1-pruefung`, lastmod: "2025-02-17T00:00:00.000Z", priority: "0.9", changefreq: "monthly" },
    { url: `${siteConfig.url}/telc-b2-pruefung`, lastmod: "2025-02-17T00:00:00.000Z", priority: "0.9", changefreq: "monthly" },
    { url: `${siteConfig.url}/blog`, lastmod: new Date().toISOString(), priority: "0.8", changefreq: "daily" },
    { url: `${siteConfig.url}/contact`, lastmod: "2025-01-01T00:00:00.000Z", priority: "0.4", changefreq: "yearly" },
    { url: `${siteConfig.url}/privacy`, lastmod: "2025-01-01T00:00:00.000Z", priority: "0.2", changefreq: "yearly" },
    { url: `${siteConfig.url}/terms`, lastmod: "2025-01-01T00:00:00.000Z", priority: "0.2", changefreq: "yearly" },
    { url: `${siteConfig.url}/imprint`, lastmod: "2025-01-01T00:00:00.000Z", priority: "0.1", changefreq: "yearly" },
  ];

  const blogUrls = posts.map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastmod: new Date(p.publishedAt).toISOString(),
    priority: "0.7",
    changefreq: "weekly",
  }));

  const all = [...staticPages, ...blogUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map((e) => `  <url>
    <loc>${e.url}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
