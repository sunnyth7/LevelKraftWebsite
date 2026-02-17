import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Quiz } from "@/components/blog/quiz";
import { StickyAppBanner } from "@/components/ui/sticky-app-banner";
import { siteConfig } from "@/lib/config";
import type { QuizQuestion } from "@/lib/blog";

export const metadata: Metadata = {
  title: "TELC A1 Prüfung 2025: Alles für Anfänger erklärt",
  description: "TELC A1 Prüfung: Was wird geprüft? Wie bereite ich mich vor? Prüfungsablauf, Kosten, Tipps und ein kostenloser Schnelltest für absolute Anfänger.",
  alternates: { canonical: "https://levelkraft.de/telc-a1-pruefung" },
};

const faqs = [
  { q: "Für wen ist die TELC A1 Prüfung?", a: "TELC A1 richtet sich an absolute Deutschanfänger und wird häufig für den Familiennachzug (Visum) benötigt. Das Niveau entspricht grundlegenden Kommunikationsfähigkeiten: sich vorstellen, einfache Fragen stellen und beantworten." },
  { q: "Wie lange dauert die TELC A1 Prüfung?", a: "Die schriftliche Prüfung dauert ca. 70 Minuten, der mündliche Teil etwa 15 Minuten. A1 ist die kürzeste TELC-Prüfung." },
  { q: "Was kostet die TELC A1 Prüfung?", a: "Je nach Prüfungszentrum zwischen 60 € und 130 €. Im Ausland können die Preise abweichen." },
  { q: "Wie viele Wörter muss ich für A1 kennen?", a: "Etwa 500–800 Grundvokabeln. Fokus auf Alltag: Familie, Wohnen, Einkaufen, Zahlen, Datum, Uhrzeit." },
  { q: "Kann ich ohne Kurs die TELC A1 Prüfung ablegen?", a: "Ja. Mit einer strukturierten Lern-App und regelmäßigem Üben ist A1 im Selbststudium gut erreichbar. LevelKraft bietet A1-Übungen mit geführten Lernpfaden." },
];

const quizQuestions: QuizQuestion[] = [
  { id: "a1p1", question: "Wie heißt du? — ___ heiße Maria.", choices: [{ id: "A", text: "Ich" }, { id: "B", text: "Er" }, { id: "C", text: "Sie" }, { id: "D", text: "Du" }], correctId: "A", explanation: "Erste Person Singular: 'Ich heiße...'" },
  { id: "a1p2", question: "Woher kommst du? — Ich komme ___ Deutschland.", choices: [{ id: "A", text: "in" }, { id: "B", text: "nach" }, { id: "C", text: "aus" }, { id: "D", text: "von" }], correctId: "C", explanation: "'Aus' gibt die Herkunft an: 'aus Deutschland'." },
  { id: "a1p3", question: "Was ist das? — ___ ist ein Buch.", choices: [{ id: "A", text: "Er" }, { id: "B", text: "Das" }, { id: "C", text: "Die" }, { id: "D", text: "Den" }], correctId: "B", explanation: "Neutrum-Artikel 'das' → 'Das ist ein Buch.'" },
  { id: "a1p4", question: "'fünfzehn' = ___", choices: [{ id: "A", text: "50" }, { id: "B", text: "5" }, { id: "C", text: "15" }, { id: "D", text: "55" }], correctId: "C", explanation: "'Fünfzehn' = 15 (fünf + zehn)." },
  { id: "a1p5", question: "Wie viel Uhr ist es? Es ist ___ Uhr.", choices: [{ id: "A", text: "dreizehn" }, { id: "B", text: "dritt" }, { id: "C", text: "dritte" }, { id: "D", text: "drei" }], correctId: "D", explanation: "Bei Uhrzeiten: 'Es ist drei Uhr' (Grundzahl, keine Ordinalzahl)." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function TelcA1Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="pb-24">
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4">
            <Badge className="mb-5">Niveau A1 · Einstieg</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-secondary-foreground md:text-5xl">
              TELC A1 Prüfung: Der perfekte Einstieg ins Deutsche
            </h1>
            <p className="mt-5 text-lg text-secondary-foreground/70">
              Die TELC A1 Prüfung ist der erste offizielle Schritt auf deinem Weg zur deutschen Sprache. Ob für Visa, Familiennachzug oder persönliches Ziel — hier findest du alles, was du wissen musst.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild><a href={siteConfig.links.playStore} target="_blank" rel="noopener noreferrer">A1 kostenlos üben</a></Button>
              <Button size="lg" variant="outline" asChild><Link href="/blog">Blog lesen</Link></Button>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl space-y-14 px-4 pt-14">
          <section>
            <h2 className="mb-5 text-2xl font-bold">Was wird in der TELC A1 Prüfung geprüft?</h2>
            <p className="mb-5 text-muted-foreground">A1 prüft grundlegende Sprachkenntnisse für den Alltag. Die Aufgaben sind klar strukturiert und für Anfänger ohne Vorkenntnisse zugänglich.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Lesen & Sprachbausteine", time: "~25 Min", desc: "Einfache Texte verstehen: Schilder, kurze Mitteilungen, Formulare." },
                { title: "Hören", time: "~20 Min", desc: "Kurze Dialoge und Ankündigungen: Zahlen, Namen, einfache Informationen." },
                { title: "Schreiben", time: "~20 Min", desc: "Einfache Formulare ausfüllen, kurze persönliche Mitteilungen (~30 Wörter)." },
                { title: "Sprechen", time: "~15 Min", desc: "Sich vorstellen, einfache Fragen stellen und beantworten, Informationen erfragen." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border/60 p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-semibold">{item.title}</span>
                    <Badge variant="secondary">{item.time}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-5 text-2xl font-bold">4-Wochen-Lernplan für TELC A1</h2>
            <div className="space-y-3">
              {[
                { week: "Woche 1", focus: "Grundvokabeln & Aussprache", tasks: "Begrüßungen, Zahlen 1–100, Tage, Monate, Farben, Familie. Täglich 30 Min Vokabeln + 15 Min Aussprache laut üben." },
                { week: "Woche 2", focus: "Grammatikgrundlagen", tasks: "Artikel (der/die/das), Konjugation von 'sein' und 'haben', einfache Sätze bauen." },
                { week: "Woche 3", focus: "Hören & Lesen üben", tasks: "Täglich 1 Höraufgabe + 1 Lesetext. Zeitdruck gewöhnen. Unbekannte Wörter notieren." },
                { week: "Woche 4", focus: "Komplette Modelltests", tasks: "2 vollständige A1-Modelltests unter echten Bedingungen. Fehler analysieren, Sprechteil laut üben." },
              ].map((item) => (
                <div key={item.week} className="flex gap-4 rounded-xl border border-border/60 p-5">
                  <Badge variant="secondary" className="h-fit flex-shrink-0 whitespace-nowrap">{item.week}</Badge>
                  <div>
                    <p className="font-semibold text-sm">{item.focus}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.tasks}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-bold">Teste dein A1-Niveau jetzt</h2>
            <p className="mb-5 text-muted-foreground">5 Fragen · Sofortige Auswertung · Keine Anmeldung nötig</p>
            <Quiz title="TELC A1 — Grundlagen Schnelltest" intro="Beantworte alle 5 Fragen, dann klicke auf 'Antworten prüfen'." questions={quizQuestions} />
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold">Häufige Fragen zur TELC A1 Prüfung</h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details key={faq.q} className="group rounded-xl border border-border/60 overflow-hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-medium hover:bg-muted/40">{faq.q}<span className="ml-3 flex-shrink-0 text-muted-foreground transition-transform group-open:rotate-180">↓</span></summary>
                  <p className="px-5 pb-4 text-sm text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-secondary px-8 py-12 text-center">
            <h2 className="text-2xl font-bold text-secondary-foreground">Starte jetzt mit LevelKraft für TELC A1</h2>
            <p className="mx-auto mt-3 max-w-md text-secondary-foreground/70">Geführte A1-Lernpfade, Vokabeltraining, Hörübungen und Modelltests — kostenlos.</p>
            <Button size="lg" className="mt-6" asChild><a href={siteConfig.links.playStore} target="_blank" rel="noopener noreferrer">App kostenlos laden</a></Button>
          </section>
        </div>
      </div>
      <StickyAppBanner />
    </>
  );
}
