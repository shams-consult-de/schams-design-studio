import { useState, useEffect, useCallback } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MetricsBar } from "./components/MetricsBar";
import { ServicesSection } from "./components/ServicesSection";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { FeaturedProjectsSection } from "./components/FeaturedProjectsSection";
import { ProjectsPage } from "./components/ProjectsPage";
import { ProjectDetail } from "./components/ProjectDetail";
import { FounderPage } from "./components/FounderPage";
import { AboutPage } from "./components/AboutPage";
import { CaseStudyDetail } from "./components/CaseStudyDetail";
import { BlogSection } from "./components/BlogSection";
import { BlogPage } from "./components/BlogPage";
import { BlogDetail } from "./components/BlogDetail";
import { ResearchSection } from "./components/ResearchSection";
import { ResearchPage } from "./components/ResearchPage";
import { AkhRegistrationSection } from "./components/AkhRegistrationSection";
import { TeamSection } from "./components/TeamSection";
import { VobSection } from "./components/VobSection";
import { ClientsMovingSection } from "./components/ClientsMovingSection";
import { ClientsPage } from "./components/ClientsPage";
import { SiteVisitsMovingSection } from "./components/SiteVisitsMovingSection";
import { SiteVisitsPage } from "./components/SiteVisitsPage";
import { FaqSection } from "./components/FaqSection";
import { MobileStickyActionBar } from "./components/MobileStickyActionBar";
import { DesktopStickyActionBar } from "./components/DesktopStickyActionBar";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { LegalModal, LegalModalType } from "./components/LegalModal";
import { LegalPage, LegalPageType } from "./components/LegalPage";
import { NotFoundPage } from "./components/NotFoundPage";
import { CookieBanner } from "./components/CookieBanner";
import { Language, content } from "./lib/i18n";
import { caseStudies, CaseStudy } from "./data/caseStudies";
import { projects, Project } from "./data/projects";
import { BlogPost, getBlogPostBySlug } from "./data/blog";
import { RegionalLandingPage } from "./components/RegionalLandingPage";
import { regionalLandingPages, RegionalLandingPageData } from "./data/regionalLandingPages";
import { ComparisonPage } from "./components/ComparisonPage";
import { comparisonTopics } from "./data/comparisons";
import { trackPageView } from "./lib/analytics";
import { updatePageSeo, getProjectSeo, getBlogPostSeo, getCaseStudySeo } from "./lib/seo";

export function App() {
  const [language, setLanguage] = useState<Language>("de");
  const t = content[language];
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);
  const [activeLegalPage, setActiveLegalPage] = useState<LegalPageType | null>(null);
  const [activeRegionalPage, setActiveRegionalPage] = useState<RegionalLandingPageData | null>(null);
  const [leadMessage] = useState<string>("");
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeBlogPost, setActiveBlogPost] = useState<BlogPost | null>(null);
  const [isProjectsPage, setIsProjectsPage] = useState<boolean>(false);
  const [isFounderPage, setIsFounderPage] = useState<boolean>(false);
  const [isAboutPage, setIsAboutPage] = useState<boolean>(false);
  const [isClientsPage, setIsClientsPage] = useState<boolean>(false);
  const [isSiteVisitsPage, setIsSiteVisitsPage] = useState<boolean>(false);
  const [isBlogPage, setIsBlogPage] = useState<boolean>(false);
  const [isResearchPage, setIsResearchPage] = useState<boolean>(false);
  const [isComparisonPage, setIsComparisonPage] = useState<boolean>(false);
  const [activeComparisonTopicId, setActiveComparisonTopicId] = useState<string>("boutique-vs-grossbuero");
  const [isNotFound, setIsNotFound] = useState<boolean>(false);
  const [requestedPath, setRequestedPath] = useState<string>("");

  // Synchronize state with standard HTML5 URL paths safely handling encodings, legacy German aliases, and broken links
  const syncRoute = useCallback(() => {
    const rawPath = window.location.pathname;
    let path = rawPath;
    try {
      path = decodeURIComponent(rawPath);
    } catch {
      path = rawPath;
    }
    // Collapse duplicate slashes (e.g. //über-uns -> /über-uns)
    path = path.replace(/\/+/g, "/").trim().toLowerCase();
    if (path.length > 1 && path.endsWith("/")) {
      path = path.slice(0, -1);
    }

    setRequestedPath(rawPath);
    trackPageView(rawPath);
    setActiveRegionalPage(null);

    // 0. Regional Hub-and-Spoke Landing Pages (/architektur-frankfurt, /architektur-roedermark, /architektur-dreieich, /stadtplanung-hessen)
    const regionalKey = path.replace(/^\//, "");
    if (regionalLandingPages[regionalKey]) {
      const pageData = regionalLandingPages[regionalKey];
      setActiveRegionalPage(pageData);
      setIsComparisonPage(false);
      setIsSiteVisitsPage(false);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 0.1 Comparison & Decision Guide Pages (/vergleich, /boutique-vs-grossbuero, /architekt-oder-bautraeger, /vollarchitektur-vs-entwurf)
    if (
      path === "/vergleich" ||
      path === "/vergleiche" ||
      path === "/comparison" ||
      path === "/comparisons" ||
      path.startsWith("/vergleich/") ||
      path === "/boutique-vs-grossbuero" ||
      path === "/architekt-oder-bautraeger" ||
      path === "/architekt-vs-bautraeger" ||
      path === "/vollarchitektur-vs-entwurf" ||
      path === "/vollarchitektur-vs-reiner-entwurf"
    ) {
      let topicId = "boutique-vs-grossbuero";
      if (path.includes("bautraeger")) topicId = "architekt-vs-bautraeger";
      else if (path.includes("entwurf")) topicId = "vollarchitektur-vs-reiner-entwurf";
      else if (path.startsWith("/vergleich/")) {
        const sub = path.replace(/^\/vergleich\//, "").trim();
        if (sub) topicId = sub;
      }
      setIsComparisonPage(true);
      setActiveComparisonTopicId(topicId);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsSiteVisitsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      setActiveRegionalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 1. Site visits / Album / Baustelleneinblicke
    if (
      path === "/site-visits" ||
      path === "/album" ||
      path === "/einblicke" ||
      path === "/vor-ort" ||
      path === "/baustellen"
    ) {
      setIsSiteVisitsPage(true);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 2. Clients / Partner / Referenzen
    if (
      path === "/clients" ||
      path === "/kunden" ||
      path === "/partners" ||
      path === "/partner" ||
      path === "/referenzen" ||
      path === "/auftraggeber"
    ) {
      setIsClientsPage(true);
      setIsSiteVisitsPage(false);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 3. Research / Forschung & Lehre
    if (
      path === "/research" ||
      path === "/forschung" ||
      path === "/lehre" ||
      path === "/thesen" ||
      path === "/publikationen"
    ) {
      setIsResearchPage(true);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsBlogPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 4. About / Team / Über uns / Büro
    if (
      path === "/about" ||
      path === "/team" ||
      path === "/über-uns" ||
      path === "/ueber-uns" ||
      path === "/uber-uns" ||
      path === "/wir-ueber-uns" ||
      path === "/buero" ||
      path === "/büro" ||
      path === "/profil" ||
      path === "/agentur"
    ) {
      setIsAboutPage(true);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 5. Founder / Inhaber / Vita
    if (
      path === "/founder" ||
      path === "/gruender" ||
      path === "/gründer" ||
      path === "/inhaber" ||
      path === "/vita" ||
      path === "/architekt"
    ) {
      setIsFounderPage(true);
      setIsAboutPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 6. Projects Overview
    if (
      path === "/projects" ||
      path === "/projekte" ||
      path === "/portfolio" ||
      path === "/bauten" ||
      path === "/arbeiten"
    ) {
      setIsProjectsPage(true);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsClientsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 7. Blog Overview
    if (
      path === "/blog" ||
      path === "/magazin" ||
      path === "/news" ||
      path === "/aktuelles" ||
      path === "/artikel" ||
      path === "/beitraege"
    ) {
      setIsBlogPage(true);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      setActiveLegalPage(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 8. Blog Detail
    if (
      path.startsWith("/blog/") ||
      path.startsWith("/magazin/") ||
      path.startsWith("/news/") ||
      path.startsWith("/artikel/")
    ) {
      const slug = path.replace(/^\/(blog|magazin|news|artikel)\//, "").replace(/\/$/, "");
      const found = getBlogPostBySlug(slug);
      if (found) {
        setActiveBlogPost(found);
        setIsBlogPage(false);
        setIsProjectsPage(false);
        setIsAboutPage(false);
        setIsFounderPage(false);
        setIsClientsPage(false);
        setIsResearchPage(false);
        setIsNotFound(false);
        setActiveCaseStudy(null);
        setActiveProject(null);
        setActiveLegalPage(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }

    // 9. Project Detail
    if (
      path.startsWith("/project/") ||
      path.startsWith("/projekt/") ||
      path.startsWith("/projekte/")
    ) {
      const id = path.replace(/^\/(project|projekt|projekte)\//, "").replace(/\/$/, "");
      const found = projects.find((p) => p.id === id || p.slug === id);
      if (found) {
        setActiveProject(found);
        setIsProjectsPage(false);
        setIsAboutPage(false);
        setIsFounderPage(false);
        setIsClientsPage(false);
        setIsBlogPage(false);
        setIsResearchPage(false);
        setIsNotFound(false);
        setActiveCaseStudy(null);
        setActiveBlogPost(null);
        setActiveLegalPage(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }

    // 10. Case Study Detail
    if (
      path.startsWith("/case-study/") ||
      path.startsWith("/fallstudie/") ||
      path.startsWith("/referenz/")
    ) {
      const id = path.replace(/^\/(case-study|fallstudie|referenz)\//, "").replace(/\/$/, "");
      const found = caseStudies.find((c) => c.id === id);
      if (found) {
        setActiveCaseStudy(found);
        setIsProjectsPage(false);
        setIsAboutPage(false);
        setIsFounderPage(false);
        setIsClientsPage(false);
        setIsBlogPage(false);
        setIsResearchPage(false);
        setIsNotFound(false);
        setActiveProject(null);
        setActiveBlogPost(null);
        setActiveLegalPage(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }

    // 11. Legal Pages
    if (path === "/impressum" || path === "/imprint") {
      setActiveLegalPage("impressum");
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsClientsPage(false);
      setIsSiteVisitsPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (
      path === "/datenschutz" ||
      path === "/privacy" ||
      path === "/datenschutzerklaerung" ||
      path === "/datenschutzerklärung"
    ) {
      setActiveLegalPage("datenschutz");
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsClientsPage(false);
      setIsSiteVisitsPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (path === "/barrierefreiheit" || path === "/accessibility") {
      setActiveLegalPage("barrierefreiheit");
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsClientsPage(false);
      setIsSiteVisitsPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (path === "/widerruf" || path === "/widerrufsbelehrung") {
      setActiveLegalPage("widerruf");
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsClientsPage(false);
      setIsSiteVisitsPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 12. Direct Home Shortcuts & Scroll Targets
    if (path === "/kontakt" || path === "/contact" || path === "/beratung" || path === "/termin") {
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsSiteVisitsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveBlogPost(null);
      setActiveCaseStudy(null);
      setActiveLegalPage(null);
      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    if (path === "/services" || path === "/leistungen" || path === "/hoai") {
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsSiteVisitsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveBlogPost(null);
      setActiveCaseStudy(null);
      setActiveLegalPage(null);
      setTimeout(() => {
        const el = document.getElementById("services");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    // 13. Default Home view
    if (path === "" || path === "/" || path === "/home" || path === "/index.html" || path === "/start") {
      setIsComparisonPage(false);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsSiteVisitsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setIsNotFound(false);
      setActiveProject(null);
      setActiveBlogPost(null);
      setActiveCaseStudy(null);
      setActiveLegalPage(null);
      return;
    }

    // 14. Unknown Path -> Graceful 404
    setIsNotFound(true);
    setIsComparisonPage(false);
    setIsAboutPage(false);
    setIsFounderPage(false);
    setIsProjectsPage(false);
    setIsClientsPage(false);
    setIsSiteVisitsPage(false);
    setIsBlogPage(false);
    setIsResearchPage(false);
    setActiveProject(null);
    setActiveBlogPost(null);
    setActiveCaseStudy(null);
    setActiveLegalPage(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    syncRoute();
    window.addEventListener("popstate", syncRoute);
    return () => window.removeEventListener("popstate", syncRoute);
  }, [syncRoute]);

  // Dynamic SEO meta tags and JSON-LD schema update on route or language change
  useEffect(() => {
    if (activeRegionalPage) {
      const regCity = activeRegionalPage.office.city[language] ?? activeRegionalPage.office.city.de;
      const graph: Record<string, unknown>[] = [
        {
          "@type": ["LocalBusiness", "ProfessionalService", "ArchitecturalService"],
          name: `Shams Consult — ${activeRegionalPage.h1[language] ?? activeRegionalPage.h1.de}`,
          description: activeRegionalPage.metaDescription[language] ?? activeRegionalPage.metaDescription.de,
          url: `https://shams-consult.de${activeRegionalPage.path}`,
          telephone: activeRegionalPage.office.phoneHref.replace("tel:", ""),
          address: {
            "@type": "PostalAddress",
            streetAddress: activeRegionalPage.office.street,
            addressLocality: regCity.replace(/^\d+\s*/, "").replace(/\(.*?\)/, "").trim(),
            postalCode: regCity.match(/\d{5}/)?.[0] || "60596",
            addressCountry: "DE",
          },
        },
      ];

      if (activeRegionalPage.faqs && activeRegionalPage.faqs.length > 0) {
        graph.push({
          "@type": "FAQPage",
          mainEntity: activeRegionalPage.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question[language] ?? faq.question.de,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer[language] ?? faq.answer.de,
            },
          })),
        });
      }

      updatePageSeo({
        title: activeRegionalPage.metaTitle[language] ?? activeRegionalPage.metaTitle.de,
        description: activeRegionalPage.metaDescription[language] ?? activeRegionalPage.metaDescription.de,
        canonicalUrl: `https://shams-consult.de${activeRegionalPage.path}`,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: activeRegionalPage.eyebrow[language] ?? activeRegionalPage.eyebrow.de, item: activeRegionalPage.path },
        ],
        customJsonLd: {
          "@context": "https://schema.org",
          "@graph": graph,
        },
      });
    } else if (activeProject) {
      updatePageSeo(getProjectSeo(activeProject, language));
    } else if (activeBlogPost) {
      updatePageSeo(getBlogPostSeo(activeBlogPost, language));
    } else if (activeCaseStudy) {
      updatePageSeo(getCaseStudySeo(activeCaseStudy, language));
    } else if (isProjectsPage) {
      updatePageSeo({
        title:
          language === "en"
            ? "Realized Projects & Architecture Portfolio | Shams Consult"
            : "Realisierte Projekte & Bauten — Portfolio | Shams Consult",
        description:
          language === "en"
            ? "Explore our architectural references: residential complexes, commercial developments, and urban master plans in Frankfurt & Rhine-Main."
            : "Entdecken Sie unsere Referenzen: Wohnungsbau, Gewerbeimmobilien, Baugenehmigungen und Stadtplanung in Frankfurt am Main & Rhein-Main.",
        canonicalUrl: "https://shams-consult.de/projects",
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: language === "en" ? "Projects" : "Projekte", item: "/projects" },
        ],
      });
    } else if (isBlogPage) {
      updatePageSeo({
        title:
          language === "en"
            ? "Architecture Journal & Insights | Shams Consult Frankfurt"
            : "Fachmagazin für Architektur & Baurecht | Shams Consult",
        description:
          language === "en"
            ? "Expert articles on German building codes (HBO), sustainability, and urban planning by Dipl.-Ing. Majeed Shams."
            : "Fachartikel zu Architektur, Bauordnungsrecht Hessen, HBO, nachhaltigem Bauen und Städtebau von Architekt Dipl.-Ing. Majeed Shams.",
        canonicalUrl: "https://shams-consult.de/blog",
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: language === "en" ? "Journal" : "Magazin", item: "/blog" },
        ],
      });
    } else if (isAboutPage) {
      updatePageSeo({
        title:
          language === "en"
            ? "About the Practice — Shams Consult Architecture"
            : "Über uns — Architekturbüro Shams Consult | Frankfurt & Rhein-Main",
        description:
          language === "en"
            ? "Learn about Shams Consult: Licensed architectural practice & urban planning consultancy (AKH Hessen No. 21886) in Frankfurt am Main."
            : "Erfahren Sie mehr über Shams Consult: Staatlich anerkanntes Planungsbüro für Architektur & Stadtplanung (AKH Hessen Nr. 21886) in Frankfurt am Main.",
        canonicalUrl: "https://shams-consult.de/about",
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: language === "en" ? "About Us" : "Über uns", item: "/about" },
        ],
      });
    } else if (isFounderPage) {
      updatePageSeo({
        title:
          language === "en"
            ? "Dipl.-Ing. Majeed Shams — Architect & Urban Planner"
            : "Dipl.-Ing. Majeed Shams — Freier Architekt & Stadtplaner | Shams Consult",
        description:
          language === "en"
            ? "Professional profile of Dipl.-Ing. (FH) Majeed Shams M.Eng.: Licensed German Architect & Urban Planner, AKH Hesse Member No. 21886."
            : "Profil von Dipl.-Ing. (FH) Majeed Shams M.Eng.: Freier Architekt & Stadtplaner, AKH Hessen Mitglied (Nr. 21886), 15+ Jahre Planungserfahrung.",
        canonicalUrl: "https://shams-consult.de/founder",
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: language === "en" ? "Founder" : "Gründer", item: "/founder" },
        ],
      });
    } else if (isResearchPage) {
      updatePageSeo({
        title:
          language === "en"
            ? "Research, Academic Theses & Teaching | Shams Consult"
            : "Forschung, Thesen & Lehre | Shams Consult Architektur",
        description:
          language === "en"
            ? "Scientific theses and urban planning research by Shams Consult at the intersection of architecture and urbanism."
            : "Wissenschaftliche Thesen und städtebauliche Forschungsschwerpunkte von Shams Consult an der Schnittstelle von Architektur und Urbanistik.",
        canonicalUrl: "https://shams-consult.de/research",
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: language === "en" ? "Research" : "Forschung", item: "/research" },
        ],
      });
    } else if (isClientsPage) {
      updatePageSeo({
        title:
          language === "en"
            ? "Clients, Partners & References | Shams Consult"
            : "Auftraggeber, Partner & Referenzen | Shams Consult",
        description:
          language === "en"
            ? "Successful collaborations with institutional clients, developers, municipalities, and private builders in Germany."
            : "Erfolgreiche Zusammenarbeiten mit institutionellen Bauherren, Bauträgern, Kommunen und privaten Auftraggebern in Hessen.",
        canonicalUrl: "https://shams-consult.de/clients",
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: language === "en" ? "Partners" : "Partner", item: "/clients" },
        ],
      });
    } else if (isSiteVisitsPage) {
      updatePageSeo({
        title:
          language === "en"
            ? "Site Visits & Construction Insights | Shams Consult"
            : "Baustelleneinblicke & Vor-Ort-Impressionen | Shams Consult",
        description:
          language === "en"
            ? "On-site construction supervision, German VOB compliance, and progress updates from projects across Rhine-Main."
            : "Direkte Einblicke von der Baustelle: Qualitätskontrolle, VOB-konforme Bauüberwachung und Baufortschritte in Frankfurt und Rhein-Main.",
        canonicalUrl: "https://shams-consult.de/site-visits",
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: language === "en" ? "Site Visits" : "Baustelleneinblicke", item: "/site-visits" },
        ],
      });
    } else if (activeLegalPage === "impressum") {
      updatePageSeo({
        title: "Impressum & Rechtliche Angaben | Shams Consult",
        description: "Impressum und berufsrechtliche Angaben des Architekturbüros Shams Consult in Frankfurt am Main.",
        canonicalUrl: "https://shams-consult.de/impressum",
        noIndex: true,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Impressum", item: "/impressum" },
        ],
      });
    } else if (activeLegalPage === "datenschutz") {
      updatePageSeo({
        title: "Datenschutzerklärung | Shams Consult",
        description: "Datenschutzerklärung der Shams Consult gemäß DSGVO.",
        canonicalUrl: "https://shams-consult.de/datenschutz",
        noIndex: true,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Datenschutz", item: "/datenschutz" },
        ],
      });
    } else if (activeLegalPage === "widerruf") {
      updatePageSeo({
        title: "Widerrufsbelehrung | Shams Consult",
        description: "Widerrufsbelehrung für Verbraucher gemäß Fernabsatzrecht.",
        canonicalUrl: "https://shams-consult.de/widerruf",
        noIndex: true,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Widerruf", item: "/widerruf" },
        ],
      });
    } else if (activeLegalPage === "barrierefreiheit") {
      updatePageSeo({
        title: "Erklärung zur Barrierefreiheit | Shams Consult",
        description: "Erklärung zur digitalen Barrierefreiheit gemäß BITV 2.0 und WCAG 2.1 AA.",
        canonicalUrl: "https://shams-consult.de/barrierefreiheit",
        noIndex: true,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: "Barrierefreiheit", item: "/barrierefreiheit" },
        ],
      });
    } else if (isComparisonPage) {
      const topic =
        comparisonTopics.find((t) => t.id === activeComparisonTopicId || t.slug === activeComparisonTopicId) ||
        comparisonTopics[0];
      const topicTitle = topic.metaTitle[language] ?? topic.metaTitle.de;
      const topicDesc = topic.metaDescription[language] ?? topic.metaDescription.de;
      updatePageSeo({
        title: topicTitle,
        description: topicDesc,
        canonicalUrl: `https://shams-consult.de/vergleich/${topic.slug}`,
        breadcrumbs: [
          { name: "Home", item: "/" },
          { name: language === "en" ? "Comparisons" : "Vergleiche", item: "/vergleich" },
          { name: topic.badge[language] ?? topic.badge.de, item: `/vergleich/${topic.slug}` },
        ],
      });
    } else if (isNotFound) {
      updatePageSeo({
        title: "Seite nicht gefunden (404) | Shams Consult",
        description: "Die angeforderte Seite konnte leider nicht gefunden werden.",
        canonicalUrl: `https://shams-consult.de${requestedPath}`,
        noIndex: true,
      });
    } else {
      updatePageSeo({
        title:
          language === "en"
            ? "Shams Consult — Architecture, Urban Planning & Project Development | Frankfurt & Rödermark"
            : "Shams Consult — Architekturbüro für Architektur, Stadtplanung & Projektentwicklung | Frankfurt & Rödermark",
        description:
          language === "en"
            ? "Shams Consult — Architectural practice for architecture, urban planning & project development in Frankfurt & Rödermark (Rhine-Main). AKH Hessen Member (No. 21886). 15+ years experience."
            : "Shams Consult — Architekturbüro für Architektur, Stadtplanung und Projektentwicklung in Frankfurt am Main & Rödermark (Rhein-Main). AKH Hessen Mitglied (Nr. 21886). 15+ Jahre Erfahrung. Jetzt Erstgespräch vereinbaren.",
        canonicalUrl: "https://shams-consult.de/",
        customJsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: t.faqSection.items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        },
      });
    }
  }, [
    language,
    requestedPath,
    activeProject,
    activeBlogPost,
    activeCaseStudy,
    isProjectsPage,
    isBlogPage,
    isAboutPage,
    isFounderPage,
    isResearchPage,
    isClientsPage,
    isSiteVisitsPage,
    isComparisonPage,
    activeComparisonTopicId,
    activeRegionalPage,
    activeLegalPage,
    isNotFound,
    t.faqSection.items,
  ]);

  const navigateTo = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState(null, "", path);
      syncRoute();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSelectCaseStudy = (cs: CaseStudy) => {
    navigateTo(`/case-study/${cs.id}`);
  };

  const handleSelectProject = (proj: Project) => {
    navigateTo(`/project/${proj.id}`);
  };

  const handleSelectProjectById = (projectId: string) => {
    navigateTo(`/project/${projectId}`);
  };

  const handleSelectBlogPost = (post: BlogPost) => {
    navigateTo(`/blog/${post.slug}`);
  };

  const handleViewAllBlog = () => {
    navigateTo("/blog");
  };

  const handleBackToBlog = () => {
    navigateTo("/blog");
  };

  const handleBackToProjects = () => {
    navigateTo("/projects");
  };

  const handleNavigateFounder = () => {
    navigateTo("/founder");
  };

  const handleNavigateResearch = () => {
    navigateTo("/research");
  };

  const handleBackToHome = () => {
    navigateTo("/");
  };

  const handleBookConsultation = () => {
    if (window.location.pathname !== "/") {
      navigateTo("/");
      setTimeout(() => {
        const contactEl = document.getElementById("contact");
        if (contactEl) {
          contactEl.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    } else {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 font-sans pb-16 md:pb-0">
      {/* 1. Header Navigation */}
      <Header
        t={t.nav}
        language={language}
        onLanguageChange={(lang) => setLanguage(lang)}
        onNavigateHome={handleBackToHome}
        onNavigate={navigateTo}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeLegalPage ? (
          /* Dedicated Standalone Legal Notice Page */
          <LegalPage
            type={activeLegalPage}
            language={language}
            onNavigateHome={handleBackToHome}
          />
        ) : activeRegionalPage ? (
          /* Dedicated Regional Hub-and-Spoke Landing Page */
          <RegionalLandingPage
            data={activeRegionalPage}
            language={language}
            t={t.regionalLandingPage}
            onBookConsultation={handleBookConsultation}
            onNavigateHome={handleBackToHome}
            onNavigateProject={handleSelectProjectById}
          />
        ) : isComparisonPage ? (
          /* Dedicated Comparison & Decision Guide Page */
          <ComparisonPage
            initialTopicId={activeComparisonTopicId}
            language={language}
            onNavigateHome={handleBackToHome}
            onBookConsultation={handleBookConsultation}
            onNavigateTopic={(slug) => navigateTo(`/vergleich/${slug}`)}
          />
        ) : isClientsPage ? (
          /* Dedicated Clients & Project Partners Page */
          <ClientsPage
            t={t.clients}
            language={language}
            onBack={handleBackToHome}
            onNavigateSiteVisits={() => navigateTo("/site-visits")}
            onBookConsultation={handleBookConsultation}
          />
        ) : isSiteVisitsPage ? (
          /* Dedicated On-Site Visits & Field Proof Album Page */
          <SiteVisitsPage
            t={t.siteVisitsPage}
            onBack={handleBackToHome}
            onBookConsultation={handleBookConsultation}
          />
        ) : isAboutPage ? (
          /* Dedicated Company About Page (Business & Practice) */
          <AboutPage
            t={t.about}
            clientsT={t.clients}
            language={language}
            onBack={handleBackToHome}
            onNavigateFounder={handleNavigateFounder}
            onNavigateSiteVisits={() => navigateTo("/site-visits")}
            onBookConsultation={handleBookConsultation}
          />
        ) : isFounderPage ? (
          /* Dedicated Founder Story Page */
          <FounderPage
            language={language}
            onBack={handleBackToHome}
            onBookConsultation={handleBookConsultation}
          />
        ) : isResearchPage ? (
          /* Dedicated Research & Theses Page */
          <ResearchPage
            t={t.research}
            language={language}
            onBack={handleBackToHome}
            onBookConsultation={handleBookConsultation}
          />
        ) : activeBlogPost ? (
          /* Dedicated Blog Post Detail Page */
          <BlogDetail
            post={activeBlogPost}
            t={t.blog}
            language={language}
            onBack={handleBackToBlog}
            onSelectPost={handleSelectBlogPost}
            onBookConsultation={handleBookConsultation}
          />
        ) : isBlogPage ? (
          /* Dedicated Full Blog Overview Page */
          <BlogPage
            t={t.blog}
            language={language}
            onSelectPost={handleSelectBlogPost}
            onBack={handleBackToHome}
            onBookConsultation={handleBookConsultation}
          />
        ) : activeProject ? (
          /* Dedicated Single Project Detail Page */
          <ProjectDetail
            project={activeProject}
            t={t.projectDetail}
            language={language}
            onBack={handleBackToProjects}
            onBookConsultation={handleBookConsultation}
          />
        ) : isProjectsPage ? (
          /* Dedicated Projects Hub Landing Page */
          <ProjectsPage
            t={t.projectsPage}
            language={language}
            onSelectProject={handleSelectProject}
            onBack={handleBackToHome}
            onBookConsultation={handleBookConsultation}
          />
        ) : activeCaseStudy ? (
          /* Dedicated Case Study Detail Page */
          <CaseStudyDetail
            caseStudy={activeCaseStudy}
            language={language}
            onBack={handleBackToHome}
            onBookConsultation={handleBookConsultation}
          />
        ) : isNotFound ? (
          /* Graceful 404 Not Found Fallback */
          <NotFoundPage
            t={t.notFound}
            requestedPath={requestedPath}
            onNavigateHome={handleBackToHome}
            onNavigateProjects={() => navigateTo("/projects")}
            onNavigateAbout={() => navigateTo("/about")}
            onBookConsultation={handleBookConsultation}
          />
        ) : (
          /* Full Homepage */
          <>
            {/* 1. Hero Section */}
            <Hero
              t={t.hero}
              onBookConsultation={handleBookConsultation}
              onNavigateProjects={() => navigateTo("/projects")}
              onNavigateFounder={() => navigateTo("/founder")}
            />

            {/* 2. On-Site Visits & Field Proof Moving Photo Carousel */}
            <SiteVisitsMovingSection
              t={t.siteVisitsPage}
              onNavigateSiteVisits={() => navigateTo("/site-visits")}
            />

            {/* 3. Metrics Strip */}
            <MetricsBar t={t.metrics} />

            {/* 4. Official AKH Hessen Chamber Registration Authority (Registered German Architect & Planner) */}
            <AkhRegistrationSection t={t.akhRegistration} />

            {/* 5. Selected Clients & Partners Moving Logos Track (Positioned above HOAI phases) */}
            <div id="clients">
              <ClientsMovingSection
                t={t.clients}
                language={language}
                onNavigateClients={() => navigateTo("/clients")}
              />
            </div>

            {/* 6. Unified Services & 9 HOAI Leistungsphasen Section */}
            <div id="services">
              <ServicesSection t={t.services} processT={t.process} />
            </div>

            {/* 7. Dedicated Subtle VOB Compliance Section */}
            <VobSection t={t.vob} />

            {/* 8. Team of 16 Architecture Experts (Subtle Authority Section before case studies) */}
            <TeamSection
              t={t.team}
              onNavigateAbout={() => navigateTo("/about")}
            />

            {/* 9. Verified 5-Star Google Reviews & Moving Track */}
            <div id="case-studies">
              <CaseStudiesSection
                language={language}
                onSelectCaseStudy={handleSelectCaseStudy}
              />
            </div>

            {/* 9. Featured Projects Section (Moving Track) */}
            <FeaturedProjectsSection
              t={t.projects}
              language={language}
              onSelectProject={handleSelectProject}
              onViewAllProjects={() => navigateTo("/projects")}
            />

            {/* 6. Academic Research & Teaching (Frankfurt UAS Lecturer in Urban Architecture) */}
            <div id="research">
              <ResearchSection
                t={t.research}
                onNavigateResearch={handleNavigateResearch}
              />
            </div>

            {/* 7. From The Blog / Magazin */}
            <BlogSection
              t={t.blog}
              language={language}
              onSelectPost={handleSelectBlogPost}
              onViewAll={handleViewAllBlog}
            />

            {/* 8. Science-Backed FAQ Accordion Section with FAQPage Schema */}
            <FaqSection
              t={t.faqSection}
              onBookConsultation={handleBookConsultation}
            />

            {/* 9. Contact & Consultation Booking Section */}
            <div id="contact" className="bg-[#121316]">
              <ContactSection t={t.contact} language={language} initialMessage={leadMessage} />
            </div>
          </>
        )}
      </main>

      {/* 8. Comprehensive Dark Footer */}
      <Footer
        t={t.footer}
        navT={t.nav}
        servicesT={t.services}
        onNavigate={navigateTo}
      />

      {/* 9. Frictionless Legal Modals */}
      <LegalModal type={legalModal} language={language} onClose={() => setLegalModal(null)} />

      {/* 10. Science-Backed Mobile Sticky Quick-Action Bar (Thumb Zone) */}
      <MobileStickyActionBar
        t={t.mobileActionBar}
        contactT={t.contact}
        onBookConsultation={handleBookConsultation}
      />

      {/* 11. Subtle Desktop Floating Quick-Action Dock (Zero Clutter, 1-Click Access) */}
      <DesktopStickyActionBar
        t={t.mobileActionBar}
        contactT={t.contact}
        onBookConsultation={handleBookConsultation}
      />

      {/* 12. GDPR & TDDDG Compliant Cookie Banner */}
      <CookieBanner
        language={language}
        onOpenPrivacy={() => navigateTo("/datenschutz")}
        onOpenImpressum={() => navigateTo("/impressum")}
      />
    </div>
  );
}

export default App;
