import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 md:py-32">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
      
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            TELC A1 – C2
          </span>
          
          <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-secondary-foreground md:text-5xl lg:text-6xl">
            Bestehe deine TELC Prüfung mit System.
          </h1>
          
          <p className="mt-6 max-w-2xl text-pretty text-lg text-secondary-foreground/70 md:text-xl">
            Modelltests, Fortschritt & Lernplan – A1 bis C2. Bereite dich
            effektiv auf deine Deutschprüfung vor.
          </p>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild className="gap-2">
              <Link href="#download">
                App herunterladen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
              <Link href="/contact">Kontakt</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
