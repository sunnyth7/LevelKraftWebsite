import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "AGB",
  description:
    "Allgemeine Geschäftsbedingungen für LevelKraft - TELC Prüfungsvorbereitung.",
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Allgemeine Geschäftsbedingungen
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Zuletzt aktualisiert: Januar 2026
        </p>

        <div className="prose prose-neutral mt-12 max-w-none">
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              1. Geltungsbereich
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die
              Nutzung der LevelKraft-App und der zugehörigen Website. Mit der
              Nutzung unserer Dienste erklären Sie sich mit diesen AGB
              einverstanden.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              2. Leistungsbeschreibung
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              LevelKraft ist eine App zur Vorbereitung auf TELC-Deutschprüfungen
              der Niveaustufen A1 bis C2. Die App bietet:
            </p>
            <ul className="mt-4 list-disc pl-6 text-muted-foreground space-y-2">
              <li>Modelltests zur Prüfungssimulation</li>
              <li>Übungen für Lesen, Hören, Schreiben und Sprechen</li>
              <li>Fortschrittsverfolgung und Statistiken</li>
              <li>Personalisierte Lernpläne</li>
              <li>KI-gestütztes Feedback</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              3. Keine Erfolgsgarantie
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Wichtiger Hinweis:</strong>{" "}
              LevelKraft ist ein Hilfsmittel zur Prüfungsvorbereitung. Wir
              garantieren nicht das Bestehen einer TELC-Prüfung. Der Erfolg
              hängt von vielen Faktoren ab, einschließlich Ihrer individuellen
              Lernleistung und der offiziellen Prüfungsbedingungen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              4. Abonnements und Zahlungen
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-foreground">4.1 Kostenlose Version</h3>
                <p className="mt-2 text-muted-foreground">
                  Die Basisversion von LevelKraft ist kostenlos und bietet eingeschränkten Zugang zu Funktionen.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">4.2 Premium-Abonnement</h3>
                <p className="mt-2 text-muted-foreground">
                  Premium-Abonnements werden über Google Play Billing abgerechnet. Die Preise werden im Google Play Store angezeigt und können je nach Region variieren.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">4.3 Kündigung</h3>
                <p className="mt-2 text-muted-foreground">
                  Abonnements können jederzeit über den Google Play Store gekündigt werden:
                </p>
                <ol className="mt-2 list-decimal pl-6 text-muted-foreground">
                  <li>Öffnen Sie den Google Play Store</li>
                  <li>
                    Gehen Sie zu Einstellungen → Zahlungen & Abonnements → Abonnements
                  </li>
                  <li>Wählen Sie LevelKraft und tippen Sie auf {'"'}Kündigen{'"'}</li>
                </ol>
                <p className="mt-2 text-muted-foreground">
                  Oder besuchen Sie direkt:{" "}
                  <Link
                    href={siteConfig.links.playSubscriptions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    play.google.com/store/account/subscriptions
                  </Link>
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              5. Nutzungsrechte
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Wir gewähren Ihnen ein nicht-exklusives, nicht übertragbares Recht
              zur Nutzung der App für persönliche, nicht-kommerzielle Zwecke.
              Die Vervielfältigung, Verbreitung oder sonstige Verwertung der
              Inhalte ist ohne ausdrückliche Genehmigung nicht gestattet.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              6. Haftungsbeschränkung
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Wir haften nur für Vorsatz und grobe Fahrlässigkeit. Die Haftung
              für leichte Fahrlässigkeit ist ausgeschlossen, soweit keine
              wesentlichen Vertragspflichten verletzt werden. Die Haftung ist in
              jedem Fall auf den vorhersehbaren, vertragstypischen Schaden
              begrenzt.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              7. Änderungen der AGB
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Wir behalten uns vor, diese AGB jederzeit zu ändern. Über
              wesentliche Änderungen werden wir Sie per E-Mail oder in der App
              informieren. Die fortgesetzte Nutzung nach einer Änderung gilt als
              Zustimmung.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              8. Anwendbares Recht
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Es gilt deutsches Recht. Gerichtsstand ist, soweit gesetzlich
              zulässig, der Sitz des Anbieters.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              9. Kontakt
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Bei Fragen zu diesen AGB erreichen Sie uns unter:
              <br />
              <br />
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="text-primary hover:underline"
              >
                {siteConfig.supportEmail}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
