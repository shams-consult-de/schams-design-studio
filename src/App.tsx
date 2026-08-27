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
  const [isBlogPage, setIsBlogPage] = useState<boolean>(false);
  const [isResearchPage, setIsResearchPage] = useState<boolean>(false);

  // Synchronize state with standard HTML5 URL paths only (no hashes)
  const syncRoute = useCallback(() => {
    const pathname = window.location.pathname;

    if (pathname === "/research" || pathname === "/research/") {
      setIsResearchPage(true);
      setIsAboutPage(false);
      setIsFounderPage(false);
      setIsProjectsPage(false);
      setIsBlogPage(false);
      setActiveProject(null);
      setActiveCaseStudy(null);
      setActiveBlogPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (pathname === "/about" || pathname === "/about/") {
      setIsAboutPage(true);
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

    if (pathname === "/founder" || pathname === "/founder/") {
      setIsFounderPage(true);
      setIsAboutPage(false);
      setIsProjectsPage(false);
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
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 font-sans">
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
        ) : isAboutPage ? (
          /* Dedicated Company About Page (Business & Practice) */
          <AboutPage
            language={language}
            onBack={handleBackToHome}
            onNavigateFounder={handleNavigateFounder}
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
            language={language}
            onBack={handleBackToProjects}
            onBookConsultation={handleBookConsultation}
          />
        ) : isProjectsPage ? (
          /* Dedicated Projects Hub Landing Page */
          <ProjectsPage
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

            {/* 2. Metrics Strip (Immediately below Hero) */}
            <MetricsBar t={t.metrics} />

            {/* 3. Unified Services & 9 HOAI Leistungsphasen Section */}
            <div id="services">
              <ServicesSection t={t.services} processT={t.process} />
            </div>

            {/* 4. Verified 5-Star Google Reviews & Moving Track */}
            <div id="case-studies">
              <CaseStudiesSection
                language={language}
                onSelectCaseStudy={handleSelectCaseStudy}
              />
            </div>

            {/* 5. Featured Projects Section (Moving Track) */}
            <FeaturedProjectsSection
              t={t.projects}
              language={language}
              onSelectProject={handleSelectProject}
              onViewAllProjects={() => navigateTo("/projects")}
            />

            {/* 6. Academic Research & Teaching (Frankfurt UAS Lecturer in Urban Architecture) */}
            <div id="research">
              <ResearchSection
                language={language}
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
    </div>
  );
}

export default App;
