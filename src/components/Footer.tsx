import React from 'react';
import { Network, ExternalLink, ShieldCheck, Cpu, ArrowUp, Sparkles, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-white to-orange-50/40 text-slate-700 border-t-2 border-orange-200 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Mandate */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center shadow-md shadow-orange-500/20">
                <Network className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-black text-slate-900 tracking-tight block">
                  CAPACITY <span className="text-orange-600">CONNECT</span>
                </span>
                <span className="text-[11px] font-bold text-orange-600 font-mono">
                  Smart India Hackathon · Proposed Solution
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 max-w-md leading-relaxed">
              A centralized digital capacity-building and learning management ecosystem connecting Trainees, Trainers, and Administrators into one unified, closed-loop institutional intelligence engine.
            </p>

            {/* Official Credentials Box */}
            <div className="p-3.5 bg-white border border-orange-200 rounded-xl text-[11px] font-mono space-y-1 shadow-xs">
              <div className="flex justify-between items-center text-slate-600">
                <span>Problem Statement:</span>
                <strong className="text-orange-700 font-bold bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200">
                  ID: 26075
                </strong>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>Organization:</span>
                <strong className="text-slate-900 font-bold">Ministry of Earth Sciences (MoES)</strong>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>Target Entity:</span>
                <strong className="text-slate-900 font-bold">India Meteorological Department (IMD)</strong>
              </div>
            </div>
          </div>

          {/* Quick Links: Showcase Modules */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-extrabold mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span>Showcase Architecture</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-600 hover:text-orange-600 transition-colors cursor-pointer font-medium"
                >
                  About the Solution
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('risks')}
                  className="text-slate-600 hover:text-orange-600 transition-colors cursor-pointer font-medium"
                >
                  Risks & Mitigation Strategies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solution')}
                  className="text-slate-600 hover:text-orange-600 transition-colors cursor-pointer font-medium"
                >
                  Three Strategic Role Blueprints
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ecosystem')}
                  className="text-slate-600 hover:text-orange-600 transition-colors cursor-pointer font-medium"
                >
                  Step-by-Step Flowchart
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('data-flow')}
                  className="text-slate-600 hover:text-orange-600 transition-colors cursor-pointer font-medium"
                >
                  Bidirectional Data Flows
                </button>
              </li>
            </ul>
          </div>

          {/* Platform & Technology */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-extrabold mb-4 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-orange-500" />
              <span>Technical Stack</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigate('mockups')}
                  className="text-slate-600 hover:text-orange-600 transition-colors cursor-pointer font-medium"
                >
                  Platform Workstations & Mobile UI
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('technology')}
                  className="text-slate-600 hover:text-orange-600 transition-colors cursor-pointer font-medium"
                >
                  FastAPI & Python AI Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('technology')}
                  className="text-slate-600 hover:text-orange-600 transition-colors cursor-pointer font-medium"
                >
                  PostgreSQL & Docker Containerization
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('impact')}
                  className="text-slate-600 hover:text-orange-600 transition-colors cursor-pointer font-medium"
                >
                  7-Step Organizational Impact Chain
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('references')}
                  className="text-slate-600 hover:text-orange-600 transition-colors cursor-pointer font-medium"
                >
                  Mission Karmayogi Alignment
                </button>
              </li>
            </ul>
          </div>

          {/* Compliance & Security Status */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-extrabold mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
              <span>System Readiness</span>
            </h4>
            <div className="space-y-3">
              <div className="bg-white border border-emerald-200 rounded-lg p-3 shadow-xs">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-bold text-emerald-800">
                    Engine Operational
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  Sub-200ms assessment telemetry latency verified.
                </div>
              </div>

              <div className="space-y-1.5 text-[11px] text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                  <span>Role-Based Access Control (RBAC)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                  <span>MeitY & NIC Security Guidelines</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                  <span>Verifiable Digital Signatures</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-[11px]">
            © {currentYear} CAPACITY CONNECT. Smart India Hackathon Solution Portfolio. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-slate-500">
              Government Enterprise Grade · Orange & White Edition
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white hover:bg-orange-500 hover:text-white border border-orange-200 transition-all text-slate-700 shadow-xs cursor-pointer group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
