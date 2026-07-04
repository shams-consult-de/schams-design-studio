import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — Schams Consult" },
      { name: "description", content: "Datenschutzerklärung nach DSGVO." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "/datenschutz" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
      <h1 className="font-serif text-5xl">Datenschutz</h1>
      <div className="mt-10 space-y-6 text-brand-black/80">
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir verarbeiten Ihre
          Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO,
          TMG).
        </p>
        <h2 className="font-serif text-2xl">Cookies</h2>
        <p>
          Diese Website verwendet ausschließlich technisch notwendige Cookies, um die
          Grundfunktionen bereitzustellen. Es werden keine Cookies zu Analyse- oder
          Marketingzwecken gesetzt.
        </p>
        <h2 className="font-serif text-2xl">Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns per Formular oder E-Mail kontaktieren, werden Ihre Angaben zur
          Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir nicht
          ohne Ihre Einwilligung weiter.
        </p>
        <h2 className="font-serif text-2xl">Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder
          Einschränkung der Verarbeitung Ihrer gespeicherten Daten. Bitte wenden Sie
          sich hierzu an{" "}
          <a href="mailto:office@schamsconsult.de" className="underline">
            office@schamsconsult.de
          </a>
          .
        </p>
        <h2 className="font-serif text-2xl">Hosting & Server-Logfiles</h2>
        <p>
          Beim Besuch dieser Website erfasst unser Hoster automatisch anonymisierte
          Server-Logfiles (IP-Adresse, Datum, Uhrzeit, aufgerufene Seite). Diese
          Daten dienen ausschließlich der Sicherstellung des Betriebs.
        </p>
      </div>
    </section>
  );
}
