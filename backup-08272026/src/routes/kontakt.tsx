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
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const subject = (formData.get("subject") as string) || "Anfrage über Website";
    const message = (formData.get("message") as string) || "";

    const payload = { name, email, subject, message };
    setSubmittedData(payload);
    setSent(true);

    const bodyText = `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`;
    const mailtoUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
      <header className="border-t border-border pt-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
          Kontakt
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
          Sprechen Sie <br />
          <span className="italic">uns an</span>.
        </h1>
        <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-brand-black/80">
          Sichern Sie sich einen unverbindlichen Beratungstermin — online buchbar, per WhatsApp,
          Telefon oder E-Mail.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={CONTACT.bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-white shadow-md shadow-brand-accent/20 transition-transform hover:-translate-y-0.5"
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
            <div
              key={o.name}
              className="rounded-xl border border-border bg-brand-white p-5 shadow-sm"
            >
              <h2 className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                {o.name}
              </h2>
              <address className="mt-3 not-italic leading-relaxed text-sm text-brand-black/90">
                <div className="flex items-start gap-2">
                  <Icon name="location-dot" className="mt-1 text-base text-brand-accent shrink-0" />
                  <div>
                    {o.street}
                    <br />
                    {o.city}
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-3 pt-3 border-t border-border">
                  <a
                    href={o.phoneHref}
                    className="inline-flex items-center gap-1.5 font-medium hover:text-brand-accent"
                  >
                    <Icon name="phone" className="text-sm text-brand-accent" /> {o.phone}
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${o.street}, ${o.city}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-brand-black/60 hover:text-brand-accent"
                  >
                    <Icon name="arrow-up-right-from-square" className="text-xs" />
                    <span>In Maps öffnen</span>
                  </a>
                </div>
              </address>
            </div>
          ))}
          <div className="rounded-xl border border-border bg-brand-white p-5 shadow-sm space-y-4">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                E-Mail
              </h2>
              <p className="mt-2 leading-relaxed">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 border-b border-brand-black pb-0.5 text-sm font-medium italic hover:border-brand-accent hover:text-brand-accent"
                >
                  <Icon name="envelope" className="text-base text-brand-accent" /> {CONTACT.email}
                </a>
              </p>
            </div>
            <div className="pt-3 border-t border-border">
              <button
                type="button"
                onClick={() => {
                  const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Shams;Majeed;;Dipl.-Ing. (FH) M.Eng.;\nFN:Dipl.-Ing. Majeed Shams - Shams Consult\nORG:Shams Consult Architektur und Stadtplanung\nTITLE:Büroinhaber, Architekt und Stadtplaner\nTEL;TYPE=WORK,VOICE:06974223777\nTEL;TYPE=CELL,VOICE:+4915151864090\nEMAIL;TYPE=PREF,INTERNET:office@shams-consult.de\nURL:https://shams-consult.de\nADR;TYPE=WORK:;;Carl-von-Noorden-Platz 5;Frankfurt am Main;;60596;Deutschland\nADR;TYPE=WORK:;;Carl-Zeiss-Str. 43;Rödermark;;63322;Deutschland\nEND:VCARD`;
                  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8;" });
                  const url = URL.createObjectURL(blob);
                  const link = document.createElement("a");
                  link.href = url;
                  link.setAttribute("download", "Shams-Consult.vcf");
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  URL.revokeObjectURL(url);
                }}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-black hover:text-brand-accent"
              >
                <Icon name="address-card" className="text-sm text-brand-accent" />
                <span>Digitale Visitenkarte (VCF) laden</span>
              </button>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-brand-white p-5 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Kammer
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-brand-black/75">
              Mitglied Architekten- und Stadtplanerkammer Hessen · AKH Nr. 21886
            </p>
          </div>
        </aside>

        <div className="lg:col-span-8">
          {sent ? (
            <div className="rounded-lg border border-border bg-concrete p-8 md:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
                <Icon name="calendar-check" className="text-2xl" />
              </span>
              <h2 className="mt-4 font-serif text-3xl">Vielen Dank für Ihre Anfrage!</h2>
              <p className="mt-3 text-base text-brand-black/80">
                Ihr E-Mail-Programm sollte sich soeben mit Ihrem Anfrage-Entwurf geöffnet haben.
              </p>
              {submittedData && (
                <div className="mt-6 rounded border border-border bg-brand-white p-4 text-sm text-brand-black/75">
                  <p>
                    <strong>Betreff:</strong> {submittedData.subject}
                  </p>
                  <p className="mt-1">
                    <strong>Absender:</strong> {submittedData.name} ({submittedData.email})
                  </p>
                </div>
              )}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(submittedData?.subject || "Anfrage")}&body=${encodeURIComponent(submittedData?.message || "")}`}
                  className="inline-flex items-center gap-2 rounded-sm bg-brand-black px-6 py-3 text-xs font-semibold uppercase tracking-widest text-brand-white transition-colors hover:bg-brand-accent"
                >
                  <Icon name="envelope" className="text-sm" /> E-Mail manuell öffnen
                </a>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
                >
                  <Icon name="comment" className="text-sm" /> Über WhatsApp schreiben
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setSubmittedData(null);
                  }}
                  className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-xs font-semibold uppercase tracking-widest text-brand-black hover:bg-brand-white"
                >
                  Weiteres Formular senden
                </button>
              </div>
            </div>
          ) : (
            <form className="grid gap-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Name <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Ihr vollständiger Name"
                    autoComplete="name"
                    className="w-full border-b border-input bg-transparent py-3 text-base outline-none transition-colors focus:border-brand-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    E-Mail <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="ihre.adresse@beispiel.de"
                    autoComplete="email"
                    className="w-full border-b border-input bg-transparent py-3 text-base outline-none transition-colors focus:border-brand-accent"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Betreff
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="z.B. Neubau EFH / Bauantrag / Stadtplanung"
                  className="w-full border-b border-input bg-transparent py-3 text-base outline-none transition-colors focus:border-brand-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Nachricht <span className="text-brand-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Beschreiben Sie kurz Ihr Vorhaben oder Ihre Fragen..."
                  className="w-full resize-none border-b border-input bg-transparent py-3 text-base outline-none transition-colors focus:border-brand-accent"
                />
              </div>
              <div className="flex items-start gap-3">
                <input id="privacy" name="privacy" type="checkbox" required className="mt-1" />
                <label htmlFor="privacy" className="text-xs text-brand-black/75">
                  Ich habe die{" "}
                  <a href="/datenschutz" className="underline hover:text-brand-accent">
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage
                  zu.
                </label>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-black px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-brand-white transition-all hover:bg-brand-accent hover:shadow-lg hover:shadow-brand-accent/20"
                >
                  <span>Nachricht absenden</span>
                  <Icon name="arrow-right" className="text-sm" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
