import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@/components/icon";
import heroAsset from "@/assets/stadtvilla_mfa_rödermark.jpg.asset.json";
const heroFacade = heroAsset.url;
import { projects } from "@/lib/projects";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shams Consult — Architektur & Stadtplanung Frankfurt / Rödermark" },
      {
        name: "description",
        content:
          "Shams Consult — Planungsbüro für Architektur und Stadtplanung. Über 15 Jahre Erfahrung, über 100 realisierte Projekte. Büros in Frankfurt am Main und Rödermark.",
      },
      { property: "og:url", content: "https://shams-consult.de/" },
    ],
    links: [{ rel: "canonical", href: "https://shams-consult.de/" }],
  }),
  component: HomePage,
});

const reasons = [
  {
    icon: "building",
    title: "Über 15 Jahre Erfahrung & über 100 realisierte Projekte",
    body: "Wir planen und realisieren seit mehr als einem Jahrzehnt hochwertige Architektur- und Bauprojekte – wirtschaftlich, gestalterisch überzeugend und funktional. Öffentliche wie private Bauherren profitieren von unserer Erfahrung.",
  },
  {
    icon: "scale-balanced",
    title: "Bauanträge und Planungsrecht – Fachwissen aus der Praxis",
    body: "Büroinhaber Dipl.-Ing. Majeed Shams hat über 100 Bauanträge geprüft – im Rahmen seiner Tätigkeit bei den Städten Dieburg, Weinstadt und Karlsruhe. Dieses Know-how fließt in unsere rechtssichere und fundierte Planungsarbeit ein.",
  },
  {
    icon: "leaf",
    title: "Wirtschaftlich & nachhaltig denken – aus eigener Erfahrung",
    body: "Durch unsere private Beteiligung an Immobilienunternehmen verstehen wir wirtschaftliche Anforderungen und ökologische Zielsetzungen unserer Kunden besonders gut. Wir planen lösungsorientiert – aus Sicht der Investoren.",
  },
  {
    icon: "graduation-cap",
    title: "Aktive Forschung & Lehre – am Puls der Baubranche",
    body: "Seit 2020 betreut Majeed Shams Forschungsprojekte und Abschlussarbeiten an der Frankfurt UAS (University of Applied Sciences). So fließen aktuelle Erkenntnisse aus Architektur, Stadtplanung und Baumanagement direkt in unsere Projekte ein.",
  },
  {
    icon: "users",
    title: "Ein leistungsstarkes Team für komplexe Planungsaufgaben",
    body: "Shams Consult ist ein innovatives Planungsbüro mit einem festen Netzwerk aus 16 erfahrenen Architektinnen und Ingenieurinnen. Wir garantieren kreative Lösungen, Termin- und Kostensicherheit – auch bei anspruchsvollen Projekten.",
  },
];

function HomePage() {
  const featured = projects.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] w-full overflow-hidden">
        <img
          src={heroFacade}
          alt="Detailaufnahme einer Betonfassade mit klaren geometrischen Schatten"
          width={1920}
          height={1200}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-brand-white/90 via-brand-white/55 to-transparent" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-24 lg:px-12">
          <div className="max-w-2xl" data-reveal="left">
            <p className="shams-float text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
              Architektur · Stadtplanung · Forschung
            </p>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] text-brand-black md:text-7xl lg:text-[5.5rem]">
              Ihr Raum — <br />
              <span className="font-serif italic font-normal">unsere Vision.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg font-light leading-relaxed text-brand-black/75">
              Shams Consult — Planungsbüro für Innovation und Kreativität. Über 15 Jahre
              Erfahrung, über 100 realisierte Projekte. Büros in Frankfurt am Main und Rödermark.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={CONTACT.bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-brand-accent px-8 py-4 text-base font-semibold text-brand-white shadow-lg shadow-brand-accent/25 transition-transform hover:-translate-y-0.5"
              >
                <Icon name="calendar-check" className="text-xl" />
                Erstgespräch buchen
                <Icon name="arrow-right" className="text-xl transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <Icon name="comment" className="text-xl" />
                Über WhatsApp
              </a>
              <Link
                to="/projekte"
                className="inline-flex items-center gap-2 rounded-full border border-brand-black/20 bg-brand-white/70 px-7 py-4 text-base font-medium text-brand-black backdrop-blur transition-colors hover:border-brand-black"
              >
                Projekte ansehen
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-brand-black/70">
              <a href={CONTACT.offices[0].phoneHref} className="inline-flex items-center gap-2 hover:text-brand-accent">
                <Icon name="phone" className="text-base" /> Frankfurt: {CONTACT.offices[0].phone}
              </a>
              <a href={CONTACT.offices[1].phoneHref} className="inline-flex items-center gap-2 hover:text-brand-accent">
                <Icon name="phone" className="text-base" /> Rödermark: {CONTACT.offices[1].phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 hover:text-brand-accent">
                <Icon name="envelope" className="text-base" /> {CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5 gute Gründe */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <header className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end" data-reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
              Warum Shams Consult
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              5 gute Gründe für eine <span className="italic">Zusammenarbeit</span>.
            </h2>
          </div>
          <p className="max-w-md text-brand-black/70">
            Nehmen Sie gerne Kontakt mit uns auf. Wir freuen uns auf die Zusammenarbeit mit Ihnen.
          </p>
        </header>

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon, title, body }, i) => (
            <li
              key={title}
              data-reveal
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
              className="group flex flex-col rounded-2xl border border-border bg-concrete/40 p-8 transition-all hover:-translate-y-1 hover:border-brand-accent/50 hover:bg-brand-white hover:shadow-xl hover:shadow-brand-black/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-brand-white">
                  <Icon name={icon} className="text-xl" />
                </div>
                <span className="font-serif text-3xl text-brand-black/20">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-serif text-xl leading-snug">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-brand-black/70">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Aktuelles Projekt / Portfolio */}
      <section className="bg-concrete/60 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <header className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end" data-reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
                Portfolio
              </p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                Ausgewählte <span className="italic">Projekte</span>.
              </h2>
              <p className="mt-4 max-w-lg text-brand-black/70">
                Vom Einfamilienhaus in Lingen (Ems) bis zum Bebauungsplan „Töpfenmühle“ in
                Gersfeld (Rhön) — ein Auszug aus unserer Arbeit.
              </p>
            </div>
            <Link
              to="/projekte"
              className="link-sweep inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-black transition-colors hover:text-brand-accent"
            >
              Alle Projekte <Icon name="arrow-right" className="text-base" />
            </Link>
          </header>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {featured.map((p, i) => (
              <article
                key={p.slug}
                className="group image-zoom"
                data-reveal
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-brand-black">{p.title}</h3>
                <p className="text-xs text-brand-black/60">{p.location} · {p.year}</p>
              </article>
            ))}
          </div>

          {/* Aktuelles Projekt: Töpfenmühle */}
          <div className="mt-24 grid gap-10 rounded-2xl border border-border bg-brand-white p-8 lg:grid-cols-12 lg:p-12" data-reveal>
            <div className="lg:col-span-5 image-zoom overflow-hidden rounded-xl">
              <img
                src="/images/image-.jpg"
                alt="Begründung Bebauungsplan Töpfenmühle Gersfeld (Rhön), Verfahrensstand: Auslegung"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
                Aktuelles Projekt
              </p>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl">
                Bebauungsplan <span className="italic">„Töpfenmühle“</span>, Gersfeld (Rhön)
              </h3>
              <p className="mt-5 text-brand-black/75 leading-relaxed">
                Der Bebauungsplan „Töpfenmühle“ wurde im Rahmen eines zweistufigen
                Verfahrens mit Artenschutzuntersuchung und Umweltprüfung (Umweltbericht)
                nach § 2 Abs. 4 BauGB aufgestellt. Es handelt sich um einen
                qualifizierten Bebauungsplan gemäß § 30 Abs. 1 BauGB. Innerhalb des
                Geltungsbereiches sind Art und Maß der baulichen Nutzung, die
                überbaubaren Grundstücksflächen und die örtlichen Verkehrsflächen
                festgesetzt. Die Erschließung ist bereits gesichert.
              </p>
              <p className="mt-4 text-brand-black/75 leading-relaxed">
                Ziel ist es, Baurecht für den Geltungsbereich zu schaffen, den Bestand
                zu erhalten und die ländlich geprägte, historisch bedeutsame dörfliche
                Siedlungsstruktur zu bewahren. Zeitgemäße Nutzungen und die energetische
                Sanierung der Bestandsgebäude — inklusive erforderlicher Ersatzbauten —
                sollen mit Planungssicherheit ermöglicht werden. Unbebaute Flächen
                innerhalb des Planungsgebietes bleiben in ihrer natürlichen
                landschaftlichen Form erhalten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kunden & Partner */}
      <PartnersSection />

      {/* Forschung & Lehre Teaser */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
              Forschung & Lehre
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Am Puls der <span className="italic">Baubranche</span>.
            </h2>
            <p className="mt-6 max-w-md text-brand-black/70">
              In Kooperation mit der Frankfurt UAS geben wir aktuelle Themen der Bau- und
              Stadtplanung als Forschungsprojekte heraus und betreuen Bachelor- und
              Masterarbeiten. Aktueller Fachbeitrag: „Stellplatzsatzung im Fokus — Zeit
              für eine kritische Neubewertung“ von Majeed Shams und Leonie Ries.
            </p>
            <Link
              to="/forschung"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-black px-7 py-3.5 text-sm font-semibold text-brand-white transition-colors hover:bg-brand-accent"
            >
              Zur Forschung <Icon name="arrow-right" className="text-base" />
            </Link>
          </div>

          <div className="grid gap-6 lg:col-span-7 md:grid-cols-3">
            {[
              { icon: "graduation-cap", title: "Frankfurt UAS", body: "Lehrbeauftragter seit 2020 — Fachbereich Architektur, Stadtplanung & Bauingenieurwesen." },
              { icon: "landmark", title: "Kommunale Praxis", body: "Über 100 geprüfte Bauanträge in Dieburg, Weinstadt und Karlsruhe." },
              { icon: "users", title: "16 Fachleute", body: "Festes Netzwerk aus Architekt:innen und Ingenieur:innen für komplexe Aufgaben." },
            ].map(({ icon, title, body }) => (
              <div key={title} className="flex flex-col rounded-2xl bg-brand-black p-8 text-brand-white">
                <Icon name={icon} className="text-2xl text-brand-accent" />
                <h3 className="mt-6 font-serif text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-white/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standort & Kontakt */}
      <section className="bg-brand-black py-24 text-brand-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
                Standorte
              </p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                Besuchen Sie <span className="italic">uns</span>.
              </h2>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {CONTACT.offices.map((o) => (
                  <address key={o.name} className="not-italic leading-relaxed">
                    <Icon name="location-dot" className="mb-3 text-xl text-brand-accent" />
                    <strong className="block font-semibold">{o.name}</strong>
                    {o.street}
                    <br />
                    {o.city}
                    <br />
                    <a href={o.phoneHref} className="mt-2 inline-flex items-center gap-2 text-brand-white/80 hover:text-brand-accent">
                      <Icon name="phone" className="text-base" /> {o.phone}
                    </a>
                  </address>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
                Direkt kontaktieren
              </p>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl">
                Beratungstermin sichern.
              </h3>
              <p className="mt-4 max-w-md text-brand-white/70">
                Sichern Sie sich einen unverbindlichen Beratungstermin — bequem online
                buchbar oder direkt per WhatsApp.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={CONTACT.bookingHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-white transition-transform hover:-translate-y-0.5"
                >
                  <Icon name="calendar-check" className="text-base" /> Erstgespräch buchen
                </a>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  <Icon name="comment" className="text-base" /> WhatsApp
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-accent hover:text-brand-accent"
                >
                  <Icon name="envelope" className="text-base" /> {CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const partners = [
  {
    name: "Adapteo",
    tag: "Modulares & temporäres Bauen",
    href: "https://www.adapteo.de",
    body:
      "Unser Geschäftspartner Adapteo aus Neu-Isenburg ist auf modulare und temporäre Gebäude spezialisiert. Gemeinsam realisieren wir 2025 ein Ausweichquartier für über 200 Mitarbeitende eines Behördenzentrums in Berlin — schnell umgesetzt, hoch funktional, nachhaltig gebaut. Wir begleiten Adapteo und die Bundesanstalt für Immobilienaufgaben in Planung und Umsetzung.",
  },
  {
    name: "Stadtwerke Rodgau",
    tag: "Kommunale Infrastruktur",
    href: "https://www.stadtwerke-rodgau.de",
    body:
      "Die Stadtwerke Rodgau sind ein Eigenbetrieb der Stadt Rodgau und fördern ökologische, umweltfreundliche und klimafreundliche Projekte. Wir haben die Stadtwerke bei der Genehmigungsplanung für die Kompostierungsanlage unterstützt — und freuen uns auf weitere gemeinsame Projekte.",
  },
  {
    name: "Frankfurt UAS",
    tag: "Forschung & Lehre",
    href: "https://www.frankfurt-university.de",
    body:
      "In Kooperation mit der Frankfurt University of Applied Sciences geben wir aktuelle Themen der Bau- und Stadtplanung als Forschungsprojekte heraus und betreuen Bachelor- und Masterarbeiten am Fachbereich Architektur, Bauingenieurwesen und Geomatik.",
  },
  {
    name: "INSTINKT Bauunternehmen",
    tag: "Wohnungs- & Reihenhausbau",
    href: "https://www.instinkt-wohnraumberater.de",
    body:
      "INSTINKT Bauunternehmen GmbH mit Sitz in Eschborn baut regional (Rhein-Main-Gebiet) und überregional Einfamilien-, Reihen- und Doppelhäuser sowie Bürobauten. Wir hatten die Ehre, die Firma bei der Planung und Realisierung von drei innovativen Häusern zu unterstützen.",
  },
  {
    name: "SCHOOFS Immobilien",
    tag: "Projektentwicklung Mischnutzung",
    href: "https://www.schoofs-immobilien.de",
    body:
      "SCHOOFS Immobilien ist bundesweit im Bereich Projektentwicklung und Realisierung des Lebensmitteleinzelhandels in Kombination mit Wohnungsbau bekannt. Aktuell begleiten wir das Unternehmen bei einem Supermarkt, 22 Wohnungen, einer Bäckerei und den Außenanlagen.",
  },
];

function PartnersSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
      <header className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end" data-reveal>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
            Kunden & Partner
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            Vertrauen, das <span className="italic">verbindet</span>.
          </h2>
        </div>
        <p className="max-w-md text-brand-black/70">
          Wir arbeiten mit öffentlichen Auftraggebern, Projektentwicklern und
          Bauunternehmen zusammen — von der Machbarkeitsstudie bis zur
          schlüsselfertigen Realisierung.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {partners.map((p, i) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            className="group flex flex-col rounded-2xl border border-border bg-brand-white p-8 transition-all hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-xl hover:shadow-brand-black/5"
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-accent">
                {p.tag}
              </p>
              <Icon name="arrow-right" className="text-base text-brand-black/30 transition-all group-hover:translate-x-1 group-hover:text-brand-accent" />
            </div>
            <h3 className="mt-4 font-serif text-2xl">{p.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-black/70">{p.body}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
