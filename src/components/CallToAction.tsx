import React from 'react';
import { ArrowRight, Network, Layers } from 'lucide-react';

interface CallToActionProps {
  onExploreEcosystem: () => void;
  onViewArchitecture: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  onExploreEcosystem,
  onViewArchitecture,
}) => {
  return (
    <section className="py-24 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white relative overflow-hidden border-b border-orange-600 shadow-inner">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-100 font-bold mb-4 bg-orange-700/50 px-3 py-1 rounded-full border border-orange-400/40">
          <Network className="w-3.5 h-3.5 text-white" />
          <span>Unified Capacity Paradigm</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase text-balance">
          CONNECTING LEARNING WITH ORGANIZATIONAL CAPACITY
        </h2>

        <p className="mt-6 text-base sm:text-lg text-orange-50 max-w-2xl mx-auto leading-relaxed text-balance font-medium">
          Capacity Connect brings trainees, trainers, knowledge and organizational intelligence into one connected ecosystem.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onExploreEcosystem}
            className="px-7 py-3.5 text-sm font-extrabold text-orange-600 bg-white hover:bg-orange-50 rounded-lg transition-all shadow-xl hover:shadow-white/20 flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Ecosystem</span>
            <ArrowRight className="w-4 h-4 text-orange-600" />
          </button>
          <button
            onClick={onViewArchitecture}
            className="px-7 py-3.5 text-sm font-extrabold text-white hover:text-white bg-orange-700/60 hover:bg-orange-700/80 border-2 border-white/90 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Layers className="w-4 h-4 text-white" />
            <span>View Architecture</span>
          </button>
        </div>

        <div className="mt-10 text-xs font-mono text-orange-100 font-medium">
          Smart India Hackathon · Ministry of Earth Sciences · India Meteorological Department
        </div>
      </div>
    </section>
  );
};
