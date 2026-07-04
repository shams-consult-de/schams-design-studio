import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Schams Consult" },
      {
        name: "description",
        content:
          "Kontaktieren Sie Schams Consult — Ihr Büro für Architektur und Stadtplanung. Wir freuen uns auf Ihr Projekt.",
      },
      { property: "og:title", content: "Kontakt — Schams Consult" },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
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
          Sprechen wir über <br />
          <span className="italic">Ihr Projekt</span>.
        </h1>
      </header>

      <div className="mt-20 grid gap-16 lg:grid-cols-12">
        <aside className="space-y-10 lg:col-span-4">
          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Büro
            </h2>
            <address className="mt-4 not-italic leading-relaxed">
              Schams Consult
              <br />
              Architektur & Stadtplanung
              <br />
              Deutschland
            </address>
          </div>
          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Direkt
            </h2>
            <p className="mt-4 leading-relaxed">
              <a
                href="mailto:office@schamsconsult.de"
                className="border-b border-brand-black pb-0.5 italic hover:border-brand-accent hover:text-brand-accent"
              >
                office@schamsconsult.de
              </a>
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
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  required
                  className="mt-1"
                />
                <label htmlFor="privacy" className="text-sm text-brand-black/70">
                  Ich habe die{" "}
                  <a href="/datenschutz" className="underline hover:text-brand-accent">
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung
                  meiner Anfrage zu.
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
