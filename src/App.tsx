import React, { useState } from 'react';
import { RoleType } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ChallengeSection } from './components/ChallengeSection';
import { SolutionOverview } from './components/SolutionOverview';
import { InteractiveEcosystem } from './components/InteractiveEcosystem';
import { DataFlowExplainer } from './components/DataFlowExplainer';
import { ContinuousFeedbackLoops } from './components/ContinuousFeedbackLoops';
import { ThreeModulesSection } from './components/ThreeModulesSection';
import { DashboardShowcase } from './components/DashboardShowcase';
import { TechnologyEngine } from './components/TechnologyEngine';
import { ImpactAndBenefits } from './components/ImpactAndBenefits';
import { KeyDifferentiators } from './components/KeyDifferentiators';
import { SecurityAndScalability } from './components/SecurityAndScalability';
import { ReferencesAndContext } from './components/ReferencesAndContext';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function App() {
  const [activeRole, setActiveRole] = useState<RoleType>('trainee');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRoleSelection = (role: RoleType) => {
    setActiveRole(role);
    scrollToSection('ecosystem');
  };

  const handleMockupSelection = (role: RoleType) => {
    setActiveRole(role);
    scrollToSection('mockups');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Sticky Government-Grade Navigation */}
      <Navbar onNavigate={scrollToSection} />

      <main className="flex-grow">
        {/* 1. Hero / Landing Section */}
        <HeroSection
          onExploreEcosystem={() => scrollToSection('ecosystem')}
          onDiscoverSolution={() => scrollToSection('solution')}
        />

        {/* 2. About the Solution */}
        <AboutSection />

        {/* 3. Problem Statement & Challenge */}
        <ChallengeSection onExploreSolution={() => scrollToSection('solution')} />

        {/* 4. Solution Overview: One Ecosystem, Three Roles */}
        <SolutionOverview onSelectRole={handleRoleSelection} />

        {/* 5. Complete Capacity Connect Ecosystem (Large Interactive Flowchart) */}
        <InteractiveEcosystem
          activeRole={activeRole}
          onRoleSelect={setActiveRole}
        />

        {/* 6. Bidirectional Data Flow Explainer */}
        <section className="bg-white pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <DataFlowExplainer
              activeRole={activeRole}
              onSelectRole={setActiveRole}
            />
          </div>
        </section>

        {/* 7. Reversible Continuous Feedback Loops */}
        <ContinuousFeedbackLoops />

        {/* 8. Three Connected Modules Deep Dive */}
        <ThreeModulesSection onExploreMockup={handleMockupSelection} />

        {/* 9. UI Showcase — Three Dashboards (Realistic Laptop & Phone Mockups) */}
        <DashboardShowcase initialRole={activeRole} />

        {/* 10. Technology Engine & Stack Architecture */}
        <TechnologyEngine />

        {/* 11. Impact & Benefits & 7-Step Organizational Chain */}
        <ImpactAndBenefits />

        {/* 12. Key Differentiators */}
        <KeyDifferentiators />

        {/* 13. Security & Scalability */}
        <SecurityAndScalability />

        {/* 14. References & SIH Mandate */}
        <ReferencesAndContext />

        {/* 15. Final Call to Action */}
        <CallToAction
          onExploreEcosystem={() => scrollToSection('ecosystem')}
          onViewArchitecture={() => scrollToSection('technology')}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
