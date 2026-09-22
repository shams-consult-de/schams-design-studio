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
          width: 148mm;
          height: 210mm;
          background: #ffffff;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          page-break-after: always;
          break-after: page;
          padding: 8mm 9mm 7mm 9mm;
        }

        .flyer-fcn .slide-header {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 2.2mm;
          border-bottom: 1px solid var(--brand-border);
        }
        .flyer-fcn .brand-duo {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .flyer-fcn .brand-logo-shams {
          height: 7mm;
          width: auto;
          object-fit: contain;
        }
        .flyer-fcn .brand-separator {
          font-size: 10pt;
          font-weight: 300;
          color: #94a3b8;
        }
        .flyer-fcn .brand-logo-fcn {
          height: 5.5mm;
          width: auto;
          object-fit: contain;
        }
        .flyer-fcn .slide-meta {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .flyer-fcn .meta-tag {
          font-size: 5.5pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--brand-muted);
        }
        .flyer-fcn .page-number-pill {
          background: var(--brand-dark);
          color: #ffffff;
          font-size: 5.5pt;
          font-weight: 800;
          padding: 2px 5.5px;
          border-radius: 9999px;
          letter-spacing: 0.5px;
        }

        .flyer-fcn .slide-footer {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2.2mm;
          border-top: 1px solid var(--brand-border);
          font-size: 5.5pt;
          color: var(--brand-muted);
        }
        .flyer-fcn .footer-left strong {
          color: var(--brand-dark);
          font-weight: 700;
        }
        .flyer-fcn .footer-right {
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: 600;
        }
        .flyer-fcn .swipe-hint {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          color: var(--brand-red);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .flyer-fcn .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 5.8pt;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: var(--brand-red);
          margin-bottom: 1.2mm;
        }
        .flyer-fcn .slide-title {
          font-size: 14.5pt;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.4px;
          color: var(--brand-dark);
          margin-bottom: 1.5mm;
          text-transform: uppercase;
        }
        .flyer-fcn .slide-title span {
          color: var(--brand-red);
        }
        .flyer-fcn .slide-subtitle {
          font-size: 7.5pt;
          line-height: 1.4;
          color: var(--brand-charcoal);
          font-weight: 400;
          margin-bottom: 3mm;
        }

        /* PAGE 1 */
        .flyer-fcn .cover-body {
          position: relative;
          z-index: 10;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2mm 0 1mm 0;
        }
        .flyer-fcn .cover-hero-layout {
          display: block;
        }
        .flyer-fcn .cover-hero-text {
          display: flex;
          flex-direction: column;
        }
        .flyer-fcn .cover-hero-title {
          font-size: 16pt;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.5px;
          color: var(--brand-dark);
          margin: 1mm 0 1.5mm 0;
        }
        .flyer-fcn .cover-hero-title span {
          color: var(--brand-red);
          display: block;
        }
        .flyer-fcn .cover-lead {
          font-size: 7.6pt;
          line-height: 1.4;
          color: var(--brand-charcoal);
          font-weight: 500;
        }
        .flyer-fcn .cover-image-container {
          width: 100%;
          height: 70mm;
          border-radius: 3mm;
          overflow: hidden;
          position: relative;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.14);
          border: 1px solid var(--brand-border);
          margin: 3mm 0;
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
          padding: 3.5mm 4mm 2.5mm 4mm;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .flyer-fcn .caption-title {
          font-size: 7.5pt;
          font-weight: 800;
          letter-spacing: 0.2px;
        }
        .flyer-fcn .caption-sub {
          font-size: 6pt;
          color: #cbd5e1;
          margin-top: 0.3mm;
        }
        .flyer-fcn .caption-badge {
          background: var(--brand-red);
          color: #ffffff;
          padding: 2.5px 7px;
          border-radius: 9999px;
          font-size: 5.6pt;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }

        .flyer-fcn .cover-usp-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2.5mm;
          background: var(--brand-light);
          border: 1px solid var(--brand-border);
          border-radius: 2.5mm;
          padding: 3mm 3mm;
        }
        .flyer-fcn .usp-item {
          display: flex;
          flex-direction: column;
          gap: 1mm;
          border-left: 2.5px solid var(--brand-red);
          padding-left: 2.5mm;
        }
        .flyer-fcn .usp-item strong {
          font-size: 6.6pt;
          font-weight: 800;
          color: var(--brand-dark);
          line-height: 1.2;
        }
        .flyer-fcn .usp-item span {
          font-size: 5.5pt;
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
          padding-top: 2.5mm;
        }
        .flyer-fcn .synergy-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3mm;
          margin-bottom: 3mm;
        }
        .flyer-fcn .comparison-card {
          border-radius: 2.5mm;
          padding: 3.5mm;
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
          font-size: 7pt;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          margin-bottom: 2mm;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .flyer-fcn .comparison-card.bad .comparison-header { color: #64748b; }
        .flyer-fcn .comparison-card.good .comparison-header { color: var(--brand-red); }

        .flyer-fcn .comparison-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 2mm;
          font-size: 6.2pt;
          line-height: 1.4;
        }
        .flyer-fcn .comparison-list li {
          display: flex;
          align-items: flex-start;
          gap: 5px;
        }
        .flyer-fcn .comparison-card.bad .comparison-list li { color: #475569; }
        .flyer-fcn .comparison-card.good .comparison-list li { color: var(--brand-dark); font-weight: 600; }

        .flyer-fcn .kpi-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5mm;
          margin: 2mm 0 3.5mm 0;
        }
        .flyer-fcn .kpi-box {
          background: var(--brand-dark);
          color: #ffffff;
          border-radius: 2.5mm;
          padding: 3mm 2mm;
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
          height: 2.5px;
          background: var(--brand-red);
        }
        .flyer-fcn .kpi-value {
          font-size: 15pt;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.4px;
          line-height: 1.1;
        }
        .flyer-fcn .kpi-value span { color: #f87171; }
        .flyer-fcn .kpi-label {
          font-size: 5.8pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          margin-top: 1mm;
          color: #94a3b8;
        }

        .flyer-fcn .synergy-visual-quote {
          display: grid;
          grid-template-columns: 56mm 1fr;
          gap: 3.5mm;
          align-items: center;
          background: var(--brand-light);
          border: 1px solid var(--brand-border);
          border-radius: 2.5mm;
          padding: 3mm;
          margin-top: auto;
        }
        .flyer-fcn .synergy-dual-img-frame {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2mm;
          height: 38mm;
          width: 100%;
        }
        .flyer-fcn .synergy-img-box {
          border-radius: 2mm;
          overflow: hidden;
          position: relative;
          border: 1px solid var(--brand-border);
        }
        .flyer-fcn .synergy-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .flyer-fcn .synergy-quote-text {
          display: flex;
          flex-direction: column;
          gap: 1.5mm;
        }
        .flyer-fcn .quote-mark {
          font-size: 20pt;
          line-height: 0.7;
          color: var(--brand-red);
          font-family: Georgia, serif;
        }
        .flyer-fcn .quote-content {
          font-size: 6.8pt;
          font-style: italic;
          color: var(--brand-slate);
          line-height: 1.45;
        }
        .flyer-fcn .quote-author {
          font-size: 6pt;
          font-weight: 800;
          color: var(--brand-dark);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* PAGE 3 */
        .flyer-fcn .pillar-stack {
          display: flex;
          flex-direction: column;
          gap: 3mm;
          margin-top: 2mm;
        }
        .flyer-fcn .pillar-card {
          display: grid;
          grid-template-columns: 12mm 1fr;
          gap: 3mm;
          align-items: flex-start;
          background: #ffffff;
          border: 1px solid var(--brand-border);
          border-radius: 2.5mm;
          padding: 3.5mm 3.5mm;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }
        .flyer-fcn .pillar-card:nth-child(odd) {
          background: #fafafa;
        }
        .flyer-fcn .pillar-badge {
          width: 11.5mm;
          height: 11.5mm;
          border-radius: 2.2mm;
          background: var(--brand-dark);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10pt;
          font-weight: 900;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
          border-bottom: 2px solid var(--brand-red);
        }
        .flyer-fcn .pillar-content h4 {
          font-size: 8pt;
          font-weight: 800;
          color: var(--brand-dark);
          margin-bottom: 1mm;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .flyer-fcn .pillar-content h4 span.tag {
          font-size: 5.5pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: var(--brand-red);
          background: #fee2e2;
          padding: 1.5px 5px;
          border-radius: 3px;
        }
        .flyer-fcn .pillar-content p {
          font-size: 6.5pt;
          line-height: 1.42;
          color: var(--brand-charcoal);
        }

        /* PAGE 4 */
        .flyer-fcn .case-grid {
          display: flex;
          flex-direction: column;
          gap: 3.5mm;
          margin-top: 2mm;
        }
        .flyer-fcn .case-panel {
          border: 1px solid var(--brand-border);
          border-radius: 2.5mm;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.03);
        }
        .flyer-fcn .case-panel-header {
          padding: 2.5mm 3.5mm;
          background: var(--brand-light);
          border-bottom: 1px solid var(--brand-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .flyer-fcn .case-panel-header h3 {
          font-size: 8pt;
          font-weight: 800;
          color: var(--brand-dark);
        }
        .flyer-fcn .case-tag {
          font-size: 5.6pt;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: var(--brand-red);
          background: #fee2e2;
          padding: 2px 6px;
          border-radius: 9999px;
        }
        .flyer-fcn .case-content-split {
          display: flex;
          flex-direction: column;
          gap: 2.2mm;
          padding: 2.5mm;
        }
        .flyer-fcn .case-img-wrap {
          height: 38mm;
          width: 100%;
          border-radius: 2mm;
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
          gap: 1.5mm;
          font-size: 5.8pt;
          line-height: 1.35;
          color: var(--brand-charcoal);
        }
        .flyer-fcn .case-bullet-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2mm;
          margin-top: 1mm;
          padding-top: 1.2mm;
          border-top: 1px dashed var(--brand-border);
        }
        .flyer-fcn .case-bullet-list li {
          display: flex;
          flex-direction: column;
          gap: 1px;
          color: var(--brand-dark);
          font-size: 5.4pt;
          line-height: 1.25;
        }
        .flyer-fcn .case-bullet-list li strong {
          color: var(--brand-red);
          font-weight: 700;
        }
        .flyer-fcn .case-dual-images {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5mm;
          height: 36mm;
          width: 100%;
        }
        .flyer-fcn .case-dual-images .img-box {
          border-radius: 2mm;
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
          bottom: 1.5mm;
          left: 1.5mm;
          background: rgba(15, 23, 42, 0.85);
          color: #fff;
          font-size: 5.4pt;
          font-weight: 700;
          padding: 2px 5px;
          border-radius: 3px;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }

        /* PAGE 5 */
        .flyer-fcn .cta-layout {
          display: flex;
          flex-direction: column;
          gap: 3.5mm;
          margin-top: 2mm;
        }
        .flyer-fcn .cta-service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5mm;
        }
        .flyer-fcn .cta-service-box {
          background: var(--brand-light);
          border: 1px solid var(--brand-border);
          border-radius: 2mm;
          padding: 2.8mm 2.5mm;
          display: flex;
          flex-direction: column;
          gap: 1.2mm;
        }
        .flyer-fcn .cta-service-box h5 {
          font-size: 6.8pt;
          font-weight: 800;
          color: var(--brand-dark);
        }
        .flyer-fcn .cta-service-box p {
          font-size: 5.6pt;
          line-height: 1.35;
          color: var(--brand-muted);
        }
        .flyer-fcn .cta-card-luxury {
          background: var(--brand-dark);
          color: #ffffff;
          border-radius: 3mm;
          padding: 4.5mm;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-top: 2.5px solid var(--brand-red);
        }
        .flyer-fcn .cta-card-header {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          padding-bottom: 2.2mm;
          margin-bottom: 2.8mm;
        }
        .flyer-fcn .cta-card-header h4 {
          font-size: 8.2pt;
          font-weight: 800;
          letter-spacing: 0.4px;
          text-transform: uppercase;
        }
        .flyer-fcn .availability-pill {
          font-size: 6pt;
          color: #4ade80;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .flyer-fcn .availability-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #4ade80;
        }
        .flyer-fcn .cta-profile-grid {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: 22mm 1fr 22mm;
          gap: 3.5mm;
          align-items: center;
        }
        .flyer-fcn .profile-photo {
          width: 22mm;
          height: 27mm;
          border-radius: 2mm;
          overflow: hidden;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
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
          gap: 1mm;
        }
        .flyer-fcn .profile-name {
          font-size: 9.5pt;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: 0.2px;
        }
        .flyer-fcn .profile-title {
          font-size: 6.2pt;
          color: #cbd5e1;
          font-weight: 500;
          margin-bottom: 1.2mm;
        }
        .flyer-fcn .contact-line {
          font-size: 6.4pt;
          color: #e2e8f0;
          display: flex;
          align-items: center;
          gap: 5px;
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
          font-size: 8pt;
          font-weight: 900;
          color: #f87171;
          letter-spacing: 0.3px;
          margin-top: 1mm;
          display: block;
        }
        .flyer-fcn .qr-container {
          background: #ffffff;
          border-radius: 2mm;
          padding: 2mm;
          width: 22mm;
          height: 22mm;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        .flyer-fcn .qr-container img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .flyer-fcn .cta-card-bottom {
          position: relative;
          z-index: 10;
          margin-top: 2.5mm;
          padding-top: 2mm;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 5.8pt;
          color: #94a3b8;
          text-align: center;
        }

        @media print {
          @page {
            size: 148mm 210mm;
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
            <div className="synergy-dual-img-frame">
              <div className="synergy-img-box">
                <img src="/images/before-after/fcn-exterior-before.jpg" alt="FCN Rohbaumontage Baustelle" />
                <span className="img-label">Rohbau</span>
              </div>
              <div className="synergy-img-box">
                <img src="/images/before-after/fcn-exterior-after.jpg" alt="Fertigstellung schlüsselfertig" />
                <span className="img-label">Vollendet</span>
              </div>
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
            Gebaute Realität & Vorher-Nachher-Transformationen
          </div>
          <h2 className="slide-title">
            Beweise in Beton: <span>Vorher & Nachher.</span>
          </h2>
          <p className="slide-subtitle">
            Theorie ist gut – gebaute Realität überzeugt. Anhand zweier konkreter Projekte zeigen wir die nahtlose Verwandlung vom Rohbau- und Rückbauzustand zur schlüsselfertigen Architektur.
          </p>

          <div className="case-grid">
            <div className="case-panel">
              <div className="case-panel-header">
                <h3>Objektbau: Wohnanlage mit FCN Systemrohbau</h3>
                <span className="case-tag">Vorher / Nachher · Rohbau bis Schlüsselfertig</span>
              </div>
              <div className="case-content-split">
                <div className="case-dual-images">
                  <div className="img-box">
                    <img src="/images/before-after/fcn-exterior-before.jpg" alt="FCN Rohbau Baustelle Mehrfamilienhaus" />
                    <span className="img-label">Vorher: FCN Rohbau</span>
                  </div>
                  <div className="img-box">
                    <img src="/images/before-after/fcn-exterior-after.jpg" alt="Fertigstellung Mehrfamilienhaus schlüsselfertig" />
                    <span className="img-label">Nachher: Fertig</span>
                  </div>
                </div>
                <div className="case-data">
                  <p>
                    Vom präzisen FCN Liapor-Rohbau zur schlüsselfertigen Wohnanlage. Industriell vorgefertigte Wand- und Deckenelemente verkürzten die Rohbauzeit um über 50 % bei maximaler Maßhaltigkeit.
                  </p>
                  <ul className="case-bullet-list">
                    <li><span>•</span> <strong>HOAI LPH 1–8:</strong> Durchgängige Betreuung von Entwurf bis Abnahme</li>
                    <li><span>•</span> <strong>Montagespeed:</strong> Just-in-Time-Montage per Mobilkran ohne Trocknungszeiten</li>
                    <li><span>•</span> <strong>Präzision:</strong> Millimetergenaue Werkplanung verzahnt mit FCN</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="case-panel">
              <div className="case-panel-header">
                <h3>Innenarchitektur: Kernsanierung & Ausbau</h3>
                <span className="case-tag">Vorher / Nachher · Entkernung bis Vollendung</span>
              </div>
              <div className="case-content-split">
                <div className="case-dual-images">
                  <div className="img-box">
                    <img src="/images/before-after/fcn-interior-before.jpg" alt="Entkernter Zustand Innenraum Kernsanierung" />
                    <span className="img-label">Vorher: Entkernt</span>
                  </div>
                  <div className="img-box">
                    <img src="/images/before-after/fcn-interior-after.jpg" alt="Vollendeter offener Lebensraum schlüsselfertig" />
                    <span className="img-label">Nachher: Ausgebaut</span>
                  </div>
                </div>
                <div className="case-data">
                  <p>
                    Komplette Verwandlung einer kleinteiligen Bestandsstruktur in einen lichtdurchfluteten, offenen Lebensraum mit optimierter Statik, Wanddurchbrüchen und exklusiven Materialkompositionen.
                  </p>
                  <ul className="case-bullet-list">
                    <li><span>•</span> <strong>Raumtransformation:</strong> Offener Grundriss statt massiver Trennwände</li>
                    <li><span>•</span> <strong>Materialharmonie:</strong> FCN-Systemestrich & unsichtbare TGA-Integration</li>
                    <li><span>•</span> <strong>Wertschöpfung:</strong> Höchste Rendite und Wohnqualität für Eigentümer</li>
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
