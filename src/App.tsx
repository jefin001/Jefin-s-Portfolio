import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Services } from './components/Services';
import { ClientsShowcase } from './components/ClientsShowcase';
import { CaseStudies } from './components/CaseStudies';
import { Process } from './components/Process';
import { Experience } from './components/Experience';
import { SkillsCredentials } from './components/SkillsCredentials';
import { Contact } from './components/Contact';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CASE_STUDIES } from './data/portfolioData';
import { CaseStudy } from './types/portfolio';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('Performance Marketing (Meta & Google Ads)');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCaseStudies = () => {
    const el = document.getElementById('case-studies');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    scrollToContact();
  };

  const handleOpenCaseStudyById = (caseStudyId: string) => {
    const found = CASE_STUDIES.find((cs) => cs.id === caseStudyId);
    if (found) {
      setSelectedCaseStudy(found);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#161316] text-[#FFFFFF] selection:bg-[#FF6D29] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Ambient background glowing light leaks matching Image 1 (#FF6D29 and #453027) */}
      <div 
        aria-hidden="true" 
        className="fixed top-0 left-1/3 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-[#FF6D29]/15 via-[#453027]/20 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="fixed bottom-1/4 right-0 w-[600px] h-[600px] bg-[#FF6D29]/10 rounded-full blur-[180px] pointer-events-none -z-10" 
      />

      {/* Top Bar Contract Navigation */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Semantic Content */}
      <main id="main-content">
        {/* Section 01: Hero Cover */}
        <Hero
          onExploreWork={scrollToCaseStudies}
          onContactClick={scrollToContact}
        />

        {/* Section 02: Infinite Skills Marquee */}
        <Marquee />

        {/* Section 03: About Me */}
        <About />

        {/* Section 04: What I Do (Services) */}
        <Services onSelectService={handleSelectService} />

        {/* Section 05: Selected Clients */}
        <ClientsShowcase onOpenCaseStudy={handleOpenCaseStudyById} />

        {/* Section 06: Deep 8-Point Case Studies & Conceptual Sprints */}
        <CaseStudies onOpenCaseStudy={(cs) => setSelectedCaseStudy(cs)} />

        {/* Section 07: My Process */}
        <Process />

        {/* Section 08: Career Experience Timeline */}
        <Experience />

        {/* Section 09: Skills, Tools & Credentials */}
        <SkillsCredentials />
      </main>

      {/* Section 10: Closing Contact & Footer */}
      <Contact preselectedService={preselectedService} />

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  );
}
