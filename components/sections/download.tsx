import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Smartphone } from "lucide-react";

export function Download() {
  return (
    <section id="download" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Jetzt herunterladen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Starte noch heute mit deiner Prüfungsvorbereitung. Verfügbar für
            Android – iOS kommt bald!
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
          {/* Google Play */}
          <Link
            href={siteConfig.links.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full max-w-xs items-center gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 text-primary"
                fill="currentColor"
              >
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Jetzt bei</p>
              <p className="text-lg font-semibold text-foreground">
                Google Play
              </p>
            </div>
          </Link>

          {/* App Store */}
          <div className="relative flex w-full max-w-xs items-center gap-4 rounded-xl border border-border bg-card p-6 opacity-60">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted">
              <Smartphone className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Bald verfügbar im</p>
              <p className="text-lg font-semibold text-foreground">App Store</p>
            </div>
            <span className="absolute -top-2 right-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
