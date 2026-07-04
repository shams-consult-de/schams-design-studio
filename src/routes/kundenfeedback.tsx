import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/kundenfeedback")({
  head: () => ({
    meta: [
      { title: "Kundenfeedback — Shams Consult" },
      {
        name: "description",
        content:
          "Google-Rezensionen unserer Kundinnen und Kunden über die Zusammenarbeit mit Shams Consult — Architektur, Stadtplanung und Baugenehmigungen.",
      },
      { property: "og:title", content: "Kundenfeedback — Shams Consult" },
      { property: "og:url", content: "/kundenfeedback" },
    ],
    links: [{ rel: "canonical", href: "/kundenfeedback" }],
  }),
  component: FeedbackPage,
});

const reviews = [
  {
    name: "Samuel Allaw",
    when: "vor 4 Wochen",
    text: "Ausgezeichnet! Shams Consult hat als einziges Architekturbüro unser geplantes Projekt bei der Bauaufsicht durchgesetzt. Wir haben jahrelang mit anderen Architekten für eine Baugenehmigung gekämpft, jedoch ohne Erfolg. Herr Shams hat unser kompliziertes Projekt mit 9 Wohnungen an sich genommen und uns die lang ersehnte Baugenehmigung erbracht. Die Kommunikation war zu jeder Zeit super und wir haben uns sehr gut aufgehoben gefühlt. Die Abwicklung war zu jeder Zeit sehr professionell. Wir können Herrn Shams und sein Büro wärmstens weiterempfehlen!",
  },
  {
    name: "Simon Richter",
    when: "vor 4 Wochen",
    text: "Hervorragende Beratung und flexible Anpassung an unsere Vorstellungen und Wünsche! Herr Shams und sein Team waren während der Bearbeitung der Planung immer erreichbar und standen mit Rat und Tat zur Seite. Sehr gut empfanden wir die hohe Motivation der Planer und die Bereitschaft, auch einige extra Meter zu gehen falls nötig. Ausgezeichneter Service und gute Fachkompetenz. Vielen Dank an das Planungsbüro für die gute Arbeit.",
  },
  {
    name: "Frau Rauck",
    when: "vor 4 Monaten",
    text: "Sehr kompetent und professionell — wir können das Architekturbüro Shams nur weiterempfehlen!",
  },
  {
    name: "Omar Fedai",
    when: "vor 6 Monaten",
    text: "Herr Shams überzeugte mich mit Fachkompetenz und Professionalität. Ich kann das Architektenbüro zu 100% weiterempfehlen.",
  },
  {
    name: "Holger Elvers",
    when: "vor 3 Jahren",
    text: "Ausgezeichnete Beratung und Projektleitung. Ich habe mich jederzeit gut aufgehoben gefühlt. Die Kommunikation mit Hr. Shams war stets freundlich und immer fachlich kompetent. Ich würde ihn jederzeit bedenkenlos weiterempfehlen. Viele Grüße von einem sehr zufriedenen Kunden aus dem Rhein-Neckar-Kreis.",
  },
  {
    name: "Mahi Jan",
    when: "vor 6 Monaten",
    text: "Klare Weiterempfehlung! Sehr kompetent, unkompliziert, kreativ und freundlich!",
  },
  {
    name: "Sher Ahmad",
    when: "vor 6 Monaten",
    text: "Sehr guter und freundlicher Architekt.",
  },
  {
    name: "Herr Sauer",
    when: "vor 6 Monaten",
    text: "Die Zusammenarbeit mit dem Architekten Shams war von gegenseitigem Respekt geprägt. Fachlich 1A, bringt Herr Shams seine eigenen Ideen positiv ins Bauvorhaben mit ein.",
  },
  {
    name: "彭玲怡 Frau Peng",
    when: "vor einem Monat",
    text: "Herr Shams hat für uns eine Genehmigung beantragt. Wir sind Ausländer und verstehen nicht so gut Deutsch. Er ist sehr nett und geduldig. Er hat uns wirklich gut erklärt und uns sehr viel geholfen. Wir möchten das Architekturbüro weiterempfehlen.",
  },
  {
    name: "Petra Dunkel",
    when: "vor 2 Jahren",
    text: "Obwohl coronabedingt kein persönlicher Kontakt möglich war, hat Herr Shams uns immer telefonisch auf dem Laufenden gehalten und sich immer die Zeit genommen, die wir für unsere Fragen und Anliegen hatten.",
  },
  {
    name: "Jamo",
    when: "vor 6 Monaten",
    text: "Tolles Team! Herr Shams war von der Planung bis zur Genehmigung unseres Bauvorhabens super Unterstützung.",
  },
  {
    name: "Ali",
    when: "vor 3 Jahren",
    text: "Spitze.",
  },
];

function FeedbackPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
      <header className="border-t border-border pt-12">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
          Kundenstimmen
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
          Kunden<span className="italic">feedback</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-brand-black/70">
          Auszüge aus den Google-Rezensionen unserer Kundinnen und Kunden — von
          Bauanträgen über Genehmigungsplanung bis zu komplexen Mehrfamilienhäusern.
        </p>
      </header>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.name + i} delay={(i % 3) * 80}>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-concrete/40 p-8 transition-all hover:-translate-y-1 hover:border-brand-accent/50 hover:bg-brand-white hover:shadow-xl hover:shadow-brand-black/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-0.5 text-brand-accent">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-brand-black/15" aria-hidden="true" />
              </div>
              <p className="mt-6 flex-1 text-sm leading-relaxed text-brand-black/75">
                {r.text}
              </p>
              <footer className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-brand-black">{r.name}</p>
                <p className="text-xs text-brand-black/50">{r.when}</p>
              </footer>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
