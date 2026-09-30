import React from 'react';
import { ShieldCheck, FileText } from 'lucide-react';

export const ReferencesAndContext: React.FC = () => {
  const references = [
    {
      title: 'Smart India Hackathon (SIH)',
      category: 'Problem Statement 26075',
      desc: 'Centralized Digital Capacity Building and Learning Management Portal for organizational competency tracking and continuous development.',
      authority: 'Ministry of Education Innovation Cell & AICTE',
      linkText: 'Problem Statement ID: 26075'
    },
    {
      title: 'Ministry of Earth Sciences (MoES)',
      category: 'Government Ministry',
      desc: 'Nodal ministry overseeing atmospheric sciences, ocean technology, seismology, and climate change research across India.',
      authority: 'Government of India',
      linkText: 'moes.gov.in'
    },
    {
      title: 'India Meteorological Department (IMD)',
      category: 'Implementing Organization',
      desc: 'National meteorological agency responsible for weather observation, weather forecasting, radar networks, and seismology.',
      authority: 'HQ: Mausam Bhawan, New Delhi',
      linkText: 'mausam.imd.gov.in'
    },
    {
      title: 'Mission Karmayogi Alignment',
      category: 'National Competency Framework',
      desc: 'Aligned with the National Programme for Civil Services Capacity Building (NPCSCB) emphasizing role-based competency mapping.',
      authority: 'Capacity Building Commission (CBC)',
      linkText: 'iGOT Karmayogi Principles'
    }
  ];

  return (
    <section id="references" className="py-20 bg-orange-50/20 text-slate-900 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase font-mono tracking-wider text-orange-600 font-bold mb-2">
            Institutional Context
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 uppercase">
            REFERENCES & MANDATE
          </h2>
          <p className="mt-3 text-base text-slate-700">
            Capacity Connect is formulated directly to address the requirements of Problem Statement 26075 under the Smart India Hackathon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {references.map((ref, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-orange-100 hover:border-orange-300 rounded-2xl p-6 flex flex-col justify-between transition-colors shadow-xs group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold">
                    {ref.category}
                  </span>
                  <FileText className="w-4 h-4 text-orange-400 group-hover:text-orange-600 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {ref.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {ref.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-orange-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono text-[11px] font-medium">{ref.authority}</span>
                <span className="text-orange-700 font-mono font-bold flex items-center gap-1">
                  <span>{ref.linkText}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Academic & Evaluator Evaluation Note */}
        <div className="mt-10 p-5 rounded-xl bg-white border-2 border-orange-200 shadow-xs">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Note for SIH Judges & Technical Evaluators
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                This project showcase website represents the comprehensive architectural design, data movement logic, modular layout specifications, and technological justifications for <strong className="text-slate-900">Capacity Connect</strong>. All UI mockups demonstrate proposed operational layouts with realistic meteorological datasets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
