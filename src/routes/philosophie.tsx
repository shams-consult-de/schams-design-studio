import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@/components/icon";
export const Route = createFileRoute("/philosophie")({
  head: () => ({
    meta: [
      { title: "Philosophie — Shams Consult" },
      {
        name: "description",
        content:
          "Verantwortung, Vertrauen und Gestaltungswille leiten unser tägliches Handeln. Die Philosophie des Architekturbüros Shams Consult.",
      },
      { property: "og:title", content: "Philosophie — Shams Consult" },
      {
        property: "og:image",
        content:
          "/images/architektenb-ro-shams-consult-architekt-und-stadtplaner-.jpg",
      },
      { property: "og:url", content: "/philosophie" },
    ],
    links: [{ rel: "canonical", href: "/philosophie" }],
  }),
  component: PhilosophiePage,
});

function PhilosophiePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-24 lg:px-12 lg:pt-32" data-reveal>
        <header className="border-t border-border pt-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
            Philosophie
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
            Die Philosophie <span className="italic">unseres Büros</span>
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-2xl leading-relaxed text-brand-black/80">
            Verantwortung, Vertrauen und Gestaltungswille leiten unser tägliches Handeln.
          </p>
        </header>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24" data-reveal>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-2xl italic leading-relaxed text-brand-black">
              „From nobody to somebody, to help and share experiences with everybody.“
            </p>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-brand-black/75 lg:col-span-6 lg:col-start-7">
            <p>
              Die Welt der Architektur ist außerordentlich vielseitig. Für uns bedeutet
              Architektur und Bauberatung weit mehr als nur die Planung von Gebäuden. Es
              ist eine Zusammenarbeit des Vertrauens, in der wir Ihre individuellen
              Wünsche und Vorstellungen mit unserer langjährigen Erfahrung und Expertise
              kombinieren, um gemeinsam im Einklang mit den technischen, rechtlichen und
              wirtschaftlichen Möglichkeiten eine nachhaltige Zukunft für kommende
              Generationen zu gestalten.
            </p>
            <p>
              Unser Weg vom „Niemand“ zum „Jemand“, vom Unbekannten zum etablierten
              Architekten und Stadtplaner, hat uns gelehrt, dass Vertrauen eine essenzielle
              Grundlage für erfolgreiche Zusammenarbeit ist. Nun möchten wir unsere
              erlangte Erfahrung und Expertise mit jedem teilen —{" "}
              <Link to="/geschichte" className="underline decoration-brand-accent underline-offset-4 hover:text-brand-accent">
                wie Herr Shams in seinem Storytelling verdeutlicht
              </Link>.
            </p>
            <p>
              Bereits zahlreiche Kunden und Partner haben uns ihr Vertrauen geschenkt, und
              wir haben eine breite Palette von Architektur- und Städtebauprojekten mit
              unterschiedlichen Budgets von 1.000 Euro bis 13,5 Mio. Euro erfolgreich
              betreut. Unsere umfassenden Kompetenzen in beiden Disziplinen — Architektur
              und Stadtplanung — ermöglichen es uns, Ihnen optimale Ergebnisse zu liefern
              und Ihre Zufriedenheit zu gewährleisten.
            </p>
            <p>
              Was uns von anderen unterscheidet, sind unsere umfassenden Kompetenzen in
              den untrennbaren Fachdisziplinen Architektur und Stadtplanung. Die
              Symbolisierung dieser Eigenschaft erfolgt durch unser elegantes Logo in Form
              eines Barcodes.
            </p>
            <p>
              Die Leidenschaft für Architektur und Stadtplanung begleitet uns seit über 15
              Jahren — für uns ist es mehr als nur ein Beruf, es ist unsere Berufung.
              Shams Consult verfügt über ein hochqualifiziertes und eingespieltes Team,
              das an Ihrer Seite steht, um Ihre Projekte und Investitionen erfolgreich zu
              verwirklichen.
            </p>
            <p>
              Shams Consult ist mittlerweile ein Synonym für Architekten und Stadtplaner,
              die sich für kreative, innovative und vertrauensvolle Planungen für ihre
              Kunden einsetzen. Wir stehen für Vertrauen, Qualität und Leidenschaft in der
              Architektur — und freuen uns darauf, Ihre Visionen gemeinsam in die Realität
              umzusetzen.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-12" data-reveal>
        <figure className="overflow-hidden rounded-2xl border border-border image-zoom">
          <img
            src="/images/architektenb-ro-shams-consult-architekt-und-stadtplaner-.jpg"
            alt="Architekturbüro Shams Consult — Architekt und Stadtplaner"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-full object-cover"
          />
          <figcaption className="p-4 text-sm text-brand-black/70">
            Geschäftsführer Dipl.-Ing. (FH) Majeed Shams M.Eng. — Architekt und Stadtplaner
          </figcaption>
        </figure>

        <div className="mt-16 flex flex-wrap gap-3">
          <Link
            to="/geschichte"
            className="inline-flex items-center gap-2 rounded-full bg-brand-black px-7 py-3.5 text-sm font-semibold text-brand-white transition-colors hover:bg-brand-accent"
          >
            Unsere Geschichte <Icon name="arrow-right" className="text-base" />
          </Link>
          <Link
            to="/karriere"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold hover:border-brand-accent hover:text-brand-accent"
          >
            Karriere bei uns
          </Link>
        </div>
      </section>
    </>
  );
}
