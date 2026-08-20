import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/barrierefreiheit")({
  head: () => ({
    meta: [
      { title: "Barrierefreiheit — Schams Consult" },
      {
        name: "description",
        content: "Erklärung zur Barrierefreiheit dieser Website nach BFSG und WCAG 2.1 AA.",
      },
      { property: "og:url", content: "https://shams-consult.de/barrierefreiheit" },
    ],
    links: [{ rel: "canonical", href: "https://shams-consult.de/barrierefreiheit" }],
  }),
  component: A11yPage,
});

function A11yPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
      <h1 className="font-serif text-5xl">Barrierefreiheit</h1>
      <div className="mt-10 space-y-6 text-brand-black/80">
        <p>
          Wir sind bemüht, unsere Website gemäß den Anforderungen des
          Barrierefreiheitsstärkungsgesetzes (BFSG) sowie der WCAG 2.1 auf Stufe AA zugänglich zu
          gestalten.
        </p>
        <h2 className="font-serif text-2xl">Umgesetzte Maßnahmen</h2>
        <ul className="list-inside list-disc space-y-2 text-base">
          <li>Semantische HTML-Struktur mit klaren Überschriftenhierarchien</li>
          <li>Tastaturbedienbarkeit aller interaktiven Elemente</li>
          <li>Sichtbare Fokus-Indikatoren</li>
          <li>Ausreichende Farbkontraste nach WCAG AA</li>
          <li>Alternativtexte für alle inhaltlichen Bilder</li>
          <li>Skip-Link „Zum Inhalt springen“ zu Beginn jeder Seite</li>
          <li>Responsive Gestaltung für Bildschirmvergrößerung bis 200 %</li>
        </ul>
        <h2 className="font-serif text-2xl">Rückmeldung</h2>
        <p>
          Sollten Sie auf Barrieren stoßen oder Fragen haben, schreiben Sie uns bitte an{" "}
          <a href="mailto:office@schamsconsult.de" className="underline">
            office@schamsconsult.de
          </a>
          . Wir bearbeiten Ihr Anliegen so schnell wie möglich.
        </p>
      </div>
    </section>
  );
}
