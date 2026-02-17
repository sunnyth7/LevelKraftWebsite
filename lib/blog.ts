export type QuizChoice = { id: "A" | "B" | "C" | "D"; text: string };

export type QuizQuestion = {
  id: string;
  question: string;
  choices: QuizChoice[];
  correctId: "A" | "B" | "C" | "D";
  explanation: string;
};

export type BlogPost = {
  slug: string;
  level: "A1" | "A2" | "B1" | "B2" | "GENERAL";
  title: string;
  description: string;
  publishedAt: string; // YYYY-MM-DD
  readingMinutes: number;
  keywords: string[];
  content: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "callout"; title: string; text: string }
  >;
  quiz?: {
    title: string;
    intro: string;
    questions: QuizQuestion[];
  };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "telc-a1-pruefung-tipps-mini-test",
    level: "A1",
    title: "TELC Deutsch A1: Ablauf, Tipps & Mini-Test (kostenlos)",
    description:
      "Kurz erklärt: Wie läuft TELC A1 ab, worauf kommt es an – und ein Mini-Test am Ende, damit du deinen Stand checken kannst.",
    publishedAt: "2026-02-17",
    readingMinutes: 6,
    keywords: ["telc a1", "telc deutsch a1", "telc a1 prüfung", "a1 modelltest"],
    content: [
      { type: "p", text: "TELC A1 ist dein Einstieg. Wichtig ist nicht Perfektion – sondern Routine: kurze Sätze, klare Standard-Formulierungen, typische Aufgabenformate." },
      { type: "h2", text: "Wie ist TELC A1 aufgebaut?" },
      { type: "ul", items: [
        "Lesen: einfache Schilder/Anzeigen, kurze Texte",
        "Hören: kurze Dialoge, Ansagen, Alltagssituationen",
        "Schreiben: sehr kurze Mitteilungen",
        "Sprechen: einfache Fragen/Antworten, Vorstellen"
      ]},
      { type: "h2", text: "3 schnelle Tipps, die sofort helfen" },
      { type: "ul", items: [
        "Lerne feste Satzbausteine (Name, Adresse, Uhrzeit, Preis, Termin).",
        "Trainiere Zahlen & Datum täglich (Tickets, Uhrzeiten, Preise).",
        "Beim Hören: zuerst die Frage lesen, dann gezielt „scannen“."
      ]},
      { type: "callout", title: "Merke", text: "A1 besteht man über Sicherheit in Standards – nicht über seltene Wörter." },
    ],
    quiz: {
      title: "Mini-Test A1 (5 Fragen)",
      intro: "Wähle pro Frage A–D. Am Ende siehst du Score + Erklärungen.",
      questions: [
        {
          id: "A1Q1",
          question: "Was ist für TELC A1 am wichtigsten?",
          choices: [
            { id: "A", text: "Sehr lange Texte schreiben" },
            { id: "B", text: "Sichere Standardsätze & Alltagssprache" },
            { id: "C", text: "Akademische Wörter lernen" },
            { id: "D", text: "Perfekte Grammatik ohne Fehler" },
          ],
          correctId: "B",
          explanation: "A1 prüft Basics in Alltagssituationen. Standardsätze bringen die meisten Punkte."
        },
        {
          id: "A1Q2",
          question: "Welche Strategie hilft beim Hörverstehen am meisten?",
          choices: [
            { id: "A", text: "Nicht in die Fragen schauen" },
            { id: "B", text: "Fragen vorher lesen und gezielt zuhören" },
            { id: "C", text: "Alles mitschreiben" },
            { id: "D", text: "Nur auf einzelne Wörter achten" },
          ],
          correctId: "B",
          explanation: "Wenn du die Frage kennst, hörst du auf die relevanten Infos (Zeit/Ort/Preis)."
        },
        {
          id: "A1Q3",
          question: "Welche Inhalte kommen auf A1 typischerweise vor?",
          choices: [
            { id: "A", text: "Wissenschaftliche Vorträge" },
            { id: "B", text: "Alltagsanzeigen, kurze Dialoge" },
            { id: "C", text: "Zeitungs-Kommentare" },
            { id: "D", text: "Literaturanalyse" },
          ],
          correctId: "B",
          explanation: "A1 ist Alltag: Schilder, Anzeigen, kurze Gespräche."
        },
        {
          id: "A1Q4",
          question: "Welche Übung bringt schnell messbare Verbesserung?",
          choices: [
            { id: "A", text: "Nur Grammatikregeln lesen" },
            { id: "B", text: "Zahlen/Datum/Uhrzeit täglich üben" },
            { id: "C", text: "Nur Serien schauen" },
            { id: "D", text: "Nur schreiben, nie sprechen" },
          ],
          correctId: "B",
          explanation: "Diese Inhalte tauchen ständig in Aufgaben auf und sind leicht zu automatisieren."
        },
        {
          id: "A1Q5",
          question: "Was ist das Ziel in A1-Schreiben?",
          choices: [
            { id: "A", text: "Lange Argumentation" },
            { id: "B", text: "Kurze, klare Mitteilung" },
            { id: "C", text: "Viele Nebensätze" },
            { id: "D", text: "Ironie und Humor" },
          ],
          correctId: "B",
          explanation: "A1 verlangt einfache, verständliche Nachrichten (z.B. Termin/Info)."
        },
      ],
    },
  },

  {
    slug: "telc-a2-pruefung-strategie-mini-test",
    level: "A2",
    title: "TELC Deutsch A2: Strategie für Lesen & Hören + Mini-Test",
    description:
      "A2 ist der Schritt in echte Alltagstexte. So trainierst du Lesen/Hören effizient – plus Mini-Test am Ende.",
    publishedAt: "2026-02-17",
    readingMinutes: 7,
    keywords: ["telc a2", "telc deutsch a2", "a2 hörverstehen", "a2 lesen"],
    content: [
      { type: "p", text: "Auf A2 zählt Geschwindigkeit: Infos finden, ohne jedes Wort zu übersetzen. Trainiere wie in der Prüfung – mit Zeitlimit." },
      { type: "h2", text: "Lesen: 80/20-Methode" },
      { type: "ul", items: [
        "Erst Überschrift + erste Zeile",
        "Dann nach Schlüsselwörtern scannen (Datum, Preis, Ort)",
        "Nur bei Unsicherheit kurz genauer lesen"
      ]},
      { type: "h2", text: "Hören: Fokus auf Signale" },
      { type: "ul", items: [
        "Wichtige Signalwörter: aber, deshalb, zuerst, dann, um … Uhr",
        "Zahlen/Daten bewusst trainieren",
        "Nicht an einem Wort hängen bleiben"
      ]},
      { type: "callout", title: "Pro-Tipp", text: "A2 gewinnt, wer schnell „die richtigen Stellen“ findet – nicht wer alles perfekt versteht." },
    ],
    quiz: {
      title: "Mini-Test A2 (5 Fragen)",
      intro: "Check deinen Stand. Danach kannst du gezielt A2-Modelltests in der App machen.",
      questions: [
        {
          id: "A2Q1",
          question: "Was ist beim A2-Lesen die beste erste Aktion?",
          choices: [
            { id: "A", text: "Jedes Wort übersetzen" },
            { id: "B", text: "Überschrift lesen + nach Schlüsselwörtern scannen" },
            { id: "C", text: "Text laut vorlesen" },
            { id: "D", text: "Nur das Ende lesen" },
          ],
          correctId: "B",
          explanation: "So findest du schnell Ort/Preis/Datum – genau das wird oft gefragt."
        },
        {
          id: "A2Q2",
          question: "Welche Wörter sind typische Signalwörter im Hören?",
          choices: [
            { id: "A", text: "obwohl, hingegen" },
            { id: "B", text: "zuerst, dann, um … Uhr" },
            { id: "C", text: "dennoch, mithin" },
            { id: "D", text: "gleichwohl, alldieweil" },
          ],
          correctId: "B",
          explanation: "A2-Aufgaben arbeiten stark mit Reihenfolge und Zeiten."
        },
        {
          id: "A2Q3",
          question: "Was solltest du beim Hören vermeiden?",
          choices: [
            { id: "A", text: "An einem unbekannten Wort hängen bleiben" },
            { id: "B", text: "Fragen vorher lesen" },
            { id: "C", text: "Auf Zahlen achten" },
            { id: "D", text: "Signalwörter erkennen" },
          ],
          correctId: "A",
          explanation: "Ein Wort ist selten entscheidend – du verlierst sonst den Rest."
        },
        {
          id: "A2Q4",
          question: "Was bringt in A2 am schnellsten Punkte?",
          choices: [
            { id: "A", text: "Komplexe Grammatikregeln auswendig" },
            { id: "B", text: "Zeitlimit-Training mit realistischen Aufgaben" },
            { id: "C", text: "Nur Vokabeln ohne Anwendung" },
            { id: "D", text: "Nur schreiben, nie lesen/hören" },
          ],
          correctId: "B",
          explanation: "Prüfung ist auch Zeitmanagement. Training unter Zeitdruck ist key."
        },
        {
          id: "A2Q5",
          question: "Welche Info wird in Anzeigen oft abgefragt?",
          choices: [
            { id: "A", text: "Philosophische Meinung" },
            { id: "B", text: "Ort, Zeit, Preis" },
            { id: "C", text: "Metaphern" },
            { id: "D", text: "Literarische Stilmittel" },
          ],
          correctId: "B",
          explanation: "A2-Anzeigen sind praktisch: wann/wo/wie viel."
        },
      ],
    },
  },

  {
    slug: "telc-b1-schreiben-brief-struktur-mini-test",
    level: "B1",
    title: "TELC B1 Schreiben: Brief-Struktur, Redemittel & Mini-Test",
    description:
      "B1 Schreiben ist planbar: Struktur + Redemittel + typische Fehler vermeiden. Mit Mini-Test am Ende.",
    publishedAt: "2026-02-17",
    readingMinutes: 9,
    keywords: ["telc b1 schreiben", "b1 brief schreiben", "telc b1 brief muster"],
    content: [
      { type: "p", text: "B1 Schreiben wirkt schwer, ist aber ein Template-Game: Einleitung → 2–3 Punkte → Schluss. Wenn du sauber strukturierst, bekommst du stabile Punkte." },
      { type: "h2", text: "Die sichere B1-Struktur (immer)" },
      { type: "ul", items: [
        "Einleitung: Warum schreibst du?",
        "Hauptteil: 2–3 Punkte (klar getrennt)",
        "Schluss: Bitte um Antwort / Vorschlag / Gruß"
      ]},
      { type: "h2", text: "Redemittel, die fast immer passen" },
      { type: "ul", items: [
        "Ich schreibe Ihnen, weil …",
        "Außerdem möchte ich …",
        "Könnten Sie mir bitte …?",
        "Ich freue mich auf Ihre Antwort."
      ]},
      { type: "callout", title: "Typischer B1-Fehler", text: "Zu lange Sätze. Besser: kurze, klare Sätze mit guter Struktur." },
    ],
    quiz: {
      title: "Mini-Test B1 Schreiben (5 Fragen)",
      intro: "Kurzcheck: Struktur + Redemittel. Score + Erklärungen direkt danach.",
      questions: [
        {
          id: "B1WQ1",
          question: "Was ist die beste Grundstruktur für TELC B1 Schreiben?",
          choices: [
            { id: "A", text: "Nur Hauptteil, keine Einleitung" },
            { id: "B", text: "Einleitung → 2–3 Punkte → Schluss" },
            { id: "C", text: "Nur Fragen stellen" },
            { id: "D", text: "Sehr lange Argumentation ohne Absätze" },
          ],
          correctId: "B",
          explanation: "Klarer Aufbau wird bewertet und macht deinen Text verständlich."
        },
        {
          id: "B1WQ2",
          question: "Welches Redemittel passt am besten in eine formelle E-Mail?",
          choices: [
            { id: "A", text: "Hey, was geht?" },
            { id: "B", text: "Ich schreibe Ihnen, weil …" },
            { id: "C", text: "LOL das ist doof" },
            { id: "D", text: "Brudi, sag mal" },
          ],
          correctId: "B",
          explanation: "Formeller Stil ist in TELC-Briefen oft erforderlich."
        },
        {
          id: "B1WQ3",
          question: "Was bringt in B1 meist mehr Punkte?",
          choices: [
            { id: "A", text: "Sehr komplexe Nebensätze" },
            { id: "B", text: "Klare Absätze + verständliche Sätze" },
            { id: "C", text: "Viele Fremdwörter" },
            { id: "D", text: "Witze und Ironie" },
          ],
          correctId: "B",
          explanation: "Kriterien sind Verständlichkeit, Aufgabe erfüllt, Struktur."
        },
        {
          id: "B1WQ4",
          question: "Was ist ein häufiger Fehler im B1-Brief?",
          choices: [
            { id: "A", text: "Zu kurze Einleitung" },
            { id: "B", text: "Keine klare Gliederung der Punkte" },
            { id: "C", text: "Zu viele Absätze" },
            { id: "D", text: "Zu höflich schreiben" },
          ],
          correctId: "B",
          explanation: "Wenn Punkte vermischen, wirkt es unklar und kostet Bewertung."
        },
        {
          id: "B1WQ5",
          question: "Was gehört in den Schluss?",
          choices: [
            { id: "A", text: "Neue Themen anfangen" },
            { id: "B", text: "Bitte um Antwort / Vorschlag / Gruß" },
            { id: "C", text: "Alles wiederholen" },
            { id: "D", text: "Nur Emojis" },
          ],
          correctId: "B",
          explanation: "Sauberer Abschluss wirkt professionell und vollständig."
        },
      ],
    },
  },

  {
    slug: "telc-b1-hoeren-strategie-mini-test",
    level: "B1",
    title: "TELC B1 Hören: Strategie, typische Fallen & Mini-Test",
    description:
      "B1 Hören ist kein Glücksspiel: Mit dieser Strategie vermeidest du typische Fallen. Mini-Test inklusive.",
    publishedAt: "2026-02-17",
    readingMinutes: 8,
    keywords: ["telc b1 hören", "b1 hörverstehen", "telc b1 hoeren übungen"],
    content: [
      { type: "p", text: "Bei B1 Hören verlierst du Punkte durch Stress: zu spät lesen, falscher Fokus, bei einem Wort hängen. Wir drehen das um." },
      { type: "h2", text: "Die B1-Routine (immer gleich)" },
      { type: "ul", items: [
        "1) Frage lesen → markieren: Zeit/Ort/Person/Absicht",
        "2) Beim Hören: nur auf diese Infos achten",
        "3) Nach dem Hören: nicht „zerdenken“, erste gute Antwort ist oft richtig"
      ]},
      { type: "h2", text: "Typische Fallen" },
      { type: "ul", items: [
        "Synonyme: gesagt wird nicht exakt das Wort aus der Antwort",
        "Negation: nicht / kein / ohne",
        "Zeitangaben: 18:15 vs 18:50"
      ]},
      { type: "callout", title: "Mini-Regel", text: "Wenn du unsicher bist: prüfe Negationen und Zahlen – dort passieren die meisten Fehler." },
    ],
    quiz: {
      title: "Mini-Test B1 Hören (5 Fragen)",
      intro: "Diese Fragen testen dein Prüfungs-Mindset (Fallen + Strategie).",
      questions: [
        {
          id: "B1LQ1",
          question: "Was machst du als Erstes vor dem Audio?",
          choices: [
            { id: "A", text: "Nichts, einfach hören" },
            { id: "B", text: "Fragen lesen und Schlüsselinfos markieren" },
            { id: "C", text: "Antworten raten" },
            { id: "D", text: "Alles Wort für Wort mitschreiben" },
          ],
          correctId: "B",
          explanation: "Damit hörst du gezielt auf relevante Infos."
        },
        {
          id: "B1LQ2",
          question: "Welche Falle ist bei B1 besonders häufig?",
          choices: [
            { id: "A", text: "Zu viele Fremdwörter" },
            { id: "B", text: "Synonyme statt identischer Wörter" },
            { id: "C", text: "Sehr lange Gedichte" },
            { id: "D", text: "Matheaufgaben" },
          ],
          correctId: "B",
          explanation: "Antworten paraphrasieren oft, daher nicht auf exakte Wortgleichheit warten."
        },
        {
          id: "B1LQ3",
          question: "Worauf solltest du bei Unsicherheit sofort prüfen?",
          choices: [
            { id: "A", text: "Ironie" },
            { id: "B", text: "Negationen und Zahlen" },
            { id: "C", text: "Reimwörter" },
            { id: "D", text: "Dialektwörter" },
          ],
          correctId: "B",
          explanation: "Genau dort passieren die typischen Prüfungsfehler."
        },
        {
          id: "B1LQ4",
          question: "Was ist beim Hören meistens schlecht?",
          choices: [
            { id: "A", text: "Gezielt zuhören" },
            { id: "B", text: "Sich an einem Wort festbeißen" },
            { id: "C", text: "Fragen vorher lesen" },
            { id: "D", text: "Auf Reihenfolge achten" },
          ],
          correctId: "B",
          explanation: "Du verpasst sonst den nächsten wichtigen Satz."
        },
        {
          id: "B1LQ5",
          question: "Welche Aussage ist am ehesten richtig?",
          choices: [
            { id: "A", text: "B1 Hören ist Glück" },
            { id: "B", text: "B1 Hören ist Routine + Strategie" },
            { id: "C", text: "Nur Grammatik hilft" },
            { id: "D", text: "Nur Vokabeln helfen" },
          ],
          correctId: "B",
          explanation: "Strategie + Übung machen das Ergebnis stabil."
        },
      ],
    },
  },

  {
    slug: "telc-b2-beruf-strategie-mini-test",
    level: "B2",
    title: "TELC B2 (Beruf): So punktest du mit Struktur + Mini-Test",
    description:
      "B2 bewertet Klarheit, Argumentation und Sprachmittel. Hier ist die Strategie – mit Mini-Test am Ende.",
    publishedAt: "2026-02-17",
    readingMinutes: 9,
    keywords: ["telc b2", "telc b2 beruf", "telc b2 prüfung", "b2 modelltest"],
    content: [
      { type: "p", text: "B2 ist der Sprung von „verstanden“ zu „präzise und überzeugend“. Du brauchst Struktur, saubere Verknüpfungen und einen klaren Standpunkt." },
      { type: "h2", text: "Was B2 wirklich bewertet" },
      { type: "ul", items: [
        "Aufgaben vollständig erfüllen (alle Punkte abdecken)",
        "Logische Struktur (Einleitung → Argumente → Fazit)",
        "Sprachmittel (z.B. jedoch, daher, außerdem, folglich)",
        "Angemessener Ton (formell/neutral je nach Aufgabe)"
      ]},
      { type: "h2", text: "2 Power-Moves für sofort bessere Texte" },
      { type: "ul", items: [
        "Pro Absatz genau 1 Kernaussage + Beispiel",
        "Bewusst Verknüpfungen nutzen (Kontrast / Ursache / Folge)"
      ]},
      { type: "callout", title: "B2-Shortcut", text: "Wenn du strukturiert schreibst, wirkt dein Deutsch sofort „B2-level“ – auch ohne seltene Wörter." },
    ],
    quiz: {
      title: "Mini-Test B2 (5 Fragen)",
      intro: "Testet, ob du B2-Logik/Struktur verstanden hast.",
      questions: [
        {
          id: "B2Q1",
          question: "Was ist in B2 besonders wichtig?",
          choices: [
            { id: "A", text: "Viele Emojis" },
            { id: "B", text: "Struktur + Argumentation + Sprachmittel" },
            { id: "C", text: "Nur perfekte Rechtschreibung" },
            { id: "D", text: "Nur sehr seltene Wörter" },
          ],
          correctId: "B",
          explanation: "B2 bewertet stark Kohärenz und Ausdruck, nicht nur einzelne Fehler."
        },
        {
          id: "B2Q2",
          question: "Was ist ein guter Absatz-Aufbau?",
          choices: [
            { id: "A", text: "3 Themen gleichzeitig" },
            { id: "B", text: "1 Kernaussage + Beispiel/Begründung" },
            { id: "C", text: "Nur Fragen" },
            { id: "D", text: "Nur Stichpunkte" },
          ],
          correctId: "B",
          explanation: "So entsteht Klarheit und Logik."
        },
        {
          id: "B2Q3",
          question: "Wozu dienen Konnektoren wie „jedoch“ oder „folglich“?",
          choices: [
            { id: "A", text: "Sie sind nur Deko" },
            { id: "B", text: "Sie zeigen Logik (Kontrast, Folge, Grund)" },
            { id: "C", text: "Sie ersetzen Verben" },
            { id: "D", text: "Sie machen Sätze kürzer" },
          ],
          correctId: "B",
          explanation: "B2-Texte müssen logisch verknüpft sein."
        },
        {
          id: "B2Q4",
          question: "Was ist der häufigste B2-Fehler?",
          choices: [
            { id: "A", text: "Zu viele Absätze" },
            { id: "B", text: "Punkte nicht vollständig abdecken / Struktur fehlt" },
            { id: "C", text: "Zu höflich sein" },
            { id: "D", text: "Zu viele Beispiele" },
          ],
          correctId: "B",
          explanation: "Wenn Kriterien fehlen, kostet das massiv Punkte."
        },
        {
          id: "B2Q5",
          question: "Was macht einen Text sofort „B2-like“?",
          choices: [
            { id: "A", text: "Sehr lange Sätze ohne Punkt" },
            { id: "B", text: "Klare Gliederung + passende Verknüpfungen" },
            { id: "C", text: "Nur komplizierte Grammatik" },
            { id: "D", text: "Viele englische Wörter" },
          ],
          correctId: "B",
          explanation: "Lesbarkeit + Logik sind Kernkriterien."
        },
      ],
    },
  },
];

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
