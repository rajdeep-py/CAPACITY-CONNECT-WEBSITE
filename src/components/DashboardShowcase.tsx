import React, { useState } from 'react';
import { RoleType } from '../types';
import { 
  Award, 
  Clock, 
  AlertTriangle, 
  Bell, 
  User, 
  Users, 
  ShieldCheck, 
  BookOpen,
  Search,
  CheckCircle2,
  TrendingUp,
  Play,
  RotateCcw,
  Sparkles,
  Wifi,
  Battery,
  Sliders,
  ChevronRight,
  ExternalLink,
  Laptop,
  Smartphone,
  Eye,
  Activity,
  Layers,
  BarChart3
} from 'lucide-react';

interface DashboardShowcaseProps {
  initialRole?: RoleType;
}

export const DashboardShowcase: React.FC<DashboardShowcaseProps> = ({ initialRole = 'trainee' }) => {
  const [activeTab, setActiveTab] = useState<RoleType>(initialRole);
  const [activeDeviceView, setActiveDeviceView] = useState<'both' | 'laptop' | 'mobile'>('both');

  return (
    <section id="mockups" className="py-24 bg-gradient-to-b from-white via-orange-50/30 to-white text-slate-900 border-b border-orange-100 relative overflow-hidden">
      {/* Background ambient warm accents */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-700 font-extrabold mb-3 bg-orange-100/80 px-3.5 py-1.5 rounded-full border border-orange-200 shadow-xs">
            <Laptop className="w-3.5 h-3.5 text-orange-600" />
            <span>High-Fidelity Workstation & Mobile UI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 uppercase text-balance">
            EXPERIENCE THE <span className="text-orange-600">PLATFORM</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance font-normal">
            Inspect authentic production-grade client interfaces engineered for Trainees, Trainers, and Directorate across high-resolution desktop workstations and ruggedized mobile field devices.
          </p>

          {/* Role Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 bg-white border-2 border-orange-200 rounded-2xl shadow-sm">
            <button
              onClick={() => setActiveTab('trainee')}
              className={`px-5 py-2.5 text-xs font-bold uppercase rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'trainee'
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25'
                  : 'text-slate-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Trainee Station</span>
            </button>
            <button
              onClick={() => setActiveTab('trainer')}
              className={`px-5 py-2.5 text-xs font-bold uppercase rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'trainer'
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25'
                  : 'text-slate-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Trainer Studio</span>
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`px-5 py-2.5 text-xs font-bold uppercase rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'admin'
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25'
                  : 'text-slate-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Directorate Command</span>
            </button>
          </div>
        </div>

        {/* Dynamic Role Mockup Renderer */}
        {activeTab === 'trainee' && <TraineeDeviceSuite />}
        {activeTab === 'trainer' && <TrainerDeviceSuite />}
        {activeTab === 'admin' && <AdminDeviceSuite />}
      </div>
    </section>
  );
};

// =========================================================================
// 1. TRAINEE DEVICE SUITE (REALISTIC LAPTOP & MOBILE)
// =========================================================================
const TraineeDeviceSuite: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-orange-100 pb-4 gap-2">
        <div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
            TRAINEE LEARNING SUITE · WORKSTATION & FIELD COMPANION
          </h3>
          <p className="text-xs font-bold text-orange-600 font-mono mt-0.5">
            Module Code: CC-TRN-01 · Active Station: IMD Regional Centre Pune
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-slate-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            Trainee: Officer R. Sharma
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* REALISTIC MACBOOK PRO LAPTOP MOCKUP (8 Cols) */}
        <div className="lg:col-span-8">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Laptop className="w-4 h-4 text-orange-600" />
            <span>MacBook Pro 16" Workstation Display (Full LMS Console)</span>
          </div>

          {/* Laptop Outer Bezel Frame */}
          <div className="relative rounded-t-3xl bg-slate-900 p-2 sm:p-4 shadow-2xl shadow-slate-900/30 border-2 sm:border-4 border-slate-700">
            {/* Camera notch / LED */}
            <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-slate-800 border border-slate-700" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Laptop Glass Screen Surface */}
            <div className="rounded-xl sm:rounded-2xl bg-white overflow-hidden border border-slate-800 text-slate-900 text-xs">
              {/* macOS Window Title Bar */}
              <div className="bg-slate-100 px-3 sm:px-4 py-2 border-b border-slate-200 flex items-center justify-between overflow-x-auto">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-400" />
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-400" />
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-600 bg-white px-3 py-0.5 rounded-md border border-slate-200 truncate max-w-[280px]">
                  <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                  <span className="truncate">portal.capacityconnect.gov.in/trainee/dashboard</span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 shrink-0">
                  Officer R. Sharma (IMD-6104)
                </div>
              </div>

              {/* Inside Trainee Dashboard Screen */}
              <div className="overflow-x-auto">
                <div className="min-w-[480px] lg:min-w-0 p-3 sm:p-5 space-y-4 bg-orange-50/20">
                {/* Header Welcome Bar */}
                <div className="flex items-center justify-between bg-white p-3.5 rounded-xl border border-orange-200 shadow-xs">
                  <div>
                    <h4 className="text-base font-black text-slate-900">
                      Welcome back, Officer Sharma
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Division: Radar Meteorology & Severe Weather · Pune Regional Center
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-slate-500 block">Overall Competency</span>
                      <strong className="text-sm font-black text-orange-600">84.2% (Tier A)</strong>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                      RS
                    </div>
                  </div>
                </div>

                {/* Key Metrics Row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-xl border border-orange-100 shadow-xs">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Enrolled Modules</span>
                    <div className="text-lg font-black text-slate-900 mt-0.5">04 Courses</div>
                    <span className="text-[10px] text-emerald-600 font-semibold">2 Completed · 1 In-Progress</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-orange-100 shadow-xs">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Doppler Competency</span>
                    <div className="text-lg font-black text-orange-600 mt-0.5">92% Level-2</div>
                    <span className="text-[10px] text-slate-500 font-semibold">Verified Benchmark</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-orange-100 shadow-xs">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Active Credentials</span>
                    <div className="text-lg font-black text-slate-900 mt-0.5">06 Badges</div>
                    <span className="text-[10px] text-orange-600 font-semibold">QR Tamper-Proof</span>
                  </div>
                </div>

                {/* Main Course in Progress Card */}
                <div className="bg-white p-4 rounded-xl border-2 border-orange-300 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded">
                        MANDATORY REFRESHER
                      </span>
                      <h5 className="text-sm font-black text-slate-900 mt-1">
                        Doppler Weather Radar (DWR) Data Inversion & Cyclone Tracking
                      </h5>
                    </div>
                    <span className="text-xs font-mono font-bold text-orange-600">
                      78% Complete
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-orange-100 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: '78%' }} />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1">
                    <span>Current Topic: Dual-Polarization Differential Phase Refinement</span>
                    <button className="px-3 py-1 bg-orange-500 text-white rounded-lg font-bold text-[11px] hover:bg-orange-600 transition-colors cursor-pointer">
                      Resume Video (18:40) →
                    </button>
                  </div>
                </div>

                {/* Dynamic Competency Matrix & Radar Radar Score */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3.5 rounded-xl border border-orange-200">
                    <span className="text-[11px] font-bold text-slate-900 block mb-2">
                      Competency Matrix Vectors:
                    </span>
                    <div className="space-y-1.5 text-[11px]">
                      <div>
                        <div className="flex justify-between text-slate-600">
                          <span>Radar Algorithms</span>
                          <strong className="text-orange-700">92%</strong>
                        </div>
                        <div className="w-full h-1.5 bg-orange-100 rounded-full">
                          <div className="h-full bg-orange-500 rounded-full" style={{ width: '92%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-slate-600">
                          <span>Numerical Weather Prediction</span>
                          <strong className="text-orange-700">76%</strong>
                        </div>
                        <div className="w-full h-1.5 bg-orange-100 rounded-full">
                          <div className="h-full bg-orange-500 rounded-full" style={{ width: '76%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-slate-600">
                          <span>Satellite Meteorology</span>
                          <strong className="text-orange-700">84%</strong>
                        </div>
                        <div className="w-full h-1.5 bg-orange-100 rounded-full">
                          <div className="h-full bg-orange-500 rounded-full" style={{ width: '84%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-orange-200 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-slate-900 block mb-1">
                        Upcoming Certification Exam:
                      </span>
                      <div className="text-xs font-black text-orange-700">
                        NWP Model Diagnostic Practical
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">
                        Scheduled: Tomorrow at 10:00 AM IST · 45 Mins · 30 Scored Scenarios
                      </p>
                    </div>
                    <button className="w-full py-1.5 text-center bg-orange-50 hover:bg-orange-100 text-orange-700 font-bold text-[11px] rounded-lg border border-orange-300 transition-colors">
                      Review Practice Question Bank
                    </button>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Laptop Base / Deck */}
          <div className="h-4 bg-slate-400 rounded-b-2xl border-t border-slate-500 shadow-md flex items-center justify-center">
            <div className="w-20 h-1.5 bg-slate-500 rounded-full" />
          </div>
        </div>

        {/* REALISTIC SMARTPHONE MOCKUP (4 Cols) */}
        <div className="lg:col-span-4">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Smartphone className="w-4 h-4 text-orange-600" />
            <span>Field Mobile Companion (Flutter App)</span>
          </div>

          {/* Smartphone Hardware Frame */}
          <div className="w-full max-w-[280px] sm:max-w-[300px] mx-auto rounded-[36px] sm:rounded-[40px] bg-slate-900 p-2.5 sm:p-3 shadow-2xl shadow-slate-900/40 border-3 sm:border-4 border-slate-700 relative">
            {/* Phone Screen */}
            <div className="rounded-[32px] bg-white overflow-hidden border border-slate-800 text-slate-900 text-xs">
              {/* Phone Status Bar with Dynamic Island */}
              <div className="bg-slate-950 text-white px-5 pt-2 pb-1.5 flex items-center justify-between text-[10px] font-mono">
                <span>09:41</span>
                {/* Dynamic Island pill */}
                <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center gap-1 px-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[9px] text-slate-300">Syncing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Wifi className="w-3 h-3 text-slate-300" />
                  <Battery className="w-3.5 h-3.5 text-slate-300" />
                </div>
              </div>

              {/* Mobile App Header */}
              <div className="p-3.5 bg-orange-500 text-white">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-mono font-bold uppercase text-orange-100">
                    Capacity Connect Mobile
                  </div>
                  <span className="text-[9px] bg-white text-orange-700 font-bold px-1.5 py-0.5 rounded">
                    Field Mode
                  </span>
                </div>
                <h5 className="text-sm font-black mt-1">Officer Sharma</h5>
                <p className="text-[10px] text-orange-100">Station ID: IMD-PUN-04</p>
              </div>

              {/* Mobile Body Content */}
              <div className="p-3.5 space-y-3 bg-orange-50/20 min-h-[380px]">
                {/* Quick Action Daily Quiz */}
                <div className="bg-white p-3 rounded-xl border-2 border-orange-300 shadow-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-mono font-bold text-orange-700">
                      DAILY MICRO-QUIZ
                    </span>
                    <span className="text-[9px] text-slate-400 font-mono">3 Mins</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900">
                    Radar Reflectivity Index (dBZ) Calibration
                  </div>
                  <button className="mt-2 w-full py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold text-[11px] shadow-xs">
                    Start Micro-Quiz →
                  </button>
                </div>

                {/* Mobile Offline Saved Lectures */}
                <div className="bg-white p-3 rounded-xl border border-orange-200 space-y-2">
                  <span className="text-[10px] font-mono font-bold text-slate-600 uppercase">
                    Downloaded SOPs (Offline)
                  </span>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="p-2 bg-orange-50 rounded-lg flex items-center justify-between">
                      <span className="font-semibold text-slate-800">Severe Cyclone SOP v4.2</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <div className="p-2 bg-orange-50 rounded-lg flex items-center justify-between">
                      <span className="font-semibold text-slate-800">Doppler Calibration Manual</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                  </div>
                </div>

                {/* Mobile Skill Passport Badge */}
                <div className="bg-white p-3 rounded-xl border border-orange-200 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-slate-900">
                      Doppler Radar Certified
                    </div>
                    <div className="text-[9px] text-slate-500 font-mono">
                      ID: MoES-DWR-2026-88
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Mobile Tab Bar */}
              <div className="bg-white border-t border-slate-200 p-2 flex justify-around text-[10px] font-bold text-slate-600">
                <span className="text-orange-600">Learn</span>
                <span>Courses</span>
                <span>Passport</span>
                <span>Profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 2. TRAINER DEVICE SUITE (REALISTIC LAPTOP & MOBILE)
// =========================================================================
const TrainerDeviceSuite: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-orange-100 pb-4 gap-2">
        <div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
            TRAINER STUDIO · CURRICULUM ARCHITECT & DIAGNOSTIC COCKPIT
          </h3>
          <p className="text-xs font-bold text-orange-600 font-mono mt-0.5">
            Module Code: CC-FAC-02 · Faculty: Dr. S. Banerjee (Senior Director of Training)
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-slate-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            Cohort: 142 Trainees Enrolled
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* REALISTIC MACBOOK PRO LAPTOP MOCKUP (8 Cols) */}
        <div className="lg:col-span-8">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Laptop className="w-4 h-4 text-orange-600" />
            <span>MacBook Pro 16" Workstation Display (Course Studio & Diagnostics)</span>
          </div>

          <div className="relative rounded-t-3xl bg-slate-900 p-2 sm:p-4 shadow-2xl shadow-slate-900/30 border-2 sm:border-4 border-slate-700">
            <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-slate-800 border border-slate-700" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="rounded-xl sm:rounded-2xl bg-white overflow-hidden border border-slate-800 text-slate-900 text-xs">
              <div className="bg-slate-100 px-3 sm:px-4 py-2 border-b border-slate-200 flex items-center justify-between overflow-x-auto">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-400" />
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-400" />
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-600 bg-white px-3 py-0.5 rounded-md border border-slate-200 truncate max-w-[280px]">
                  <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                  <span className="truncate">portal.capacityconnect.gov.in/trainer/studio</span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 shrink-0">
                  Dr. S. Banerjee (Faculty-402)
                </div>
              </div>

              {/* Inside Trainer Screen */}
              <div className="overflow-x-auto">
                <div className="min-w-[480px] lg:min-w-0 p-3 sm:p-5 space-y-4 bg-orange-50/20">
                <div className="flex items-center justify-between bg-white p-3.5 rounded-xl border border-orange-200 shadow-xs">
                  <div>
                    <h4 className="text-base font-black text-slate-900">
                      Course Authoring & Cohort Health Studio
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Course: Numerical Weather Prediction (NWP) Modeling & Cloud Clusters
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold text-xs shadow-xs">
                      + Add Question Bank
                    </button>
                  </div>
                </div>

                {/* Cohort Performance Spread */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-xl border border-orange-100 shadow-xs">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Class Average Score</span>
                    <div className="text-lg font-black text-slate-900 mt-0.5">81.6%</div>
                    <span className="text-[10px] text-emerald-600 font-semibold">+4.2% vs National Benchmark</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-orange-100 shadow-xs">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">At-Risk Learners Flagged</span>
                    <div className="text-lg font-black text-red-600 mt-0.5">07 Trainees</div>
                    <span className="text-[10px] text-red-500 font-semibold">Remedial Modules Sent</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-orange-100 shadow-xs">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Curriculum Approved</span>
                    <div className="text-lg font-black text-orange-600 mt-0.5">Status: Verified</div>
                    <span className="text-[10px] text-slate-500 font-semibold">Directorate Signed</span>
                  </div>
                </div>

                {/* Question Difficulty & Drop-off Point Diagnostics */}
                <div className="bg-white p-4 rounded-xl border border-orange-200 space-y-3">
                  <div className="flex justify-between items-center">
                    <h5 className="text-xs font-black text-slate-900 uppercase">
                      Item-Response Psychometric Diagnostic (Module 3.2 Exam)
                    </h5>
                    <span className="text-[10px] font-mono text-slate-500">142 Submissions Analyzed</span>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <div className="p-2.5 bg-orange-50/50 rounded-lg border border-orange-100 flex items-center justify-between">
                      <div>
                        <strong className="text-slate-900 block">Q12: Doppler Radial Velocity Fold Unwrapping</strong>
                        <span className="text-[10px] text-red-600">High Difficulty Flag: 44% error rate among learners</span>
                      </div>
                      <button className="px-2.5 py-1 bg-white border border-orange-300 text-orange-700 rounded-md font-bold text-[10px]">
                        Upload Video Explainer
                      </button>
                    </div>

                    <div className="p-2.5 bg-emerald-50/50 rounded-lg border border-emerald-100 flex items-center justify-between">
                      <div>
                        <strong className="text-slate-900 block">Q18: Baroclinic Instability in Mid-Latitude Systems</strong>
                        <span className="text-[10px] text-emerald-700">Optimal Mastery: 91% correct answers</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-700 font-bold bg-white px-2 py-0.5 rounded border border-emerald-200">
                        Concept Mastered
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className="h-4 bg-slate-400 rounded-b-2xl border-t border-slate-500 shadow-md flex items-center justify-center">
            <div className="w-20 h-1.5 bg-slate-500 rounded-full" />
          </div>
        </div>

        {/* REALISTIC SMARTPHONE MOCKUP (4 Cols) */}
        <div className="lg:col-span-4">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Smartphone className="w-4 h-4 text-orange-600" />
            <span>Trainer Quick Evaluator (Mobile App)</span>
          </div>

          <div className="w-full max-w-[280px] sm:max-w-[300px] mx-auto rounded-[36px] sm:rounded-[40px] bg-slate-900 p-2.5 sm:p-3 shadow-2xl shadow-slate-900/40 border-3 sm:border-4 border-slate-700 relative">
            <div className="rounded-[32px] bg-white overflow-hidden border border-slate-800 text-slate-900 text-xs">
              <div className="bg-slate-950 text-white px-5 pt-2 pb-1.5 flex items-center justify-between text-[10px] font-mono">
                <span>09:41</span>
                <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center gap-1 px-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span className="text-[9px] text-slate-300">Live</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Wifi className="w-3 h-3 text-slate-300" />
                  <Battery className="w-3.5 h-3.5 text-slate-300" />
                </div>
              </div>

              <div className="p-3.5 bg-orange-600 text-white">
                <div className="text-[10px] font-mono font-bold uppercase text-orange-200">
                  Trainer Studio Mobile
                </div>
                <h5 className="text-sm font-black mt-1">Dr. S. Banerjee</h5>
                <p className="text-[10px] text-orange-100">Pending Evaluations: 12</p>
              </div>

              <div className="p-3.5 space-y-3 bg-orange-50/20 min-h-[380px]">
                {/* Rapid Rubric Scoring Card */}
                <div className="bg-white p-3 rounded-xl border border-orange-200 shadow-xs space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold text-orange-700">SUBMISSION IN QUEUE</span>
                    <span className="text-[9px] text-slate-500 font-mono">10m ago</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900">
                    Trainee: P. Kulkarni · Station Nagpur
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Assignment: Satellite Water Vapor Imagery Interpretation
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <button className="flex-1 py-1 bg-emerald-500 text-white rounded font-bold text-[10px]">
                      Approve (Score 90)
                    </button>
                    <button className="px-2 py-1 bg-orange-100 text-orange-700 rounded font-bold text-[10px]">
                      Feedback
                    </button>
                  </div>
                </div>

                {/* Trainee Question Ping */}
                <div className="bg-white p-3 rounded-xl border border-orange-200">
                  <div className="text-[10px] font-mono font-bold text-slate-600 mb-1">
                    FORUM QUESTION FROM COHORT
                  </div>
                  <div className="text-[11px] font-bold text-slate-900">
                    "Difference between Z-R relationship in maritime vs continental clouds?"
                  </div>
                  <button className="mt-2 text-[10px] font-bold text-orange-600 hover:underline">
                    Reply with Voice Note →
                  </button>
                </div>
              </div>

              <div className="bg-white border-t border-slate-200 p-2 flex justify-around text-[10px] font-bold text-slate-600">
                <span className="text-orange-600">Grading</span>
                <span>Cohorts</span>
                <span>Content</span>
                <span>Messages</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 3. ADMIN DEVICE SUITE (REALISTIC LAPTOP & MOBILE)
// =========================================================================
const AdminDeviceSuite: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-orange-100 pb-4 gap-2">
        <div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
            DIRECTORATE COMMAND · NATIONAL CAPACITY & AI FACULTY MATCHING
          </h3>
          <p className="text-xs font-bold text-orange-600 font-mono mt-0.5">
            Module Code: CC-ADM-03 · Governance HQ: Ministry of Earth Sciences / IMD New Delhi
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            210 Observatories Synchronized
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* REALISTIC MACBOOK PRO LAPTOP MOCKUP (8 Cols) */}
        <div className="lg:col-span-8">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Laptop className="w-4 h-4 text-orange-600" />
            <span>MacBook Pro 16" Workstation Display (Directorate Command Console)</span>
          </div>

          <div className="relative rounded-t-3xl bg-slate-900 p-3 sm:p-4 shadow-2xl shadow-slate-900/30 border-4 border-slate-700">
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="rounded-2xl bg-white overflow-hidden border border-slate-800 text-slate-900 text-xs">
              <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-600 bg-white px-3 py-0.5 rounded-md border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  <span>https://portal.capacityconnect.gov.in/directorate/command</span>
                </div>
                <div className="text-[11px] font-mono text-slate-500">
                  Director General Office (HQ-01)
                </div>
              </div>

              {/* Inside Admin Screen */}
              <div className="overflow-x-auto">
                <div className="min-w-[480px] lg:min-w-0 p-3 sm:p-5 space-y-4 bg-orange-50/20">
                <div className="flex items-center justify-between bg-white p-3.5 rounded-xl border border-orange-200 shadow-xs">
                  <div>
                    <h4 className="text-base font-black text-slate-900">
                      National Meteorological Readiness Heatmap
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Macro Training Needs Assessment (TNA) · All India Station Network
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono bg-emerald-50 text-emerald-800 font-bold px-2.5 py-1 rounded border border-emerald-200">
                      All Systems Optimal
                    </span>
                  </div>
                </div>

                {/* Macro KPIs */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-xl border border-orange-100 shadow-xs">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Total Trained Personnel</span>
                    <div className="text-lg font-black text-slate-900 mt-0.5">2,840 Staff</div>
                    <span className="text-[10px] text-emerald-600 font-semibold">96.4% Compliance Rate</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-orange-100 shadow-xs">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">National Readiness Index</span>
                    <div className="text-lg font-black text-orange-600 mt-0.5">88.2 / 100</div>
                    <span className="text-[10px] text-slate-500 font-semibold">+12.8 pts Year-over-Year</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-orange-100 shadow-xs">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">AI Faculty Matches</span>
                    <div className="text-lg font-black text-slate-900 mt-0.5">48 Matches</div>
                    <span className="text-[10px] text-orange-600 font-semibold">Zero Uncovered Deficits</span>
                  </div>
                </div>

                {/* Cross-Station Regional Heatmap Data */}
                <div className="bg-white p-4 rounded-xl border border-orange-200 space-y-3">
                  <div className="flex justify-between items-center">
                    <h5 className="text-xs font-black text-slate-900 uppercase">
                      Regional Observatory Readiness Breakdown
                    </h5>
                    <span className="text-[10px] font-mono text-slate-500">Live Telemetry Feeds</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-[11px]">
                    <div className="p-2.5 bg-orange-50/50 rounded-lg border border-orange-100">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>IMD Coastal Zone (Chennai, Vizag, Kolkata)</span>
                        <span className="text-emerald-700">94% Ready</span>
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        High cyclone radar proficiency verified across all 18 radar stations.
                      </div>
                    </div>

                    <div className="p-2.5 bg-orange-50/50 rounded-lg border border-orange-100">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Western Himalayan Zone (Shimla, Srinagar)</span>
                        <span className="text-amber-700">82% Ready</span>
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        Cloudburst prediction module recommended for 24 staff members.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className="h-4 bg-slate-400 rounded-b-2xl border-t border-slate-500 shadow-md flex items-center justify-center">
            <div className="w-20 h-1.5 bg-slate-500 rounded-full" />
          </div>
        </div>

        {/* REALISTIC SMARTPHONE MOCKUP (4 Cols) */}
        <div className="lg:col-span-4">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Smartphone className="w-4 h-4 text-orange-600" />
            <span>Directorate Mobile Executive (Alerts & Approvals)</span>
          </div>

          <div className="w-full max-w-[280px] sm:max-w-[300px] mx-auto rounded-[36px] sm:rounded-[40px] bg-slate-900 p-2.5 sm:p-3 shadow-2xl shadow-slate-900/40 border-3 sm:border-4 border-slate-700 relative">
            <div className="rounded-[32px] bg-white overflow-hidden border border-slate-800 text-slate-900 text-xs">
              <div className="bg-slate-950 text-white px-5 pt-2 pb-1.5 flex items-center justify-between text-[10px] font-mono">
                <span>09:41</span>
                <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center gap-1 px-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[9px] text-slate-300">Secure</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Wifi className="w-3 h-3 text-slate-300" />
                  <Battery className="w-3.5 h-3.5 text-slate-300" />
                </div>
              </div>

              <div className="p-3.5 bg-orange-700 text-white">
                <div className="text-[10px] font-mono font-bold uppercase text-orange-200">
                  Directorate Mobile HQ
                </div>
                <h5 className="text-sm font-black mt-1">Executive Dashboard</h5>
                <p className="text-[10px] text-orange-100">National TNA Priority Alerts</p>
              </div>

              <div className="p-3.5 space-y-3 bg-orange-50/20 min-h-[380px]">
                {/* Instant Course Approval Pill */}
                <div className="bg-white p-3 rounded-xl border border-orange-200 shadow-xs space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold text-orange-700">COURSE AUTHORIZATION</span>
                    <span className="text-[9px] text-slate-400">MoES Circular</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900">
                    Advanced Monsoon Dynamics 2026
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Authored by IMD Pune Faculty · 18 Modules · Approved by Committee
                  </p>
                  <button className="w-full py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded font-bold text-[10px]">
                    Authorize National Rollout
                  </button>
                </div>

                {/* Broadcast Urgent Mandate */}
                <div className="bg-white p-3 rounded-xl border border-orange-200">
                  <div className="text-[10px] font-mono font-bold text-slate-600 mb-1">
                    EMERGENCY TRAINING BROADCAST
                  </div>
                  <p className="text-[10px] text-slate-600">
                    Dispatch mandatory pre-monsoon radar calibration checklist to all field stations.
                  </p>
                  <button className="mt-2 text-[10px] font-bold text-orange-700 bg-orange-50 px-2 py-1 rounded border border-orange-200">
                    Send National Broadcast →
                  </button>
                </div>
              </div>

              <div className="bg-white border-t border-slate-200 p-2 flex justify-around text-[10px] font-bold text-slate-600">
                <span className="text-orange-600">Readiness</span>
                <span>Approvals</span>
                <span>TNA</span>
                <span>Audit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
