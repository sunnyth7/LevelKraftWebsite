"use client";

import Link from "next/link";
import { ArrowLeft, Trash2, Mail, ShieldCheck, Clock } from "lucide-react";

const SUPPORT_EMAIL = "support@levelkraft.de";

export default function DeleteAccountPage() {
  const mailtoHref =
    `mailto:${SUPPORT_EMAIL}` +
    `?subject=${encodeURIComponent("Kontolöschung anfragen")}` +
    `&body=${encodeURIComponent(
      [
        "Hallo LevelKraft Support,",
        "",
        "bitte löschen Sie mein LevelKraft-Konto und alle damit verbundenen Daten dauerhaft.",
        "",
        "Meine E-Mail-Adresse (mit der ich registriert bin): [BITTE EINTRAGEN]",
        "Optional: Grund der Löschung: [OPTIONAL]",
        "",
        "Vielen Dank!",
      ].join("\n")
    )}`;

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Zurück</span>
        </Link>

        {/* Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-2xl mb-6">
            <Trash2 className="w-8 h-8 text-destructive" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Konto löschen
          </h1>
          <p className="text-lg text-muted-foreground">
            Hier findest du alle Optionen, um dein LevelKraft-Konto dauerhaft zu löschen.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-card rounded-2xl shadow-lg border border-border p-8 sm:p-10">
          {/* Option 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Option 1: Direkt in der App löschen (empfohlen)
            </h2>
            <p className="text-muted-foreground mb-4">
              Du kannst dein Konto jederzeit direkt in der App löschen. So geht&apos;s:
            </p>
            <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
              <li>Öffne die <strong className="text-foreground">LevelKraft</strong> App</li>
              <li>Gehe zu <strong className="text-foreground">Profil</strong></li>
              <li>Tippe auf <strong className="text-foreground">Konto löschen</strong></li>
              <li>Bestätige die Löschung</li>
            </ol>
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <ShieldCheck className="w-5 h-5 text-primary mt-0.5" />
              <p className="text-sm text-foreground">
                Die App-Löschung ist der schnellste Weg, weil die Anfrage sofort verarbeitet wird.
              </p>
            </div>
          </section>

          {/* Option 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Option 2: Löschung per E-Mail anfordern
            </h2>
            <p className="text-muted-foreground mb-4">
              Falls du keinen Zugriff auf die App hast, kannst du die Löschung auch per E-Mail anfordern.
              Bitte sende uns eine Nachricht an <strong className="text-foreground">{SUPPORT_EMAIL}</strong> mit deiner registrierten E-Mail-Adresse.
            </p>

            <a
              href={mailtoHref}
              className="inline-flex items-center gap-2 rounded-full bg-destructive px-6 py-3 text-sm font-semibold text-destructive-foreground shadow-md hover:bg-destructive/90 transition"
            >
              <Mail className="w-4 h-4" />
              E-Mail zur Kontolöschung senden
            </a>

            <div className="mt-5 flex items-start gap-3 rounded-xl border border-border bg-muted p-4">
              <Clock className="w-5 h-5 text-muted-foreground mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Wir bearbeiten Löschanfragen in der Regel innerhalb von <strong className="text-foreground">30 Tagen</strong>. Bei Rückfragen melden wir uns per E-Mail.
              </p>
            </div>
          </section>

          {/* What gets deleted */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Welche Daten werden gelöscht?
            </h2>
            <p className="text-muted-foreground mb-4">
              Wenn dein Konto gelöscht wird, entfernen wir dauerhaft alle personenbezogenen Daten, die mit deinem Konto verknüpft sind, z. B.:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Profil- und Kontodaten (z. B. E-Mail, Name – falls angegeben)</li>
              <li>Testergebnisse und Fortschritt</li>
              <li>Streaks und Nutzungsstatistiken innerhalb der App</li>
              <li>Von dir eingereichte Inhalte (z. B. Texteingaben), soweit sie deinem Konto zugeordnet sind</li>
            </ul>
          </section>

          {/* Retention / exceptions */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Gibt es Ausnahmen?
            </h2>
            <p className="text-muted-foreground">
              In bestimmten Fällen dürfen oder müssen wir Daten länger aufbewahren (z. B. gesetzliche Aufbewahrungspflichten oder
              Sicherheits-/Missbrauchsprävention). In solchen Fällen speichern wir nur das notwendige Minimum und löschen den Rest.
            </p>
          </section>

          {/* Subscription note */}
          <section className="mb-2">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Hinweis zu Abos (Google Play)
            </h2>
            <p className="text-muted-foreground">
              Die Kontolöschung beendet nicht automatisch ein laufendes Abo. Bitte kündige dein Premium-Abo im Google Play Store unter{" "}
              <strong className="text-foreground">Zahlungen &amp; Abos → Abos</strong>.
            </p>
          </section>
        </div>

        {/* Footer links */}
        <div className="mt-10 text-center text-sm text-muted-foreground">
          <p>
            Mehr Infos:{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Datenschutzerklärung
            </Link>{" "}
            ·{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Kontakt
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
