import Link from "next/link";
import { pricingPlans, siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Einfache Preise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Starte kostenlos und wechsle zu Premium, wenn du bereit bist.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl border bg-card p-8 shadow-sm",
                plan.highlighted
                  ? "border-primary shadow-lg scale-105"
                  : "border-border"
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                  Beliebt
                </span>
              )}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={cn(
                  "mt-8 w-full",
                  !plan.highlighted && "bg-transparent"
                )}
                variant={plan.highlighted ? "default" : "outline"}
                asChild
              >
                <Link href={siteConfig.links.playStore}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Abonnements werden über Google Play abgerechnet. Kündigung jederzeit
          möglich über{" "}
          <Link
            href={siteConfig.links.playSubscriptions}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Google Play Abonnements
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
