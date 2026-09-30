import React, { useState, useEffect } from 'react';
import { 
  UserCheck, 
  Users, 
  ShieldAlert, 
  Cpu, 
  ArrowLeftRight, 
  Sparkles, 
  Layers, 
  Database,
  BarChart3,
  Award,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  CheckCircle2,
  Activity,
  ArrowRight,
  Zap,
  RotateCcw,
  Send,
  FileCode,
  Radio,
  MoveHorizontal
} from 'lucide-react';
import { RoleType } from '../types';
import { ECOSYSTEM_STEPS } from '../data/content';

interface InteractiveEcosystemProps {
  activeRole: RoleType;
  onRoleSelect: (role: RoleType) => void;
}

export const InteractiveEcosystem: React.FC<InteractiveEcosystemProps> = ({
  activeRole,
  onRoleSelect,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [pulseActive, setPulseActive] = useState<boolean>(false);
  const [inspectedNode, setInspectedNode] = useState<string | null>(null);

  const currentStep = ECOSYSTEM_STEPS[currentStepIndex];

  // Auto-play timer for step-by-step flowchart progression
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStepIndex((prev) => (prev + 1) % ECOSYSTEM_STEPS.length);
        triggerManualPulse();
      }, 4500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const triggerManualPulse = () => {
    setPulseActive(true);
    setTimeout(() => setPulseActive(false), 1200);
  };

  const handleNextStep = () => {
    setCurrentStepIndex((prev) => (prev + 1) % ECOSYSTEM_STEPS.length);
    triggerManualPulse();
  };

  const handlePrevStep = () => {
    setCurrentStepIndex((prev) => (prev - 1 + ECOSYSTEM_STEPS.length) % ECOSYSTEM_STEPS.length);
    triggerManualPulse();
  };

  const isTraineeActive = currentStep.activeNodes.includes('trainee') || inspectedNode === 'trainee';
  const isPlatformActive = currentStep.activeNodes.includes('platform') || inspectedNode === 'platform';
  const isTrainerActive = currentStep.activeNodes.includes('trainer') || inspectedNode === 'trainer';
  const isAdminActive = currentStep.activeNodes.includes('admin') || inspectedNode === 'admin';

  return (
    <section id="ecosystem" className="py-20 sm:py-24 bg-white text-slate-900 border-b border-orange-100 relative overflow-hidden">
      {/* Background blueprint grid */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ea580c 1px, transparent 1px), linear-gradient(to bottom, #ea580c 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-700 font-extrabold mb-3 bg-orange-100/80 px-3.5 py-1.5 rounded-full border border-orange-200 shadow-xs">
            <Radio className="w-3.5 h-3.5 text-orange-600 animate-pulse" />
            <span>Interactive Step-by-Step Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 uppercase text-balance leading-tight">
            THE CAPACITY <span className="text-orange-600">CONNECT</span> FLOWCHART
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed text-balance font-normal">
            Step through the real-time data flows between Trainees, Trainers, Admin, and the Central AI Engine. Watch telemetry packets travel across the ecosystem in five automated stages.
          </p>
        </div>

        {/* Top Control Bar: Step Progress, Play/Pause, Next/Prev */}
        <div className="bg-gradient-to-r from-orange-50 via-white to-orange-50 border-2 border-orange-200 rounded-2xl p-4 sm:p-5 mb-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Step Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {ECOSYSTEM_STEPS.map((step, idx) => (
              <button
                key={step.stepNumber}
                onClick={() => {
                  setCurrentStepIndex(idx);
                  setIsPlaying(false);
                  triggerManualPulse();
                }}
                className={`px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-mono font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 sm:gap-2 ${
                  currentStepIndex === idx
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25 ring-2 ring-orange-500/30'
                    : 'bg-white text-slate-700 hover:text-orange-600 hover:bg-orange-50 border border-orange-200'
                }`}
              >
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black ${
                  currentStepIndex === idx ? 'bg-white text-orange-600' : 'bg-orange-100 text-orange-700'
                }`}>
                  {step.stepNumber}
                </span>
                <span>Stage {step.stepNumber}</span>
              </button>
            ))}
          </div>

          {/* Stepper Playback Controls */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrevStep}
                className="p-2 rounded-xl bg-white border border-orange-200 text-slate-700 hover:text-orange-600 hover:bg-orange-50 shadow-xs cursor-pointer transition-colors"
                title="Previous Stage"
                aria-label="Previous Stage"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 sm:gap-2 shadow-xs cursor-pointer transition-all ${
                  isPlaying
                    ? 'bg-amber-500 hover:bg-amber-600 text-white'
                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>Pause Flow</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Auto Step</span>
                  </>
                )}
              </button>
              <button
                onClick={handleNextStep}
                className="p-2 rounded-xl bg-white border border-orange-200 text-slate-700 hover:text-orange-600 hover:bg-orange-50 shadow-xs cursor-pointer transition-colors"
                title="Next Stage"
                aria-label="Next Stage"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={triggerManualPulse}
              className="px-3 py-2 bg-orange-100/80 hover:bg-orange-200 text-orange-800 text-xs font-mono font-bold rounded-xl border border-orange-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3 h-3 text-orange-600" />
              <span className="hidden sm:inline">Send Packet</span>
            </button>
          </div>
        </div>

        {/* Current Active Step Banner */}
        <div className="bg-orange-500 text-white rounded-2xl p-4 sm:p-5 mb-8 shadow-md shadow-orange-500/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/20 backdrop-blur-xs text-white flex items-center justify-center font-mono font-black text-xs sm:text-sm shrink-0">
              0{currentStep.stepNumber}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-[10px] font-mono font-black uppercase text-orange-100 tracking-wider">
                  ACTIVE FLOW SEQUENCE
                </span>
                <span className="text-[10px] font-mono bg-white text-orange-700 font-extrabold px-2 py-0.5 rounded-full">
                  {currentStep.directionLabel}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-black text-white tracking-tight mt-0.5">
                {currentStep.title}
              </h3>
            </div>
          </div>
          <div className="text-xs text-orange-100 max-w-md md:text-right font-medium leading-relaxed">
            {currentStep.actionSummary}
          </div>
        </div>

        {/* FLOWCHART CANVAS (Scrollable on small mobile) */}
        <div className="relative bg-white border-2 border-orange-200 rounded-3xl p-4 sm:p-8 lg:p-10 shadow-xl shadow-orange-500/5 overflow-hidden">
          {/* Top Canvas Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-orange-100 pb-3 mb-6 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
              <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-slate-800">
                Live Dynamic Topology View
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-orange-700 bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200 self-start sm:self-auto">
              <MoveHorizontal className="w-3.5 h-3.5 text-orange-600 sm:hidden" />
              <span>Click nodes to inspect data conduits</span>
            </div>
          </div>

          {/* SVG Animated Circuit Canvas with Responsive Scroll Wrapper */}
          <div className="overflow-x-auto pb-4 scrollbar-thin">
            <div className="relative min-w-[760px] lg:min-w-0 min-h-[460px] flex items-center justify-center">
              {/* SVG Connecting Flow Lines with Dashed Animation & Moving Packets */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 900 480" fill="none">
                <defs>
                  <linearGradient id="flowOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ea580c" stopOpacity="0.95" />
                  </linearGradient>
                  <filter id="glowOrange" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Path 1: Admin (Top) to Center Hub */}
                <line 
                  x1="450" y1="110" x2="450" y2="210" 
                  stroke={isAdminActive ? '#ea580c' : '#fdba74'} 
                  strokeWidth={isAdminActive ? '3.5' : '1.5'} 
                  strokeDasharray={isAdminActive ? '6 4' : 'none'}
                  className={isAdminActive ? 'animate-dash-flow' : ''}
                />

                {/* Path 2: Trainee (Left) to Center Hub */}
                <line 
                  x1="220" y1="260" x2="360" y2="260" 
                  stroke={isTraineeActive ? '#ea580c' : '#fdba74'} 
                  strokeWidth={isTraineeActive ? '3.5' : '1.5'} 
                  strokeDasharray={isTraineeActive ? '6 4' : 'none'}
                  className={isTraineeActive ? 'animate-dash-flow' : ''}
                />

                {/* Path 3: Trainer (Right) to Center Hub */}
                <line 
                  x1="680" y1="260" x2="540" y2="260" 
                  stroke={isTrainerActive ? '#ea580c' : '#fdba74'} 
                  strokeWidth={isTrainerActive ? '3.5' : '1.5'} 
                  strokeDasharray={isTrainerActive ? '6 4' : 'none'}
                  className={isTrainerActive ? 'animate-dash-flow' : ''}
                />

                {/* Path 4: Center Hub to Knowledge Vault / Reversible Loop (Bottom) */}
                <line 
                  x1="450" y1="310" x2="450" y2="400" 
                  stroke={isPlatformActive ? '#ea580c' : '#fdba74'} 
                  strokeWidth={isPlatformActive ? '3.5' : '1.5'} 
                  strokeDasharray="6 4"
                  className="animate-dash-flow"
                />

                {/* Moving Pulse Packets on Active Lines */}
                {isTraineeActive && (
                  <circle cx="290" cy="260" r="5" fill="#f97316" filter="url(#glowOrange)">
                    <animate attributeName="cx" values="220;360" dur="1.8s" repeatCount="indefinite" />
                  </circle>
                )}
                {isAdminActive && (
                  <circle cx="450" cy="160" r="5" fill="#f97316" filter="url(#glowOrange)">
                    <animate attributeName="cy" values="110;210" dur="1.8s" repeatCount="indefinite" />
                  </circle>
                )}
                {isTrainerActive && (
                  <circle cx="610" cy="260" r="5" fill="#f97316" filter="url(#glowOrange)">
                    <animate attributeName="cx" values="680;540" dur="1.8s" repeatCount="indefinite" />
                  </circle>
                )}
                {isPlatformActive && (
                  <circle cx="450" cy="355" r="5" fill="#ea580c" filter="url(#glowOrange)">
                    <animate attributeName="cy" values="310;400" dur="1.8s" repeatCount="indefinite" />
                  </circle>
                )}
              </svg>

              {/* FLOWCHART NODES */}
              <div className="relative w-full max-w-4xl mx-auto h-[460px]">
                {/* NODE 1: ADMIN (TOP) */}
                <div 
                  onClick={() => setInspectedNode('admin')}
                  className={`absolute top-2 left-1/2 -translate-x-1/2 w-64 p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer shadow-md bg-white ${
                    isAdminActive
                      ? 'border-orange-500 ring-4 ring-orange-500/20 scale-105 shadow-orange-500/20'
                      : 'border-orange-200 hover:border-orange-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono font-bold text-orange-600 uppercase">
                        ROLE TIER 03
                      </div>
                      <h4 className="text-sm font-black text-slate-900">
                        ADMIN COMMAND
                      </h4>
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-2 font-mono">
                    Governance · TNA Heatmaps · AI Matching
                  </div>
                </div>

                {/* NODE 2: TRAINEE (LEFT) */}
                <div 
                  onClick={() => setInspectedNode('trainee')}
                  className={`absolute top-1/2 -translate-y-1/2 left-0 w-60 p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer shadow-md bg-white ${
                    isTraineeActive
                      ? 'border-orange-500 ring-4 ring-orange-500/20 scale-105 shadow-orange-500/20'
                      : 'border-orange-200 hover:border-orange-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono font-bold text-orange-600 uppercase">
                        ROLE TIER 01
                      </div>
                      <h4 className="text-sm font-black text-slate-900">
                        TRAINEE ENGINE
                      </h4>
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-2 font-mono">
                    Learn · Quiz Telemetry · Skill Passport
                  </div>
                </div>

                {/* NODE 3: CENTRAL PLATFORM ENGINE (CENTER) */}
                <div 
                  onClick={() => setInspectedNode('platform')}
                  className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-72 p-5 rounded-3xl border-2 transition-all duration-300 cursor-pointer shadow-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white ${
                    isPlatformActive
                      ? 'ring-4 ring-orange-500/30 scale-105 shadow-orange-500/30'
                      : 'hover:scale-[1.02]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-white text-orange-700 px-2 py-0.5 rounded-full">
                      FASTAPI + AI/ML
                    </span>
                  </div>
                  <h4 className="text-base font-black tracking-tight text-white">
                    CAPACITY CONNECT HUB
                  </h4>
                  <p className="text-[11px] text-orange-100 mt-1 leading-snug">
                    Real-time psychometric scoring, vector calculations, and synchronization fabric.
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-orange-400/50 flex items-center justify-between text-[10px] font-mono text-orange-100">
                    <span>Latency: &lt; 200ms</span>
                    <span>PostgreSQL 16</span>
                  </div>
                </div>

                {/* NODE 4: TRAINER (RIGHT) */}
                <div 
                  onClick={() => setInspectedNode('trainer')}
                  className={`absolute top-1/2 -translate-y-1/2 right-0 w-60 p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer shadow-md bg-white ${
                    isTrainerActive
                      ? 'border-orange-500 ring-4 ring-orange-500/20 scale-105 shadow-orange-500/20'
                      : 'border-orange-200 hover:border-orange-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono font-bold text-orange-600 uppercase">
                        ROLE TIER 02
                      </div>
                      <h4 className="text-sm font-black text-slate-900">
                        TRAINER STUDIO
                      </h4>
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-2 font-mono">
                    Syllabus · Video SOPs · Diagnostics
                  </div>
                </div>

                {/* NODE 5: KNOWLEDGE VAULT & CLOSED LOOP (BOTTOM) */}
                <div 
                  onClick={() => setInspectedNode('vault')}
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 w-80 p-3.5 rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all cursor-pointer shadow-sm bg-orange-50/70 text-center"
                >
                  <div className="flex items-center justify-center gap-2 text-xs font-mono font-extrabold text-orange-800">
                    <RotateCcw className="w-3.5 h-3.5 text-orange-600" />
                    <span>CONTINUOUS REVERSIBLE LEARNING LOOP</span>
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5">
                    Assessment results directly generate targeted refresher courses.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* REAL-TIME TELEMETRY INSPECTOR PANEL */}
          <div className="mt-8 pt-6 border-t-2 border-orange-100 bg-orange-50/40 -mx-4 sm:-mx-8 lg:-mx-10 -mb-4 sm:-mb-8 lg:-mb-10 p-5 sm:p-8 rounded-b-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Data Transferred in Active Stage */}
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-orange-600" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                    Stage {currentStep.stepNumber} Data Payload:
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentStep.dataTransferred.map((dataItem, i) => (
                    <div 
                      key={i}
                      className="p-2.5 bg-white border border-orange-200 rounded-xl text-xs font-medium text-slate-800 flex items-center gap-2 shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                      <span className="leading-tight">{dataItem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Institutional System Outcome */}
              <div className="lg:col-span-6 bg-white border border-orange-200 rounded-2xl p-4 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-orange-700 uppercase">
                    Ecosystem Synchronization Impact
                  </span>
                  <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200">
                    STATUS: REAL-TIME VERIFIED
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  {currentStep.systemOutcome}
                </p>
                <div className="pt-2 border-t border-orange-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Triggered by: {currentStep.directionLabel}</span>
                  <button
                    onClick={() => onRoleSelect(activeRole === 'trainee' ? 'trainer' : 'trainee')}
                    className="text-orange-600 font-bold hover:underline cursor-pointer"
                  >
                    View Role UI Sample →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
