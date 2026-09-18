import React from "react";
import { CONTACT } from "../../lib/contact";
import { FlyerProps } from "./types";

export function DinLangFlyer({ language = "all", className = "" }: FlyerProps) {
  const showDe = language === "de" || language === "all";
  const showEn = language === "en" || language === "all";

  return (
    <div className={`flyer-root flyer-din-lang ${className}`}>
      <style>{`
        .flyer-din-lang {
          --brand-red: #d92323;
          --brand-dark: #16181b;
          --brand-charcoal: #25282d;
          --brand-gray-light: #f5f6f8;
          --brand-gray-border: #e2e4e8;
          --brand-text-muted: #5e6470;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          color: var(--brand-dark);
          -webkit-font-smoothing: antialiased;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }

        .flyer-din-lang .sheet {
          width: 297mm;
          height: 210mm;
          background: #ffffff;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: row;
          position: relative;
          overflow: hidden;
          page-break-after: always;
          break-after: page;
        }

        .flyer-din-lang .panel {
          width: 99mm;
          height: 210mm;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border-right: 1px dashed rgba(0, 0, 0, 0.12);
        }
        .flyer-din-lang .panel:last-child {
          border-right: none;
        }

        .flyer-din-lang .fold-marker {
          position: absolute;
          top: 4px;
          right: 4px;
          font-size: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #9aa0a6;
          pointer-events: none;
        }

        .flyer-din-lang .panel-header {
          padding: 12mm 9mm 6mm 9mm;
        }
        .flyer-din-lang .logo-img {
          height: 18mm;
          width: auto;
          object-fit: contain;
          display: block;
          margin-bottom: 3mm;
        }
        .flyer-din-lang .sub-brand {
          font-size: 8.5pt;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--brand-charcoal);
        }
        .flyer-din-lang .sub-brand-tag {
          font-size: 6.8pt;
          letter-spacing: 0.8px;
          color: var(--brand-text-muted);
          margin-top: 1mm;
        }

        .flyer-din-lang .cover-body {
          padding: 0 9mm;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .flyer-din-lang .hero-title {
          font-size: 19pt;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.5px;
          color: var(--brand-dark);
          margin-top: 2mm;
        }
        .flyer-din-lang .hero-title span {
          color: var(--brand-red);
        }
        .flyer-din-lang .hero-tagline {
          font-size: 8.8pt;
          line-height: 1.45;
          color: #3b4048;
          margin-top: 3mm;
          font-weight: 500;
        }
        .flyer-din-lang .hero-image-wrap {
          width: 100%;
          height: 72mm;
          margin-top: 4mm;
          border-radius: 3mm;
          overflow: hidden;
          position: relative;
          box-shadow: 0 4mm 10mm rgba(0,0,0,0.12);
        }
        .flyer-din-lang .hero-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .flyer-din-lang .cover-footer {
          padding: 4mm 9mm 8mm 9mm;
          border-top: 1px solid var(--brand-gray-border);
          background: var(--brand-gray-light);
        }
        .flyer-din-lang .founder-line {
          font-size: 7.5pt;
          font-weight: 700;
          color: var(--brand-dark);
        }
        .flyer-din-lang .chamber-line {
          font-size: 6.5pt;
          color: var(--brand-text-muted);
          margin-top: 0.8mm;
        }

        /* CENTER PANEL */
        .flyer-din-lang .panel-case-study {
          background: #fafbfc;
          padding: 9mm;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .flyer-din-lang .section-eyebrow {
          font-size: 7pt;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: var(--brand-red);
        }
        .flyer-din-lang .section-heading {
          font-size: 13pt;
          font-weight: 800;
          color: var(--brand-dark);
          line-height: 1.25;
          margin-top: 1mm;
          letter-spacing: -0.2px;
        }
        .flyer-din-lang .comparison-grid {
          display: flex;
          flex-direction: column;
          gap: 2.5mm;
          margin: 3.5mm 0;
        }
        .flyer-din-lang .comp-item {
          position: relative;
          border-radius: 2mm;
          overflow: hidden;
          height: 38mm;
          box-shadow: 0 2mm 6mm rgba(0,0,0,0.08);
        }
        .flyer-din-lang .comp-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .flyer-din-lang .usp-list {
          display: flex;
          flex-direction: column;
          gap: 2mm;
          margin-top: 1mm;
        }
        .flyer-din-lang .usp-box {
          display: flex;
          align-items: flex-start;
          gap: 2.5mm;
          background: #ffffff;
          border: 1px solid #eaedf1;
          padding: 2mm 2.5mm;
          border-radius: 2mm;
        }
        .flyer-din-lang .usp-num {
          width: 4.5mm;
          height: 4.5mm;
          border-radius: 50%;
          background: var(--brand-dark);
          color: #fff;
          font-size: 6.5pt;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 0.3mm;
        }
        .flyer-din-lang .usp-text h4 {
          font-size: 7.5pt;
          font-weight: 700;
          color: var(--brand-dark);
        }
        .flyer-din-lang .usp-text p {
          font-size: 6.5pt;
          line-height: 1.35;
          color: var(--brand-text-muted);
          margin-top: 0.4mm;
        }

        /* RIGHT PANEL */
        .flyer-din-lang .panel-cta {
          padding: 9mm;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #ffffff;
        }
        .flyer-din-lang .services-stack {
          display: flex;
          flex-direction: column;
          gap: 2.5mm;
          margin: 3mm 0;
        }
        .flyer-din-lang .service-card {
          border-left: 2.5px solid var(--brand-red);
          padding-left: 2.5mm;
        }
        .flyer-din-lang .service-card h5 {
          font-size: 8pt;
          font-weight: 700;
          color: var(--brand-dark);
        }
        .flyer-din-lang .service-card p {
          font-size: 6.6pt;
          line-height: 1.35;
          color: var(--brand-text-muted);
          margin-top: 0.5mm;
        }

        /* THUMB ZONE CTA BOX */
        .flyer-din-lang .thumb-zone-card {
          background: var(--brand-dark);
          color: #ffffff;
          border-radius: 3mm;
          padding: 4mm;
          display: flex;
          flex-direction: column;
          gap: 3mm;
          box-shadow: 0 4mm 12mm rgba(22, 24, 27, 0.25);
        }
        .flyer-din-lang .tz-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,0.15);
          padding-bottom: 2mm;
        }
        .flyer-din-lang .tz-header h4 {
          font-size: 8.5pt;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.2px;
        }
        .flyer-din-lang .tz-content {
          display: flex;
          align-items: center;
          gap: 3.5mm;
        }
        .flyer-din-lang .qr-frame {
          width: 20mm;
          height: 20mm;
          background: #ffffff;
          padding: 1.2mm;
          border-radius: 1.5mm;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .flyer-din-lang .qr-frame img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .flyer-din-lang .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1mm;
        }
        .flyer-din-lang .contact-item {
          font-size: 6.8pt;
          line-height: 1.35;
          color: #c9ced6;
        }
        .flyer-din-lang .contact-item strong {
          color: #ffffff;
          font-weight: 700;
        }
        .flyer-din-lang .direct-phone {
          font-size: 8pt;
          font-weight: 800;
          color: #ff6b6b;
          letter-spacing: 0.2px;
          margin-top: 0.5mm;
        }
        .flyer-din-lang .tz-footer {
          font-size: 6.2pt;
          color: #9299a5;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 1.8mm;
        }

        @media print {
          @page {
            size: 297mm 210mm;
            margin: 0;
          }
          .flyer-din-lang {
            background: none;
            padding: 0;
            margin: 0;
            gap: 0;
            display: block !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .flyer-din-lang .sheet {
            box-shadow: none;
            page-break-after: always;
            break-after: page;
          }
          .flyer-din-lang .sheet:last-of-type,
          .flyer-din-lang .sheet:last-child {
            page-break-after: auto !important;
            break-after: auto !important;
          }
          .flyer-din-lang .panel {
            border-right: none !important;
          }
          .flyer-din-lang .fold-marker {
            display: none !important;
          }
        }
      `}</style>

      {/* SHEET 1: DEUTSCHE SEITE */}
      {showDe && (
        <div className="sheet" id="sheet-de">
          {/* PANEL DE 1: TITELSEITE (COVER) */}
          <div className="panel">
            <div className="fold-marker">Falz 1</div>
            <div className="panel-header">
              <img src="/logo.png" alt={CONTACT.companyName} className="logo-img" />
              <div className="sub-brand">Architektur & Stadtplanung</div>
              <div className="sub-brand-tag">Rhein-Main · Frankfurt am Main · Rödermark</div>
            </div>

            <div className="cover-body">
              <div>
                <h1 className="hero-title">Massiv.<br />Nachhaltig.<br /><span>Präzise.</span></h1>
                <p className="hero-tagline">
                  Ihr erfahrenes Architekturbüro für schlüsselfertiges Bauen mit <strong>FCN Systemrohbau & Liapor</strong>.
                </p>
              </div>

              <div className="hero-image-wrap">
                <img src="/images/b2b/1.png" alt="Doppelhaushälfte Seeheim-Jugenheim" />
              </div>
            </div>

            <div className="cover-footer" style={{ display: "flex", alignItems: "center", gap: "2.5mm" }}>
              <div style={{ width: "9mm", height: "9mm", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "1px solid #d1d5db" }}>
                <img src="/images/team/Majeed-Shams.jpg" alt={CONTACT.founder} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
              </div>
              <div>
                <div className="founder-line">{CONTACT.founder}</div>
                <div className="chamber-line">{CONTACT.chamber}</div>
              </div>
            </div>
          </div>

          {/* PANEL DE 2: BEST PRACTICE & FCN-SYNERGIE */}
          <div className="panel panel-case-study">
            <div className="fold-marker">Falz 2</div>
            <div>
              <div className="section-eyebrow">Praxisbeweis · FCN Synergie</div>
              <h2 className="section-heading">Vom Rohbau zum modernen Wohntraum</h2>
              
              <div className="comparison-grid">
                <div className="comp-item">
                  <img src="/images/b2b/2.png" alt="FCN Rohbau Seeheim-Jugenheim" />
                </div>
                <div className="comp-item">
                  <img src="/images/b2b/5.png" alt="Vollendete Doppelhaushälfte Seeheim-Jugenheim" />
                </div>
              </div>

              <div className="usp-list">
                <div className="usp-box">
                  <div className="usp-num">1</div>
                  <div className="usp-text">
                    <h4>Bis zu 60% schnellere Bauzeit</h4>
                    <p>Präzise FCN-Vorfertigung minimiert witterungsbedingte Verzögerungen und Montageaufwand vor Ort.</p>
                  </div>
                </div>
                <div className="usp-box">
                  <div className="usp-num">2</div>
                  <div className="usp-text">
                    <h4>Liapor-Raumklima & Schallschutz</h4>
                    <p>Hervorragende CO₂-Bilanz, exzellente Wärmedämmung und baubiologischer Wohnkomfort von Anfang an.</p>
                  </div>
                </div>
                <div className="usp-box">
                  <div className="usp-num">3</div>
                  <div className="usp-text">
                    <h4>Garantierte Schnittstellen-Passung</h4>
                    <p>Direkte Verzahnung von digitalem Architekturmodell, FCN-Fertigteilwerk und Baustellenlogistik.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PANEL DE 3: LEISTUNGEN & CTA */}
          <div className="panel panel-cta">
            <div className="fold-marker">Außen</div>
            <div>
              <div className="section-eyebrow">Architektenleistungen LPH 1–8</div>
              <h3 className="section-heading">Planungssicherheit für Bauherren & Bauträger</h3>

              <div className="services-stack">
                <div className="service-card">
                  <h5>1. Entwurf & Baugenehmigung</h5>
                  <p>Bebauungsplan-Optimierung, Genehmigungsplanung und Bauanträge mit hoher Behördenakzeptanz.</p>
                </div>
                <div className="service-card">
                  <h5>2. FCN-Element- & Werkplanung</h5>
                  <p>Ausführungsplanung, die exakt auf Rastermaße, Aussparungen und Anschlüsse der FCN-Elemente abgestimmt ist.</p>
                </div>
                <div className="service-card">
                  <h5>3. Bauleitung & Bauüberwachung</h5>
                  <p>Zuverlässige Kostenkontrolle, Termintreue und Qualitätsüberwachung bis zur schlüsselfertigen Übergabe.</p>
                </div>
              </div>
            </div>

            <div className="thumb-zone-card">
              <div className="tz-header">
                <h4>Ihr persönlicher Architekt</h4>
                <span style={{ fontSize: "6.5pt", color: "#ff6b6b", fontWeight: 700 }}>● Vor Ort in Fulda</span>
              </div>
              <div className="tz-content">
                <div className="founder-avatar" style={{ width: "17mm", height: "21mm", borderRadius: "1.5mm", overflow: "hidden", flexShrink: 0, border: "1px solid rgba(255,255,255,0.25)" }}>
                  <img src="/images/team/Majeed-Shams.jpg" alt={CONTACT.founder} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
                </div>
                <div className="contact-details" style={{ flex: 1 }}>
                  <div className="contact-item"><strong>Majeed Shams</strong> M.Eng.</div>
                  <div className="contact-item" style={{ fontSize: "5.8pt", color: "#9ca3af" }}>Frankfurt am Main · AKH 21886</div>
                  <div className="direct-phone">{CONTACT.phoneFrankfurt}</div>
                  <div className="contact-item" style={{ fontSize: "5.6pt", color: "#d1d5db" }}>{CONTACT.primaryAddress.street}</div>
                  <div className="contact-item">{CONTACT.email}</div>
                </div>
                <div className="qr-frame">
                  <img src="/qr-shams.svg" alt="QR Code Shams Consult" />
                </div>
              </div>
              <div className="tz-footer">
                QR-Code scannen für Projektportfolio & Terminvereinbarung · shams-consult.de
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SHEET 2: ENGLISH SIDE */}
      {showEn && (
        <div className="sheet" id="sheet-en">
          {/* PANEL EN 1: COVER PAGE */}
          <div className="panel">
            <div className="fold-marker">Fold 1</div>
            <div className="panel-header">
              <img src="/logo.png" alt={CONTACT.companyName} className="logo-img" />
              <div className="sub-brand">Architecture & Urban Planning</div>
              <div className="sub-brand-tag">Frankfurt Rhine-Main · Germany</div>
            </div>

            <div className="cover-body">
              <div>
                <h1 className="hero-title">Solid.<br />Sustainable.<br /><span>Engineered.</span></h1>
                <p className="hero-tagline">
                  Your specialized architectural partner for high-efficiency construction with <strong>FCN Precast & Liapor Systems</strong>.
                </p>
              </div>

              <div className="hero-image-wrap">
                <img src="/images/b2b/1.png" alt="Semi-Detached Residence Seeheim-Jugenheim" />
              </div>
            </div>

            <div className="cover-footer" style={{ display: "flex", alignItems: "center", gap: "2.5mm" }}>
              <div style={{ width: "9mm", height: "9mm", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "1px solid #d1d5db" }}>
                <img src="/images/team/Majeed-Shams.jpg" alt={CONTACT.founder} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
              </div>
              <div>
                <div className="founder-line">{CONTACT.founder}</div>
                <div className="chamber-line">Registered Architect · Chamber of Architects Hesse (AKH 21886)</div>
              </div>
            </div>
          </div>

          {/* PANEL EN 2: PROVEN TRACK RECORD */}
          <div className="panel panel-case-study">
            <div className="fold-marker">Fold 2</div>
            <div>
              <div className="section-eyebrow">Proven Case Study · Precast Synergy</div>
              <h2 className="section-heading">From Structural Shell to Turnkey Living</h2>
              
              <div className="comparison-grid">
                <div className="comp-item">
                  <img src="/images/b2b/4.png" alt="Precast Wall Assembly Seeheim-Jugenheim" />
                </div>
                <div className="comp-item">
                  <img src="/images/b2b/1.png" alt="Completed Modern Turnkey Home" />
                </div>
              </div>

              <div className="usp-list">
                <div className="usp-box">
                  <div className="usp-num">1</div>
                  <div className="usp-text">
                    <h4>Up to 60% Shorter Shell Construction</h4>
                    <p>Off-site prefabrication virtually eliminates weather downtime and accelerates completion milestones.</p>
                  </div>
                </div>
                <div className="usp-box">
                  <div className="usp-num">2</div>
                  <div className="usp-text">
                    <h4>Liapor Thermal & Acoustic Excellence</h4>
                    <p>Optimized carbon footprint, fire resistance, and healthy indoor air quality engineered from day one.</p>
                  </div>
                </div>
                <div className="usp-box">
                  <div className="usp-num">3</div>
                  <div className="usp-text">
                    <h4>Zero Tolerance Interface Alignment</h4>
                    <p>Flawless translation from digital CAD/BIM model directly to precast plant manufacturing specs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PANEL EN 3: SERVICES & CONVERSION CTA */}
          <div className="panel panel-cta">
            <div className="fold-marker">Outer Flap</div>
            <div>
              <div className="section-eyebrow">Full Scope Architecture HOAI 1–8</div>
              <h3 className="section-heading">Planning Reliability for Developers & Owners</h3>

              <div className="services-stack">
                <div className="service-card">
                  <h5>1. Design & Building Permits</h5>
                  <p>Zoning code optimization, fast-track permitting, and municipal approvals across Germany.</p>
                </div>
                <div className="service-card">
                  <h5>2. Precast Component Engineering</h5>
                  <p>Detailed construction blueprints harmonized directly with FCN factory prefabrication parameters.</p>
                </div>
                <div className="service-card">
                  <h5>3. Site Supervision & Cost Control</h5>
                  <p>Rigorous quality control, timeline commitment, and budget transparency through to handover.</p>
                </div>
              </div>
            </div>

            <div className="thumb-zone-card">
              <div className="tz-header">
                <h4>Your Lead Architect</h4>
                <span style={{ fontSize: "6.5pt", color: "#ff6b6b", fontWeight: 700 }}>● Available in Fulda</span>
              </div>
              <div className="tz-content">
                <div className="founder-avatar" style={{ width: "17mm", height: "21mm", borderRadius: "1.5mm", overflow: "hidden", flexShrink: 0, border: "1px solid rgba(255,255,255,0.25)" }}>
                  <img src="/images/team/Majeed-Shams.jpg" alt={CONTACT.founder} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
                </div>
                <div className="contact-details" style={{ flex: 1 }}>
                  <div className="contact-item"><strong>Majeed Shams</strong> M.Eng.</div>
                  <div className="contact-item" style={{ fontSize: "5.8pt", color: "#9ca3af" }}>Frankfurt am Main · Hesse Chamber</div>
                  <div className="direct-phone">+49 69 74 223 777</div>
                  <div className="contact-item" style={{ fontSize: "5.6pt", color: "#d1d5db" }}>{CONTACT.primaryAddress.street}</div>
                  <div className="contact-item">{CONTACT.email}</div>
                </div>
                <div className="qr-frame">
                  <img src="/qr-shams.svg" alt="QR Code Shams Consult" />
                </div>
              </div>
              <div className="tz-footer">
                Scan QR code for digital portfolio & direct meeting booking · shams-consult.de
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
