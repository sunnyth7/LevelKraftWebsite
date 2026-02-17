import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Quiz } from "@/components/blog/quiz";
import { StickyAppBanner } from "@/components/ui/sticky-app-banner";
import { siteConfig } from "@/lib/config";
import type { QuizQuestion } from "@/lib/blog";

export const metadata: Metadata = {
  title: "TELC B2 Prüfung 2025: Vorbereitung, Aufbau & Tipps",
  description: "TELC B2 Prüfung meistern: Aufbau, Bewertungsmaßstäbe, typische Aufgaben und effektivste Lernstrategien. Kostenlos üben mit der LevelKraft App.",
  alternates: { canonical: "https://levelkraft.de/telc-b2-pruefung" },
};

const faqs = [
  { q: "Was ist der Unterschied zwischen TELC B2 und B2 Beruf?", a: "TELC B2 Beruf fokussiert berufliche Kommunikation (Bewerbungen, Arbeitskommunikation, Fachvokabular). Das allgemeine B2 deckt alltagsrelevante und formelle Kommunikation ab." },
  { q: "Wie schwer ist die TELC B2 Prüfung?", a: "B2 ist die Schwelle zur fortgeschrittenen Sprachkompetenz. Schreibaufgaben und Leseverstehen erfordern Umgang mit komplexen Texten und argumentatives Schreiben. Mit gezielter Vorbereitung ist B2 gut erreichbar." },
  { q: "Wird TELC B2 für die Einbürgerung anerkannt?", a: "Für die Einbürgerung ist B1 ausreichend. TELC B2 wird für bestimmte Berufe (Pflege, Ärzte, Lehrer) und für den Hochschulzugang benötigt." },
  { q: "Wie lange gilt ein TELC B2 Zertifikat?", a: "TELC-Zertifikate haben keine offizielle Ablaufdauer. Viele Institutionen akzeptieren Zertifikate, die nicht älter als 2–5 Jahre sind." },
  { q: "Sind Wörterbücher erlaubt?", a: "In der Regel nein. Weder Wörterbücher noch Smartphones. Überprüfe die genauen Regeln beim jeweiligen Prüfungszentrum." },
];

const quizQuestions: QuizQuestion[] = [
  { id: "b2p1", question: "Ergänze: Obwohl er sehr müde war, ___ er bis Mitternacht weiterarbeiten.", choices: [{ id: "A", text: "musste" }, { id: "B", text: "sollte" }, { id: "C", text: "hätte" }, { id: "D", text: "durfte" }], correctId: "A", explanation: "Modalverb 'müssen' im Präteritum drückt Notwendigkeit aus." },
  { id: "b2p2", question: "Welches Wort passt? Die Maßnahme wurde aufgrund fehlender Mittel ___.", choices: [{ id: "A", text: "verlängert" }, { id: "B", text: "verschoben" }, { id: "C", text: "erweitert" }, { id: "D", text: "eingeleitet" }], correctId: "B", explanation: "'Verschieben' bedeutet zeitlich nach hinten verlegen." },
  { id: "b2p3", question: "Welcher Satz ist grammatisch korrekt?", choices: [{ id: "A", text: "Er bestand darauf, dass das Projekt pünktlich abgeschlossen wird." }, { id: "B", text: "Er bestand darauf, dass das Projekt pünktlich abgeschlossen werden." }, { id: "C", text: "Er bestand darauf, das Projekt pünktlich abzuschließen." }, { id: "D", text: "Er bestand darauf, das Projekt pünktlich abgeschlossen wird." }], correctId: "A", explanation: "Nach 'darauf bestehen, dass' folgt ein vollständiger Nebensatz mit korrektem Verb." },
  { id: "b2p4", question: "Was bedeutet 'eine Entscheidung treffen'?", choices: [{ id: "A", text: "Eine Entscheidung ablehnen" }, { id: "B", text: "Eine Entscheidung ankündigen" }, { id: "C", text: "Eine Entscheidung fällen / beschließen" }, { id: "D", text: "Über eine Entscheidung diskutieren" }], correctId: "C", explanation: "'Eine Entscheidung treffen' ist eine feste Wendung für 'entscheiden'." },
  { id: "b2p5", question: "Wähle die korrekte Passivform: Das Formular ___ bis Freitag ausgefüllt werden.", choices: [{ id: "A", text: "muss" }, { id: "B", text: "soll ausfüllen" }, { id: "C", text: "kann ausfüllend" }, { id: "D", text: "darf" }], correctId: "A", explanation: "Modales Passiv: muss + Partizip II + werden." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function TelcB2Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="pb-24">
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4">
            <Badge className="mb-5">Niveau B2</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-secondary-foreground md:text-5xl">
              TELC B2 Prüfung: Vorbereitung & Tipps 2025
            </h1>
            <p className="mt-5 text-lg text-secondary-foreground/70">
              Die TELC B2 Prüfung öffnet Türen zu Studium, Berufsanerkennung und bestimmten Visa. Alles zum Aufbau, zur Bewertung und zur effektiven Vorbereitung.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild><a href={siteConfig.links.playStore} target="_blank" rel="noopener noreferrer">Kostenlos üben in der App</a></Button>
              <Button size="lg" variant="outline" asChild><Link href="/blog">Blog lesen</Link></Button>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl space-y-14 px-4 pt-14">
          <section>
            <h2 className="mb-5 text-2xl font-bold">Aufbau der TELC B2 Prüfung</h2>
            <p className="mb-5 text-muted-foreground">Der schriftliche Teil dauert ca. 3 Stunden, der mündliche Teil etwa 20–25 Minuten. Beide müssen separat bestanden werden.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Leseverstehen", time: "~80 Min", desc: "Vier Aufgaben mit verschiedenen Texttypen: Artikel, Berichte, Anzeigen. Sprachbausteine inklusive." },
                { title: "Hörverstehen", time: "~30 Min", desc: "Radiobeiträge, Gespräche, Nachrichten. Detail- und Globalverstehen." },
                { title: "Schreiben", time: "~45 Min", desc: "Argumentativer Text (~200 Wörter): Stellungnahme, Brief oder Bericht zu einem gesellschaftlichen Thema." },
                { title: "Sprechen", time: "~20 Min", desc: "Präsentation eines Themas + Diskussion. Sprachliche Komplexität und Argumentation werden bewertet." },
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
            <h2 className="mb-5 text-2xl font-bold">Was macht TELC B2 anspruchsvoller als B1?</h2>
            <div className="space-y-3">
              {["Schreibaufgaben erfordern strukturierte Argumentation, nicht nur Beschreibung", "Hörtexte enthalten Fachsprache, Ironie und implizite Aussagen", "Lesetexte sind länger und inhaltlich komplexer (Wirtschaft, Gesellschaft, Wissenschaft)", "Im Sprechteil wird aktives Argumentieren und Diskutieren erwartet", "Grammatikalische Korrektheit wird stärker gewichtet als auf B1"].map((p) => (
                <div key={p} className="flex gap-3 rounded-xl border border-border/60 px-5 py-3">
                  <span className="mt-0.5 flex-shrink-0 text-primary">✓</span>
                  <p className="text-sm text-muted-foreground">{p}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-bold">Teste dein B2-Niveau jetzt</h2>
            <p className="mb-5 text-muted-foreground">5 Fragen · Sofortige Auswertung · Keine Anmeldung nötig</p>
            <Quiz title="TELC B2 — Grammatik & Wortschatz Schnelltest" intro="Beantworte alle 5 Fragen, dann klicke auf 'Antworten prüfen'." questions={quizQuestions} />
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold">Häufige Fragen zur TELC B2 Prüfung</h2>
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
            <h2 className="text-2xl font-bold text-secondary-foreground">Mit LevelKraft für TELC B2 üben</h2>
            <p className="mx-auto mt-3 max-w-md text-secondary-foreground/70">Vollständige B2-Modelltests, argumentatives Schreiben mit KI-Feedback — kostenlos.</p>
            <Button size="lg" className="mt-6" asChild><a href={siteConfig.links.playStore} target="_blank" rel="noopener noreferrer">App kostenlos laden</a></Button>
          </section>
        </div>
      </div>
      <StickyAppBanner />
    </>
  );
}
