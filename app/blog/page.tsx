import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "TELC Prüfung Blog: Tipps, Übungen & Lernstrategien",
  description: "Aktueller Blog zur TELC-Prüfungsvorbereitung. Tipps für Leseverstehen, Hören, Schreiben und Sprechen auf allen Niveaus A1–C2.",
  alternates: { canonical: "https://levelkraft.de/blog" },
};

const LEVEL_VARIANT: Record<string, "default" | "secondary" | "outline"> = {
  A1: "default",
  A2: "default",
  B1: "default",
  B2: "default",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          TELC Vorbereitung <span className="text-primary">Blog</span>
        </h1>
        <p className="mt-3 text-muted-foreground text-lg max-w-xl">
          Praxisnahe Tipps, Übungsstrategien und Lernpläne für deine TELC-Prüfung — von A1 bis C2.
        </p>
      </div>

      {/* Level shortcut links */}
      <div className="mb-10 flex flex-wrap gap-3">
        <span className="text-sm text-muted-foreground self-center">Prüfungsguides:</span>
        {[
          { label: "TELC A1", href: "/telc-a1-pruefung" },
          { label: "TELC A2", href: "/telc-a2-pruefung" },
          { label: "TELC B1", href: "/telc-b1-pruefung" },
          { label: "TELC B2", href: "/telc-b2-pruefung" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="rounded-full border border-border/60 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            {item.label} →
          </Link>
        ))}
      </div>

      {/* Posts grid */}
      <div className="grid gap-5 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl border border-border/60 p-6 transition-colors hover:bg-muted/40"
          >
            <div className="mb-3 flex items-center gap-2">
              {post.level !== "GENERAL" && (
                <Badge variant="secondary">{post.level}</Badge>
              )}
              <span className="text-xs text-muted-foreground">
                {new Date(post.publishedAt).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="text-xs text-muted-foreground">· {post.readingMinutes} Min</span>
            </div>
            <h2 className="font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1">
              {post.description}
            </p>
            <span className="mt-4 text-sm font-medium text-primary">
              Weiterlesen →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
