import { siteConfig } from "@/lib/config";

export function GET() {
  const content = `User-agent: *
Allow: /

Disallow: /api/

Sitemap: ${siteConfig.url}/sitemap.xml
`;
  return new Response(content, {
    headers: { "Content-Type": "text/plain", "Cache-Control": "public, max-age=86400" },
  });
}
