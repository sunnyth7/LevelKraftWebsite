import { testimonials } from "@/lib/config";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Das sagen unsere Nutzer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Tausende haben ihre TELC-Prüfung mit LevelKraft bestanden.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/30" />
              <p className="text-foreground leading-relaxed">
                {`"${testimonial.text}"`}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.level}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
