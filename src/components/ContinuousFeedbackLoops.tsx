import React from 'react';
import { RotateCw, TrendingUp, Sparkles } from 'lucide-react';

export const ContinuousFeedbackLoops: React.FC = () => {
  const learningLoop = [
    { label: 'TRAINEE', sub: 'Engages with platform' },
    { label: 'LEARNING', sub: 'Lectures, SOPs & labs' },
    { label: 'ASSESSMENT', sub: 'Objective evaluation' },
    { label: 'COMPETENCY UPDATE', sub: 'Dynamic skill vector' },
    { label: 'SKILL GAP', sub: 'Automated deficit flag' },
    { label: 'RECOMMENDED TRAINING', sub: 'AI course curation' },
    { label: 'TRAINER', sub: 'Authoring & guidance' },
    { label: 'NEW LEARNING CONTENT', sub: 'Targeted syllabus' },
    { label: 'TRAINEE', sub: 'Mastery achieved' }
  ];

  const adminLoop = [
    { label: 'TRAINEE DATA', sub: 'Aggregated test metrics' },
    { label: 'ADMIN ANALYTICS', sub: 'Cross-station telemetry' },
    { label: 'ORGANIZATIONAL SKILL GAPS', sub: 'Divisional vulnerabilities' },
    { label: 'TRAINING REQUIREMENTS', sub: 'Strategic annual goals' },
    { label: 'TRAINER MATCHING', sub: 'Expertise cosine-match' },
    { label: 'COURSE / TRAINING', sub: 'Targeted delivery' },
    { label: 'TRAINEE', sub: 'Enhanced readiness' }
  ];

  return (
    <section className="py-20 bg-orange-50/30 text-slate-900 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big Anchor Message Banner */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-600 font-bold mb-3">
            <RotateCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
            <span>Closed-Loop Cybernetic System</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 uppercase leading-tight">
            LEARNING CREATES DATA.
            <br />
            <span className="text-orange-600">DATA IMPROVES LEARNING.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Capacity Connect is never a static repository. Every interaction triggers a feedback cycle that iteratively refines trainee competencies and organizational readiness.
          </p>
        </div>

        {/* Two Visual Loop Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Loop 1: The Learning Feedback Loop */}
          <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between border-b border-orange-100 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-orange-600 font-bold">
                    Loop 01 · Individual Trainee Evolution
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-0.5">
                    The Learning Feedback Loop
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>

              {/* Step Sequence */}
              <div className="space-y-2">
                {learningLoop.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="flex-1 flex items-center justify-between p-3 rounded-xl bg-orange-50/50 border border-orange-100 hover:border-orange-300 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-orange-600 w-5">
                          0{idx + 1}
                        </span>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900 tracking-wide">
                            {item.label}
                          </div>
                          <div className="text-[11px] text-slate-600 font-mono">
                            {item.sub}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-orange-600 font-semibold">
                        {idx === learningLoop.length - 1 ? '↺ Cycle Resets' : '→ Next Phase'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-orange-100 text-xs text-orange-900 font-mono font-semibold text-center bg-orange-100/70 p-2.5 rounded-lg border border-orange-200">
              ↺ Dynamic Cycle: Trainee gaps directly shape trainer content creation.
            </div>
          </div>

          {/* Loop 2: The Organizational Training Intelligence Loop */}
          <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between border-b border-orange-100 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-orange-600 font-bold">
                    Loop 02 · Institutional Strategy
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-0.5">
                    Organizational Training Intelligence Loop
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              {/* Step Sequence */}
              <div className="space-y-3">
                {adminLoop.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="flex-1 flex items-center justify-between p-3.5 rounded-xl bg-orange-50/50 border border-orange-100 hover:border-orange-300 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-orange-600 w-5">
                          0{idx + 1}
                        </span>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900 tracking-wide">
                            {item.label}
                          </div>
                          <div className="text-[11px] text-slate-600 font-mono">
                            {item.sub}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-orange-600 font-semibold">
                        {idx === adminLoop.length - 1 ? '↺ Cycle Resets' : '→ Strategic Action'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-orange-100 text-xs text-orange-900 font-mono font-semibold text-center bg-orange-100/70 p-2.5 rounded-lg border border-orange-200">
              ↺ Strategic Cycle: Trainee telemetry informs directorate training policies.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
