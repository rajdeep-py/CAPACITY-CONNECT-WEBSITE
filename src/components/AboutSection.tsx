import React, { useState } from 'react';
import { 
  BookOpen, 
  TrendingUp, 
  ShieldCheck, 
  GraduationCap, 
  Users, 
  UserCheck, 
  Award, 
  FileText, 
  Database, 
  CheckCircle2,
  Sparkles,
  Zap,
  BarChart2,
  Lock,
  ArrowRight,
  Layers,
  ChevronRight,
  Cpu
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [selectedFacetIndex, setSelectedFacetIndex] = useState<number | null>(null);

  const facets = [
    { 
      title: 'Trainees & Operational Staff', 
      category: 'HUMAN CAPITAL',
      desc: 'Meteorologists, technical observers & radar specialists stationed across remote national observatories.', 
      icon: UserCheck,
      details: 'Generates real-time assessment telemetry, course progress timestamps, and field competency benchmarks.'
    },
    { 
      title: 'Subject-Matter Faculty', 
      category: 'INSTRUCTIONAL ASSETS',
      desc: 'Certified scientific trainers, senior meteorologists & academic domain researchers.', 
      icon: Users,
      details: 'Authors modular curriculums, uploads high-definition video archives, and configures objective question banks.'
    },
    { 
      title: 'Administrators & Directorate', 
      category: 'GOVERNANCE & POLICY',
      desc: 'Strategic capacity planners, HR directors & executive MoES / IMD leadership.', 
      icon: ShieldCheck,
      details: 'Governs institutional access policies, approves national courses, and monitors regional skill readiness heatmaps.'
    },
    { 
      title: 'Structured Learning & SOPs', 
      category: 'KNOWLEDGE DEPOSITORY',
      desc: 'Curated scientific syllabi, numerical modeling tutorials & disaster-response SOPs.', 
      icon: BookOpen,
      details: 'Standardized modular curriculum accessible 24/7 across high-bandwidth workstations and low-bandwidth field stations.'
    },
    { 
      title: 'Dynamic Course Catalogues', 
      category: 'CURRICULUM ENGINE',
      desc: 'Role-filtered catalogues with prerequisite verification and automated eligibility gating.', 
      icon: FileText,
      details: 'Dynamically adapts based on user role, past completion records, and organizational priority imperatives.'
    },
    { 
      title: 'Rigorous Assessments', 
      category: 'EVALUATION ENGINE',
      desc: 'Psychometrically scored exams, adaptive quizzes & simulation-based benchmark tests.', 
      icon: CheckCircle2,
      details: 'Item-response evaluation with sub-200ms automated scoring and granular skill deficit diagnostics.'
    },
    { 
      title: 'Dynamic Competency Matrix', 
      category: 'SKILL INTELLIGENCE',
      desc: 'Real-time multi-dimensional skill vectors mapped directly to national operational benchmarks.', 
      icon: Zap,
      details: 'Transforms raw exam scores into actionable competency vectors across NWP, Radar, Satellite, and Climatology.'
    },
    { 
      title: 'Digital Certifications', 
      category: 'CREDENTIALING',
      desc: 'Tamper-proof verifiable digital credentials with QR verification and cryptographic signing.', 
      icon: Award,
      details: 'Verifiable proof of competency recognized across ministries, field divisions, and promotional boards.'
    },
    { 
      title: 'Organizational Analytics', 
      category: 'MACRO INTELLIGENCE',
      desc: 'Real-time divisional readiness heatmaps, TNA prioritization & longitudinal growth charts.', 
      icon: BarChart2,
      details: 'Empowers directorate with empirical data to eliminate skill deficits and allocate training resources with precision.'
    }
  ];

  const principles = [
    {
      title: 'LEARN',
      code: 'STAGE 01',
      tagline: 'Standardized Digital Knowledge Repository',
      desc: 'Access structured curriculums, high-definition recorded lectures, operational SOPs, and scientific notebooks tailored specifically to meteorological roles and regional mandates.',
      icon: BookOpen,
      stat: '100% Curriculum Access',
      impact: 'Eliminates fragmented learning and ensures uniform training quality across all field stations.'
    },
    {
      title: 'DEVELOP',
      code: 'STAGE 02',
      tagline: 'Competency-Driven Personalized Pathways',
      desc: 'Measure competencies against national scientific benchmarks, instantly pinpoint skill deficits, and generate automated, adaptive learning pathways for accelerated growth.',
      icon: TrendingUp,
      stat: 'Real-Time Skill Vectors',
      impact: 'Transforms passive course completion into measurable, verifiable operational competency.'
    },
    {
      title: 'STRENGTHEN',
      code: 'STAGE 03',
      tagline: 'Macro Organizational Intelligence & TNA',
      desc: 'Aggregate institutional telemetry into regional skill heatmaps. Direct capacity building budgets with precision and match specialized trainers to urgent departmental shortages.',
      icon: ShieldCheck,
      stat: 'Data-Driven TNA Decisions',
      impact: 'Provides leadership with continuous visibility to ensure national meteorological forecasting excellence.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-orange-50/25 to-white text-slate-900 border-b border-orange-100 relative overflow-hidden">
      {/* Decorative ambient warm background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-orange-700 font-extrabold mb-3 bg-orange-100/90 px-3.5 py-1.5 rounded-full border border-orange-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Enterprise Architectural Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 uppercase">
            ABOUT THE <span className="text-orange-600">SOLUTION</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-balance">
            Capacity Connect is proposed as a centralized digital platform for organizational training, competency development, and institutional knowledge sharing across the Ministry of Earth Sciences (MoES) and India Meteorological Department (IMD).
          </p>
        </div>

        {/* 3 Sexy Principle Cards (LEARN, DEVELOP, STRENGTHEN) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-white border-2 border-orange-200 hover:border-orange-500 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 group overflow-hidden"
              >
                {/* Top Subtle Orange Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-black text-orange-700 bg-orange-100/80 px-2.5 py-1 rounded-full border border-orange-200">
                      {item.code}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-bold text-orange-600 mb-3.5 uppercase tracking-wide">
                    {item.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-orange-100 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 font-semibold">Architectural Stat:</span>
                    <span className="font-extrabold text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                      {item.stat}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 italic">
                    {item.impact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 9 Core Facets Unified Grid - Modern Sexy Look with Interactive Detail Inspection */}
        <div className="bg-white border-2 border-orange-200 rounded-3xl p-6 sm:p-10 shadow-lg shadow-orange-500/5 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-orange-100 pb-6 mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-extrabold text-orange-600 uppercase tracking-widest mb-1">
                <Layers className="w-4 h-4" />
                <span>Unified Ecosystem Fabric</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Nine Core Facets Integrated into One System
              </h3>
            </div>
            <div className="flex items-center gap-2 self-start md:self-auto">
              <span className="text-xs font-mono font-bold text-orange-800 bg-orange-50 px-3 py-1.5 rounded-xl border border-orange-200">
                Single Synchronous Data Lake
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facets.map((facet, index) => {
              const Icon = facet.icon;
              const isSelected = selectedFacetIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedFacetIndex(isSelected ? null : index)}
                  className={`p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer group flex flex-col justify-between ${
                    isSelected
                      ? 'bg-orange-50/80 border-orange-500 shadow-md shadow-orange-500/10'
                      : 'bg-white border-orange-100 hover:border-orange-300 hover:bg-orange-50/30 hover:shadow-xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                        isSelected 
                          ? 'bg-orange-500 text-white shadow-sm'
                          : 'bg-orange-50 border border-orange-200 text-orange-600 group-hover:bg-orange-500 group-hover:text-white'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-orange-700 bg-orange-100/70 px-2 py-0.5 rounded-full border border-orange-200">
                        {facet.category}
                      </span>
                    </div>

                    <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {facet.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {facet.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-orange-100/80 flex items-center justify-between text-[11px] text-orange-700 font-semibold">
                    <span>{isSelected ? 'Hide Architecture Scope' : 'Inspect Architecture Scope'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 text-orange-500 transition-transform ${isSelected ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </div>

                  {isSelected && (
                    <div className="mt-3 pt-2 text-[11px] text-slate-700 bg-white p-3 rounded-xl border border-orange-200 font-medium leading-relaxed animate-in fade-in duration-200">
                      <strong className="text-orange-800 font-bold block mb-1">Architectural Scope:</strong>
                      {facet.details}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Statement Banner */}
          <div className="mt-10 p-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md shadow-orange-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold tracking-wider uppercase text-orange-100">
                  National Capacity Directive
                </div>
                <div className="text-sm sm:text-base font-extrabold text-white">
                  Designed for Full Conformity with Mission Karmayogi & IMD Standards
                </div>
              </div>
            </div>
            <div className="text-xs font-mono font-bold bg-white text-orange-600 px-3 py-1.5 rounded-lg shrink-0 shadow-xs">
              PS-26075 COMPLIANT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
