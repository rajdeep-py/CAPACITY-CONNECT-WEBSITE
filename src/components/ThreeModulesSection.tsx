import React from 'react';
import { MODULES_DETAILED } from '../data/content';
import { GraduationCap, BookOpenCheck, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { RoleType } from '../types';

interface ThreeModulesSectionProps {
  onExploreMockup: (role: RoleType) => void;
}

export const ThreeModulesSection: React.FC<ThreeModulesSectionProps> = ({ onExploreMockup }) => {
  const iconMap: Record<string, any> = {
    trainee: GraduationCap,
    trainer: BookOpenCheck,
    admin: ShieldCheck,
  };

  return (
    <section id="modules" className="py-20 bg-white text-slate-900 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase font-mono tracking-wider text-orange-600 font-bold mb-2">
            Module Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 uppercase">
            THREE CONNECTED MODULES
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Each role in Capacity Connect operates through a specialized, high-performance module designed for their exact operational workflow, feeding into the shared core database.
          </p>
        </div>

        {/* Three Large Detailed Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {MODULES_DETAILED.map((mod) => {
            const Icon = iconMap[mod.id];

            return (
              <div
                key={mod.id}
                className="bg-white border-2 border-orange-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-orange-400 transition-all shadow-sm hover:shadow-lg group"
              >
                <div>
                  {/* Module Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      {mod.title}
                    </span>
                    <div className="w-9 h-9 rounded-lg border border-orange-200 bg-orange-50 text-orange-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-2">
                    {mod.tagline}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {mod.purpose}
                  </p>

                  {/* Core Output Highlight Box */}
                  <div className="p-4 rounded-xl border border-orange-300 bg-orange-50/80 mb-6">
                    <div className="flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 mt-0.5 shrink-0 text-orange-600" />
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-orange-800 font-bold block mb-0.5">
                          Core Output:
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-slate-900">
                          {mod.coreOutput}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="border-t border-orange-100 pt-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-3">
                      Included Module Capabilities ({mod.features.length}):
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                      {mod.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 shrink-0 text-orange-500" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-orange-100">
                  <button
                    onClick={() => onExploreMockup(mod.id)}
                    className="w-full py-2.5 px-4 rounded-lg bg-white hover:bg-orange-50 text-xs font-bold text-orange-700 hover:text-orange-800 border-2 border-orange-300 hover:border-orange-400 transition-colors cursor-pointer text-center shadow-xs"
                  >
                    View {mod.id.toUpperCase()} UI Mockup
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
