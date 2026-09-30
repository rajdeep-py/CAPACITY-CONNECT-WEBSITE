import React from 'react';
import { SECURITY_FEATURES, SCALABILITY_FEATURES } from '../data/content';
import { CheckCircle2, Lock, Server } from 'lucide-react';

export const SecurityAndScalability: React.FC = () => {
  return (
    <section className="py-20 bg-white text-slate-900 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase font-mono tracking-wider text-orange-600 font-bold mb-2">
            Non-Functional Requirements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 uppercase">
            SECURITY & SCALABILITY
          </h2>
          <p className="mt-3 text-base text-slate-700">
            Engineered to adhere to rigorous Government of India cybersecurity guidelines and support thousands of concurrent meteorological users nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Security Column */}
          <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-orange-100">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">SECURITY ARCHITECTURE</h3>
                <p className="text-xs font-mono text-orange-600 font-bold">Zero-Trust & Cryptographic Integrity</p>
              </div>
            </div>

            <div className="space-y-4">
              {SECURITY_FEATURES.map((item, idx) => (
                <div key={idx} className="bg-orange-50/40 border border-orange-100 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-orange-100 text-[11px] font-mono text-slate-500 font-medium">
              ✓ Compliant with MeitY Cyber Security Framework & GIGW guidelines.
            </div>
          </div>

          {/* Scalability Column */}
          <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-orange-100">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">SCALABILITY & RESILIENCE</h3>
                <p className="text-xs font-mono text-orange-600 font-bold">Elastic Microservices & Edge Optimization</p>
              </div>
            </div>

            <div className="space-y-4">
              {SCALABILITY_FEATURES.map((item, idx) => (
                <div key={idx} className="bg-orange-50/40 border border-orange-100 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-orange-100 text-[11px] font-mono text-slate-500 font-medium">
              ✓ Capable of horizontally scaling to 50,000+ simultaneous examination sessions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
