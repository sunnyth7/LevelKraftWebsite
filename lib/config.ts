export const siteConfig = {
  name: "LevelKraft",
  tagline: "TELC Prüfungsvorbereitung – A1 bis C2",
  description:
    "Bestehe deine TELC Prüfung mit System. Modelltests, Fortschritt & Lernplan für alle Niveaus von A1 bis C2.",
  url: "https://levelkraft.de",
  supportEmail: "support@levelkraft.de",
  privacyEmail: "datenschutz@levelkraft.de",
  links: {
    playStore: "https://play.google.com/store/apps/details?id=com.levelkraft",
    appStore: "#",
    playSubscriptions:
      "https://play.google.com/store/account/subscriptions",
  },
  nav: [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "Preise", href: "/#pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Download", href: "/#download" },
    { name: "FAQ", href: "/#faq" },
    { name: "Kontakt", href: "/contact" },
  ],
  footer: {
    legal: [
      { name: "Datenschutz", href: "/privacy" },
      { name: "AGB", href: "/terms" },
      { name: "Impressum", href: "/imprint" },
    ],
    support: [
      { name: "Konto löschen", href: "/delete-account" },
      { name: "Support", href: "/support" },
      { name: "Kontakt", href: "/contact" },
    ],
    telc: [
      { name: "TELC A1 Prüfung", href: "/telc-a1-pruefung" },
      { name: "TELC A2 Prüfung", href: "/telc-a2-pruefung" },
      { name: "TELC B1 Prüfung", href: "/telc-b1-pruefung" },
      { name: "TELC B2 Prüfung", href: "/telc-b2-pruefung" },
      { name: "Blog", href: "/blog" },
    ],
  },
};

export const features = [
  {
    title: "Modelltests wie in der Prüfung",
    description:
      "Übe mit realistischen Prüfungssimulationen für alle TELC-Niveaus – genau wie am Prüfungstag.",
    icon: "FileText",
  },
  {
    title: "Fortschritt & Statistiken",
    description:
      "Verfolge deinen Lernfortschritt mit detaillierten Statistiken und erkenne deine Stärken und Schwächen.",
    icon: "TrendingUp",
  },
  {
    title: "Schreiben & Sprechen Feedback",
    description:
      "Erhalte individuelles Feedback zu deinen Schreib- und Sprechübungen für gezielte Verbesserung.",
    icon: "MessageSquare",
  },
  {
    title: "Personalisierter Lernplan",
    description:
      "Dein individueller Lernplan passt sich deinem Tempo und deinen Zielen an.",
    icon: "Calendar",
  },
];

export const testimonials = [
  {
    name: "Maria S.",
    level: "B1 bestanden",
    text: "Mit LevelKraft habe ich meine B1-Prüfung beim ersten Versuch bestanden. Die Modelltests waren unglaublich hilfreich!",
  },
  {
    name: "Ahmed K.",
    level: "B2 bestanden",
    text: "Die Feedback-Funktion für Schreiben hat mir geholfen, meine Fehler zu verstehen und zu korrigieren.",
  },
  {
    name: "Elena P.",
    level: "A2 bestanden",
    text: "Endlich eine App, die sich wie eine echte Prüfung anfühlt. 10 Minuten am Tag haben gereicht!",
  },
];

export const faqs = [
  {
    question: "Was ist TELC?",
    answer:
      "TELC (The European Language Certificates) ist ein europäisches Zertifizierungssystem für Sprachprüfungen. Die Prüfungen sind international anerkannt und werden für verschiedene Niveaus (A1-C2) angeboten.",
  },
  {
    question: "Welche Niveaus werden unterstützt?",
    answer:
      "LevelKraft unterstützt alle TELC-Deutsch-Niveaus von A1 bis C2. Du kannst jederzeit zwischen den Niveaus wechseln.",
  },
  {
    question: "Wie funktioniert das Abonnement?",
    answer:
      "Du kannst LevelKraft kostenlos mit eingeschränkten Funktionen nutzen. Mit einem Premium-Abonnement erhältst du Zugang zu allen Modelltests und Funktionen. Die Abrechnung erfolgt über Google Play.",
  },
  {
    question: "Wie kann ich mein Abonnement kündigen?",
    answer:
      "Die Kündigung erfolgt direkt über den Google Play Store. Gehe zu Einstellungen → Zahlungen & Abonnements → Abonnements und wähle LevelKraft aus.",
  },
  {
    question: "Wie kann ich mein Konto löschen?",
    answer:
      "Du kannst dein Konto direkt in der App unter Profil → Konto löschen entfernen. Alternativ kannst du uns eine E-Mail an support@levelkraft.de senden.",
  },
  {
    question: "Werden meine Daten geschützt?",
    answer:
      "Ja, wir nehmen Datenschutz sehr ernst. Alle Daten werden verschlüsselt übertragen und gespeichert. Weitere Informationen findest du in unserer Datenschutzerklärung.",
  },
];

export const pricingPlans = [
  {
    name: "Free",
    price: "0€",
    period: "",
    description: "Perfekt zum Kennenlernen",
    features: [
      "Begrenzte Modelltests",
      "Fortschrittsverfolgung",
      "Grundlegende Statistiken",
    ],
    cta: "Jetzt starten",
    highlighted: false,
  },
  {
    name: "Premium Monatlich",
    price: "9,99€",
    period: "/Monat",
    description: "Voller Zugang, flexibel kündbar",
    features: [
      "Alle Modelltests A1-C2",
      "Schreiben & Sprechen Feedback",
      "Detaillierte Statistiken",
      "Personalisierter Lernplan",
      "Jederzeit kündbar",
    ],
    cta: "Premium starten",
    highlighted: true,
  },
  {
    name: "Premium Jährlich",
    price: "59,99€",
    period: "/Jahr",
    description: "Spare 50% – beste Wahl!",
    features: [
      "Alle Premium-Funktionen",
      "50% Ersparnis",
      "Volle Prüfungsvorbereitung",
      "Jederzeit kündbar",
    ],
    cta: "Jährlich sparen",
    highlighted: false,
  },
];

export const screenshots = [
  {
    title: "Dashboard",
    description: "Dein Lernfortschritt auf einen Blick",
  },
  {
    title: "Modelltests",
    description: "Realistische Prüfungssimulationen",
  },
  {
    title: "Statistiken",
    description: "Detaillierte Auswertungen",
  },
];
