import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quiz } from "@/components/blog/quiz";
import { StickyAppBanner } from "@/components/ui/sticky-app-banner";
import { siteConfig } from "@/lib/config";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://levelkraft.de/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://levelkraft.de/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

const EXAM_LINKS: Record<string, string> = {
  A1: "/telc-a1-pruefung",
  A2: "/telc-a2-pruefung",
  B1: "/telc-b1-pruefung",
  B2: "/telc-b2-pruefung",
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const relatedPosts = getAllPosts()
    .filter((p) => p.slug !== post.slug && p.level === post.level)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: `https://levelkraft.de/blog/${post.slug}`,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: "LevelKraft", url: "https://levelkraft.de" },
    publisher: { "@type": "Organization", name: "LevelKraft", url: "https://levelkraft.de" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="pb-24">
        <article className="mx-auto max-w-3xl px-4 pt-12">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <span>/</span>
            <span className="truncate text-foreground/70">{post.title}</span>
          </nav>

          {/* Meta */}
          <div className="mb-5 flex flex-wrap items-center gap-3">
            {post.level !== "GENERAL" && <Badge variant="secondary">Niveau {post.level}</Badge>}
            <span className="text-sm text-muted-foreground">
              {new Date(post.publishedAt).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })}
            </span>
            <span className="text-sm text-muted-foreground">· {post.readingMinutes} Min Lesezeit</span>
          </div>

          {/* Title + description */}
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{post.title}</h1>
          <p className="mt-4 border-b border-border/40 pb-8 text-lg text-muted-foreground">{post.description}</p>

          {/* Content blocks */}
          <div className="mt-8 space-y-5">
            {post.content.map((block, i) => {
              if (block.type === "p") return <p key={i} className="text-muted-foreground leading-relaxed">{block.text}</p>;
              if (block.type === "h2") return <h2 key={i} className="mt-8 text-xl font-bold">{block.text}</h2>;
              if (block.type === "ul") return (
                <ul key={i} className="space-y-2 pl-4">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 flex-shrink-0 text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              );
              if (block.type === "callout") return (
                <div key={i} className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-4">
                  <p className="text-sm font-semibold text-primary">{block.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{block.text}</p>
                </div>
              );
              return null;
            })}
          </div>

          {/* Quiz */}
          {post.quiz && (
            <div className="mt-12">
              <h2 className="mb-2 text-xl font-bold">{post.quiz.title}</h2>
              <Quiz
                title={post.quiz.title}
                intro={post.quiz.intro}
                questions={post.quiz.questions}
              />
            </div>
          )}

          {/* App CTA */}
          <div className="mt-12 rounded-3xl bg-secondary px-8 py-10 text-center">
            <p className="text-xl font-bold text-secondary-foreground">
              Mit LevelKraft für TELC {post.level !== "GENERAL" ? post.level : ""} üben
            </p>
            <p className="mx-auto mt-2 max-w-sm text-sm text-secondary-foreground/70">
              Vollständige Modelltests, KI-Feedback und Fortschrittsverfolgung — kostenlos.
            </p>
            <Button size="lg" className="mt-5" asChild>
              <a href={siteConfig.links.playStore} target="_blank" rel="noopener noreferrer">App kostenlos laden</a>
            </Button>
          </div>

          {/* Link to exam page */}
          {post.level !== "GENERAL" && EXAM_LINKS[post.level] && (
            <div className="mt-5 flex items-center justify-between rounded-2xl border border-border/60 p-5">
              <div>
                <p className="font-semibold text-sm">Alles zur TELC {post.level} Prüfung</p>
                <p className="text-xs text-muted-foreground mt-0.5">Prüfungsaufbau, Tipps, FAQ und Schnelltest</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href={EXAM_LINKS[post.level]}>Zum Guide →</Link>
              </Button>
            </div>
          )}
        </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mx-auto mt-14 max-w-3xl px-4">
            <h2 className="mb-5 text-lg font-bold">Weitere Artikel</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group rounded-2xl border border-border/60 p-5 transition-colors hover:bg-muted/40"
                >
                  {rp.level !== "GENERAL" && <Badge variant="secondary" className="mb-2 text-xs">{rp.level}</Badge>}
                  <p className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors">{rp.title}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <StickyAppBanner />
    </>
  );
}
