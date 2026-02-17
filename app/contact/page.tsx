"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { Mail, Trash2, CreditCard, ExternalLink, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Kontakt
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Wir helfen dir gerne weiter. Wähle eine Option oder sende uns eine
            Nachricht.
          </p>
        </div>

        {/* Quick Action Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Support Email */}
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="group flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Support</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Allgemeine Anfragen und technische Hilfe
            </p>
            <span className="mt-4 text-sm font-medium text-primary">
              {siteConfig.supportEmail}
            </span>
          </a>

          {/* Account Deletion */}
          <a
            href={`mailto:${siteConfig.supportEmail}?subject=Kontol%C3%B6schung%20anfragen&body=Ich%20m%C3%B6chte%20mein%20LevelKraft-Konto%20l%C3%B6schen.%0A%0AMeine%20registrierte%20E-Mail-Adresse%3A%20%0A%0ABitte%20best%C3%A4tigen%20Sie%20die%20L%C3%B6schung.`}
            className="group flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-destructive/10 transition-colors group-hover:bg-destructive/20">
              <Trash2 className="h-7 w-7 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Konto löschen
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Anfrage zur Kontolöschung senden
            </p>
            <span className="mt-4 text-sm font-medium text-primary">
              E-Mail senden
            </span>
          </a>

          {/* Subscription Management */}
          <a
            href={siteConfig.links.playSubscriptions}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20 transition-colors group-hover:bg-accent/30">
              <CreditCard className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Abonnement verwalten
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Kündigen oder ändern bei Google Play
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
              Google Play öffnen
              <ExternalLink className="h-3 w-3" />
            </span>
          </a>
        </div>

        {/* Contact Form */}
        <div className="mt-16">
          <div className="mx-auto max-w-xl">
            <h2 className="text-center text-2xl font-bold text-foreground">
              Nachricht senden
            </h2>
            <p className="mt-2 text-center text-muted-foreground">
              Hast du eine andere Frage? Schreib uns direkt.
            </p>

            {isSubmitted ? (
              <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
                <CheckCircle className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Nachricht gesendet!
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Wir melden uns so schnell wie möglich bei dir.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 bg-transparent"
                  onClick={() => setIsSubmitted(false)}
                >
                  Neue Nachricht senden
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Dein Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="deine@email.de"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Wie können wir dir helfen?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gap-2"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Wird gesendet..."
                  ) : (
                    <>
                      Nachricht senden
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Weitere Informationen findest du in unserer{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Datenschutzerklärung
            </Link>{" "}
            oder auf der{" "}
            <Link href="/support" className="text-primary hover:underline">
              Support-Seite
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
