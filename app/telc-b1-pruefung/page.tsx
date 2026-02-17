import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Quiz } from "@/components/blog/quiz";
import { StickyAppBanner } from "@/components/ui/sticky-app-banner";
import { siteConfig } from "@/lib/config";
import type { QuizQuestion } from "@/lib/blog";

export const metadata: Metadata = {
  title: "TELC B1 Prüfung 2025: Aufbau, Tipps & kostenlose Übungen",
  description:
    "Alles zur TELC B1 Prüfung: Prüfungsaufbau, Bewertung, häufige Fehler und kostenlose Übungsaufgaben. Mit KI-Feedback in der LevelKraft App optimal vorbereiten.",
  alternates: { canonical: "https://levelkraft.de/telc-b1-pruefung" },
  openGraph: {
    title: "TELC B1 Prüfung 2025 | LevelKraft",
    description: "Prüfungsaufbau, Tipps und kostenloser Schnelltest für TELC B1.",
    url: "https://levelkraft.de/telc-b1-pruefung",
  },
};

const faqs = [
  { q: "Wie lange dauert die TELC B1 Prüfung?", a: "Die schriftliche Prüfung dauert ca. 2 Stunden 5 Minuten (Lesen ~65 Min, Hören ~25 Min, Schreiben ~30 Min). Der mündliche Teil findet separat statt und dauert 15–20 Minuten." },
  { q: "Wie viele Punkte brauche ich zum Bestehen?", a: "Mindestens 60 % der Gesamtpunktzahl. Schriftlicher und mündlicher Teil werden getrennt bewertet — beide müssen bestanden werden." },
  { q: "Was kostet die TELC B1 Prüfung?", a: "Je nach Prüfungszentrum zwischen 80 € und 180 €. Volkshochschulen bieten oft günstigere Konditionen." },
  { q: "Kann ich die Prüfung wiederholen?", a: "Ja, beliebig oft. Es gibt keine Pflichtwartezeit, aber jede Wiederholung kostet erneut Prüfungsgebühren." },
  { q: "Wie bereite ich mich am besten vor?", a: "Regelmäßiges Üben mit realistischen Modelltests ist am effektivsten. LevelKraft bietet TELC-ähnliche Prüfungssimulationen mit KI-Feedback — kostenlos." },
];

const quizQuestions: QuizQuestion[] = [
  { id: "b1p1", question: "Wähle die richtige Präposition: Sie interessiert sich ___ klassische Musik.", choices: [{ id: "A", text: "für" }, { id: "B", text: "an" }, { id: "C", text: "auf" }, { id: "D", text: "mit" }], correctId: "A", explanation: "'Sich interessieren für' ist die feste Verbindung auf Deutsch." },
  { id: "b1p2", question: "Welches Wort passt? Der Arzt ___ mir empfohlen, mehr Sport zu treiben.", choices: [{ id: "A", text: "hatte" }, { id: "B", text: "hat" }, { id: "C", text: "ist" }, { id: "D", text: "wäre" }], correctId: "B", explanation: "Perfekt mit 'haben': 'hat empfohlen'." },
  { id: "b1p3", question: "Ergänze: Wenn ich Zeit hätte, ___ ich mehr reisen.", choices: [{ id: "A", text: "würde" }, { id: "B", text: "werde" }, { id: "C", text: "will" }, { id: "D", text: "kann" }], correctId: "A", explanation: "Konjunktiv II: 'hätte → würde' im Bedingungssatz." },
  { id: "b1p4", question: "Was bedeutet 'die Bewerbung einreichen'?", choices: [{ id: "A", text: "Eine Bewerbung schreiben" }, { id: "B", text: "Eine Bewerbung abgeben/senden" }, { id: "C", text: "Eine Bewerbung ablehnen" }, { id: "D", text: "Eine Bewerbung lesen" }], correctId: "B", explanation: "'Einreichen' bedeutet formell abgeben oder senden." },
  { id: "b1p5", question: "Wähle die richtige Form: Er bat mich, ___ ihm zu helfen.", choices: [{ id: "A", text: "dass" }, { id: "B", text: "ob" }, { id: "C", text: "weil" }, { id: "D", text: "(kein Konnektor)" }], correctId: "D", explanation: "Nach 'bitten + Infinitiv' steht kein Konnektor: 'bat mich, ihm zu helfen'." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function TelcB1Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="pb-24">
        {/* Hero */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4">
            <Badge className="mb-5">Niveau B1</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-secondary-foreground md:text-5xl">
              TELC B1 Prüfung: Aufbau, Tipps & Vorbereitung 2025
            </h1>
            <p className="mt-5 text-lg text-secondary-foreground/70">
              Alles, was du für die TELC B1 Prüfung wissen musst: Prüfungsaufbau, Bewertungskriterien und die
              effektivsten Lernstrategien — plus ein kostenloser Schnelltest.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href={siteConfig.links.playStore} target="_blank" rel="noopener noreferrer">
                  Kostenlos üben in der App
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/blog">Blog lesen</Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl space-y-14 px-4 pt-14">
          {/* Prüfungsaufbau */}
          <section>
            <h2 className="mb-5 text-2xl font-bold">Aufbau der TELC B1 Prüfung</h2>
            <p className="mb-5 text-muted-foreground">
              Die TELC B1 Prüfung besteht aus einem schriftlichen und einem mündlichen Teil — beide werden getrennt
              bewertet und müssen unabhängig voneinander bestanden werden.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Leseverstehen", time: "~65 Min", desc: "Drei Aufgaben: Global-, Detail- und Selektivverstehen. Dazu Sprachbausteine im Lückentextformat." },
                { title: "Hörverstehen", time: "~25 Min", desc: "Zwei bis drei Höraufgaben mit Alltagsdialogen und Radiobeiträgen." },
                { title: "Schreiben", time: "~30 Min", desc: "Eine zusammenhängende Aufgabe: Brief, E-Mail oder Forumsbeitrag (~150 Wörter)." },
                { title: "Sprechen", time: "~15 Min", desc: "Drei Teile: vorstellen, gemeinsam planen, Thema besprechen (mit Partner)." },
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

          {/* Tipps */}
          <section>
            <h2 className="mb-5 text-2xl font-bold">Die 5 wichtigsten Tipps für TELC B1</h2>
            <div className="space-y-4">
              {[
                { n: "01", title: "Modelltests unter Prüfungsbedingungen üben", text: "Übe regelmäßig unter echten Zeitbedingungen. Wer die Prüfung nur liest, aber nie unter Zeitdruck übt, wird am Prüfungstag überrascht." },
                { n: "02", title: "Schreiben mit Feedback verbessern", text: "Der häufigste Fehler: Schreiben ohne Korrektur. KI-Feedback-Tools zeigen Fehler sofort — nicht erst Wochen später." },
                { n: "03", title: "Hörverstehen täglich trainieren", text: "15 Minuten täglich reichen. Deutsche Podcasts, Nachrichten oder LevelKraft-Höraufgaben trainieren das Ohr effektiv." },
                { n: "04", title: "Feste Redewendungen einprägen", text: "Im Sprechteil helfen Phrasen wie 'Ich finde es wichtig, dass...', 'Meiner Meinung nach...', 'Das hat den Vorteil, dass...'." },
                { n: "05", title: "Schwächen gezielt angehen", text: "Analysiere nach jedem Test, welcher Bereich am schwächsten ist. Investiere dort mehr Zeit — nicht in die Stärken." },
              ].map((tip) => (
                <div key={tip.n} className="flex gap-5 rounded-xl border border-border/60 p-5">
                  <span className="w-10 flex-shrink-0 text-2xl font-black text-muted-foreground/30">{tip.n}</span>
                  <div>
                    <p className="font-semibold">{tip.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{tip.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mini Test */}
          <section>
            <h2 className="mb-2 text-2xl font-bold">Teste dein B1-Niveau jetzt</h2>
            <p className="mb-5 text-muted-foreground">5 Fragen · Sofortige Auswertung · Keine Anmeldung nötig</p>
            <Quiz
              title="TELC B1 — Grammatik & Wortschatz Schnelltest"
              intro="Beantworte alle 5 Fragen, dann klicke auf 'Antworten prüfen'."
              questions={quizQuestions}
            />
          </section>

          {/* FAQ */}
          <section>
            <h2 className="mb-6 text-2xl font-bold">Häufige Fragen zur TELC B1 Prüfung</h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details key={faq.q} className="group rounded-xl border border-border/60 overflow-hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-medium hover:bg-muted/40">
                    {faq.q}
                    <span className="ml-3 flex-shrink-0 text-muted-foreground transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <p className="px-5 pb-4 text-sm text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="rounded-3xl bg-secondary px-8 py-12 text-center">
            <h2 className="text-2xl font-bold text-secondary-foreground">Mit LevelKraft für TELC B1 üben</h2>
            <p className="mx-auto mt-3 max-w-md text-secondary-foreground/70">
              Vollständige TELC-ähnliche Modelltests, KI-Feedback für Schreiben & Sprechen — kostenlos.
            </p>
            <Button size="lg" className="mt-6" asChild>
              <a href={siteConfig.links.playStore} target="_blank" rel="noopener noreferrer">
                App kostenlos laden
              </a>
            </Button>
          </section>
        </div>
      </div>

      <StickyAppBanner />
    </>
  );
}
