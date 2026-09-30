import React from 'react';
import { ArrowRight, Cpu, UserCheck, Users, ShieldAlert, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onExploreEcosystem: () => void;
  onDiscoverSolution: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreEcosystem,
  onDiscoverSolution,
}) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 overflow-hidden bg-white text-slate-900 border-b border-orange-100">
      {/* Subtle structural grid background */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #f97316 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />
      {/* Ambient warm orange glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Government & Hackathon Metadata Bar */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 text-[11px] sm:text-xs text-slate-600 mb-6 font-medium text-center">
          <span className="font-extrabold text-orange-600">Smart India Hackathon</span>
          <span aria-hidden="true" className="text-orange-300">·</span>
          <span>Problem Statement ID: <strong className="text-slate-900 font-mono font-bold">26075</strong></span>
          <span aria-hidden="true" className="text-orange-300 hidden sm:inline">·</span>
          <span className="hidden sm:inline">Ministry of Earth Sciences</span>
          <span aria-hidden="true" className="text-orange-300 hidden sm:inline">·</span>
          <span className="hidden sm:inline">India Meteorological Department</span>
          <span aria-hidden="true" className="text-orange-300">·</span>
          <span className="text-orange-700 font-bold bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
            Showcase Solution
          </span>
        </div>

        {/* Hero Headings */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 uppercase text-balance leading-tight">
            CAPACITY <span className="text-orange-600">CONNECT</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-lg sm:text-2xl font-bold text-orange-600 tracking-tight text-balance">
            Connecting People, Competencies and Knowledge to Build Organizational Capacity.
          </p>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed text-balance font-normal">
            A centralized digital capacity-building and learning management ecosystem connecting Trainees, Trainers, and Administrators through structured learning, competency development, knowledge sharing, assessments, and institutional intelligence.
          </p>

          {/* Call to Actions */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onExploreEcosystem}
              className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-xl transition-all shadow-md hover:shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore the Flowchart</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onDiscoverSolution}
              className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-orange-700 hover:text-orange-800 bg-white hover:bg-orange-50 border-2 border-orange-300 rounded-xl transition-colors cursor-pointer shadow-xs text-center"
            >
              Discover Blueprints
            </button>
          </div>
        </div>

        {/* Animated Connected Ecosystem Visualization */}
        <div className="mt-12 sm:mt-14 max-w-5xl mx-auto">
          <div className="relative bg-white border-2 border-orange-200 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-xl shadow-orange-500/5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-orange-100 pb-4 mb-6 sm:mb-8 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                  Interactive Ecosystem Architecture
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-orange-700 font-mono font-semibold">
                <ArrowLeftRight className="w-3.5 h-3.5 text-orange-600" />
                <span>Synchronous Data Highway</span>
              </div>
            </div>

            {/* Visual Node Diagram */}
            <div className="relative py-2 sm:py-4">
              {/* Desktop SVG background connector lines */}
              <div className="hidden md:block absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 800 340" fill="none" preserveAspectRatio="xMidYMid meet">
                  <line x1="400" y1="80" x2="400" y2="180" stroke="#f97316" strokeWidth="2.5" className="animate-dash-flow" />
                  <line x1="180" y1="230" x2="330" y2="200" stroke="#f97316" strokeWidth="2.5" className="animate-dash-flow" />
                  <line x1="620" y1="230" x2="470" y2="200" stroke="#f97316" strokeWidth="2.5" className="animate-dash-flow" />
                  <path d="M 400 80 L 180 230" stroke="#fed7aa" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                  <path d="M 400 80 L 620 230" stroke="#fed7aa" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                  <path d="M 180 230 L 620 230" stroke="#fed7aa" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                </svg>
              </div>

              {/* Responsive Node Layout */}
              <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6">
                {/* Node 1: TRAINEE */}
                <div 
                  className="w-full sm:w-auto flex flex-col items-center group cursor-pointer" 
                  onClick={onExploreEcosystem}
                >
                  <div className="w-full sm:w-72 bg-white border-2 border-orange-200 hover:border-orange-500 p-4 rounded-2xl shadow-sm hover:shadow-md flex items-center gap-3 transition-transform group-hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-wider text-orange-600 font-bold">ROLE 01</div>
                      <div className="text-sm sm:text-base font-extrabold text-slate-900">TRAINEE</div>
                      <div className="text-[11px] text-slate-600 font-medium">Learn · Assess · Build Skills</div>
                    </div>
                  </div>
                </div>

                {/* Mobile directional arrow */}
                <div className="md:hidden flex items-center gap-1 text-orange-500 font-mono text-[10px]">
                  <span>↕ Synchronized ↕</span>
                </div>

                {/* Middle Row: TRAINER <-> CAPACITY CONNECT (CENTER) <-> ADMIN */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-4 my-1">
                  {/* Left: TRAINER */}
                  <div className="w-full md:w-64 group cursor-pointer" onClick={onExploreEcosystem}>
                    <div className="bg-white border-2 border-orange-200 hover:border-orange-500 p-4 rounded-2xl shadow-sm hover:shadow-md flex items-center gap-3 transition-transform group-hover:-translate-x-1">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-mono tracking-wider text-orange-600 font-bold">ROLE 02</div>
                        <div className="text-sm sm:text-base font-extrabold text-slate-900">TRAINER</div>
                        <div className="text-[11px] text-slate-600 font-medium">Create · Deliver · Monitor</div>
                      </div>
                    </div>
                  </div>

                  {/* Center: CAPACITY CONNECT CORE ENGINE */}
                  <div className="w-full sm:w-auto relative group cursor-pointer" onClick={onExploreEcosystem}>
                    <div className="relative bg-gradient-to-b from-orange-500 to-orange-600 text-white border-2 border-orange-600 p-5 rounded-2xl shadow-xl shadow-orange-500/20 text-center max-w-sm mx-auto transition-transform group-hover:scale-105">
                      <div className="w-11 h-11 mx-auto rounded-xl bg-white text-orange-600 flex items-center justify-center mb-2 shadow-xs">
                        <Cpu className="w-6 h-6" />
                      </div>
                      <div className="text-sm sm:text-base font-black uppercase tracking-tight text-white">
                        CAPACITY CONNECT
                      </div>
                      <div className="text-[11px] text-orange-100 font-medium">Central Intelligence Hub</div>
                      <div className="mt-2 text-[10px] text-orange-100 border-t border-orange-400/60 pt-2 flex flex-wrap justify-center gap-1 font-mono">
                        <span>Competency</span> · <span>Assessments</span> · <span>Analytics</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: ADMIN */}
                  <div className="w-full md:w-64 group cursor-pointer" onClick={onExploreEcosystem}>
                    <div className="bg-white border-2 border-orange-200 hover:border-orange-500 p-4 rounded-2xl shadow-sm hover:shadow-md flex items-center gap-3 transition-transform group-hover:translate-x-1">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                        <ShieldAlert className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-mono tracking-wider text-orange-600 font-bold">ROLE 03</div>
                        <div className="text-sm sm:text-base font-extrabold text-slate-900">ADMIN</div>
                        <div className="text-[11px] text-slate-600 font-medium">Manage · Match · Optimize</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ecosystem Feedback Loop Strip */}
            <div className="mt-8 pt-6 border-t border-orange-100">
              <div className="bg-orange-50/70 rounded-2xl p-4 border border-orange-200">
                <div className="text-center text-xs font-mono uppercase tracking-wider text-orange-800 font-bold mb-2">
                  Continuous Organizational Capacity Flow
                </div>
                <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 text-xs font-bold text-slate-800">
                  <span className="text-orange-700 bg-white px-2.5 py-1 rounded-lg border border-orange-300 shadow-xs">LEARN</span>
                  <span className="text-orange-400">→</span>
                  <span className="text-orange-700 bg-white px-2.5 py-1 rounded-lg border border-orange-300 shadow-xs">ASSESS</span>
                  <span className="text-orange-400">→</span>
                  <span className="text-orange-700 bg-white px-2.5 py-1 rounded-lg border border-orange-300 shadow-xs">MEASURE</span>
                  <span className="text-orange-400">→</span>
                  <span className="text-orange-700 bg-white px-2.5 py-1 rounded-lg border border-orange-300 shadow-xs">IMPROVE</span>
                </div>
                <div className="mt-2 text-center text-[10px] sm:text-[11px] text-orange-700 font-mono font-bold">
                  ↺ KNOWLEDGE FEEDBACK REPOSITORY ↺
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
