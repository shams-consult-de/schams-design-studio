import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/buero")({
  head: () => ({
    meta: [
      { title: "Büro — Schams Consult" },
      {
        name: "description",
        content:
          "Über Schams Consult — ein interdisziplinäres Büro für Architektur und Stadtplanung mit Fokus auf Materialität, Licht und Kontext.",
      },
      { property: "og:title", content: "Büro — Schams Consult" },
      { property: "og:url", content: "/buero" },
    ],
    links: [{ rel: "canonical", href: "/buero" }],
  }),
  component: BueroPage,
});

function BueroPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-24 lg:px-12 lg:pt-32">
        <header className="border-t border-border pt-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
            Über uns
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
            Ein Büro als <span className="italic">Dialograum</span>.
          </h1>
        </header>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-2xl italic leading-relaxed text-brand-black md:text-3xl">
              „Gute Architektur ist nicht das, was man sieht — sondern wie man sich
              darin bewegt.“
            </p>
          </div>
          <div className="space-y-8 text-base leading-relaxed text-brand-black/75 lg:col-span-6 lg:col-start-7">
            <p>
              Schams Consult ist ein interdisziplinäres Büro für Architektur und
              Stadtplanung. Unser Team arbeitet an der Schnittstelle von Entwurf,
              Prozess und Ort — mit dem Anspruch, Räume zu schaffen, die den Menschen
              dienen und dem Ort etwas geben.
            </p>
            <p>
              Wir verstehen Planung als Dialog: mit Bauherren, mit Kommunen, mit
              Bewohnerinnen und Bewohnern. Aus diesem Dialog entstehen Projekte, die
              nicht laut sein müssen, um Bestand zu haben.
            </p>
            <p>
              Unsere Arbeit reicht vom Einzelbau bis zum städtebaulichen Rahmenplan.
              In allen Maßstäben verbindet uns die Überzeugung, dass Zurückhaltung
              und Präzision die stärksten Werkzeuge der Architektur sind.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-concrete py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-3 lg:px-12">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
              Haltung
            </span>
            <h3 className="mt-6 font-serif text-2xl">Kontext vor Geste</h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-black/70">
              Jedes Projekt beginnt mit dem Ort. Topografie, Nachbarschaft, Klima und
              Geschichte prägen unsere Entwürfe stärker als jede formale Vorentscheidung.
            </p>
          </div>
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
              Methode
            </span>
            <h3 className="mt-6 font-serif text-2xl">Prozess als Entwurf</h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-black/70">
              Wir gestalten nicht nur Räume, sondern auch die Prozesse, in denen sie
              entstehen — transparent, moderiert und offen für Beteiligung.
            </p>
          </div>
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
              Verantwortung
            </span>
            <h3 className="mt-6 font-serif text-2xl">Bauen für Bestand</h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-black/70">
              Ressourcenschonende Konstruktionen, robuste Materialien und nutzungsoffene
              Grundrisse — Architektur, die Generationen überdauert.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
