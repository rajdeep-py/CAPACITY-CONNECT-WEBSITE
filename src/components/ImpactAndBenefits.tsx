import React from 'react';
import { IMPACT_COLUMNS, ORGANIZATIONAL_IMPACT_CHAIN } from '../data/content';
import { Check, ArrowDown, Sparkles, UserCheck, Users, ShieldAlert } from 'lucide-react';

export const ImpactAndBenefits: React.FC = () => {
  const roleIcons = {
    Trainee: UserCheck,
    Trainer: Users,
    'Admin & Directorate': ShieldAlert
  };

  return (
    <section id="impact" className="py-24 bg-white text-slate-900 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase font-mono tracking-wider text-orange-600 font-bold mb-2">
            Value Realization
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 uppercase">
            IMPACT & BENEFITS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Capacity Connect bridges the divide between daily operational tasks and long-term institutional readiness, delivering measurable outcomes for all organizational tiers.
          </p>
        </div>

        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14">
          {IMPACT_COLUMNS.map((col, idx) => {
            const Icon = roleIcons[col.role as keyof typeof roleIcons] || Sparkles;

            return (
              <div
                key={col.role}
                className="bg-white border-2 border-orange-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all shadow-sm hover:shadow-md hover:border-orange-400 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-orange-100 text-orange-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Tier 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    {col.role.toUpperCase()}
                  </h3>
                  <p className="text-xs font-bold text-orange-600 mt-0.5 mb-5">
                    {col.tagline}
                  </p>

                  <div className="border-t border-orange-100 pt-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-3">
                      Demonstrated Benefits:
                    </span>
                    <ul className="space-y-2.5">
                      {col.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 shrink-0 mt-0.5 text-orange-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-xl border border-orange-300 bg-orange-50/90 text-slate-900">
                  <span className="text-[10px] font-mono uppercase tracking-wider block font-bold text-orange-800 mb-1">
                    Transformative Impact:
                  </span>
                  <p className="text-xs sm:text-sm font-bold leading-relaxed text-slate-900">
                    “{col.impactStatement}”
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 21: Organizational Impact Chain */}
        <div className="mt-20 bg-orange-50/40 border-2 border-orange-200 rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-orange-700 font-bold">
              Strategic Value Chain
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
              The Seven-Step Organizational Impact Flow
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              From centralized knowledge democratization to enhanced national operational capability:
            </p>
          </div>

          <div className="space-y-3 max-w-4xl mx-auto">
            {ORGANIZATIONAL_IMPACT_CHAIN.map((step, idx) => (
              <React.Fragment key={step.step}>
                <div className="bg-white border border-orange-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-orange-400 transition-colors shadow-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 font-mono font-black text-xs flex items-center justify-center shrink-0">
                      {step.step}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                        {step.title}
                      </div>
                      <div className="text-xs text-slate-600 font-medium">
                        {step.desc}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-orange-700 font-bold bg-orange-50 px-2 py-1 rounded border border-orange-200 self-start sm:self-center shrink-0">
                    Phase {step.step} Milestone
                  </span>
                </div>

                {idx < ORGANIZATIONAL_IMPACT_CHAIN.length - 1 && (
                  <div className="flex justify-center text-orange-500 my-0.5">
                    <ArrowDown className="w-4 h-4 animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-10 text-center pt-6 border-t border-orange-200">
            <p className="text-sm font-bold text-orange-700 font-mono">
              ★ Outcome: ENHANCED ORGANIZATIONAL CAPACITY FOR NATIONAL MISSIONS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
