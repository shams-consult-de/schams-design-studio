import React from "react";
import { CONTACT } from "../../lib/contact";
import { FlyerProps } from "./types";

export function B2bDeveloperFlyer({ language = "all", className = "" }: FlyerProps) {
  const showDe = language === "de" || language === "all";
  const showEn = language === "en" || language === "all";

  return (
    <div className={`flyer-root flyer-b2b ${className}`}>
      <style>{`
        .flyer-b2b {
          --brand-red: #d92323;
          --brand-dark: #0f1115;
          --brand-surface: #1a1d24;
          --brand-light: #f3f5f8;
          --brand-border: #e2e5ea;
          --brand-muted: #5e6676;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: var(--brand-dark);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          -webkit-font-smoothing: antialiased;
        }

        .flyer-b2b .sheet {
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

        .flyer-b2b .panel {
          width: 99mm;
          height: 210mm;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border-right: 1px dashed rgba(0, 0, 0, 0.12);
        }
        .flyer-b2b .panel:last-child { border-right: none; }
        .flyer-b2b .fold-marker {
          position: absolute;
          top: 4px;
          right: 4px;
          font-size: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #9aa0a6;
          pointer-events: none;
        }

        /* COVER PANEL */
        .flyer-b2b .b2b-cover {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #ffffff;
        }
        .flyer-b2b .cover-top { padding: 8mm 8mm 3mm 8mm; }
        .flyer-b2b .logo-img { height: 15mm; object-fit: contain; margin-bottom: 2mm; display: block; }
        .flyer-b2b .b2b-badge {
          display: inline-block;
          background: #eef2f6;
          color: var(--brand-dark);
          font-size: 6.2pt;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 1mm 2.2mm;
          border-radius: 1mm;
          margin-bottom: 1.5mm;
        }
        .flyer-b2b .b2b-title {
          font-size: 16pt;
          font-weight: 800;
          line-height: 1.18;
          color: var(--brand-dark);
          letter-spacing: -0.3px;
        }
        .flyer-b2b .b2b-title span { color: var(--brand-red); }
        .flyer-b2b .b2b-sub {
          font-size: 7.6pt;
          line-height: 1.35;
          color: var(--brand-muted);
          margin-top: 1.5mm;
        }

        .flyer-b2b .cover-hero-img {
          flex: 1;
          position: relative;
          margin: 2mm 8mm;
          border-radius: 2mm;
          overflow: hidden;
          box-shadow: 0 2mm 6mm rgba(0,0,0,0.12);
        }
        .flyer-b2b .cover-hero-img img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .flyer-b2b .cover-founder-badge {
          display: flex;
          align-items: center;
          gap: 2.5mm;
          border-top: 1px solid var(--brand-border);
          background: #fafbfc;
          padding: 2.5mm 8mm;
        }
        .flyer-b2b .cover-founder-avatar {
          width: 9mm;
          height: 9mm;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 1px solid #d1d5db;
        }
        .flyer-b2b .cover-founder-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
        }

        /* CENTER PANEL */
        .flyer-b2b .b2b-center {
          background: #f8fafc;
          padding: 7.5mm;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .flyer-b2b .eyebrow { font-size: 6.5pt; font-weight: 800; text-transform: uppercase; letter-spacing: 1.2px; color: var(--brand-red); }
        .flyer-b2b .sec-h2 { font-size: 12pt; font-weight: 800; color: var(--brand-dark); line-height: 1.25; margin: 1mm 0 2.5mm 0; }

        .flyer-b2b .metrics-bar {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1.5mm;
          margin-bottom: 3mm;
        }
        .flyer-b2b .m-box {
          background: #ffffff;
          border: 1px solid var(--brand-border);
          border-radius: 1.5mm;
          padding: 2mm 1.5mm;
          text-align: center;
        }
        .flyer-b2b .m-val { font-size: 11pt; font-weight: 800; color: var(--brand-red); }
        .flyer-b2b .m-lbl { font-size: 5.5pt; font-weight: 600; color: var(--brand-muted); line-height: 1.2; margin-top: 0.5mm; }

        .flyer-b2b .portfolio-duo {
          display: flex;
          flex-direction: column;
          gap: 2mm;
          margin-bottom: 2.5mm;
        }
        .flyer-b2b .duo-card {
          height: 38mm;
          position: relative;
          border-radius: 2mm;
          overflow: hidden;
          box-shadow: 0 1.5mm 5mm rgba(0,0,0,0.08);
        }
        .flyer-b2b .duo-card img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .flyer-b2b .b2b-synergy-quote {
          background: #ffffff;
          border-left: 3px solid var(--brand-red);
          padding: 2mm 2.5mm;
          border-radius: 0 1.5mm 1.5mm 0;
          font-size: 6.2pt;
          line-height: 1.35;
          color: #374151;
        }

        /* RIGHT PANEL */
        .flyer-b2b .b2b-right {
          padding: 7.5mm;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #ffffff;
        }
        .flyer-b2b .site-mini-img {
          width: 100%;
          height: 44mm;
          border-radius: 2mm;
          overflow: hidden;
          position: relative;
          margin-bottom: 2.5mm;
          box-shadow: 0 1.5mm 5mm rgba(0,0,0,0.08);
        }
        .flyer-b2b .site-mini-img img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .flyer-b2b .services-b2b-list {
          display: flex;
          flex-direction: column;
          gap: 2mm;
          margin-bottom: 2mm;
        }
        .flyer-b2b .sb-item {
          display: flex;
          gap: 2mm;
          font-size: 6.6pt;
          line-height: 1.35;
        }
        .flyer-b2b .sb-icon {
          width: 4.2mm;
          height: 4.2mm;
          border-radius: 1mm;
          background: #f1f3f7;
          color: var(--brand-red);
          font-size: 6pt;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 0.3mm;
        }
        .flyer-b2b .sb-text strong { color: var(--brand-dark); }
        .flyer-b2b .sb-text p { color: var(--brand-muted); margin-top: 0.2mm; }

        /* HUMANIZED B2B CTA */
        .flyer-b2b .b2b-cta-card {
          background: var(--brand-dark);
          color: #ffffff;
          border-radius: 2.5mm;
          padding: 3mm;
          display: flex;
          flex-direction: column;
          gap: 1.8mm;
        }
        .flyer-b2b .b2b-cta-head { display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 1mm; }
        .flyer-b2b .b2b-cta-head h4 { font-size: 7.8pt; font-weight: 700; color: #fff; }
        .flyer-b2b .b2b-cta-body { display: flex; align-items: center; gap: 2.8mm; }
        
        .flyer-b2b .founder-avatar {
          width: 16mm;
          height: 20mm;
          border-radius: 1.5mm;
          overflow: hidden;
          flex-shrink: 0;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }
        .flyer-b2b .founder-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
        }

        .flyer-b2b .qr-frame { width: 17mm; height: 17mm; background: #fff; border-radius: 1.5mm; padding: 0.8mm; flex-shrink: 0; }
        .flyer-b2b .qr-frame img { width: 100%; height: 100%; object-fit: contain; }
        .flyer-b2b .cta-txt { font-size: 6.5pt; line-height: 1.35; color: #d1d5db; }
        .flyer-b2b .cta-txt strong { color: #fff; }
        .flyer-b2b a { color: inherit; text-decoration: none; }
        .flyer-b2b a:hover { text-decoration: underline; }
        .flyer-b2b .cta-phone { font-size: 7.8pt; font-weight: 800; color: #ff6b6b; margin-top: 0.4mm; display: block; }
        .flyer-b2b .b2b-cta-foot { font-size: 5.6pt; color: #9ca3af; text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 0.8mm; }
        .flyer-b2b .b2b-cta-foot a { color: #d1d5db; font-weight: 600; }
        .flyer-b2b .b2b-cta-foot a:hover { color: #ffffff; }

        @media print {
          @page { size: 297mm 210mm; margin: 0; }
          .flyer-b2b { background: none; padding: 0; margin: 0; gap: 0; display: block !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .flyer-b2b .fold-marker { display: none !important; }
          .flyer-b2b .sheet { box-shadow: none; page-break-after: always; break-after: page; }
          .flyer-b2b .sheet:last-of-type, .flyer-b2b .sheet:last-child { page-break-after: auto !important; break-after: auto !important; }
          .flyer-b2b .panel { border-right: none !important; }
        }
      `}</style>

      {/* SEITE 1: DEUTSCH */}
      {showDe && (
        <div className="sheet" id="b2b-de">
          {/* PANEL 1: COVER MIT HERO KRAN BILD & INHABER BADGE */}
          <div className="panel b2b-cover">
            <div className="fold-marker">Falz 1</div>
            <div className="cover-top">
              <img src="/logo.png" alt={CONTACT.companyName} className="logo-img" />
              <span className="b2b-badge">B2B & Bauträger Partnerschaft</span>
              <h1 className="b2b-title">Schnellere Rendite.<br /><span>Sichere Ausführung.</span></h1>
              <p className="b2b-sub">Generalplanung & Bauleitung für Mehrfamilien- und Wohnungsbau mit FCN Systemrohbau.</p>
            </div>

            <div className="cover-hero-img">
              <img src="/images/b2b/Image.jpg" alt="Baustelle mit Autokran und FCN Elementen" />
            </div>

            <div className="cover-founder-badge">
              <div className="cover-founder-avatar">
                <img src="/images/team/Majeed-Shams.jpg" alt={CONTACT.founder} />
              </div>
              <div>
                <div style={{ fontSize: "7.2pt", fontWeight: 700, color: "#1f2937" }}>{CONTACT.founder}</div>
                <div style={{ fontSize: "5.8pt", color: "#6b7280" }}>{CONTACT.legalName} · AKH 21886</div>
              </div>
            </div>
          </div>

          {/* PANEL 2: B2B METRIKEN & PROJEKTBEWEISE */}
          <div className="panel b2b-center">
            <div className="fold-marker">Falz 2</div>
            <div>
              <span className="eyebrow">Wirtschaftliche Vorteile</span>
              <h2 className="sec-h2">Terminsicherheit & Kosteneffizienz für Projektentwickler</h2>
            </div>

            <div className="metrics-bar">
              <div className="m-box">
                <div className="m-val">-60%</div>
                <div className="m-lbl">Bauzeitverkürzung im Rohbau</div>
              </div>
              <div className="m-box">
                <div className="m-val">0</div>
                <div className="m-lbl">Trocknungszeiten dank Liapor</div>
              </div>
              <div className="m-box">
                <div className="m-val">100%</div>
                <div className="m-lbl">HOAI LPH 1-8 Betreuung</div>
              </div>
            </div>

            <div className="portfolio-duo">
              <div className="duo-card">
                <img src="/images/b2b/4.png" alt="Rohbau Liapor" />
              </div>
              <div className="duo-card">
                <img src="/images/b2b/1.png" alt="Fertiggestelltes Gebäude" />
              </div>
            </div>

            <div className="b2b-synergy-quote">
              <strong>FCN-Integration:</strong> Wir planen Ihre Projekte von Leistungsphase 1 an millimetergenau im FCN-Rastermaß für maximale Ausführungsgeschwindigkeit und minimierte Zinskosten.
            </div>
          </div>

          {/* PANEL 3: B2B LEISTUNGEN & HUMANISIERTE CTA */}
          <div className="panel b2b-right">
            <div className="fold-marker">Außen</div>
            <div>
              <span className="eyebrow">Kooperationsmodelle</span>
              <h3 className="sec-h2" style={{ fontSize: "11.5pt" }}>Verlässlicher Planungspartner für Ihr Vorhaben</h3>

              <div className="site-mini-img">
                <img src="/images/b2b/6.png" alt="Haus 3 im Bau" />
              </div>

              <div className="services-b2b-list">
                <div className="sb-item">
                  <span className="sb-icon">✓</span>
                  <div className="sb-text">
                    <strong>Grundstücks- & Baurechtsanalyse:</strong>
                    <p>Schnelle Klärung von §34 BauGB / B-Plan Potenzialen zur optimalen Ausnutzung.</p>
                  </div>
                </div>
                <div className="sb-item">
                  <span className="sb-icon">✓</span>
                  <div className="sb-text">
                    <strong>Werk- & Elementplanung FCN:</strong>
                    <p>Reibungslose Abstimmung mit dem FCN-Werk ohne kostenintensive Umplanungen.</p>
                  </div>
                </div>
                <div className="sb-item">
                  <span className="sb-icon">✓</span>
                  <div className="sb-text">
                    <strong>Bauleitung & SiGeKo (LPH 8):</strong>
                    <p>Konsequente Bauüberwachung vor Ort, Abnahme und Gewährleistungssicherung.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="b2b-cta-card">
              <div className="b2b-cta-head">
                <h4>Bauträger-Erstberatung</h4>
                <span style={{ fontSize: "6pt", color: "#ff8585" }}>Vor Ort in Fulda ansprechbar</span>
              </div>
              <div className="b2b-cta-body">
                <div className="founder-avatar">
                  <img src="/images/team/Majeed-Shams.jpg" alt={CONTACT.founder} />
                </div>
                <div className="cta-txt" style={{ flex: 1 }}>
                  <div><strong>Majeed Shams</strong> M.Eng.</div>
                  <div style={{ fontSize: "5.8pt", color: "#9ca3af" }}>Frankfurt am Main · AKH 21886</div>
                  <a href={CONTACT.primaryPhoneHref} className="cta-phone" title="Telefon">{CONTACT.phoneFrankfurt}</a>
                  <div style={{ fontSize: "5.6pt", color: "#d1d5db" }}>{CONTACT.primaryAddress.street}</div>
                  <div><a href={`mailto:${CONTACT.email}`} style={{ fontSize: "5.6pt", color: "#d1d5db" }} title="E-Mail">{CONTACT.email}</a></div>
                </div>
                <a href="https://shams-consult.de" target="_blank" rel="noopener noreferrer" className="qr-frame" title="Website shams-consult.de">
                  <img src="/qr-shams.svg" alt="QR-Code" />
                </a>
              </div>
              <div className="b2b-cta-foot"><a href="https://shams-consult.de" target="_blank" rel="noopener noreferrer">shams-consult.de</a> · Jetzt QR-Code scannen für Direktkontakt</div>
            </div>
          </div>
        </div>
      )}

      {/* SEITE 2: ENGLISH (TURNAROUND) */}
      {showEn && (
        <div className="sheet" id="b2b-en">
          {/* PANEL 1: COVER EN */}
          <div className="panel b2b-cover">
            <div className="fold-marker">Fold 1</div>
            <div className="cover-top">
              <img src="/logo.png" alt={CONTACT.companyName} className="logo-img" />
              <span className="b2b-badge">B2B & Developer Partnership</span>
              <h1 className="b2b-title">Accelerated ROI.<br /><span>Reliable Delivery.</span></h1>
              <p className="b2b-sub">Architectural Master Planning & Site Supervision for Multi-Family and Housing with FCN Precast Systems.</p>
            </div>

            <div className="cover-hero-img">
              <img src="/images/b2b/Image.jpg" alt="Active Construction Crane with FCN Elements" />
            </div>

            <div className="cover-founder-badge">
              <div className="cover-founder-avatar">
                <img src="/images/team/Majeed-Shams.jpg" alt={CONTACT.founder} />
              </div>
              <div>
                <div style={{ fontSize: "7.2pt", fontWeight: 700, color: "#1f2937" }}>{CONTACT.founder}</div>
                <div style={{ fontSize: "5.8pt", color: "#6b7280" }}>Shams Consult Architecture · Hesse Chamber</div>
              </div>
            </div>
          </div>

          {/* PANEL 2: METRICS & PORTFOLIO EN */}
          <div className="panel b2b-center">
            <div className="fold-marker">Fold 2</div>
            <div>
              <span className="eyebrow">Economic Advantages</span>
              <h2 className="sec-h2">Schedule Reliability & Cost Certainty for Project Developers</h2>
            </div>

            <div className="metrics-bar">
              <div className="m-box">
                <div className="m-val">-60%</div>
                <div className="m-lbl">Structural Shell Construction Time</div>
              </div>
              <div className="m-box">
                <div className="m-val">0</div>
                <div className="m-lbl">Moisture Curing Delays via Liapor</div>
              </div>
              <div className="m-box">
                <div className="m-val">100%</div>
                <div className="m-lbl">Full HOAI 1-8 Coverage</div>
              </div>
            </div>

            <div className="portfolio-duo">
              <div className="duo-card">
                <img src="/images/b2b/2.png" alt="Precast Shell Assembly" />
              </div>
              <div className="duo-card">
                <img src="/images/b2b/5.png" alt="Completed Residential Building" />
              </div>
            </div>

            <div className="b2b-synergy-quote">
              <strong>FCN System Alignment:</strong> We design your developments in strict compliance with FCN factory module grids from day one, compressing capital commitment and financing interest.
            </div>
          </div>

          {/* PANEL 3: B2B SERVICES & CTA EN */}
          <div className="panel b2b-right">
            <div className="fold-marker">Outer Flap</div>
            <div>
              <span className="eyebrow">Collaboration Models</span>
              <h3 className="sec-h2" style={{ fontSize: "11.5pt" }}>A High-Performance Planning Partner</h3>

              <div className="site-mini-img">
                <img src="/images/b2b/6.png" alt="Active Construction Site" />
              </div>

              <div className="services-b2b-list">
                <div className="sb-item">
                  <span className="sb-icon">✓</span>
                  <div className="sb-text">
                    <strong>Zoning & Feasibility Studies:</strong>
                    <p>Rapid analysis of German zoning codes (§34 BauGB / B-Plan) to maximize floor-space ratio.</p>
                  </div>
                </div>
                <div className="sb-item">
                  <span className="sb-icon">✓</span>
                  <div className="sb-text">
                    <strong>Precast Engineering & CAD/BIM:</strong>
                    <p>Direct digital handshake with FCN manufacturing plant to eliminate re-engineering delays.</p>
                  </div>
                </div>
                <div className="sb-item">
                  <span className="sb-icon">✓</span>
                  <div className="sb-text">
                    <strong>Site Leadership (HOAI 8):</strong>
                    <p>Rigorous on-site milestone oversight, compliance enforcement, and turnkey handover.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="b2b-cta-card">
              <div className="b2b-cta-head">
                <h4>Developer Consultation</h4>
                <span style={{ fontSize: "6pt", color: "#ff8585" }}>Available in person in Fulda</span>
              </div>
              <div className="b2b-cta-body">
                <div className="founder-avatar">
                  <img src="/images/team/Majeed-Shams.jpg" alt={CONTACT.founder} />
                </div>
                <div className="cta-txt" style={{ flex: 1 }}>
                  <div><strong>Majeed Shams</strong> M.Eng.</div>
                  <div style={{ fontSize: "5.8pt", color: "#9ca3af" }}>Frankfurt am Main · Hesse Chamber</div>
                  <a href={CONTACT.primaryPhoneHref} className="cta-phone" title="Phone">+49 69 74 223 777</a>
                  <div style={{ fontSize: "5.6pt", color: "#d1d5db" }}>{CONTACT.primaryAddress.street}</div>
                  <div><a href={`mailto:${CONTACT.email}`} style={{ fontSize: "5.6pt", color: "#d1d5db" }} title="Email">{CONTACT.email}</a></div>
                </div>
                <a href="https://shams-consult.de" target="_blank" rel="noopener noreferrer" className="qr-frame" title="Website shams-consult.de">
                  <img src="/qr-shams.svg" alt="QR-Code" />
                </a>
              </div>
              <div className="b2b-cta-foot"><a href="https://shams-consult.de" target="_blank" rel="noopener noreferrer">shams-consult.de</a> · Scan QR code for direct developer contact</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
