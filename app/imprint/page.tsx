import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Informationen für LevelKraft.",
};

export default function ImprintPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Impressum
        </h1>

        <div className="prose prose-neutral mt-12 max-w-none">
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="mt-4 rounded-xl border border-border bg-muted/50 p-6">
              <p className="text-muted-foreground">
                <strong className="text-foreground">[Firmenname]</strong>
                <br />
                [Straße und Hausnummer]
                <br />
                [PLZ] [Stadt]
                <br />
                Deutschland
              </p>
              <p className="mt-4 text-sm text-muted-foreground/70">
                * Diese Angaben werden noch ergänzt.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              Kontakt
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              E-Mail:{" "}
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="text-primary hover:underline"
              >
                {siteConfig.supportEmail}
              </a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              Registereintrag
            </h2>
            <div className="mt-4 rounded-xl border border-border bg-muted/50 p-6">
              <p className="text-muted-foreground">
                Registergericht: [Amtsgericht]
                <br />
                Registernummer: [HRB XXXXX]
              </p>
              <p className="mt-4 text-sm text-muted-foreground/70">
                * Diese Angaben werden noch ergänzt.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              Umsatzsteuer-ID
            </h2>
            <div className="mt-4 rounded-xl border border-border bg-muted/50 p-6">
              <p className="text-muted-foreground">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
                <br />
                DE [XXXXXXXXX]
              </p>
              <p className="mt-4 text-sm text-muted-foreground/70">
                * Diese Angabe wird noch ergänzt.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <div className="mt-4 rounded-xl border border-border bg-muted/50 p-6">
              <p className="text-muted-foreground">
                [Name des Verantwortlichen]
                <br />
                [Adresse]
              </p>
              <p className="mt-4 text-sm text-muted-foreground/70">
                * Diese Angaben werden noch ergänzt.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              EU-Streitschlichtung
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              <br />
              <br />
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              Haftung für Inhalte
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              Haftung für Links
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
