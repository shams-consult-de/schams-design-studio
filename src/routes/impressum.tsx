import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Schams Consult" },
      { name: "description", content: "Impressum und Angaben gemäß § 5 TMG." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "https://shams-consult.de/impressum" },
    ],
    links: [{ rel: "canonical", href: "https://shams-consult.de/impressum" }],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
      <h1 className="font-serif text-5xl">Impressum</h1>
      <div className="prose mt-10 space-y-6 text-brand-black/80">
        <h2 className="font-serif text-2xl">Angaben gemäß § 5 TMG</h2>
        <p>
          Schams Consult
          <br />
          Architektur & Stadtplanung
          <br />
          Deutschland
        </p>
        <h2 className="font-serif text-2xl">Kontakt</h2>
        <p>
          E-Mail:{" "}
          <a href="mailto:office@schamsconsult.de" className="underline">
            office@schamsconsult.de
          </a>
        </p>
        <h2 className="font-serif text-2xl">Verantwortlich für den Inhalt</h2>
        <p>Schams Consult, Inhaberin/Inhaber (bitte ergänzen)</p>
        <h2 className="font-serif text-2xl">Haftungsausschluss</h2>
        <p className="text-sm">
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für
          die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind
          ausschließlich deren Betreiber verantwortlich.
        </p>
      </div>
    </section>
  );
}
