"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

export function StickyAppBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem("lk_banner_dismissed")) {
        const t = setTimeout(() => setVisible(true), 1800);
        return () => clearTimeout(t);
      }
    } catch {
      // SSR safety
    }
  }, []);

  function dismiss() {
    try { sessionStorage.setItem("lk_banner_dismissed", "1"); } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="banner"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/60 bg-secondary text-secondary-foreground shadow-xl animate-in slide-in-from-bottom-4 duration-300"
    >
      <div className="mx-auto flex max-w-4xl items-center gap-4 px-4 py-3">
        {/* App icon */}
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <span className="text-xs font-bold">LK</span>
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">
            Kostenlos üben mit LevelKraft
          </p>
          <p className="truncate text-xs text-secondary-foreground/60">
            TELC-Prüfung vorbereiten · KI-Feedback in 2 Min
          </p>
        </div>

        {/* CTA */}
        <Button size="sm" asChild className="flex-shrink-0">
          <a
            href={siteConfig.links.playStore}
            target="_blank"
            rel="noopener noreferrer"
          >
            Jetzt kostenlos
          </a>
        </Button>

        {/* Dismiss */}
        <button
          onClick={dismiss}
          className="flex-shrink-0 rounded p-1 text-secondary-foreground/40 transition-colors hover:text-secondary-foreground"
          aria-label="Banner schließen"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
