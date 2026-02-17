// Week 2 autopublish webhook — n8n hits this to push new blog posts
// Posts are stored in lib/blog.ts (static) or Supabase (dynamic, Week 2)
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = process.env.PUBLISH_WEBHOOK_SECRET;
  if (!secret) return NextResponse.json({ error: "Not configured" }, { status: 500 });

  let body: { secret: string; slug: string; title: string; meta_description: string; content_mdx: string; level?: string; tags?: string[] };
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }

  if (body.secret !== secret) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!body.slug || !body.title || !body.meta_description || !body.content_mdx)
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  if (!/^[a-z0-9-]+$/.test(body.slug))
    return NextResponse.json({ error: "Invalid slug format" }, { status: 400 });

  const wordCount = body.content_mdx.trim().split(/\s+/).length;
  if (wordCount < 300) return NextResponse.json({ error: `Too short: ${wordCount} words` }, { status: 400 });

  // Week 2: uncomment Supabase insert here
  console.log(`[publish] ${body.slug} — ${wordCount} words`);
  return NextResponse.json({ success: true, slug: body.slug, url: `https://levelkraft.de/blog/${body.slug}`, wordCount });
}

export function GET() { return NextResponse.json({ error: "Method not allowed" }, { status: 405 }); }
