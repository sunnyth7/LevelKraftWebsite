import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Quiz } from "@/components/blog/quiz";
import { StickyAppBanner } from "@/components/ui/sticky-app-banner";
import { siteConfig } from "@/lib/config";
import type { QuizQuestion } from "@/lib/blog";

export const metadata: Metadata = {
  title: "TELC A2 Prüfung 2025: Aufbau, Vorbereitung & Übungen",
  description: "TELC A2 Prüfung: Prüfungsaufbau, typische Aufgaben und gezielte Übungen. Ideal für Menschen, die Deutsch für Alltag, Arbeit oder Visum benötigen.",
  alternates: { canonical: "https://levelkraft.de/telc-a2-pruefung" },
};

const faqs = [
  { q: "Wofür wird das TELC A2 Zertifikat benötigt?", a: "TELC A2 wird häufig für Integrationskurse, bestimmte Visumverfahren und als Nachweis für einfache berufliche Tätigkeiten benötigt. Es ist auch ein sinnvoller Meilenstein auf dem Weg zu B1." },
  { q: "Was ist der Unterschied zwischen TELC A2 und A2 Schule?", a: "TELC A2 Schule ist für Kinder und Jugendliche (6–16 Jahre) konzipiert und verwendet schulrelevante Themen. Das allgemeine TELC A2 richtet sich an Erwachsene." },
  { q: "Wie lange dauert die TELC A2 Prüfung?", a: "Die schriftliche Prüfung dauert ca. 90 Minuten, der mündliche Teil etwa 15 Minuten." },
  { q: "Was sind die häufigsten Fehler in der TELC A2 Prüfung?", a: "Kasusendungen verwechseln (Nominativ/Akkusativ), Zeitformen von 'sein'/'haben' vergessen, und in der Schreibaufgabe zu wenig schreiben (min. 40 Wörter erforderlich)." },
  { q: "Kann ich direkt von A1 zu A2 wechseln?", a: "Ja. Viele Lernende beginnen direkt mit A2-Vorbereitung, wenn sie bereits Grundkenntnisse haben. Mit intensivem Lernen ist A2 nach 2–3 Monaten erreichbar." },
];

const quizQuestions: QuizQuestion[] = [
  { id: "a2p1", question: "Ergänze: Gestern ___ ich ins Kino gegangen.", choices: [{ id: "A", text: "habe" }, { id: "B", text: "bin" }, { id: "C", text: "war" }, { id: "D", text: "hatte" }], correctId: "B", explanation: "Verben der Bewegung bilden Perfekt mit 'sein': bin gegangen." },
  { id: "a2p2", question: "Wähle die richtige Form: Er kauft ___ neuen Mantel.", choices: [{ id: "A", text: "einen" }, { id: "B", text: "ein" }, { id: "C", text: "eine" }, { id: "D", text: "einem" }], correctId: "A", explanation: "Maskulin im Akkusativ: 'einen' Mantel." },
  { id: "a2p3", question: "Was bedeutet 'der Umzug'?", choices: [{ id: "A", text: "Eine Reise" }, { id: "B", text: "Das Wechseln der Wohnung" }, { id: "C", text: "Eine Party" }, { id: "D", text: "Ein Umweg" }], correctId: "B", explanation: "'Der Umzug' bezeichnet das Wechseln des Wohnorts." },
  { id: "a2p4", question: "Wie lautet die Vergangenheit? 'Ich ___ gestern sehr müde.' (sein)", choices: [{ id: "A", text: "habe gewesen" }, { id: "B", text: "bin gewesen" }, { id: "C", text: "war" }, { id: "D", text: "wurde" }], correctId: "C", explanation: "'War' ist das Präteritum von 'sein' — im Alltag bevorzugt." },
  { id: "a2p5", question: "'Haben Sie morgen Zeit?' — '___, leider nicht.'", choices: [{ id: "A", text: "Nein" }, { id: "B", text: "Doch" }, { id: "C", text: "Ja" }, { id: "D", text: "Doch nicht" }], correctId: "A", explanation: "Auf normale Fragen antwortet man mit 'Nein'. 'Doch' ist nur nach Verneinungsfragen." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function TelcA2Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="pb-24">
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4">
            <Badge className="mb-5">Niveau A2 · Grundstufe</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-secondary-foreground md:text-5xl">
              TELC A2 Prüfung: Vom Anfänger zur Grundstufe
            </h1>
            <p className="mt-5 text-lg text-secondary-foreground/70">
              Mit A2 kannst du dich in vertrauten Alltagssituationen auf Deutsch verständigen. Hier findest du den genauen Prüfungsaufbau und effektive Lerntipps.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild><a href={siteConfig.links.playStore} target="_blank" rel="noopener noreferrer">A2 kostenlos üben</a></Button>
              <Button size="lg" variant="outline" asChild><Link href="/blog">Blog lesen</Link></Button>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl space-y-14 px-4 pt-14">
          <section>
            <h2 className="mb-5 text-2xl font-bold">Aufbau der TELC A2 Prüfung</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Leseverstehen", time: "~30 Min", desc: "Anzeigen, kurze Briefe, Schilder, Informationstexte. Sprachbausteine im Lückentextformat." },
                { title: "Hörverstehen", time: "~20 Min", desc: "Kurze Gespräche, Ansagen, Radiodurchsagen. Zahlen, Orte, Zeiten heraushören." },
                { title: "Schreiben", time: "~25 Min", desc: "Formular ausfüllen + kurze persönliche Mitteilung (min. 40 Wörter)." },
                { title: "Sprechen", time: "~15 Min", desc: "Kontaktgespräch, Informationen erfragen, Bild beschreiben." },
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
            <h2 className="mb-5 text-2xl font-bold">Die 4 häufigsten Fehler in der TELC A2 Prüfung</h2>
            <div className="space-y-4">
              {[
                { fehler: "Kasus-Fehler (Nominativ vs. Akkusativ)", tipp: "Lerne Artikel und Kasus gemeinsam: 'der Mann → den Mann'. Übe mit einfachen Beispielsätzen." },
                { fehler: "Perfekt statt Präteritum", tipp: "Im Alltag nutzen Deutsche meist Perfekt. Ausnahme: 'war', 'hatte', 'wollte' werden oft im Präteritum verwendet." },
                { fehler: "Zu kurze Schreibaufgaben", tipp: "Mindestens 40 Wörter sind Pflicht. Schreibe immer Einleitungssatz, 2–3 Infosätze und Schlusssatz." },
                { fehler: "Sprechen ohne Vorbereitung", tipp: "Übe 5 Standardsätze: vorstellen, nach dem Weg fragen, Preise erfragen, Termine vereinbaren, Meinung äußern." },
              ].map((item) => (
                <div key={item.fehler} className="rounded-xl border border-border/60 p-5">
                  <p className="font-semibold text-sm">✗ {item.fehler}</p>
                  <p className="mt-1 text-sm text-muted-foreground"><span className="text-primary font-medium">✓ Tipp: </span>{item.tipp}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-bold">Teste dein A2-Niveau jetzt</h2>
            <p className="mb-5 text-muted-foreground">5 Fragen · Sofortige Auswertung · Keine Anmeldung nötig</p>
            <Quiz title="TELC A2 — Grammatik & Alltag Schnelltest" intro="Beantworte alle 5 Fragen, dann klicke auf 'Antworten prüfen'." questions={quizQuestions} />
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold">Häufige Fragen zur TELC A2 Prüfung</h2>
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
            <h2 className="text-2xl font-bold text-secondary-foreground">Starte jetzt mit LevelKraft für TELC A2</h2>
            <p className="mx-auto mt-3 max-w-md text-secondary-foreground/70">Übungsaufgaben für alle A2-Prüfungsteile, Vokabeltrainer und direktes Feedback — kostenlos.</p>
            <Button size="lg" className="mt-6" asChild><a href={siteConfig.links.playStore} target="_blank" rel="noopener noreferrer">App kostenlos laden</a></Button>
          </section>
        </div>
      </div>
      <StickyAppBanner />
    </>
  );
}
