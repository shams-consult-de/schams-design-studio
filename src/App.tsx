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
import { MobileStickyActionBar } from "./components/MobileStickyActionBar";
import { DesktopStickyActionBar } from "./components/DesktopStickyActionBar";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { LegalModal, LegalModalType } from "./components/LegalModal";
import { LegalPage, LegalPageType } from "./components/LegalPage";
import { Language, content } from "./lib/i18n";
import { caseStudies, CaseStudy } from "./data/caseStudies";
import { projects, Project } from "./data/projects";
import { BlogPost, getBlogPostBySlug } from "./data/blog";

export function App() {
  const [language, setLanguage] = useState<Language>("de");
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);
  const [activeLegalPage, setActiveLegalPage] = useState<LegalPageType | null>(null);
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

  // Synchronize state with standard HTML5 URL paths only (no hashes)
  const syncRoute = useCallback(() => {
    const pathname = window.location.pathname;

    if (pathname === "/site-visits" || pathname === "/site-visits/" || pathname === "/album" || pathname === "/album/" || pathname === "/einblicke" || pathname === "/einblicke/") {
      setIsSiteVisitsPage(true);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (pathname === "/clients" || pathname === "/clients/" || pathname === "/kunden" || pathname === "/kunden/" || pathname === "/partners" || pathname === "/partners/") {
      setIsClientsPage(true);
      setIsSiteVisitsPage(false);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (pathname === "/research" || pathname === "/research/") {
      setIsResearchPage(true);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsBlogPage(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (pathname === "/about" || pathname === "/about/" || pathname === "/team" || pathname === "/team/") {
      setIsAboutPage(true);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (pathname === "/founder" || pathname === "/founder/") {
      setIsFounderPage(true);
      setIsAboutPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (pathname === "/projects" || pathname === "/projects/") {
      setIsProjectsPage(true);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsClientsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (pathname === "/blog" || pathname === "/blog/") {
      setIsBlogPage(true);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsClientsPage(false);
      setIsResearchPage(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (pathname.startsWith("/blog/")) {
      const slug = pathname.replace(/^\/blog\//, "").replace(/\/$/, "");
      const found = getBlogPostBySlug(slug);
      if (found) {
        setActiveBlogPost(found);
        setIsBlogPage(false);
        setIsProjectsPage(false);
        setIsAboutPage(false);
        setIsFounderPage(false);
        setIsClientsPage(false);
        setIsResearchPage(false);
        setActiveCaseStudy(null);
        setActiveProject(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }

    if (pathname.startsWith("/project/")) {
      const id = pathname.replace(/^\/project\//, "").replace(/\/$/, "");
      const found = projects.find((p) => p.id === id || p.slug === id);
      if (found) {
        setActiveProject(found);
        setIsProjectsPage(false);
        setIsAboutPage(false);
        setIsFounderPage(false);
        setIsClientsPage(false);
        setIsBlogPage(false);
        setIsResearchPage(false);
        setActiveCaseStudy(null);
        setActiveBlogPost(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }

    if (pathname.startsWith("/case-study/")) {
      const id = pathname.replace(/^\/case-study\//, "").replace(/\/$/, "");
      const found = caseStudies.find((c) => c.id === id);
      if (found) {
        setActiveCaseStudy(found);
        setIsProjectsPage(false);
        setIsAboutPage(false);
        setIsFounderPage(false);
        setIsClientsPage(false);
        setIsBlogPage(false);
        setIsResearchPage(false);
        setActiveProject(null);
        setActiveBlogPost(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }

    if (pathname === "/impressum" || pathname === "/impressum/") {
      setActiveLegalPage("impressum");
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (pathname === "/datenschutz" || pathname === "/datenschutz/") {
      setActiveLegalPage("datenschutz");
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (pathname === "/barrierefreiheit" || pathname === "/barrierefreiheit/") {
      setActiveLegalPage("barrierefreiheit");
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (pathname === "/widerruf" || pathname === "/widerruf/") {
      setActiveLegalPage("widerruf");
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsBlogPage(false);
      setIsResearchPage(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Default Home view (/)
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
  }, []);

  useEffect(() => {
    syncRoute();
    window.addEventListener("popstate", syncRoute);
    return () => window.removeEventListener("popstate", syncRoute);
  }, [syncRoute]);

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

  const t = content[language];

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
        ) : isClientsPage ? (
          /* Dedicated Clients & Project Partners Page */
          <ClientsPage
            t={t.clients}
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

            {/* 2. Team of 16 Architecture Experts (Subtle Authority Section immediately under Hero) */}
            <TeamSection
              t={t.team}
              onNavigateAbout={() => navigateTo("/about")}
            />

            {/* 3. Metrics Strip */}
            <MetricsBar t={t.metrics} />

            {/* 4. Official AKH Hessen Chamber Registration Authority (Registered German Architect & Planner) */}
            <AkhRegistrationSection t={t.akhRegistration} />

            {/* 5. Selected Clients & Partners Moving Logos Track (Positioned above HOAI phases) */}
            <div id="clients">
              <ClientsMovingSection
                t={t.clients}
                onNavigateClients={() => navigateTo("/clients")}
              />
            </div>

            {/* 6. Unified Services & 9 HOAI Leistungsphasen Section */}
            <div id="services">
              <ServicesSection t={t.services} processT={t.process} />
            </div>

            {/* 7. Dedicated Subtle VOB Compliance Section */}
            <VobSection t={t.vob} />

            {/* 8. On-Site Visits & Field Proof Moving Photo Carousel */}
            <SiteVisitsMovingSection
              t={t.siteVisitsPage}
              onNavigateSiteVisits={() => navigateTo("/site-visits")}
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

            {/* 8. Contact & Consultation Booking Section */}
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
    </div>
  );
}

export default App;
