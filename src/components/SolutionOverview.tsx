import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ROLE_PLANS } from '../data/content';
import { 
  UserCheck, 
  Users, 
  ShieldAlert, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Cpu
} from 'lucide-react';
import { RoleType } from '../types';

interface SolutionOverviewProps {
  onSelectRole: (role: RoleType) => void;
}

export const SolutionOverview: React.FC<SolutionOverviewProps> = ({ onSelectRole }) => {
  const [selectedPlanTab, setSelectedPlanTab] = useState<'responsibilities' | 'architecture'>('architecture');

  const roleIcons = {
    trainee: UserCheck,
    trainer: Users,
    admin: ShieldAlert,
  };

  const roleColors = {
    trainee: {
      badge: 'bg-orange-100 text-orange-800 border-orange-200',
      pill: 'bg-orange-500 text-white'
    },
    trainer: {
      badge: 'bg-amber-100 text-amber-800 border-amber-200',
      pill: 'bg-orange-600 text-white'
    },
    admin: {
      badge: 'bg-orange-100 text-orange-900 border-orange-300',
      pill: 'bg-orange-700 text-white'
    }
  };

  return (
    <section id="solution" className="py-24 bg-gradient-to-b from-white via-orange-50/20 to-white text-slate-900 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-orange-700 font-extrabold mb-2.5 bg-orange-100/80 px-3.5 py-1.5 rounded-full border border-orange-200 shadow-xs">
              <Layers className="w-3.5 h-3.5 text-orange-600" />
              <span>Architectural Blueprint Tiering</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 uppercase leading-tight">
              ONE ECOSYSTEM. <span className="text-orange-600">THREE ROLES.</span> ONE CONNECTED WORKFLOW.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Rather than isolated logins, Capacity Connect is architected as three interconnected enterprise tiers. Actions in any tier immediately synchronize data vectors across the remaining two.
            </p>
          </div>

          {/* Toggle Tab for Card Scope */}
          <div className="inline-flex p-1 bg-white border border-orange-200 rounded-xl shadow-xs self-start md:self-auto">
            <button
              onClick={() => setSelectedPlanTab('architecture')}
              className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                selectedPlanTab === 'architecture'
                  ? 'bg-orange-500 text-white shadow-xs'
                  : 'text-slate-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              System Scope
            </button>
            <button
              onClick={() => setSelectedPlanTab('responsibilities')}
              className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                selectedPlanTab === 'responsibilities'
                  ? 'bg-orange-500 text-white shadow-xs'
                  : 'text-slate-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              Core Responsibilities
            </button>
          </div>
        </div>

        {/* Three Plan Cards Layout with Subtle Framer Motion Entrance & Hover Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ROLE_PLANS.map((plan, idx) => {
            const Icon = roleIcons[plan.id];
            const colors = roleColors[plan.id];

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.15,
                  ease: [0.21, 0.47, 0.32, 0.98] 
                }}
                whileHover={{ 
                  y: -6, 
                  transition: { duration: 0.22, ease: 'easeOut' } 
                }}
                className="bg-white border-2 border-orange-200 hover:border-orange-500 rounded-3xl p-7 flex flex-col justify-between transition-colors shadow-sm hover:shadow-xl hover:shadow-orange-500/10 group relative"
              >
                {/* Header Tag Bar */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-orange-600 tracking-wider">
                      {plan.codeName}
                    </span>
                    <span className={`text-[10px] font-mono font-extrabold uppercase px-2.5 py-1 rounded-full border ${colors.badge}`}>
                      {plan.tierBadge}
                    </span>
                  </div>

                  {/* Plan Title & Icon */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <motion.div 
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center shrink-0 shadow-xs group-hover:bg-orange-500 group-hover:text-white transition-colors"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 tracking-tight">
                        {plan.planName}
                      </h3>
                      <div className="text-xs font-bold text-orange-600">
                        {plan.tagline}
                      </div>
                    </div>
                  </div>

                  {/* Primary User Group */}
                  <div className="bg-orange-50/60 border border-orange-100 rounded-xl p-3 mb-5 text-[11px] text-slate-700">
                    <strong className="text-orange-900 font-bold block mb-0.5">Target Operators:</strong>
                    <span>{plan.primaryUsers}</span>
                  </div>

                  {/* Dynamic Feature Checklist (Scope or Responsibilities) */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                      {selectedPlanTab === 'architecture' ? 'Engineered System Scope:' : 'Operational Responsibilities:'}
                    </div>

                    {(selectedPlanTab === 'architecture' ? plan.architectureScope : plan.coreResponsibilities).map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center shrink-0 mt-0.5 border border-orange-200">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Architectural Specs & CTA Button */}
                <div className="pt-4 border-t-2 border-orange-100 space-y-3">
                  <div className="bg-orange-50/40 rounded-xl p-2.5 border border-orange-100 text-[11px] font-mono space-y-1">
                    <div className="flex justify-between text-slate-600">
                      <span>Throughput:</span>
                      <strong className="text-slate-900 font-semibold">{plan.dataThroughput}</strong>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Performance Target:</span>
                      <strong className="text-orange-700 font-bold">{plan.slaTarget}</strong>
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelectRole(plan.id)}
                    className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow-md hover:shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Simulate {plan.id.toUpperCase()} Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Value Proposition Note */}
        <div className="mt-12 p-6 bg-white border-2 border-orange-200 rounded-3xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 border border-orange-200">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-slate-900">
                Synchronous Cybernetic Governance Across All Three Tiers
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Every quiz submission by a Trainee immediately updates the Trainer’s cohort diagnostic and elevates the Admin’s station readiness score.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectRole('trainee')}
              className="text-xs font-bold text-orange-700 hover:text-orange-800 bg-orange-50 hover:bg-orange-100 px-4 py-2.5 rounded-xl border border-orange-300 transition-colors cursor-pointer"
            >
              Inspect Data Flow ⇄
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
