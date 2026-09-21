import React from "react";
import { CONTACT } from "../../lib/contact";
import { FlyerProps } from "./types";

export function CaseStudyFlyer({ language = "all", className = "" }: FlyerProps) {
  const showDe = language === "de" || language === "all";
  const showEn = language === "en" || language === "all";

  return (
    <div className={`flyer-root flyer-casestudy ${className}`}>
      <style>{`
        .flyer-casestudy {
          --brand-red: #d92323;
          --brand-dark: #121417;
          --brand-accent: #0f4c81;
          --brand-light: #f8fafc;
          --brand-border: #e2e8f0;
          --brand-muted: #525c6c;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: var(--brand-dark);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          -webkit-font-smoothing: antialiased;
        }

        .flyer-casestudy .sheet {
          width: 297mm;
          height: 210mm;
          background: #ffffff;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          display: flex;
          position: relative;
          overflow: hidden;
          page-break-after: always;
          break-after: page;
        }

        .flyer-casestudy .panel {
          width: 99mm;
          height: 210mm;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border-right: 1px dashed rgba(0, 0, 0, 0.12);
        }
        .flyer-casestudy .panel:last-child { border-right: none; }
        .flyer-casestudy .fold-marker {
          position: absolute;
          top: 4px;
          right: 4px;
          font-size: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #9aa0a6;
          pointer-events: none;
        }

        /* PANEL 1: COVER */
        .flyer-casestudy .panel-story-cover {
          padding: 8mm;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #ffffff;
        }
        .flyer-casestudy .logo-img { height: 16mm; object-fit: contain; margin-bottom: 2mm; display: block; }
        .flyer-casestudy .sub-brand { font-size: 8pt; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #374151; }
        .flyer-casestudy .story-hero-title { font-size: 17.5pt; font-weight: 800; line-height: 1.18; color: var(--brand-dark); margin: 3mm 0 1.5mm 0; }
        .flyer-casestudy .story-hero-title span { color: var(--brand-red); }
        .flyer-casestudy .story-hero-desc { font-size: 8pt; line-height: 1.4; color: var(--brand-muted); margin-bottom: 2mm; }

        .flyer-casestudy .hero-split-images {
          display: flex;
          flex-direction: column;
          gap: 2.5mm;
          height: 98mm;
          margin-bottom: 2mm;
        }
        .flyer-casestudy .split-card {
          height: 47mm;
          border-radius: 2mm;
          overflow: hidden;
          position: relative;
          box-shadow: 0 2mm 5mm rgba(0,0,0,0.08);
        }
        .flyer-casestudy .split-card img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* COVER FOUNDER BADGE */
        .flyer-casestudy .cover-founder-badge {
          display: flex;
          align-items: center;
          gap: 2.5mm;
          border-top: 1px solid #e5e7eb;
          padding-top: 2mm;
        }
        .flyer-casestudy .cover-founder-avatar {
          width: 9mm;
          height: 9mm;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 1px solid #d1d5db;
        }
        .flyer-casestudy .cover-founder-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
        }

        /* PANEL 2: TIMELINE */
        .flyer-casestudy .panel-timeline {
          background: #fafbfc;
          padding: 8mm;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .flyer-casestudy .eyebrow { font-size: 6.8pt; font-weight: 800; text-transform: uppercase; letter-spacing: 1.2px; color: var(--brand-red); }
        .flyer-casestudy .panel-title { font-size: 12.5pt; font-weight: 800; color: var(--brand-dark); line-height: 1.25; margin: 1mm 0 3mm 0; }

        .flyer-casestudy .timeline-spacious-stack {
          display: flex;
          flex-direction: column;
          gap: 2.5mm;
        }
        .flyer-casestudy .phase-card {
          background: #ffffff;
          border: 1px solid var(--brand-border);
          border-radius: 2mm;
          padding: 2.2mm 3mm;
          box-shadow: 0 1mm 3mm rgba(0,0,0,0.03);
        }
        .flyer-casestudy .phase-header-row {
          display: flex;
          align-items: baseline;
          gap: 2mm;
          margin-bottom: 0.8mm;
        }
        .flyer-casestudy .phase-tag {
          font-size: 6.2pt;
          font-weight: 800;
          color: var(--brand-red);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .flyer-casestudy .phase-name {
          font-size: 7.8pt;
          font-weight: 700;
          color: var(--brand-dark);
        }
        .flyer-casestudy .phase-desc {
          font-size: 6.8pt;
          line-height: 1.4;
          color: var(--brand-muted);
        }

        .flyer-casestudy .featured-progress-photo {
          width: 100%;
          height: 38mm;
          border-radius: 2mm;
          overflow: hidden;
          margin: 2mm 0;
          box-shadow: 0 2mm 6mm rgba(0,0,0,0.08);
        }
        .flyer-casestudy .featured-progress-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .flyer-casestudy .result-pill {
          background: #ffffff;
          border: 1px solid var(--brand-border);
          border-left: 3px solid var(--brand-red);
          padding: 2mm 3mm;
          border-radius: 1.5mm;
          font-size: 6.6pt;
          line-height: 1.35;
          color: var(--brand-dark);
        }

        /* PANEL 3: B2B BENEFITS & HUMANIZED THUMB ZONE */
        .flyer-casestudy .panel-conclusion {
          padding: 8mm;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #ffffff;
        }
        .flyer-casestudy .hero-banner-wrap {
          width: 100%;
          height: 48mm;
          border-radius: 2mm;
          overflow: hidden;
          position: relative;
          margin-bottom: 2.5mm;
          box-shadow: 0 2mm 5mm rgba(0,0,0,0.08);
        }
        .flyer-casestudy .hero-banner-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .flyer-casestudy .key-facts {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.8mm;
          margin-bottom: 2.5mm;
        }
        .flyer-casestudy .fact-card {
          background: var(--brand-light);
          border-radius: 2mm;
          padding: 2mm 2.5mm;
          border: 1px solid var(--brand-border);
        }
        .flyer-casestudy .fact-card .fact-val { font-size: 10.5pt; font-weight: 800; color: var(--brand-red); }
        .flyer-casestudy .fact-card .fact-lbl { font-size: 6pt; color: #4b5563; line-height: 1.25; margin-top: 0.3mm; }

        /* HUMANIZED FOUNDER CTA CARD */
        .flyer-casestudy .tz-box {
          background: var(--brand-dark);
          color: #fff;
          border-radius: 3mm;
          padding: 3.5mm;
          display: flex;
          flex-direction: column;
          gap: 2mm;
          box-shadow: 0 3mm 8mm rgba(18,20,23,0.25);
        }
        .flyer-casestudy .tz-box-top { display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 1.2mm; }
        .flyer-casestudy .tz-box-top h4 { font-size: 7.8pt; font-weight: 700; color: #fff; }
        .flyer-casestudy .tz-box-body { display: flex; align-items: center; gap: 2.8mm; }
        
        .flyer-casestudy .founder-avatar {
          width: 16mm;
          height: 20mm;
          border-radius: 1.5mm;
          overflow: hidden;
          flex-shrink: 0;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }
        .flyer-casestudy .founder-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
        }

        .flyer-casestudy .tz-contacts { font-size: 6.5pt; line-height: 1.35; color: #d1d5db; }
        .flyer-casestudy a { color: inherit; text-decoration: none; }
        .flyer-casestudy a:hover { text-decoration: underline; }
        .flyer-casestudy .tz-phone { font-size: 7.8pt; font-weight: 800; color: #ff6b6b; margin-top: 0.4mm; display: block; }
        .flyer-casestudy .qr-frame { width: 17mm; height: 17mm; background: #fff; border-radius: 1.5mm; padding: 0.8mm; flex-shrink: 0; display: block; }
        .flyer-casestudy .qr-frame img { width: 100%; height: 100%; object-fit: contain; }
        .flyer-casestudy .tz-box-foot { font-size: 5.8pt; color: #9ca3af; text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1mm; }
        .flyer-casestudy .tz-box-foot a { color: #d1d5db; font-weight: 600; }
        .flyer-casestudy .tz-box-foot a:hover { color: #ffffff; }

        @media print {
          @page { size: 297mm 210mm; margin: 0; }
          .flyer-casestudy { background: none; padding: 0; margin: 0; gap: 0; display: block !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .flyer-casestudy .fold-marker { display: none !important; }
          .flyer-casestudy .sheet { box-shadow: none; page-break-after: always; break-after: page; }
          .flyer-casestudy .sheet:last-of-type, .flyer-casestudy .sheet:last-child { page-break-after: auto !important; break-after: auto !important; }
          .flyer-casestudy .panel { border-right: none !important; }
        }
      `}</style>

      {/* SEITE 1: DEUTSCH */}
      {showDe && (
        <div className="sheet" id="story-de">
          {/* PANEL 1: COVER MIT GRÜNDER-AVATAR */}
          <div className="panel panel-story-cover">
            <div className="fold-marker">Falz 1</div>
            <div>
              <img src="/logo.png" alt={CONTACT.companyName} className="logo-img" />
              <div className="sub-brand">Architektur & Stadtplanung</div>
              <h1 className="story-hero-title">In 4 Phasen zur<br /><span>Traumimmobilie.</span></h1>
              <p className="story-hero-desc">Schneller, wirtschaftlicher und nachhaltiger bauen mit FCN Systemrohbau.</p>
            </div>

            <div className="hero-split-images">
              <div className="split-card">
                <img src="/images/b2b/Image.jpg" alt="Montage vor Ort mit Kran" />
              </div>
              <div className="split-card">
                <img src="/images/b2b/1.png" alt="Vollendete Architektur Seeheim-Jugenheim" />
              </div>
            </div>

            <div className="cover-founder-badge">
              <div className="cover-founder-avatar">
                <img src="/images/team/Majeed-Shams.jpg" alt={CONTACT.founder} />
              </div>
              <div>
                <div style={{ fontSize: "7.2pt", fontWeight: 700, color: "#1f2937" }}>{CONTACT.founder}</div>
                <div style={{ fontSize: "6pt", color: "#6b7280" }}>Architekt & Stadtplaner · AKH Hessen 21886</div>
              </div>
            </div>
          </div>

          {/* PANEL 2: GROSSZÜGIGE 4 PHASEN */}
          <div className="panel panel-timeline">
            <div className="fold-marker">Falz 2</div>
            <div>
              <span className="eyebrow">Der transparente Bauablauf</span>
              <h2 className="panel-title">Höchste Planungssicherheit Schritt für Schritt</h2>
            </div>

            <div className="timeline-spacious-stack">
              <div className="phase-card">
                <div className="phase-header-row">
                  <span className="phase-tag">Phase 01</span>
                  <span className="phase-name">Entwurf & Baugenehmigung</span>
                </div>
                <p className="phase-desc">Rechtssichere Genehmigungsplanung und Bauanträge mit hoher Behördenakzeptanz.</p>
              </div>

              <div className="phase-card">
                <div className="phase-header-row">
                  <span className="phase-tag">Phase 02</span>
                  <span className="phase-name">FCN-Systemintegration</span>
                </div>
                <p className="phase-desc">Digitale Werk- und Ausführungsplanung, exakt abgestimmt auf FCN-Wandmodule.</p>
              </div>

              <div className="featured-progress-photo">
                <img src="/images/b2b/4.png" alt="Liapor Rohbau Montage" />
              </div>

              <div className="phase-card">
                <div className="phase-header-row">
                  <span className="phase-tag">Phase 03</span>
                  <span className="phase-name">Präzise Montage & Rohbau</span>
                </div>
                <p className="phase-desc">Millimetergenauer Einbau der Wandelemente per Kran in Rekordzeit ohne Trocknungszeiten.</p>
              </div>

              <div className="phase-card">
                <div className="phase-header-row">
                  <span className="phase-tag">Phase 04</span>
                  <span className="phase-name">Schlüsselfertiger Ausbau</span>
                </div>
                <p className="phase-desc">Konsequente Bauüberwachung (LPH 8) bis zur termingerechten Schlüsselübergabe.</p>
              </div>
            </div>

            <div className="result-pill">
              <strong>Ergebnis:</strong> Bis zu 60% kürzere Rohbauzeit bei maximaler Werthaltigkeit.
            </div>
          </div>

          {/* PANEL 3: B2B BENEFITS & HUMANIZED THUMB ZONE */}
          <div className="panel panel-conclusion">
            <div className="fold-marker">Außen</div>
            <div>
              <span className="eyebrow">Ihre Vorteile</span>
              <h3 className="panel-title" style={{ fontSize: "11.5pt" }}>Erfahrung, die sich auf der Baustelle auszahlt</h3>

              <div className="hero-banner-wrap">
                <img src="/images/b2b/6.png" alt="Baustellenbanner Shams Consult" />
              </div>

              <div className="key-facts">
                <div className="fact-card">
                  <div className="fact-val">100%</div>
                  <div className="fact-lbl">Massivbau-Qualität mit Liapor</div>
                </div>
                <div className="fact-card">
                  <div className="fact-val">-60%</div>
                  <div className="fact-lbl">Kürzere Rohbau-Montagezeit</div>
                </div>
                <div className="fact-card">
                  <div className="fact-val">LPH 1-8</div>
                  <div className="fact-lbl">Komplette HOAI-Leistung aus einer Hand</div>
                </div>
                <div className="fact-card">
                  <div className="fact-val">FCN-fit</div>
                  <div className="fact-lbl">Eingespielte Werkskoordination</div>
                </div>
              </div>
            </div>

            <div className="tz-box">
              <div className="tz-box-top">
                <h4>Ihr persönlicher Architekt</h4>
                <span style={{ fontSize: "6pt", color: "#ff8585" }}>Vor Ort in Fulda ansprechbar</span>
              </div>
              <div className="tz-box-body">
                <div className="founder-avatar">
                  <img src="/images/team/Majeed-Shams.jpg" alt={CONTACT.founder} />
                </div>
                <div className="tz-contacts" style={{ flex: 1 }}>
                  <div><strong>Majeed Shams</strong> M.Eng.</div>
                  <div style={{ fontSize: "5.8pt", color: "#9ca3af" }}>Frankfurt am Main · AKH 21886</div>
                  <a href={CONTACT.primaryPhoneHref} className="tz-phone" title="Telefon">{CONTACT.phoneFrankfurt}</a>
                  <div style={{ fontSize: "5.6pt", color: "#d1d5db" }}>{CONTACT.primaryAddress.street}</div>
                  <div><a href={`mailto:${CONTACT.email}`} style={{ fontSize: "5.6pt", color: "#d1d5db" }} title="E-Mail">{CONTACT.email}</a></div>
                </div>
                <a href="https://shams-consult.de" target="_blank" rel="noopener noreferrer" className="qr-frame" title="Website shams-consult.de">
                  <img src="/qr-shams.svg" alt="QR Code" />
                </a>
              </div>
              <div className="tz-box-foot"><a href="https://shams-consult.de" target="_blank" rel="noopener noreferrer">shams-consult.de</a> · QR-Code scannen für Direktkontakt & Portfolio</div>
            </div>
          </div>
        </div>
      )}

      {/* SEITE 2: ENGLISH (TURNAROUND) */}
      {showEn && (
        <div className="sheet" id="story-en">
          {/* PANEL 1: COVER EN */}
          <div className="panel panel-story-cover">
            <div className="fold-marker">Fold 1</div>
            <div>
              <img src="/logo.png" alt={CONTACT.companyName} className="logo-img" />
              <div className="sub-brand">Architecture & Urban Planning</div>
              <h1 className="story-hero-title">From Concept to<br /><span>Reality in 4 Steps.</span></h1>
              <p className="story-hero-desc">Faster, sustainable, and cost-predictable construction with FCN Precast Systems.</p>
            </div>

            <div className="hero-split-images">
              <div className="split-card">
                <img src="/images/b2b/Image.jpg" alt="Crane Montage with Precast Elements" />
              </div>
              <div className="split-card">
                <img src="/images/b2b/1.png" alt="Completed Modern Turnkey Residence" />
              </div>
            </div>

            <div className="cover-founder-badge">
              <div className="cover-founder-avatar">
                <img src="/images/team/Majeed-Shams.jpg" alt={CONTACT.founder} />
              </div>
              <div>
                <div style={{ fontSize: "7.2pt", fontWeight: 700, color: "#1f2937" }}>{CONTACT.founder}</div>
                <div style={{ fontSize: "6pt", color: "#6b7280" }}>Principal Architect · Chamber of Architects Hesse</div>
              </div>
            </div>
          </div>

          {/* PANEL 2: TIMELINE EN */}
          <div className="panel panel-timeline">
            <div className="fold-marker">Fold 2</div>
            <div>
              <span className="eyebrow">Transparent Delivery Pipeline</span>
              <h2 className="panel-title">End-to-End Architectural Reliability</h2>
            </div>

            <div className="timeline-spacious-stack">
              <div className="phase-card">
                <div className="phase-header-row">
                  <span className="phase-tag">Phase 01</span>
                  <span className="phase-name">Design & Permitting</span>
                </div>
                <p className="phase-desc">Comprehensive zoning analysis, schematic design, and fast-track municipal permit filing.</p>
              </div>

              <div className="phase-card">
                <div className="phase-header-row">
                  <span className="phase-tag">Phase 02</span>
                  <span className="phase-name">FCN Precast Blueprinting</span>
                </div>
                <p className="phase-desc">Structural blueprints and module specifications calibrated directly to FCN plant specs.</p>
              </div>

              <div className="featured-progress-photo">
                <img src="/images/b2b/4.png" alt="Precast Wall Assembly" />
              </div>

              <div className="phase-card">
                <div className="phase-header-row">
                  <span className="phase-tag">Phase 03</span>
                  <span className="phase-name">Rapid On-Site Assembly</span>
                </div>
                <p className="phase-desc">Precision installation of prefabricated wall panels with zero curing delays.</p>
              </div>

              <div className="phase-card">
                <div className="phase-header-row">
                  <span className="phase-tag">Phase 04</span>
                  <span className="phase-name">Turnkey Finalization</span>
                </div>
                <p className="phase-desc">Rigorous site supervision (HOAI Phase 8) through to turnkey client handover.</p>
              </div>
            </div>

            <div className="result-pill">
              <strong>Key Result:</strong> Up to 60% compressed construction schedule with maximum asset durability.
            </div>
          </div>

          {/* PANEL 3: HUMANIZED CTA EN */}
          <div className="panel panel-conclusion">
            <div className="fold-marker">Outer Flap</div>
            <div>
              <span className="eyebrow">Key Advantages</span>
              <h3 className="panel-title" style={{ fontSize: "11.5pt" }}>Expertise That Delivers on the Ground</h3>

              <div className="hero-banner-wrap">
                <img src="/images/b2b/6.png" alt="Ongoing Construction Site" />
              </div>

              <div className="key-facts">
                <div className="fact-card">
                  <div className="fact-val">100%</div>
                  <div className="fact-lbl">Solid Liapor Wall Insulation</div>
                </div>
                <div className="fact-card">
                  <div className="fact-val">-60%</div>
                  <div className="fact-lbl">Reduced Structural Shell Duration</div>
                </div>
                <div className="fact-card">
                  <div className="fact-val">HOAI 1-8</div>
                  <div className="fact-lbl">All Architectural Stages from One Source</div>
                </div>
                <div className="fact-card">
                  <div className="fact-val">FCN-Ready</div>
                  <div className="fact-lbl">Proven Off-Site Manufacturing Flow</div>
                </div>
              </div>
            </div>

            <div className="tz-box">
              <div className="tz-box-top">
                <h4>Your Lead Architect</h4>
                <span style={{ fontSize: "6pt", color: "#ff8585" }}>Meet in person in Fulda</span>
              </div>
              <div className="tz-box-body">
                <div className="founder-avatar">
                  <img src="/images/team/Majeed-Shams.jpg" alt={CONTACT.founder} />
                </div>
                <div className="tz-contacts" style={{ flex: 1 }}>
                  <div><strong>Majeed Shams</strong> M.Eng.</div>
                  <div style={{ fontSize: "5.8pt", color: "#9ca3af" }}>Frankfurt am Main · Hesse Chamber</div>
                  <a href={CONTACT.primaryPhoneHref} className="tz-phone" title="Phone">+49 69 74 223 777</a>
                  <div style={{ fontSize: "5.6pt", color: "#d1d5db" }}>{CONTACT.primaryAddress.street}</div>
                  <div><a href={`mailto:${CONTACT.email}`} style={{ fontSize: "5.6pt", color: "#d1d5db" }} title="Email">{CONTACT.email}</a></div>
                </div>
                <a href="https://shams-consult.de" target="_blank" rel="noopener noreferrer" className="qr-frame" title="Website shams-consult.de">
                  <img src="/qr-shams.svg" alt="QR Code" />
                </a>
              </div>
              <div className="tz-box-foot">Scan QR code to connect & view portfolio · <a href="https://shams-consult.de" target="_blank" rel="noopener noreferrer">shams-consult.de</a></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
