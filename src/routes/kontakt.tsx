import { createFileRoute } from "@tanstack/react-router";
import { Icon } from "@/components/icon";
import { useState } from "react";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Shams Consult" },
      {
        name: "description",
        content:
          "Kontakt Shams Consult — Büros Frankfurt am Main und Rödermark. Erstgespräch online buchen, WhatsApp, Telefon oder E-Mail.",
      },
      { property: "og:title", content: "Kontakt — Shams Consult" },
      { property: "og:url", content: "https://shams-consult.de/kontakt" },
    ],
    links: [{ rel: "canonical", href: "https://shams-consult.de/kontakt" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
      <header className="border-t border-border pt-12">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
          Kontakt
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
          Sprechen Sie <br />
          <span className="italic">uns an</span>.
        </h1>
        <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-brand-black/70">
          Sichern Sie sich einen unverbindlichen Beratungstermin — online buchbar, per
          WhatsApp, Telefon oder E-Mail.
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
            <Icon name="comment" className="text-base" /> Über WhatsApp
          </a>
        </div>
      </header>

      <div className="mt-20 grid gap-16 lg:grid-cols-12">
        <aside className="space-y-10 lg:col-span-4">
          {CONTACT.offices.map((o) => (
            <div key={o.name}>
              <h2 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                {o.name}
              </h2>
              <address className="mt-4 not-italic leading-relaxed">
                <Icon name="location-dot" className="mb-2 text-base text-brand-accent" />
                {o.street}
                <br />
                {o.city}
                <br />
                <a
                  href={o.phoneHref}
                  className="mt-2 inline-flex items-center gap-2 hover:text-brand-accent"
                >
                  <Icon name="phone" className="text-base" /> {o.phone}
                </a>
              </address>
            </div>
          ))}
          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              E-Mail
            </h2>
            <p className="mt-4 leading-relaxed">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 border-b border-brand-black pb-0.5 italic hover:border-brand-accent hover:text-brand-accent"
              >
                <Icon name="envelope" className="text-base" /> {CONTACT.email}
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Kammer
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-black/70">
              Mitglied Architekten- und Stadtplanerkammer Hessen · AKH Nr. 21886
            </p>
          </div>
        </aside>

        <div className="lg:col-span-8">
          {sent ? (
            <div className="rounded-sm border border-border bg-concrete p-10">
              <h2 className="font-serif text-3xl">Vielen Dank.</h2>
              <p className="mt-4 text-brand-black/70">
                Wir haben Ihre Nachricht erhalten und melden uns in Kürze bei Ihnen.
              </p>
            </div>
          ) : (
            <form
              className="grid gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              noValidate
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full border-b border-input bg-transparent py-3 text-base outline-none focus:border-brand-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                  >
                    E-Mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full border-b border-input bg-transparent py-3 text-base outline-none focus:border-brand-accent"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                >
                  Betreff
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full border-b border-input bg-transparent py-3 text-base outline-none focus:border-brand-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                >
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full resize-none border-b border-input bg-transparent py-3 text-base outline-none focus:border-brand-accent"
                />
              </div>
              <div className="flex items-start gap-3">
                <input id="privacy" name="privacy" type="checkbox" required className="mt-1" />
                <label htmlFor="privacy" className="text-sm text-brand-black/70">
                  Ich habe die{" "}
                  <a href="/datenschutz" className="underline hover:text-brand-accent">
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner
                  Anfrage zu.
                </label>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-sm bg-brand-black px-8 py-3 text-xs font-medium uppercase tracking-widest text-brand-white transition-colors hover:bg-brand-accent"
                >
                  Nachricht senden
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
