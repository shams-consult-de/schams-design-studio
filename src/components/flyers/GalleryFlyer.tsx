import React from "react";
import { CONTACT } from "../../lib/contact";
import { FlyerProps } from "./types";

export function GalleryFlyer({ language = "all", className = "" }: FlyerProps) {
  const showDe = language === "de" || language === "all";
  const showEn = language === "en" || language === "all";

  return (
    <div className={`flyer-root flyer-gallery ${className}`}>
      <style>{`
        .flyer-gallery {
          --brand-red: #d92323;
          --brand-dark: #121417;
          --brand-gray: #24272c;
          --brand-light: #f8f9fa;
          --brand-border: #e5e7eb;
          --brand-muted: #6b7280;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: var(--brand-dark);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          -webkit-font-smoothing: antialiased;
        }

        .flyer-gallery .sheet {
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

        .flyer-gallery .panel {
          width: 99mm;
          height: 210mm;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border-right: 1px dashed rgba(0, 0, 0, 0.12);
        }
        .flyer-gallery .panel:last-child { border-right: none; }
        .flyer-gallery .fold-marker {
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
        .flyer-gallery .panel-cover {
          padding: 9mm;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #ffffff;
        }
        .flyer-gallery .logo-img { height: 16mm; object-fit: contain; margin-bottom: 2mm; display: block; }
        .flyer-gallery .sub-brand { font-size: 8pt; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: var(--brand-gray); }
        .flyer-gallery .hero-title { font-size: 17pt; font-weight: 800; line-height: 1.18; color: var(--brand-dark); margin: 3mm 0 1.5mm 0; }
        .flyer-gallery .hero-title span { color: var(--brand-red); }
        .flyer-gallery .hero-desc { font-size: 8pt; line-height: 1.4; color: var(--brand-muted); margin-bottom: 3mm; }

        .flyer-gallery .mosaic-cover {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2mm;
          height: 86mm;
          margin-bottom: 2mm;
        }
        .flyer-gallery .mosaic-cover .item-large {
          grid-column: span 2;
          height: 48mm;
          border-radius: 2mm;
          overflow: hidden;
          position: relative;
          box-shadow: 0 2mm 5mm rgba(0,0,0,0.06);
        }
        .flyer-gallery .mosaic-cover .item-sm {
          height: 36mm;
          border-radius: 2mm;
          overflow: hidden;
          position: relative;
          box-shadow: 0 2mm 5mm rgba(0,0,0,0.06);
        }
        .flyer-gallery .mosaic-cover img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .flyer-gallery .cover-founder-badge {
          display: flex;
          align-items: center;
          gap: 2.5mm;
          border-top: 1px solid #e5e7eb;
          padding-top: 2mm;
        }
        .flyer-gallery .cover-founder-avatar {
          width: 9mm;
          height: 9mm;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 1px solid #d1d5db;
        }
        .flyer-gallery .cover-founder-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
        }

        /* CENTER PANEL */
        .flyer-gallery .panel-gallery {
          background: #f8fafc;
          padding: 8mm;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .flyer-gallery .sec-eyebrow { font-size: 6.8pt; font-weight: 800; text-transform: uppercase; letter-spacing: 1.2px; color: var(--brand-red); }
        .flyer-gallery .sec-title { font-size: 12.5pt; font-weight: 800; color: var(--brand-dark); line-height: 1.25; margin: 1mm 0 2.5mm 0; }
        
        .flyer-gallery .gallery-grid-4 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 2.2mm;
          height: 126mm;
          margin-bottom: 2.5mm;
        }
        .flyer-gallery .g-card {
          position: relative;
          border-radius: 2mm;
          overflow: hidden;
          box-shadow: 0 2mm 5mm rgba(0,0,0,0.08);
          background: #eaeef3;
        }
        .flyer-gallery .g-card img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .flyer-gallery .gallery-summary {
          background: #fff;
          border: 1px solid var(--brand-border);
          border-radius: 2mm;
          padding: 2.5mm 3mm;
          font-size: 6.8pt;
          line-height: 1.35;
          color: var(--brand-gray);
        }
        .flyer-gallery .gallery-summary strong { color: var(--brand-dark); }

        /* THIRD PANEL */
        .flyer-gallery .panel-end {
          padding: 8mm;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #ffffff;
        }
        .flyer-gallery .featured-site-img {
          width: 100%;
          height: 48mm;
          border-radius: 2mm;
          overflow: hidden;
          position: relative;
          margin-bottom: 2.5mm;
          box-shadow: 0 2mm 5mm rgba(0,0,0,0.08);
        }
        .flyer-gallery .featured-site-img img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .flyer-gallery .feature-list {
          display: flex;
          flex-direction: column;
          gap: 1.8mm;
          margin-bottom: 2.5mm;
        }
        .flyer-gallery .f-item {
          display: flex;
          align-items: flex-start;
          gap: 2mm;
          font-size: 6.8pt;
          line-height: 1.35;
          color: #374151;
        }
        .flyer-gallery .f-dot { width: 3mm; height: 3mm; border-radius: 50%; background: var(--brand-red); margin-top: 0.8mm; flex-shrink: 0; }

        /* HUMANIZED CTA THUMB ZONE */
        .flyer-gallery .tz-card {
          background: var(--brand-dark);
          color: #fff;
          border-radius: 3mm;
          padding: 3.5mm;
          display: flex;
          flex-direction: column;
          gap: 2mm;
        }
        .flyer-gallery .tz-top { display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 1.2mm; }
        .flyer-gallery .tz-top h4 { font-size: 8pt; font-weight: 700; color: #fff; }
        .flyer-gallery .tz-body { display: flex; align-items: center; gap: 2.8mm; }
        
        .flyer-gallery .founder-avatar {
          width: 16mm;
          height: 20mm;
          border-radius: 1.5mm;
          overflow: hidden;
          flex-shrink: 0;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }
        .flyer-gallery .founder-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
        }

        .flyer-gallery .qr-box { width: 17mm; height: 17mm; background: #fff; border-radius: 1.5mm; padding: 0.8mm; flex-shrink: 0; }
        .flyer-gallery .qr-box img { width: 100%; height: 100%; object-fit: contain; }
        .flyer-gallery .tz-info { font-size: 6.5pt; line-height: 1.35; color: #d1d5db; }
        .flyer-gallery .tz-info strong { color: #fff; }
        .flyer-gallery .tz-tel { font-size: 8pt; font-weight: 800; color: #ff6b6b; margin-top: 0.4mm; }
        .flyer-gallery .tz-foot { font-size: 5.8pt; color: #9ca3af; text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1mm; }

        @media print {
          @page { size: 297mm 210mm; margin: 0; }
          .flyer-gallery { background: none; padding: 0; margin: 0; gap: 0; display: block !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .flyer-gallery .fold-marker { display: none !important; }
          .flyer-gallery .sheet { box-shadow: none; page-break-after: always; break-after: page; }
          .flyer-gallery .sheet:last-of-type, .flyer-gallery .sheet:last-child { page-break-after: auto !important; break-after: auto !important; }
          .flyer-gallery .panel { border-right: none !important; }
        }
      `}</style>

      {/* SEITE 1: DEUTSCH */}
      {showDe && (
        <div className="sheet" id="gallery-de">
          {/* PANEL 1: COVER MIT GRÜNDER-AVATAR */}
          <div className="panel panel-cover">
            <div className="fold-marker">Falz 1</div>
            <div>
              <img src="/logo.png" alt={CONTACT.companyName} className="logo-img" />
              <div className="sub-brand">Architektur & Stadtplanung</div>
              <h1 className="hero-title">Bauen im Bild.<br /><span>Präzision in Beton.</span></h1>
              <p className="hero-desc">Realisierte Referenzen mit FCN Systemrohbau & Liapor Wandelementen.</p>
            </div>

            <div className="mosaic-cover">
              <div className="item-large">
                <img src="/images/b2b/1.png" alt="Seeheim Jugenheim Doppelhaus" />
              </div>
              <div className="item-sm">
                <img src="/images/b2b/2.png" alt="Rohbau Seeheim" />
              </div>
              <div className="item-sm">
                <img src="/images/b2b/5.png" alt="Gartenansicht Seeheim" />
              </div>
            </div>

            <div className="cover-founder-badge">
              <div className="cover-founder-avatar">
                <img src="/images/team/Majeed-Shams.jpg" alt={CONTACT.founder} />
              </div>
              <div>
                <div style={{ fontSize: "7.2pt", fontWeight: 700, color: "#1f2937" }}>{CONTACT.founder}</div>
                <div style={{ fontSize: "6pt", color: "#6b7280" }}>Architekt & Stadtplaner · AKH Hessen Nr. 21886</div>
              </div>
            </div>
          </div>

          {/* PANEL 2: 4-BILDER-SCHAU */}
          <div className="panel panel-gallery">
            <div className="fold-marker">Falz 2</div>
            <div>
              <span className="sec-eyebrow">Baustellen-Einblicke</span>
              <h2 className="sec-title">Vom Kranhub zur bezugsfertigen Architektur</h2>
            </div>

            <div className="gallery-grid-4">
              <div className="g-card">
                <img src="/images/b2b/Image.jpg" alt="Kranmontage" />
              </div>
              <div className="g-card">
                <img src="/images/b2b/4.png" alt="Liapor Rohbau" />
              </div>
              <div className="g-card">
                <img src="/images/b2b/6.png" alt="Haus 3 im Bau" />
              </div>
              <div className="g-card">
                <img src="/images/b2b/5.png" alt="Vollendetes Haus" />
              </div>
            </div>

            <div className="gallery-summary">
              <strong>FCN-Systemvorteil in der Praxis:</strong> Höchste Maßhaltigkeit, optimierte Baustellenlogistik und signifikante Zeiteinsparung im Rohbau.
            </div>
          </div>

          {/* PANEL 3: HUMANISIERTE CTA */}
          <div className="panel panel-end">
            <div className="fold-marker">Außen</div>
            <div>
              <span className="sec-eyebrow">Generalplanung</span>
              <h3 className="sec-title" style={{ fontSize: "11.5pt", marginBottom: "2mm" }}>Ihr Partner für anspruchsvollen Massivbau</h3>

              <div className="featured-site-img">
                <img src="/images/b2b/Image.jpg" alt="Baustellenbanner Shams Consult" />
              </div>

              <div className="feature-list">
                <div className="f-item">
                  <span className="f-dot"></span>
                  <div><strong>Entwurf & Genehmigung:</strong> Bauanträge & Bebauungsplanprüfung mit Fachkompetenz.</div>
                </div>
                <div className="f-item">
                  <span className="f-dot"></span>
                  <div><strong>FCN-Elementabstimmung:</strong> Statik- & Werkplanung passgenau für die Vorfertigung.</div>
                </div>
                <div className="f-item">
                  <span className="f-dot"></span>
                  <div><strong>Bauleitung LPH 8:</strong> Präsenz auf der Baustelle für Qualität und Termintreue.</div>
                </div>
              </div>
            </div>

            <div className="tz-card">
              <div className="tz-top">
                <h4>Ihr persönlicher Architekt</h4>
                <span style={{ fontSize: "6pt", color: "#ff8585" }}>Erstberatung kostenfrei</span>
              </div>
              <div className="tz-body">
                <div className="founder-avatar">
                  <img src="/images/team/Majeed-Shams.jpg" alt={CONTACT.founder} />
                </div>
                <div className="tz-info" style={{ flex: 1 }}>
                  <div><strong>Majeed Shams</strong> M.Eng.</div>
                  <div style={{ fontSize: "5.8pt", color: "#9ca3af" }}>Frankfurt am Main · AKH 21886</div>
                  <div className="tz-tel">{CONTACT.phoneFrankfurt}</div>
                  <div style={{ fontSize: "5.6pt", color: "#d1d5db" }}>{CONTACT.primaryAddress.street}</div>
                  <div style={{ fontSize: "5.6pt", color: "#d1d5db" }}>{CONTACT.email}</div>
                </div>
                <div className="qr-box">
                  <img src="/qr-shams.svg" alt="QR-Code" />
                </div>
              </div>
              <div className="tz-foot">shams-consult.de · Jetzt QR-Code scannen</div>
            </div>
          </div>
        </div>
      )}

      {/* SEITE 2: ENGLISH (TURNAROUND) */}
      {showEn && (
        <div className="sheet" id="gallery-en">
          {/* PANEL 1: COVER EN */}
          <div className="panel panel-cover">
            <div className="fold-marker">Fold 1</div>
            <div>
              <img src="/logo.png" alt={CONTACT.companyName} className="logo-img" />
              <div className="sub-brand">Architecture & Urban Planning</div>
              <h1 className="hero-title">Built Proof.<br /><span>Precast Precision.</span></h1>
              <p className="hero-desc">Realized project showcases built with FCN precast components & Liapor.</p>
            </div>

            <div className="mosaic-cover">
              <div className="item-large">
                <img src="/images/b2b/1.png" alt="Seeheim Jugenheim Residence" />
              </div>
              <div className="item-sm">
                <img src="/images/b2b/4.png" alt="Precast Shell" />
              </div>
              <div className="item-sm">
                <img src="/images/b2b/5.png" alt="Finished Home" />
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

          {/* PANEL 2: 4-IMAGE GALLERY EN */}
          <div className="panel panel-gallery">
            <div className="fold-marker">Fold 2</div>
            <div>
              <span className="sec-eyebrow">On-Site Execution</span>
              <h2 className="sec-title">From Precision Off-Site Assembly to Turnkey Living</h2>
            </div>

            <div className="gallery-grid-4">
              <div className="g-card">
                <img src="/images/b2b/Image.jpg" alt="Crane montage" />
              </div>
              <div className="g-card">
                <img src="/images/b2b/2.png" alt="Liapor wall joints" />
              </div>
              <div className="g-card">
                <img src="/images/b2b/6.png" alt="House 3 ongoing" />
              </div>
              <div className="g-card">
                <img src="/images/b2b/1.png" alt="Finished architecture" />
              </div>
            </div>

            <div className="gallery-summary">
              <strong>FCN System Advantage:</strong> Unmatched dimensional accuracy, streamlined site logistics, and shortened construction timelines.
            </div>
          </div>

          {/* PANEL 3: HUMANIZED CTA EN */}
          <div className="panel panel-end">
            <div className="fold-marker">Outer Flap</div>
            <div>
              <span className="sec-eyebrow">General Planning</span>
              <h3 className="sec-title" style={{ fontSize: "11.5pt", marginBottom: "2mm" }}>Architectural Excellence in Solid Precast Construction</h3>

              <div className="featured-site-img">
                <img src="/images/b2b/Image.jpg" alt="Construction Site Banner" />
              </div>

              <div className="feature-list">
                <div className="f-item">
                  <span className="f-dot"></span>
                  <div><strong>Design & Permitting:</strong> Full German zoning compliance and zoning approvals.</div>
                </div>
                <div className="f-item">
                  <span className="f-dot"></span>
                  <div><strong>FCN Precast Coordination:</strong> Factory-tailored structural and module engineering.</div>
                </div>
                <div className="f-item">
                  <span className="f-dot"></span>
                  <div><strong>Site Supervision HOAI 8:</strong> On-site leadership safeguarding schedule and budget.</div>
                </div>
              </div>
            </div>

            <div className="tz-card">
              <div className="tz-top">
                <h4>Your Lead Architect</h4>
                <span style={{ fontSize: "6pt", color: "#ff8585" }}>Complimentary Initial Call</span>
              </div>
              <div className="tz-body">
                <div className="founder-avatar">
                  <img src="/images/team/Majeed-Shams.jpg" alt={CONTACT.founder} />
                </div>
                <div className="tz-info" style={{ flex: 1 }}>
                  <div><strong>Majeed Shams</strong> M.Eng.</div>
                  <div style={{ fontSize: "5.8pt", color: "#9ca3af" }}>Frankfurt am Main · Hesse Chamber</div>
                  <div className="tz-tel">+49 69 74 223 777</div>
                  <div style={{ fontSize: "5.6pt", color: "#d1d5db" }}>{CONTACT.primaryAddress.street}</div>
                  <div style={{ fontSize: "5.6pt", color: "#d1d5db" }}>{CONTACT.email}</div>
                </div>
                <div className="qr-box">
                  <img src="/qr-shams.svg" alt="QR-Code" />
                </div>
              </div>
              <div className="tz-foot">shams-consult.de · Scan QR Code to connect</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
