import { Language } from "../lib/i18n";

interface FounderPageProps {
  language: Language;
  onBack: () => void;
  onBookConsultation: () => void;
}

export function FounderPage({
  language,
  onBack,
  onBookConsultation,
}: FounderPageProps) {
  const isDe = language === "de";

  return (
    <article className="min-h-screen bg-[#FFFFFF] text-zinc-900 pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Back Navigation */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-600 hover:text-[#DC2626] transition-colors cursor-pointer"
          >
            <span>←</span>
            <span>{isDe ? "Zurück zur Startseite" : "Back to Home"}</span>
          </button>

          <span className="text-xs font-mono text-zinc-400">
            Shams Consult · {isDe ? "Über den Gründer" : "About the Founder"}
          </span>
        </div>

        {/* Header Block */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#DC2626]" />
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#DC2626]">
              {isDe ? "DIE GESCHICHTE DES GRÜNDERS" : "THE FOUNDER'S STORY"}
            </span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.12]">
            {isDe
              ? "Vom Traum zur Wirklichkeit: Die Reise unseres Gründers"
              : "From a Dream to Reality: The Journey of Our Founder"}
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            {isDe
              ? "Vertrauen, Hingabe und die Leidenschaft, durch Architektur und Städtebau bleibende Werte für Menschen und Städte zu schaffen."
              : "Trust, dedication, and the passion to create enduring value for people and communities through architecture and urban planning."}
          </p>
        </div>

        {/* Emotional Guiding Quote Banner */}
        <div className="bg-[#111111] text-white rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden space-y-4">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#DC2626]/15 rounded-full blur-3xl pointer-events-none" />

          <p className="font-sans text-2xl sm:text-3xl text-zinc-100 font-medium italic leading-snug">
            „From nobody to somebody, to help and share experiences with everybody.“
          </p>

          <div className="pt-2 flex items-center justify-between border-t border-zinc-800">
            <div className="flex items-center gap-3">
              <img
                src="/images/team/shams-majeed-main-image.png"
                alt="Dipl.-Ing. Majeed Shams"
                className="h-11 w-11 rounded-full object-cover object-top border border-[#DC2626]"
              />
              <div>
                <span className="text-xs font-bold text-white block">
                  Dipl.-Ing. Majeed Shams
                </span>
                <span className="text-[11px] text-zinc-400">
                  {isDe ? "Architekt · Stadtplaner · Dozent · Gründer" : "Architect · Urban Planner · Researcher · Founder"}
                </span>
              </div>
            </div>

            <span className="font-signature text-2xl sm:text-3xl text-zinc-300 select-none">
              Majeed Shams
            </span>
          </div>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-4">
          {/* Left Column: Portrait & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm">
              <img
                src="/images/team/shams-majeed-main-image.png"
                alt="Dipl.-Ing. Majeed Shams Portrait"
                className="w-full h-auto object-cover filter contrast-105"
              />
            </div>

            <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-3 text-xs">
              <span className="text-zinc-400 uppercase tracking-wider font-bold block text-[10px]">
                {isDe ? "Akademische Qualifikationen" : "Academic Credentials"}
              </span>
              <ul className="space-y-2 text-zinc-800 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] font-bold">✓</span>
                  <span><strong>Dipl.-Ing. (FH) Architektur</strong> — Hochschule Karlsruhe</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] font-bold">✓</span>
                  <span><strong>Master of Science (M.Sc.) Stadtplanung</strong> — HFT Stuttgart</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] font-bold">✓</span>
                  <span><strong>Mitglied der Architektenkammer</strong> (AKH Hessen & AKBW)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626] font-bold">✓</span>
                  <span><strong>Lehrbeauftragter / Dozent</strong> für Baukonstruktion & Entwurf</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: The Authentic Story */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-zinc-700 font-light leading-relaxed">
            {isDe ? (
              <>
                <h2 className="font-sans text-xl sm:text-2xl font-bold text-zinc-950">
                  Der Mut zum Neuanfang: Ankunft mit null Euro
                </h2>

                <p>
                  Vertraut haben mir dieses Land und seine herzlichen Menschen, als ich im Jahr 2005{" "}
                  <strong className="font-semibold text-zinc-950">mit null Euro</strong> und meinen wenigen mitgenommenen Erinnerungsstücken aus Afghanistan am Düsseldorfer Flughafen ankam.
                </p>

                <p>
                  Mein Reisekoffer samt all meinen Fotos, Büchern und persönlichen Habseligkeiten ging auf der Reise verloren. Doch was mir niemand nehmen konnte, war mein Traum: <em>Architekt zu werden und durch ehrliche Arbeit Orte zu schaffen, die Menschen verbinden und schützen.</em>
                </p>

                <h3 className="font-sans text-lg font-bold text-zinc-950 pt-3">
                  Jahre des Lernens und der Disziplin
                </h3>

                <p>
                  Knapp zwanzig Jahre sind seitdem vergangen. Vier Jahre widmete ich mit ganzer Kraft dem Architekturstudium in Karlsruhe, gefolgt von zwei intensiven Jahren des berufsbegleitenden Masterstudiums der Stadtplanung in Stuttgart.
                </p>

                <p>
                  Mit über 15 Jahren praktischer Erfahrung als Architekt und Stadtplaner stehe ich heute da — dankbar, diesem Land und seinen Menschen mit jedem Entwurf, jedem Bebauungsplan und jedem Bauantrag etwas von Herzen zurückzugeben.
                </p>

                <h3 className="font-sans text-lg font-bold text-zinc-950 pt-3">
                  Warum Architektur für mich Vertrauen bedeutet
                </h3>

                <p>
                  Zahlreiche Bauherren, Kommunen und institutionelle Partner haben ihr Vertrauen in mich und mein Büro gesetzt. Wir durften Projekte mit Budgets von 1.000 Euro bis hin zu über 13,5 Millionen Euro erfolgreich und rechtssicher realisieren.
                </p>

                <p>
                  Für mich ist Architektur kein Beruf — es ist eine Berufung und ein Versprechen. Die Beziehungen, die wir zu unseren Bauherren aufbauen, sind genauso wertvoll wie die Gebäude, die wir für sie entwerfen.
                </p>
              </>
            ) : (
              <>
                <h2 className="font-sans text-xl sm:text-2xl font-bold text-zinc-950">
                  The Courage to Begin Anew: Arriving with Zero Euros
                </h2>

                <p>
                  This country and its people placed their trust in me when I arrived at Düsseldorf Airport in 2005{" "}
                  <strong className="font-semibold text-zinc-950">with zero euros</strong> and a few cherished memories from Afghanistan.
                </p>

                <p>
                  My travel suitcase—containing all my photos, books, and belongings—was lost on the journey. But what no one could take away was my dream: <em>to become an architect and dedicate my life to designing spaces that protect, inspire, and unite communities.</em>
                </p>

                <h3 className="font-sans text-lg font-bold text-zinc-950 pt-3">
                  Years of Relentless Study and Discipline
                </h3>

                <p>
                  Nearly twenty years have passed since that day. I dedicated four years to my architecture degree in Karlsruhe, followed by two rigorous years completing my Master of Science in Urban Planning in Stuttgart while working full-time.
                </p>

                <p>
                  With over 15 years of professional practice as a licensed architect and urban planner, I stand today deeply grateful to give back to this society and its people through every design, master plan, and building approval.
                </p>

                <h3 className="font-sans text-lg font-bold text-zinc-950 pt-3">
                  Why Architecture is Founded on Trust
                </h3>

                <p>
                  Dozens of homeowners, investors, and public municipalities have placed their confidence in me and my team. We have successfully managed developments ranging from €1,000 up to €13.5 million with unyielding precision.
                </p>

                <p>
                  To me, architecture is not merely a job—it is a lifelong calling. The relationships we build with our clients are just as important as the buildings we design for them.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Heartfelt Emotional Tribute to Germany & German Trust */}
        <section className="p-7 sm:p-9 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 text-white border border-white/15 shadow-2xl relative overflow-hidden space-y-4">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#DC2626]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              {/* Bright Vivid German Flag Emblem */}
              <div className="p-1.5 rounded-lg bg-black/60 border border-white/20 shadow-md shrink-0">
                <svg
                  viewBox="0 0 5 3"
                  className="h-6 w-9 sm:h-7 sm:w-10 rounded-[3px] overflow-hidden shadow-xs ring-1 ring-white/30"
                  aria-label="Bundesrepublik Deutschland Flagge"
                >
                  <rect width="5" height="1" y="0" fill="#000000" />
                  <rect width="5" height="1" y="1" fill="#FF0000" />
                  <rect width="5" height="1" y="2" fill="#FFD700" />
                </svg>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#DC2626] font-bold block">
                  {isDe ? "DANKBARKEIT & DEUTSCHES INGENIEURVERSPRECHEN" : "GRATITUDE & GERMAN ENGINEERING CALLING"}
                </span>
                <h3 className="font-sans text-base sm:text-lg font-bold text-white leading-snug">
                  {isDe
                    ? "Deutschland – Eine Heimat des Vertrauens und der neuen Lebenschancen"
                    : "Germany – A Homeland of Trust, Education, and Life-Changing Opportunity"}
                </h3>
              </div>
            </div>

            <span className="text-xs font-mono text-zinc-400 shrink-0 self-start sm:self-auto">
              AKH Hessen · Nr. 21886
            </span>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed italic">
            {isDe
              ? "„Als ich 2005 mit nichts als der Hoffnung auf Bildung nach Deutschland kam, schenkte mir diese Gesellschaft ihr Vertrauen. Heute ist es mein größtes Lebensanliegen, dieses Vertrauen durch redliche deutsche Planungsdisziplin, kompromisslose Zuverlässigkeit nach DIN & VOB und den Bau nachhaltiger Werte für Menschen und Städte von Herzen zurückzugeben.“"
              : "“When I arrived in Germany in 2005 with nothing but the hope for education, this society placed its unconditional trust in me. Today, my highest life’s calling is to repay that trust through honest German planning discipline, uncompromising reliability under DIN & VOB, and building enduring architectural value for people and communities.”"}
          </p>

          <div className="pt-2 flex items-center justify-between text-xs text-zinc-400">
            <span className="font-semibold text-zinc-200">
              – Dipl.-Ing. (FH) Majeed Shams M.Eng.
            </span>
            <span className="font-mono text-[11px] text-zinc-400">
              {isDe ? "Dozent Frankfurt UAS · Gründer Shams Consult" : "Lecturer Frankfurt UAS · Founder Shams Consult"}
            </span>
          </div>
        </section>

        {/* Historical Newspaper Article Documentation */}
        <section className="pt-6 space-y-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block">
              {isDe ? "HISTORISCHE DOKUMENTATION" : "HISTORICAL DOCUMENTATION"}
            </span>
            <h2 className="font-sans text-2xl font-bold text-zinc-950">
              {isDe
                ? "Rheinische Post, Ausgabe vom 30. August 2005"
                : "Rheinische Post Newspaper, Edition August 30, 2005"}
            </h2>
          </div>

          <figure className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-md">
            <img
              src="/images/from-nobody-to-somebody-to-help-and-share-experiences-with-e-.jpg"
              alt="Erfolgsgeschichte von Majeed Shams in der Rheinischen Post 2005"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <figcaption className="p-4 sm:p-5 text-xs text-zinc-600 bg-zinc-50 border-t border-zinc-200 leading-relaxed">
              <strong>{isDe ? "Historisches Zeitdokument:" : "Historical Press Record:"}</strong>{" "}
              {isDe
                ? "Rheinische Post, 30.08.2005 — Bericht über Majeed Shams' Ankunft am Düsseldorfer Flughafen und seine Vision: „From nobody to somebody, to help and share experiences with everybody.“"
                : "Rheinische Post, August 30, 2005 — Article documenting Majeed Shams' arrival at Düsseldorf Airport and his guiding vision: 'From nobody to somebody, to help and share experiences with everybody.'"}
            </figcaption>
          </figure>
        </section>

        {/* Consultation Call to Action */}
        <div className="bg-[#111111] text-white rounded-2xl p-8 sm:p-12 text-center space-y-5 shadow-2xl">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
            {isDe
              ? "Möchten Sie Ihr Projekt persönlich mit Majeed Shams besprechen?"
              : "Would You Like to Discuss Your Project with Majeed Shams?"}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-xl mx-auto leading-relaxed">
            {isDe
              ? "Ob Wohnungsbau, städtebaulicher Bebauungsplan oder anspruchsvolles Genehmigungsverfahren — wir stehen Ihnen mit Erfahrung und vollem Engagement zur Seite."
              : "Whether residential construction, urban master planning, or complex permit proceedings — we stand by your side with dedication and proven expertise."}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={onBookConsultation}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              {isDe ? "Persönliches Erstgespräch anfragen →" : "Request Consultation →"}
            </button>
            <button
              type="button"
              onClick={onBack}
              className="bg-transparent border border-zinc-600 hover:border-white text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              {isDe ? "Zurück zur Startseite" : "Back to Home"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
