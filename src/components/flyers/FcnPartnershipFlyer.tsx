import React from "react";
import { CONTACT } from "../../lib/contact";
import { FlyerProps } from "./types";

export function FcnPartnershipFlyer({ className = "" }: FlyerProps) {
  return (
    <div className={`flyer-root flyer-fcn ${className}`}>
      <style>{`
        .flyer-fcn {
          --brand-red: #dc2626;
          --brand-red-dark: #b91c1c;
          --brand-red-light: rgba(220, 38, 38, 0.08);
          --brand-dark: #0f172a;
          --brand-slate: #1e293b;
          --brand-charcoal: #334155;
          --brand-muted: #64748b;
          --brand-border: #e2e8f0;
          --brand-light: #f8fafc;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: var(--brand-dark);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          -webkit-font-smoothing: antialiased;
        }

        .flyer-fcn .sheet {
          width: 210mm;
          height: 297mm;
          background: #ffffff;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          page-break-after: always;
          break-after: page;
          padding: 14mm 16mm 12mm 16mm;
        }

        .flyer-fcn .slide-header {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 3.5mm;
          border-bottom: 1px solid var(--brand-border);
        }
        .flyer-fcn .brand-duo {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .flyer-fcn .brand-logo-shams {
          height: 9.5mm;
          width: auto;
          object-fit: contain;
        }
        .flyer-fcn .brand-separator {
          font-size: 13pt;
          font-weight: 300;
          color: #94a3b8;
        }
        .flyer-fcn .brand-logo-fcn {
          height: 7.5mm;
          width: auto;
          object-fit: contain;
        }
        .flyer-fcn .slide-meta {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .flyer-fcn .meta-tag {
          font-size: 6.8pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: var(--brand-muted);
        }
        .flyer-fcn .page-number-pill {
          background: var(--brand-dark);
          color: #ffffff;
          font-size: 6.8pt;
          font-weight: 800;
          padding: 2.5px 7px;
          border-radius: 9999px;
          letter-spacing: 0.5px;
        }

        .flyer-fcn .slide-footer {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 3.5mm;
          border-top: 1px solid var(--brand-border);
          font-size: 6.5pt;
          color: var(--brand-muted);
        }
        .flyer-fcn .footer-left strong {
          color: var(--brand-dark);
          font-weight: 700;
        }
        .flyer-fcn .footer-right {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
        }
        .flyer-fcn .swipe-hint {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--brand-red);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }

        .flyer-fcn .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 7.2pt;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.6px;
          color: var(--brand-red);
          margin-bottom: 2mm;
        }
        .flyer-fcn .slide-title {
          font-size: 20pt;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.6px;
          color: var(--brand-dark);
          margin-bottom: 2.5mm;
          text-transform: uppercase;
        }
        .flyer-fcn .slide-title span {
          color: var(--brand-red);
        }
        .flyer-fcn .slide-subtitle {
          font-size: 9.2pt;
          line-height: 1.45;
          color: var(--brand-charcoal);
          font-weight: 400;
          margin-bottom: 5mm;
        }

        /* PAGE 1 */
        .flyer-fcn .cover-body {
          position: relative;
          z-index: 10;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 6mm 0 2mm 0;
        }
        .flyer-fcn .cover-hero-layout {
          display: block;
        }
        .flyer-fcn .cover-hero-text {
          display: flex;
          flex-direction: column;
        }
        .flyer-fcn .cover-hero-title {
          font-size: 24pt;
          font-weight: 900;
          line-height: 1.12;
          letter-spacing: -0.8px;
          color: var(--brand-dark);
          margin: 2.5mm 0 3.5mm 0;
        }
        .flyer-fcn .cover-hero-title span {
          color: var(--brand-red);
          display: block;
        }
        .flyer-fcn .cover-lead {
          font-size: 10pt;
          line-height: 1.45;
          color: var(--brand-charcoal);
          font-weight: 500;
        }
        .flyer-fcn .cover-image-container {
          width: 100%;
          height: 98mm;
          border-radius: 4mm;
          overflow: hidden;
          position: relative;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.16);
          border: 1px solid var(--brand-border);
          margin: 4mm 0;
        }
        .flyer-fcn .cover-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 40%;
          display: block;
        }
        .flyer-fcn .cover-image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.4) 65%, transparent 100%);
          color: #ffffff;
          padding: 6mm 6mm 3.5mm 6mm;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .flyer-fcn .caption-title {
          font-size: 8.8pt;
          font-weight: 800;
          letter-spacing: 0.3px;
        }
        .flyer-fcn .caption-sub {
          font-size: 6.8pt;
          color: #cbd5e1;
          margin-top: 0.5mm;
        }
        .flyer-fcn .caption-badge {
          background: var(--brand-red);
          color: #ffffff;
          padding: 3px 8px;
          border-radius: 9999px;
          font-size: 6.5pt;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .flyer-fcn .cover-usp-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3mm;
          background: var(--brand-light);
          border: 1px solid var(--brand-border);
          border-radius: 3mm;
          padding: 3.5mm 4mm;
        }
        .flyer-fcn .usp-item {
          display: flex;
          flex-direction: column;
          gap: 1mm;
          border-left: 2.5px solid var(--brand-red);
          padding-left: 2.5mm;
        }
        .flyer-fcn .usp-item strong {
          font-size: 7.2pt;
          font-weight: 800;
          color: var(--brand-dark);
          line-height: 1.2;
        }
        .flyer-fcn .usp-item span {
          font-size: 6.2pt;
          color: var(--brand-muted);
          line-height: 1.25;
        }

        /* PAGE 2 */
        .flyer-fcn .page-body {
          position: relative;
          z-index: 10;
          flex: 1;
          display: flex;
          flex-direction: column;
          padding-top: 5mm;
        }
        .flyer-fcn .synergy-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5mm;
          margin-bottom: 5mm;
        }
        .flyer-fcn .comparison-card {
          border-radius: 3mm;
          padding: 4.5mm;
          border: 1px solid var(--brand-border);
        }
        .flyer-fcn .comparison-card.bad {
          background: #fff;
          border-color: #cbd5e1;
        }
        .flyer-fcn .comparison-card.good {
          background: #fef2f2;
          border-color: #fecaca;
        }
        .flyer-fcn .comparison-header {
          font-size: 7.8pt;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 2.5mm;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .flyer-fcn .comparison-card.bad .comparison-header { color: #64748b; }
        .flyer-fcn .comparison-card.good .comparison-header { color: var(--brand-red); }

        .flyer-fcn .comparison-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 2mm;
          font-size: 7.2pt;
          line-height: 1.35;
        }
        .flyer-fcn .comparison-list li {
          display: flex;
          align-items: flex-start;
          gap: 6px;
        }
        .flyer-fcn .comparison-card.bad .comparison-list li { color: #475569; }
        .flyer-fcn .comparison-card.good .comparison-list li { color: var(--brand-dark); font-weight: 600; }

        .flyer-fcn .kpi-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4mm;
          margin: 4mm 0 6mm 0;
        }
        .flyer-fcn .kpi-box {
          background: var(--brand-dark);
          color: #ffffff;
          border-radius: 3mm;
          padding: 4.5mm 4mm;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .flyer-fcn .kpi-box::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--brand-red);
        }
        .flyer-fcn .kpi-value {
          font-size: 19pt;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.5px;
          line-height: 1.1;
        }
        .flyer-fcn .kpi-value span { color: #f87171; }
        .flyer-fcn .kpi-label {
          font-size: 6.8pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-top: 1mm;
          color: #94a3b8;
        }

        .flyer-fcn .synergy-visual-quote {
          display: grid;
          grid-template-columns: 80mm 1fr;
          gap: 5mm;
          align-items: center;
          background: var(--brand-light);
          border: 1px solid var(--brand-border);
          border-radius: 3mm;
          padding: 4mm;
          margin-top: auto;
        }
        .flyer-fcn .synergy-img-frame {
          height: 48mm;
          border-radius: 2.5mm;
          overflow: hidden;
        }
        .flyer-fcn .synergy-img-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .flyer-fcn .synergy-quote-text {
          display: flex;
          flex-direction: column;
          gap: 2mm;
        }
        .flyer-fcn .quote-mark {
          font-size: 26pt;
          line-height: 0.7;
          color: var(--brand-red);
          font-family: Georgia, serif;
        }
        .flyer-fcn .quote-content {
          font-size: 7.8pt;
          font-style: italic;
          color: var(--brand-slate);
          line-height: 1.45;
        }
        .flyer-fcn .quote-author {
          font-size: 6.8pt;
          font-weight: 800;
          color: var(--brand-dark);
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }

        /* PAGE 3 */
        .flyer-fcn .pillar-stack {
          display: flex;
          flex-direction: column;
          gap: 3.5mm;
          margin-top: 2mm;
        }
        .flyer-fcn .pillar-card {
          display: grid;
          grid-template-columns: 14mm 1fr;
          gap: 3.5mm;
          align-items: flex-start;
          background: #ffffff;
          border: 1px solid var(--brand-border);
          border-radius: 3mm;
          padding: 3.8mm 4.5mm;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }
        .flyer-fcn .pillar-card:nth-child(odd) {
          background: #fafafa;
        }
        .flyer-fcn .pillar-badge {
          width: 12mm;
          height: 12mm;
          border-radius: 2.5mm;
          background: var(--brand-dark);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11pt;
          font-weight: 900;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
          border-bottom: 2.5px solid var(--brand-red);
        }
        .flyer-fcn .pillar-content h4 {
          font-size: 8.6pt;
          font-weight: 800;
          color: var(--brand-dark);
          margin-bottom: 1mm;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .flyer-fcn .pillar-content h4 span.tag {
          font-size: 5.8pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: var(--brand-red);
          background: #fee2e2;
          padding: 1.5px 5px;
          border-radius: 4px;
        }
        .flyer-fcn .pillar-content p {
          font-size: 7.2pt;
          line-height: 1.42;
          color: var(--brand-charcoal);
        }

        /* PAGE 4 */
        .flyer-fcn .case-grid {
          display: flex;
          flex-direction: column;
          gap: 5mm;
          margin-top: 1mm;
        }
        .flyer-fcn .case-panel {
          border: 1px solid var(--brand-border);
          border-radius: 3.5mm;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }
        .flyer-fcn .case-panel-header {
          padding: 3mm 4.5mm;
          background: var(--brand-light);
          border-bottom: 1px solid var(--brand-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .flyer-fcn .case-panel-header h3 {
          font-size: 8.8pt;
          font-weight: 800;
          color: var(--brand-dark);
        }
        .flyer-fcn .case-tag {
          font-size: 6.2pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: var(--brand-red);
          background: #fee2e2;
          padding: 2px 7px;
          border-radius: 9999px;
        }
        .flyer-fcn .case-content-split {
          display: grid;
          grid-template-columns: 75mm 1fr;
          gap: 4mm;
          padding: 4mm;
        }
        .flyer-fcn .case-img-wrap {
          height: 48mm;
          border-radius: 2.5mm;
          overflow: hidden;
          border: 1px solid var(--brand-border);
        }
        .flyer-fcn .case-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .flyer-fcn .case-data {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 7.2pt;
          line-height: 1.4;
          color: var(--brand-charcoal);
        }
        .flyer-fcn .case-bullet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.5mm;
          margin-top: 2mm;
        }
        .flyer-fcn .case-bullet-list li {
          display: flex;
          align-items: flex-start;
          gap: 5px;
          color: var(--brand-dark);
          font-size: 6.8pt;
          font-weight: 500;
        }
        .flyer-fcn .case-bullet-list li strong {
          color: var(--brand-red);
        }
        .flyer-fcn .case-dual-images {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3mm;
          height: 48mm;
        }
        .flyer-fcn .case-dual-images .img-box {
          border-radius: 2.5mm;
          overflow: hidden;
          position: relative;
          border: 1px solid var(--brand-border);
        }
        .flyer-fcn .case-dual-images .img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .flyer-fcn .img-label {
          position: absolute;
          bottom: 2mm;
          left: 2mm;
          background: rgba(15, 23, 42, 0.85);
          color: #fff;
          font-size: 5.8pt;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* PAGE 5 */
        .flyer-fcn .cta-layout {
          display: flex;
          flex-direction: column;
          gap: 5mm;
          margin-top: 2mm;
        }
        .flyer-fcn .cta-service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3.5mm;
        }
        .flyer-fcn .cta-service-box {
          background: var(--brand-light);
          border: 1px solid var(--brand-border);
          border-radius: 3mm;
          padding: 3.5mm;
          display: flex;
          flex-direction: column;
          gap: 1.2mm;
        }
        .flyer-fcn .cta-service-box h5 {
          font-size: 7.6pt;
          font-weight: 800;
          color: var(--brand-dark);
        }
        .flyer-fcn .cta-service-box p {
          font-size: 6.5pt;
          line-height: 1.35;
          color: var(--brand-muted);
        }
        .flyer-fcn .cta-card-luxury {
          background: var(--brand-dark);
          color: #ffffff;
          border-radius: 4mm;
          padding: 6mm;
          position: relative;
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-top: 3.5px solid var(--brand-red);
        }
        .flyer-fcn .cta-card-header {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          padding-bottom: 3mm;
          margin-bottom: 4mm;
        }
        .flyer-fcn .cta-card-header h4 {
          font-size: 9pt;
          font-weight: 800;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .flyer-fcn .availability-pill {
          font-size: 6.5pt;
          color: #4ade80;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .flyer-fcn .availability-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
        }
        .flyer-fcn .cta-profile-grid {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: 24mm 1fr 24mm;
          gap: 5mm;
          align-items: center;
        }
        .flyer-fcn .profile-photo {
          width: 24mm;
          height: 30mm;
          border-radius: 2.5mm;
          overflow: hidden;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
        }
        .flyer-fcn .profile-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
        }
        .flyer-fcn .profile-info {
          display: flex;
          flex-direction: column;
          gap: 1.2mm;
        }
        .flyer-fcn .profile-name {
          font-size: 10.5pt;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: 0.2px;
        }
        .flyer-fcn .profile-title {
          font-size: 6.8pt;
          color: #cbd5e1;
          font-weight: 500;
          margin-bottom: 1.5mm;
        }
        .flyer-fcn .contact-line {
          font-size: 7.2pt;
          color: #e2e8f0;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .flyer-fcn a {
          color: inherit;
          text-decoration: none;
        }
        .flyer-fcn a:hover {
          text-decoration: underline;
        }
        .flyer-fcn .contact-line strong {
          color: #ffffff;
        }
        .flyer-fcn .hotline-highlight {
          font-size: 9pt;
          font-weight: 900;
          color: #f87171;
          letter-spacing: 0.4px;
          margin-top: 1mm;
          display: block;
        }
        .flyer-fcn .qr-container {
          background: #ffffff;
          border-radius: 2.5mm;
          padding: 2mm;
          width: 24mm;
          height: 24mm;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
        }
        .flyer-fcn .qr-container img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .flyer-fcn .cta-card-bottom {
          position: relative;
          z-index: 10;
          margin-top: 4mm;
          padding-top: 3mm;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 6.5pt;
          color: #94a3b8;
          text-align: center;
        }

        @media print {
          @page {
            size: 210mm 297mm;
            margin: 0;
          }
          .flyer-fcn {
            background: none;
            padding: 0;
            margin: 0;
            gap: 0;
            display: block !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .flyer-fcn .sheet {
            box-shadow: none;
            margin: 0;
            page-break-after: always;
            break-after: page;
          }
          .flyer-fcn .sheet:last-of-type,
          .flyer-fcn .sheet:last-child {
            page-break-after: auto !important;
            break-after: auto !important;
          }
        }
      `}</style>

      {/* SLIDE 1 */}
      <div className="sheet sheet-1">
        <header className="slide-header">
          <div className="brand-duo">
            <img src="/logo.png" alt={CONTACT.companyName} className="brand-logo-shams" />
            <span className="brand-separator">×</span>
            <img src="/images/partners/fcn-nuedling.svg" alt="F.C. Nüdling" className="brand-logo-fcn" />
          </div>
          <div className="slide-meta">
            <span className="meta-tag">Kooperationsprofil</span>
            <span className="page-number-pill">01 / 05</span>
          </div>
        </header>

        <main className="cover-body">
          <div className="cover-hero-layout">
            <div className="cover-hero-text">
              <div className="eyebrow">
                B2B & Industrie-Partnerschaft Hessen / Rhein-Main
              </div>
              <h1 className="cover-hero-title">
                Gute Bauprojekte entstehen <span>in der Planung.</span>
              </h1>
              <p className="cover-lead">
                <strong>Schneller bauen. Präziser planen. Wirtschaftlicher realisieren.</strong><br />
                Wie die integrale Zusammenarbeit zwischen <em>{CONTACT.companyName}</em> und <em>F.C. Nüdling Fertigteiltechnik</em> Bauherren und Investoren kalkulierbaren Projekterfolg sichert.
              </p>
            </div>
          </div>

          <div className="cover-image-container">
            <img src="/images/b2b/Image.jpg" alt="Neubau Bürogebäude Adler Seeheim-Jugenheim Baustelle mit Kran und Shams Consult Banner" />
            <div className="cover-image-caption">
              <div>
                <div className="caption-title">Neubau Bürogebäude Adler & Wohnbauprojekte · Seeheim-Jugenheim</div>
                <div className="caption-sub">Serielle Werkplanung & Fertigteilmontage direkt auf der Baustelle</div>
              </div>
              <div className="caption-badge">Praxis-Referenz</div>
            </div>
          </div>

          <div className="cover-usp-bar">
            <div className="usp-item">
              <strong>Kürzere Bauzeit</strong>
              <span>Bis zu 60% schnellere Rohbauphasen</span>
            </div>
            <div className="usp-item">
              <strong>Planungstiefe</strong>
              <span>Digitale Vorab-Kollisionsprüfung</span>
            </div>
            <div className="usp-item">
              <strong>Kostensicherheit</strong>
              <span>Verlässliche Festpreise ohne Nachträge</span>
            </div>
            <div className="usp-item">
              <strong>Verlässlichkeit</strong>
              <span>Just-in-Time Werkslogistik</span>
            </div>
          </div>
        </main>

        <footer className="slide-footer">
          <div className="footer-left">
            <strong>{CONTACT.companyName}</strong> · Architektur & Stadtplanung × <strong>F.C. Nüdling</strong> Fertigteiltechnik
          </div>
          <div className="footer-right">
            <span className="swipe-hint">Wischen für Details →</span>
          </div>
        </footer>
      </div>

      {/* SLIDE 2 */}
      <div className="sheet sheet-2">
        <header className="slide-header">
          <div className="brand-duo">
            <img src="/logo.png" alt={CONTACT.companyName} className="brand-logo-shams" />
            <span className="brand-separator">×</span>
            <img src="/images/partners/fcn-nuedling.svg" alt="F.C. Nüdling" className="brand-logo-fcn" />
          </div>
          <div className="slide-meta">
            <span className="meta-tag">Partnerschaftsmodell</span>
            <span className="page-number-pill">02 / 05</span>
          </div>
        </header>

        <main className="page-body">
          <div className="eyebrow">
            Integrale Planung trifft serielle Fertigung
          </div>
          <h2 className="slide-title">
            Wenn starke Planung auf <span>starke Produktion</span> trifft.
          </h2>
          <p className="slide-subtitle">
            Klassische Bauabläufe leiden häufig unter Reibungsverlusten zwischen Planungsbüros und ausführenden Gewerken. Unsere Partnerschaft löst diesen Flaschenhals durch eine frühzeitige, integrale Verzahnung ab Leistungsphase 1.
          </p>

          <div className="synergy-intro-grid">
            <div className="comparison-card bad">
              <div className="comparison-header">
                Klassische Baustellenabwicklung
              </div>
              <ul className="comparison-list">
                <li><span>✕</span> Unklare Schnittstellen zwischen Statik & Rohbau</li>
                <li><span>✕</span> Wetterabhängige Bauverzögerungen vor Ort</li>
                <li><span>✕</span> Teure Nacharbeiten & ungeplante Nachträge</li>
                <li><span>✕</span> Hoher Koordinationsaufwand für den Bauherrn</li>
              </ul>
            </div>

            <div className="comparison-card good">
              <div className="comparison-header">
                Shams Consult × F.C. Nüdling Standard
              </div>
              <ul className="comparison-list">
                <li><span>✓</span> Frühe Jour-Fixe-Abstimmung zu Sockel- & Deckenanschlüssen</li>
                <li><span>✓</span> Wetterunabhängige Vorfertigung im Werk Fulda</li>
                <li><span>✓</span> Millimetergenaue Passung dank digitaler Vorab-Freigaben</li>
                <li><span>✓</span> Entlastung des Bauherrn durch gemeinsame Projektsteuerung</li>
              </ul>
            </div>
          </div>

          <div className="kpi-row">
            <div className="kpi-box">
              <div className="kpi-value">bis zu <span>60%</span></div>
              <div className="kpi-label">Kürzere Rohbauzeit</div>
            </div>
            <div className="kpi-box">
              <div className="kpi-value"><span>100%</span></div>
              <div className="kpi-label">Kollisionsfreie Werkplanung</div>
            </div>
            <div className="kpi-box">
              <div className="kpi-value"><span>0</span> €</div>
              <div className="kpi-label">Unerwartete Schnittstellen-Nachträge</div>
            </div>
          </div>

          <div className="synergy-visual-quote">
            <div className="synergy-img-frame">
              <img src="/images/b2b/4.png" alt="Liapor Rohbaumontage Seeheim-Jugenheim" />
            </div>
            <div className="synergy-quote-text">
              <div className="quote-mark">“</div>
              <p className="quote-content">
                „Wer bereits in der Entwurfsphase modernste Baustofftechnologien mitdenkt, spart in der Bauausführung wertvolle Wochen und sichert nachhaltige Wirtschaftlichkeit für den Investor.“
              </p>
              <div className="quote-author">— {CONTACT.founder}</div>
            </div>
          </div>
        </main>

        <footer className="slide-footer">
          <div className="footer-left">
            <strong>{CONTACT.companyName}</strong> × <strong>F.C. Nüdling</strong> · Partnerschaftsmodell
          </div>
          <div className="footer-right">
            <span className="swipe-hint">Mehrwert für Bauherren →</span>
          </div>
        </footer>
      </div>

      {/* SLIDE 3 */}
      <div className="sheet sheet-3">
        <header className="slide-header">
          <div className="brand-duo">
            <img src="/logo.png" alt={CONTACT.companyName} className="brand-logo-shams" />
            <span className="brand-separator">×</span>
            <img src="/images/partners/fcn-nuedling.svg" alt="F.C. Nüdling" className="brand-logo-fcn" />
          </div>
          <div className="slide-meta">
            <span className="meta-tag">Kundenmehrwert</span>
            <span className="page-number-pill">03 / 05</span>
          </div>
        </header>

        <main className="page-body">
          <div className="eyebrow">
            Messbarer Mehrwert für Bauherren & Investoren
          </div>
          <h2 className="slide-title">
            5 Säulen für maximale <span>Wirtschaftlichkeit.</span>
          </h2>
          <p className="slide-subtitle">
            Ob gewerblicher Büroneubau oder anspruchsvoller Wohnungsbau: Diese fünf Faktoren schaffen handfeste Wettbewerbsvorteile für unsere Auftraggeber.
          </p>

          <div className="pillar-stack">
            <div className="pillar-card">
              <div className="pillar-badge">01</div>
              <div className="pillar-content">
                <h4>Kürzere Bauzeiten <span className="tag">Tempo</span></h4>
                <p>Einsatz werkseitig vorgefertigter Wand- und Deckenelemente beschleunigt die Bauabläufe drastisch. Die Montage beginnt unmittelbar nach Fertigstellung der Gründung – wetterunabhängig und im Takt.</p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-badge">02</div>
              <div className="pillar-content">
                <h4>Höhere Planungsqualität <span className="tag">Fehlervermeidung</span></h4>
                <p>Kontinuierlicher Jour-Fixe-Austausch zu Tragwerk, Sockeldetails, Deckenplänen und Anschlussdetails. Planungs- und Kollisionsfehler werden digital vorab erkannt und gelöst – nicht erst auf der Baustelle.</p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-badge">03</div>
              <div className="pillar-content">
                <h4>Präzision durch digitale Vorplanung <span className="tag">Maßhaltigkeit</span></h4>
                <p>Die Fertigteilproduktion nach DIN EN 13369 erzwingt eine hohe Ausführungsdetaillierung vor Baubeginn. Strukturierte Prüfberichte und Freigabeprozesse eliminieren aufwendige Nacharbeiten.</p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-badge">04</div>
              <div className="pillar-content">
                <h4>Wirtschaftlichkeit für Bauherren <span className="tag">Budgettreue</span></h4>
                <p>Kürzere Bauzeiten bedeuten geringere Zwischenfinanzierungskosten und frühere Mieteinnahmen. Transparente Werkspreise und optimierte Baustellenlogistik schaffen belastbare Budgetsicherheit.</p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-badge">05</div>
              <div className="pillar-content">
                <h4>Verlässliche Projektabwicklung <span className="tag">Sorgenfreiheit</span></h4>
                <p>Eng koordinierte Logistik, Baustellenzugänge, Statikfreigaben und Qualitätskontrollen greifen nahtlos ineinander. Technische Herausforderungen lösen wir gemeinsam als Partner, ohne den Bauherrn zu belasten.</p>
              </div>
            </div>
          </div>
        </main>

        <footer className="slide-footer">
          <div className="footer-left">
            <strong>{CONTACT.companyName}</strong> × <strong>F.C. Nüdling</strong> · B2B Erfolgsfaktoren
          </div>
          <div className="footer-right">
            <span className="swipe-hint">Praxis-Referenzen ansehen →</span>
          </div>
        </footer>
      </div>

      {/* SLIDE 4 */}
      <div className="sheet sheet-4">
        <header className="slide-header">
          <div className="brand-duo">
            <img src="/logo.png" alt={CONTACT.companyName} className="brand-logo-shams" />
            <span className="brand-separator">×</span>
            <img src="/images/partners/fcn-nuedling.svg" alt="F.C. Nüdling" className="brand-logo-fcn" />
          </div>
          <div className="slide-meta">
            <span className="meta-tag">Referenzprojekte</span>
            <span className="page-number-pill">04 / 05</span>
          </div>
        </header>

        <main className="page-body">
          <div className="eyebrow">
            Erfolgreich realisiert in Seeheim-Jugenheim
          </div>
          <h2 className="slide-title">
            Beweise in Beton: <span>Gewerbe- & Wohnbau.</span>
          </h2>
          <p className="slide-subtitle">
            Theorie ist gut – gebaute Realität überzeugt. In Seeheim-Jugenheim (Hessen) belegen mehrere erfolgreich realisierte Objekte die Leistungsfähigkeit unserer Partnerschaft.
          </p>

          <div className="case-grid">
            <div className="case-panel">
              <div className="case-panel-header">
                <h3>Neubau Bürogebäude Adler · Seeheim-Jugenheim</h3>
                <span className="case-tag">Gewerbebau & Fertigteiltechnik</span>
              </div>
              <div className="case-content-split">
                <div className="case-img-wrap">
                  <img src="/images/b2b/Image.jpg" alt="Neubau Bürogebäude Adler Seeheim-Jugenheim Baustelle" />
                </div>
                <div className="case-data">
                  <p>
                    Beim Neubau dieses modernen Bürogebäudes wurden Ausführungsplanung, Statik und Baustellenlogistik eng mit dem FCN-Werk verzahnt. Durch den Einsatz industriell vorgefertigter Wand- und Deckenelemente stand der Rohbau in Rekordzeit.
                  </p>
                  <ul className="case-bullet-list">
                    <li><span>•</span> <strong>HOAI LPH 1–5:</strong> Vollständige Entwurfs- und Werkplanung</li>
                    <li><span>•</span> <strong>Logistik:</strong> Just-in-Time-Montage per Mobilkran direkt ab LKW</li>
                    <li><span>•</span> <strong>Ergebnis:</strong> Maßhaltigkeit auf den Millimeter, null Baustopps</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="case-panel">
              <div className="case-panel-header">
                <h3>Mehrere Häuser & Doppelhaushälften · Seeheim-Jugenheim</h3>
                <span className="case-tag">Wohnungsbau 2024</span>
              </div>
              <div className="case-content-split">
                <div className="case-dual-images">
                  <div className="img-box">
                    <img src="/images/b2b/2.png" alt="Rohbau Seeheim-Jugenheim Doppelhaushälfte" />
                    <span className="img-label">Rohbau</span>
                  </div>
                  <div className="img-box">
                    <img src="/images/b2b/1.png" alt="Fertigstellung Seeheim-Jugenheim 2024" />
                    <span className="img-label">Fertiggestellt</span>
                  </div>
                </div>
                <div className="case-data">
                  <p>
                    Neben Gewerbebauten wurden bereits mehrere Wohnhäuser und Doppelhaushälften gemeinsam realisiert. Das Zusammenspiel aus Liapor-Wandelementen und individueller Architektur überzeugt Eigentümer und Bauherren gleichermaßen.
                  </p>
                  <ul className="case-bullet-list">
                    <li><span>•</span> <strong>Seriell & Individuell:</strong> Keine Typenhäuser, sondern Maßarchitektur</li>
                    <li><span>•</span> <strong>Ökologie:</strong> Hervorragender Schall- und Wärmeschutz ab Werk</li>
                    <li><span>•</span> <strong>Zufriedenheit:</strong> Zügiger Innenausbau dank trockener Rohbausubstanz</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="slide-footer">
          <div className="footer-left">
            <strong>{CONTACT.companyName}</strong> × <strong>F.C. Nüdling</strong> · Gebaute Referenzen
          </div>
          <div className="footer-right">
            <span className="swipe-hint">Kontakt & Projekt starten →</span>
          </div>
        </footer>
      </div>

      {/* SLIDE 5 */}
      <div className="sheet sheet-5">
        <header className="slide-header">
          <div className="brand-duo">
            <img src="/logo.png" alt={CONTACT.companyName} className="brand-logo-shams" />
            <span className="brand-separator">×</span>
            <img src="/images/partners/fcn-nuedling.svg" alt="F.C. Nüdling" className="brand-logo-fcn" />
          </div>
          <div className="slide-meta">
            <span className="meta-tag">Direktkontakt</span>
            <span className="page-number-pill">05 / 05</span>
          </div>
        </header>

        <main className="page-body">
          <div className="eyebrow">
            Ihr Projekt mit System realisieren
          </div>
          <h2 className="slide-title">
            Planen Sie ein Vorhaben? <span>Sprechen wir darüber.</span>
          </h2>
          <p className="slide-subtitle">
            Nutzen Sie die gebündelte Kompetenz aus unabhängiger Architekturplanung und industrieller Vorfertigung für Ihr nächstes Vorhaben in Hessen oder im Rhein-Main-Gebiet.
          </p>

          <div className="cta-layout">
            <div className="cta-service-grid">
              <div className="cta-service-box">
                <h5>1. Potenzialanalyse</h5>
                <p>Prüfung von Grundstück & Baurecht auf serielle Fertigteil-Eignung.</p>
              </div>
              <div className="cta-service-box">
                <h5>2. Vorab-Kalkulation</h5>
                <p>Belastbare Kosten- und Terminszenarien vor dem ersten Spatenstich.</p>
              </div>
              <div className="cta-service-box">
                <h5>3. HOAI LPH 1–8</h5>
                <p>Vollständige Generalplanung von Entwurf bis zur Bauüberwachung.</p>
              </div>
            </div>

            <div className="cta-card-luxury">
              <div className="cta-card-header">
                <h4>Ihr Ansprechpartner für integrale Bauprojekte</h4>
                <div className="availability-pill">
                  <span className="availability-dot"></span>
                  Verfügbar im Rhein-Main-Gebiet
                </div>
              </div>

              <div className="cta-profile-grid">
                <div className="profile-photo">
                  <img src="/images/team/Majeed-Shams.jpg" alt={CONTACT.founder} />
                </div>

                <div className="profile-info">
                  <div className="profile-name">{CONTACT.founder}</div>
                  <div className="profile-title">Freier Architekt & Stadtplaner · Inhaber {CONTACT.companyName}</div>
                  <div className="contact-line">
                    <span>📍</span> {CONTACT.primaryAddress.full}
                  </div>
                  <div className="contact-line">
                    <span>✉️</span> <a href={`mailto:${CONTACT.email}`} title="E-Mail"><strong>{CONTACT.email}</strong></a>
                  </div>
                  <div className="contact-line">
                    <span>🌐</span> <a href="https://shams-consult.de" target="_blank" rel="noopener noreferrer" title="Website"><strong>shams-consult.de</strong></a>
                  </div>
                  <a href={CONTACT.primaryPhoneHref} className="hotline-highlight" title="Telefon">
                    📞 +49 69 74 223 777
                  </a>
                </div>

                <a href="https://shams-consult.de" target="_blank" rel="noopener noreferrer" className="qr-container" title="Website shams-consult.de">
                  <img src="/qr-shams.svg" alt={`QR-Code ${CONTACT.companyName}`} />
                </a>
              </div>

              <div className="cta-card-bottom">
                QR-Code mit dem Smartphone scannen für Direktkontakt, Terminbuchung & digitales Portfolio.
              </div>
            </div>
          </div>
        </main>

        <footer className="slide-footer">
          <div className="footer-left">
            <strong>{CONTACT.companyName}</strong> · Architektur & Stadtplanung · Kooperation mit <strong>F.C. Nüdling</strong> Fertigteiltechnik
          </div>
          <div className="footer-right">
            <a href="https://shams-consult.de" target="_blank" rel="noopener noreferrer">shams-consult.de</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
