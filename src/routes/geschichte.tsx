import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@/components/icon";
export const Route = createFileRoute("/geschichte")({
  head: () => ({
    meta: [
      { title: "Geschichte — Shams Consult" },
      {
        name: "description",
        content:
          "Die Geschichte von Majeed Shams — vom Ankommen in Deutschland 2005 zum eigenen Architektur- und Stadtplanungsbüro. Vertrauen, Ideen und Expertise.",
      },
      { property: "og:title", content: "Die Geschichte von Majeed Shams" },
      {
        property: "og:description",
        content: "„From nobody to somebody, to help and share experiences with everybody.“",
      },
      {
        property: "og:image",
        content:
          "https://image.jimcdn.com/app/cms/image/transf/none/path/sc1699083d70b354e/image/i2f58a7e76fe134ac/version/1691673000/from-nobody-to-somebody-to-help-and-share-experiences-with-everybody-vertrauen-ideen-und-expertise-f%C3%BCr-eine-verantwortungsvolle-gestaltung-die-reise-vom-traum-zum-erfolg.jpg",
      },
      { property: "og:url", content: "/geschichte" },
    ],
    links: [{ rel: "canonical", href: "/geschichte" }],
  }),
  component: GeschichtePage,
});

function GeschichtePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-24 lg:px-12 lg:pt-32" data-reveal>
        <header className="border-t border-border pt-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
            Geschichte
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
            Die Geschichte von <span className="italic">Majeed Shams</span>
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-2xl leading-relaxed text-brand-black/80">
            Vertrauen, Ideen und Expertise für eine verantwortungsvolle Gestaltung.
          </p>
        </header>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24" data-reveal>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-4">
            <p className="font-serif text-3xl italic leading-tight text-brand-black">
              „Die Reise vom Traum zum Erfolg.“
            </p>
            <p className="font-serif text-xl italic leading-relaxed text-brand-black/70">
              „From nobody to somebody, to help and share experiences with everybody.“
            </p>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-brand-black/75 lg:col-span-6 lg:col-start-7">
            <p>
              Vertraut haben mir das schönste Land der Welt (Deutschland) und seine
              Mitmenschen, als ich im Jahr 2005 <strong>mit null Euro</strong> und meinen
              wenigen mitgenommenen Erinnerungsstücken aus Afghanistan am Düsseldorfer
              Flughafen ankam. (Siehe den Zeitungsausschnitt vom 30.08.2005, Rheinische
              Post.)
            </p>
            <p>
              Knapp 20 Jahre sind seitdem vergangen, in denen ich meine Vision Wirklichkeit
              werden ließ. Vier Jahre meines Lebens widmete ich dem Architekturstudium in
              Karlsruhe, gefolgt von weiteren zwei Jahren, in denen ich das Masterstudium
              in Stadtplanung in Stuttgart berufsbegleitend absolvierte. Mit gut 15 Jahren
              Berufs- und Lebenserfahrung stehe ich heute als verantwortungsbewusster
              Architekt und Stadtplaner da, bereit, dem Land und den liebevollen Menschen
              etwas zurückzugeben.
            </p>
            <p>Aus diesem Grund bedeutet für mich Architektur und Bauberatung Vertrauen.</p>
            <p>
              Zahlreiche Kunden und Partner haben bereits Vertrauen in mich und mein Team
              gesetzt. Unterschiedliche Architektur- und Städtebauprojekte mit
              verschiedenen Budgets haben wir erfolgreich betreut — von 1.000 Euro bis hin
              zu 13,5 Mio. Euro.
            </p>
            <p>
              Meine umfassenden Kompetenzen in beiden Disziplinen, Architektur und
              Stadtplanung, ermöglichen es mir, Ihnen optimale Ergebnisse zu liefern. Denn
              Architektur und Stadtplanung sind für mich mehr als nur Beruf — es ist eine
              Berufung, die ich seit über 15 Jahren leidenschaftlich praktiziere.
            </p>
            <p>
              Lassen Sie uns gemeinsam Ihre Visionen in die Realität umsetzen und so etwas
              Schönes für die Zukunft schaffen — etwas, das Ihnen, dem Land und den
              Menschen etwas zurückgibt.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-12" data-reveal>
        <figure className="overflow-hidden rounded-2xl border border-border image-zoom">
          <img
            src="https://image.jimcdn.com/app/cms/image/transf/none/path/sc1699083d70b354e/image/i2f58a7e76fe134ac/version/1691673000/from-nobody-to-somebody-to-help-and-share-experiences-with-everybody-vertrauen-ideen-und-expertise-f%C3%BCr-eine-verantwortungsvolle-gestaltung-die-reise-vom-traum-zum-erfolg.jpg"
            alt="Erfolgsgeschichte von Majeed Shams, Rheinische Post, 30. August 2005"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-full object-cover"
          />
          <figcaption className="p-4 text-sm text-brand-black/70">
            Erfolgsgeschichte von Majeed Shams — Rheinische Post, Ausgabe 30. August 2005.
            Der Reisekoffer samt Erinnerungsstücken, Fotos, Bücher und Wertsachen gingen in
            New-Delhi verloren.
          </figcaption>
        </figure>

        <div className="mt-16 flex flex-wrap gap-3">
          <Link
            to="/philosophie"
            className="inline-flex items-center gap-2 rounded-full bg-brand-black px-7 py-3.5 text-sm font-semibold text-brand-white transition-colors hover:bg-brand-accent"
          >
            Unsere Philosophie <Icon name="arrow-right" className="text-base" />
          </Link>
          <Link
            to="/buero"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold hover:border-brand-accent hover:text-brand-accent"
          >
            Team kennenlernen
          </Link>
        </div>
      </section>
    </>
  );
}
