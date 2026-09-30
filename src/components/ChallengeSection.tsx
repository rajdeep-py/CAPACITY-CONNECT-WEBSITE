import React, { useState } from 'react';
import { RISKS_AND_MITIGATIONS } from '../data/content';
import { 
  ShieldAlert, 
  ShieldCheck, 
  ArrowRight, 
  ArrowDown, 
  ChevronRight, 
  CheckCircle2, 
  AlertTriangle,
  Zap,
  TrendingUp,
  Cpu,
  RefreshCw
} from 'lucide-react';

export const ChallengeSection: React.FC<{ onExploreSolution: () => void }> = ({ onExploreSolution }) => {
  const [filterSeverity, setFilterSeverity] = useState<'All' | 'Critical' | 'High'>('All');
  const [activeMultiplierTab, setActiveMultiplierTab] = useState<'friction' | 'inversion'>('friction');

  const filteredRisks = RISKS_AND_MITIGATIONS.filter((item) => {
    if (filterSeverity === 'All') return true;
    return item.riskSeverity === filterSeverity;
  });

  const frictionStages = [
    {
      num: '01',
      title: 'Fragmented Silos',
      subtitle: 'Knowledge Dispersion',
      desc: 'Courses, manuals, and radar logs scattered across disconnected drives and legacy file systems.',
      stat: '68% Untracked Knowledge'
    },
    {
      num: '02',
      title: 'Opaque Visibility',
      subtitle: 'Blindspot Accumulation',
      desc: 'Directorate cannot verify real skill proficiency across 200+ remote stations.',
      stat: '0% Live Competency Data'
    },
    {
      num: '03',
      title: 'Skill Deficits',
      subtitle: 'Critical Vulnerabilities',
      desc: 'Unidentified gaps in Doppler radar calibration and numerical weather prediction.',
      stat: '4.2x Deficit Escalation'
    },
    {
      num: '04',
      title: 'Costly Failures',
      subtitle: 'Operational Suboptimality',
      desc: 'Misaligned faculty deployments, delayed severe weather warnings, and wasted training budgets.',
      stat: 'High Institutional Cost'
    }
  ];

  const inversionStages = [
    {
      num: '01',
      title: 'Connected Ecosystem',
      subtitle: 'Centralized Knowledge Hub',
      desc: '100% of curriculums, video lectures, and SOPs accessible in a single authenticated portal.',
      stat: '100% Curriculum Access'
    },
    {
      num: '02',
      title: 'Real-Time Visibility',
      subtitle: 'Dynamic Skill Vectors',
      desc: 'Real-time psychometric competency matrix updated on every quiz, test, and lab completion.',
      stat: 'Sub-200ms Telemetry'
    },
    {
      num: '03',
      title: 'Targeted Upskilling',
      subtitle: 'Algorithmic Matching',
      desc: 'Automated AI trainer matching and personalized remedial pathways dispatched to staff.',
      stat: 'Zero Skill Blindspots'
    },
    {
      num: '04',
      title: 'Mission Excellence',
      subtitle: 'Forecasting Supremacy',
      desc: 'Maximized institutional readiness, verified staff competencies, and rapid weather response.',
      stat: 'National Impact'
    }
  ];

  return (
    <section id="risks" className="py-24 bg-white text-slate-900 border-b border-orange-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-orange-700 font-extrabold mb-2.5 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              <ShieldAlert className="w-3.5 h-3.5 text-orange-600" />
              <span>Vulnerabilities & Engineering Countermeasures</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 uppercase">
              RISKS & <span className="text-orange-600">MITIGATION STRATEGIES</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Traditional departmental training models suffer from structural fragmentation, operational blindspots, and institutional amnesia. Capacity Connect resolves each risk through verifiable, engineered mitigations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-orange-50/80 p-1.5 rounded-xl border border-orange-200 self-start md:self-auto">
            {(['All', 'Critical', 'High'] as const).map((sev) => (
              <button
                key={sev}
                onClick={() => setFilterSeverity(sev)}
                className={`px-3.5 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                  filterSeverity === sev
                    ? 'bg-orange-500 text-white shadow-xs'
                    : 'text-slate-600 hover:text-orange-600 hover:bg-white'
                }`}
              >
                {sev === 'All' ? 'All Risks (06)' : `${sev} Severity`}
              </button>
            ))}
          </div>
        </div>

        {/* 6 High-End Risk vs. Mitigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRisks.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-orange-200 hover:border-orange-500 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-orange-500/10 group"
            >
              <div>
                {/* Header: Number & Severity Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono font-black text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                      RISK {item.number}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-extrabold uppercase px-2 py-0.5 rounded-full border ${
                        item.riskSeverity === 'Critical'
                          ? 'bg-red-50 text-red-700 border-red-200'
                          : 'bg-amber-50 text-amber-700 border-amber-200'
                      }`}
                    >
                      {item.riskSeverity} Severity
                    </span>
                  </div>
                  <AlertTriangle className="w-4 h-4 text-orange-400 group-hover:text-orange-600 transition-colors" />
                </div>

                {/* Legacy Risk Title & Description */}
                <h3 className="text-base font-extrabold text-slate-900 tracking-tight leading-snug">
                  {item.riskTitle}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {item.riskDescription}
                </p>
              </div>

              {/* Dedicated Engineered Mitigation Box */}
              <div className="mt-5 pt-4 border-t-2 border-orange-100 bg-orange-50/50 -mx-6 -mb-6 p-5 rounded-b-3xl space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-orange-800">
                  <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0" />
                  <span className="uppercase tracking-wider">Engineered Mitigation:</span>
                </div>
                <div className="text-xs font-black text-slate-900 leading-snug">
                  {item.mitigationTitle}
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {item.mitigationStrategy}
                </p>
                <div className="pt-2 border-t border-orange-200/60 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500 font-semibold">Institutional Benefit:</span>
                  <span className="font-bold text-orange-700 bg-white px-2 py-0.5 rounded border border-orange-200 text-[10px]">
                    {item.concreteBenefit}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ULTRA-PREMIUM SECTION: How Operational Friction Multiplies vs. Capacity Connect Inversion */}
        <div className="mt-20 bg-gradient-to-br from-orange-50/70 via-white to-orange-50/50 border-2 border-orange-200 rounded-3xl p-6 sm:p-10 shadow-lg shadow-orange-500/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-orange-200 pb-6 mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-orange-700 font-extrabold block mb-1">
                Executive Architectural Impact Analysis
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                How Operational Friction Multiplies Across Siloed Systems
              </h3>
            </div>

            {/* Toggle Switch: Friction vs Inversion */}
            <div className="inline-flex p-1 bg-white border border-orange-200 rounded-xl shadow-xs self-start md:self-auto">
              <button
                onClick={() => setActiveMultiplierTab('friction')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeMultiplierTab === 'friction'
                    ? 'bg-orange-500 text-white shadow-xs'
                    : 'text-slate-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Legacy Friction Cascade</span>
              </button>
              <button
                onClick={() => setActiveMultiplierTab('inversion')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeMultiplierTab === 'inversion'
                    ? 'bg-orange-500 text-white shadow-xs'
                    : 'text-slate-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Capacity Connect Inversion</span>
              </button>
            </div>
          </div>

          {/* Sequential Domino Chain Display */}
          {activeMultiplierTab === 'friction' ? (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {frictionStages.map((stage, idx) => (
                  <div
                    key={idx}
                    className="relative bg-white border-2 border-orange-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between group hover:border-orange-500 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-black text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                          STAGE {stage.num}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 font-bold">
                          FRICTION RISK
                        </span>
                      </div>
                      <h4 className="text-base font-black text-slate-900">
                        {stage.title}
                      </h4>
                      <div className="text-[11px] font-bold text-orange-600 mb-2">
                        {stage.subtitle}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {stage.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-orange-100 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-500">Deficit Metric:</span>
                      <strong className="text-red-700 bg-red-50 px-1.5 py-0.5 rounded border border-red-200">
                        {stage.stat}
                      </strong>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-orange-100/70 border border-orange-200 rounded-xl text-center text-xs text-orange-900 font-semibold flex items-center justify-center gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-700 shrink-0" />
                <span>Result: Uncoordinated training cycles cause cascading skill blindspots during mission-critical forecasting events.</span>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {inversionStages.map((stage, idx) => (
                  <div
                    key={idx}
                    className="relative bg-white border-2 border-emerald-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between group hover:border-orange-500 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          STAGE {stage.num}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-600 font-bold">
                          CONNECTED
                        </span>
                      </div>
                      <h4 className="text-base font-black text-slate-900">
                        {stage.title}
                      </h4>
                      <div className="text-[11px] font-bold text-orange-600 mb-2">
                        {stage.subtitle}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {stage.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-emerald-100 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-500">System Metric:</span>
                      <strong className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                        {stage.stat}
                      </strong>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-xs text-emerald-900 font-semibold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Result: Seamless data synchronization between Trainee, Trainer, and Admin produces verified operational excellence.</span>
              </div>
            </div>
          )}

          {/* Direct CTA Transition into CAPACITY CONNECT */}
          <div className="mt-10 pt-8 border-t border-orange-200 flex flex-col items-center">
            <div className="text-xs font-mono uppercase tracking-widest text-orange-700 mb-2 font-bold">
              The Comprehensive Resolution
            </div>
            <button
              onClick={onExploreSolution}
              className="group relative inline-flex items-center gap-4 bg-white hover:bg-orange-50 border-2 border-orange-500 rounded-2xl px-6 py-4 shadow-md hover:shadow-orange-500/20 cursor-pointer transition-all duration-200"
            >
              <div className="w-3.5 h-3.5 rounded-full bg-orange-500 animate-pulse" />
              <div className="text-left">
                <div className="text-lg font-black tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                  EXPLORE THE CAPACITY CONNECT BLUEPRINTS
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  Review the three interconnected strategic plans: Trainee, Trainer, and Directorate
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-orange-500 ml-2 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
