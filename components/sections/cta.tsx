import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-secondary px-8 py-16 text-center md:px-16 md:py-24">
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
          
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
              Starte heute – 10 Minuten pro Tag reichen.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-secondary-foreground/70">
              Schließe dich tausenden Lernenden an, die ihre TELC-Prüfung mit
              LevelKraft bestanden haben.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="gap-2">
                <Link href="#download">
                  Jetzt kostenlos starten
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
