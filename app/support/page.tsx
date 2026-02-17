import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Mail,
  FileText,
  Trash2,
  HelpCircle,
  ExternalLink,
  AlertCircle,
  Key,
  Volume2,
  CreditCard,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Hilfe und Support für LevelKraft - Finde Antworten und kontaktiere uns.",
};

const quickLinks = [
  {
    title: "Kontakt",
    description: "Sende uns eine Nachricht",
    href: "/contact",
    icon: Mail,
  },
  {
    title: "Datenschutz",
    description: "Datenschutzerklärung lesen",
    href: "/privacy",
    icon: FileText,
  },
  {
    title: "Konto löschen",
    description: "Konto und Daten entfernen",
    href: "/delete-account",
    icon: Trash2,
  },
  {
    title: "FAQ",
    description: "Häufige Fragen zur App",
    href: "/#faq",
    icon: HelpCircle,
  },
];

const troubleshootingItems = [
  {
    icon: Key,
    title: "Anmeldung funktioniert nicht",
    problem: "Ich kann mich nicht in mein Konto einloggen.",
    solutions: [
      "Überprüfe, ob du die richtige E-Mail-Adresse verwendest",
      'Nutze die "Passwort vergessen"-Funktion, um dein Passwort zurückzusetzen',
      "Stelle sicher, dass du eine stabile Internetverbindung hast",
      "Versuche, die App neu zu starten oder neu zu installieren",
    ],
  },
  {
    icon: CreditCard,
    title: "Premium wird nicht aktiviert",
    problem:
      "Ich habe ein Abonnement abgeschlossen, aber Premium ist nicht aktiv.",
    solutions: [
      "Warte einige Minuten - die Aktivierung kann bis zu 15 Minuten dauern",
      "Stelle sicher, dass du mit dem richtigen Google-Konto angemeldet bist",
      "Starte die App neu und melde dich erneut an",
      'Überprüfe den Status in Google Play unter "Abonnements"',
      "Kontaktiere uns, falls das Problem weiterhin besteht",
    ],
  },
  {
    icon: Volume2,
    title: "Audio funktioniert nicht",
    problem: "Ich höre keine Audiowiedergabe in der App.",
    solutions: [
      "Überprüfe, ob dein Gerät nicht auf stumm geschaltet ist",
      "Stelle sicher, dass die Medienlautstärke aktiviert ist",
      "Erlaube der App Zugriff auf Audio in den Geräteeinstellungen",
      "Verwende Kopfhörer, um Bluetooth-Probleme auszuschließen",
      "Starte die App oder dein Gerät neu",
    ],
  },
  {
    icon: AlertCircle,
    title: "App stürzt ab oder lädt nicht",
    problem: "Die App reagiert nicht oder stürzt ständig ab.",
    solutions: [
      "Stelle sicher, dass du die neueste Version der App verwendest",
      "Lösche den App-Cache in den Geräteeinstellungen",
      "Deinstalliere und installiere die App neu",
      "Überprüfe, ob genügend Speicherplatz auf deinem Gerät vorhanden ist",
      "Starte dein Gerät neu",
    ],
  },
];

export default function SupportPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Support
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Finde schnelle Hilfe zu den häufigsten Problemen oder kontaktiere
            unser Support-Team.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.title}
                href={link.href}
                className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{link.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {link.description}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Troubleshooting Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground">
            Problemlösungen
          </h2>
          <p className="mt-2 text-muted-foreground">
            Hier findest du Lösungen für die häufigsten technischen Probleme.
          </p>

          <div className="mt-8 space-y-6">
            {troubleshootingItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        {item.problem}
                      </p>
                      <Accordion type="single" collapsible className="mt-4">
                        <AccordionItem value="solutions" className="border-none">
                          <AccordionTrigger className="py-2 text-sm text-primary hover:no-underline">
                            Lösungen anzeigen
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-muted-foreground">
                              {item.solutions.map((solution, index) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-2"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                  {solution}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Google Play Subscriptions */}
        <div className="mt-16 rounded-2xl border border-border bg-muted/50 p-8">
          <h2 className="text-xl font-semibold text-foreground">
            Abonnement verwalten
          </h2>
          <p className="mt-2 text-muted-foreground">
            Dein Abonnement wird über Google Play verwaltet. Um es zu kündigen,
            zu ändern oder den Status zu überprüfen:
          </p>
          <ol className="mt-4 list-decimal pl-6 text-muted-foreground space-y-2">
            <li>Öffne den Google Play Store auf deinem Gerät</li>
            <li>
              Gehe zu Einstellungen → Zahlungen & Abonnements → Abonnements
            </li>
            <li>Wähle LevelKraft aus</li>
            <li>Wähle {'"'}Kündigen{'"'} oder die gewünschte Option</li>
          </ol>
          <Button asChild className="mt-6 gap-2 bg-transparent" variant="outline">
            <a
              href={siteConfig.links.playSubscriptions}
              target="_blank"
              rel="noopener noreferrer"
            >
              Zu Google Play Abonnements
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold text-foreground">
            Problem nicht gelöst?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Unser Support-Team hilft dir gerne weiter.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <a href={`mailto:${siteConfig.supportEmail}`}>
                <Mail className="mr-2 h-4 w-4" />
                {siteConfig.supportEmail}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Kontaktformular</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
