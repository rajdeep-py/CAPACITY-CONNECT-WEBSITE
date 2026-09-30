import React from 'react';
import { KEY_DIFFERENTIATORS } from '../data/content';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const KeyDifferentiators: React.FC = () => {
  return (
    <section className="py-24 bg-orange-50/20 text-slate-900 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase font-mono tracking-wider text-orange-600 font-bold mb-2">
            Competitive Edge
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 uppercase">
            WHY CAPACITY CONNECT?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Six architectural pillars that elevate Capacity Connect beyond conventional Learning Management Systems into an intelligent capacity-building framework.
          </p>
        </div>

        {/* 6 Clean Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {KEY_DIFFERENTIATORS.map((diff) => (
            <div
              key={diff.number}
              className="bg-white border-2 border-orange-100 hover:border-orange-300 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all shadow-xs hover:shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono font-black text-orange-600">
                    {diff.number}
                  </span>
                  <Sparkles className="w-4 h-4 text-orange-400 group-hover:text-orange-600 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-orange-100 flex items-center gap-2 text-xs font-mono font-bold text-orange-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                <span>Verified System Feature</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
