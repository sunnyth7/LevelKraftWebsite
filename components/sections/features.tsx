import { features } from "@/lib/config";
import { FileText, TrendingUp, MessageSquare, Calendar } from "lucide-react";

const iconMap = {
  FileText,
  TrendingUp,
  MessageSquare,
  Calendar,
};

export function Features() {
  return (
    <section id="features" className="bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Alles was du brauchst
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            LevelKraft bietet dir alle Werkzeuge für eine erfolgreiche
            TELC-Prüfungsvorbereitung.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
