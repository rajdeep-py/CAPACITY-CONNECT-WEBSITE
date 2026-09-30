import React, { useState } from 'react';
import { RoleType } from '../types';
import { 
  Database, 
  UserCheck, 
  Users, 
  ShieldAlert, 
  Sparkles, 
  CheckCircle2, 
  RefreshCw,
  ArrowRight,
  ArrowLeftRight,
  Send,
  Zap,
  HelpCircle,
  Lightbulb
} from 'lucide-react';

interface DataFlowExplainerProps {
  activeRole: RoleType;
  onSelectRole: (role: RoleType) => void;
}

export const DataFlowExplainer: React.FC<DataFlowExplainerProps> = ({
  activeRole,
  onSelectRole,
}) => {
  const [simulationStatus, setSimulationStatus] = useState<string | null>(null);

  const roleDataDetails = {
    trainee: {
      roleTitle: 'TRAINEE',
      roleBadge: 'OPERATIONAL LEARNER',
      flowDirection: 'TRAINEE ⇄ CAPACITY CONNECT',
      subtitle: 'Individual Competency Acquisition & Telemetry',
      realWorldScenario: 'Officer Sharma at IMD Pune completes a timed assessment on Doppler Radar Velocity Azimuth Display.',
      simulationAction: 'Simulate Doppler Radar Quiz Submission',
      simulationResult: 'Score: 92% | Dynamic Competency Vector updated: Radar Ops +18% | Pune Station Readiness elevated | Trainer notified.',
      generatedData: [
        { label: 'Station & Profile Telemetry', desc: 'Current meteorological station, division, and field qualifications' },
        { label: 'Active Course Progress', desc: 'Granular video completion timestamps and module milestone markers' },
        { label: 'Quiz & Lab Submissions', desc: 'Item-by-item question responses, completion latency, and practical simulator scores' },
        { label: 'Peer & Faculty Feedback', desc: 'Structured feedback ratings on instructional clarity and syllabus depth' },
      ],
      platformFeedback: [
        { label: 'Dynamic Skill Passport', desc: 'Instant recalculation of multi-dimensional competency radar charts' },
        { label: 'Tailored Learning Pathway', desc: 'Automated remedial modules or advanced numerical prediction course recommendations' },
        { label: 'Verifiable Digital Credentials', desc: 'Cryptographically signed certificates with QR code authentication' },
        { label: 'Exam Countdown & Alerts', desc: 'Personalized notifications for mandatory refresher benchmarks' },
      ],
      icon: UserCheck,
    },
    trainer: {
      roleTitle: 'TRAINER',
      roleBadge: 'INSTRUCTIONAL FACULTY',
      flowDirection: 'TRAINER ⇄ CAPACITY CONNECT',
      subtitle: 'Curriculum Authoring & Instructional Diagnostics',
      realWorldScenario: 'Dr. Banerjee uploads a new high-definition lecture and question bank on Cyclone Track Forecasting.',
      simulationAction: 'Simulate Cyclone SOP & Lecture Upload',
      simulationResult: 'Video transcoded for low-bandwidth field stations | 25 Question bank indexed with psychometric rubrics | Available to 420 trainees.',
      generatedData: [
        { label: 'Modular Curriculum Syllabi', desc: 'Standardized lesson plans, presentation slides, and scientific notebooks' },
        { label: 'Questionnaire & Rubrics', desc: 'Objective question banks with difficulty weights and passing thresholds' },
        { label: 'High-Definition Recorded Lectures', desc: 'Video lectures optimized for offline caching at remote field stations' },
        { label: 'Learner Intervention Flags', desc: 'Faculty notes and personalized mentoring comments for at-risk cohorts' },
      ],
      platformFeedback: [
        { label: 'Cohort Performance Diagnostics', desc: 'Item-response analytics highlighting confusing questions and drop-off points' },
        { label: 'At-Risk Learner Alerts', desc: 'Automated notification of trainees falling below competency benchmarks' },
        { label: 'Instructional Feedback Ratings', desc: 'Aggregated anonymous learner sentiment and pedagogical ratings' },
        { label: 'Directorate Syllabus Approvals', desc: 'Formal administrative approval stamps for national course publishing' },
      ],
      icon: Users,
    },
    admin: {
      roleTitle: 'ADMIN',
      roleBadge: 'CAPACITY DIRECTORATE',
      flowDirection: 'ADMIN ⇄ CAPACITY CONNECT',
      subtitle: 'Institutional Governance & Strategic Capacity Allocation',
      realWorldScenario: 'Director General reviews coastal observatory skill readiness ahead of the upcoming monsoon cyclone season.',
      simulationAction: 'Simulate National TNA Readiness Scan',
      simulationResult: '210 Observatories scanned | Eastern coastal radar deficit identified | AI matches 3 top trainers for emergency training cohort.',
      generatedData: [
        { label: 'User Governance & Roles', desc: 'Identity verification, station postings, and fine-grained access rules' },
        { label: 'Competency Framework Rules', desc: 'National benchmarks, passing criteria, and promotional qualification weights' },
        { label: 'Annual TNA Directives', desc: 'Strategic training calendars, division budgets, and priority focus areas' },
        { label: 'Institutional Circulars', desc: 'System-wide policy broadcasts and urgent training mandates' },
      ],
      platformFeedback: [
        { label: 'Cross-Station Readiness Heatmaps', desc: 'Real-time geographic visualization of meteorological competency by observatory' },
        { label: 'AI Faculty Matching Engine', desc: 'Cosine-similarity recommendations pairing expert trainers to regional deficits' },
        { label: 'Audit-Ready Compliance Records', desc: 'Exportable reports aligned with Mission Karmayogi and national standards' },
        { label: 'Longitudinal Capacity Velocity', desc: 'Year-over-year institutional competency progression charts' },
      ],
      icon: ShieldAlert,
    }
  };

  const current = roleDataDetails[activeRole];
  const Icon = current.icon;

  const runSimulation = () => {
    setSimulationStatus('Processing telemetry packet through Capacity Connect Engine...');
    setTimeout(() => {
      setSimulationStatus(current.simulationResult);
    }, 700);
  };

  return (
    <div id="data-flow" className="bg-white border-2 border-orange-200 rounded-3xl p-6 sm:p-10 shadow-lg shadow-orange-500/5">
      {/* Friendly Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-orange-100 pb-6 mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-700 font-extrabold mb-1 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            <ArrowLeftRight className="w-3.5 h-3.5 text-orange-600" />
            <span>User-Friendly Data Exchange Guide</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            How Data Moves Between People & Platform
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Understand exactly what each role contributes to the system, and the valuable intelligence returned in real time.
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="inline-flex p-1 bg-orange-50 border border-orange-200 rounded-2xl shadow-xs self-start md:self-auto">
          {(['trainee', 'trainer', 'admin'] as const).map((role) => (
            <button
              key={role}
              onClick={() => {
                onSelectRole(role);
                setSimulationStatus(null);
              }}
              className={`px-4 py-2 text-xs font-bold uppercase rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                activeRole === role
                  ? 'bg-orange-500 text-white shadow-xs'
                  : 'text-slate-700 hover:text-orange-600 hover:bg-white'
              }`}
            >
              <span>{role}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Role Overview Card */}
      <div className="bg-gradient-to-r from-orange-50 via-white to-orange-50 border border-orange-200 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/20">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded-full border border-orange-200">
                {current.roleBadge}
              </span>
              <span className="text-xs font-mono text-slate-500">
                {current.flowDirection}
              </span>
            </div>
            <h4 className="text-lg font-black text-slate-900 mt-0.5">
              {current.roleTitle} Data Synchronization Stream
            </h4>
          </div>
        </div>

        {/* Real World Concrete Scenario Pill */}
        <div className="bg-white border border-orange-200 rounded-xl p-3 text-xs text-slate-700 max-w-md shadow-xs">
          <div className="flex items-center gap-1.5 font-bold text-orange-800 mb-0.5">
            <Lightbulb className="w-3.5 h-3.5 text-orange-600" />
            <span>Everyday Operational Example:</span>
          </div>
          <span className="text-slate-600 leading-snug">{current.realWorldScenario}</span>
        </div>
      </div>

      {/* SIDE-BY-SIDE TWO COLUMN FRIENDLY DATA CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: What Role GIVES to Capacity Connect */}
        <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-orange-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-orange-500" />
                <h5 className="text-sm font-extrabold text-slate-900 uppercase">
                  1. What {current.roleTitle} Sends to Platform
                </h5>
              </div>
              <span className="text-[10px] font-mono font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                INBOUND TELEMETRY
              </span>
            </div>

            <div className="space-y-3">
              {current.generatedData.map((item, idx) => (
                <div key={idx} className="p-3 bg-orange-50/50 border border-orange-100 rounded-xl flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900">
                      {item.label}
                    </div>
                    <div className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-orange-100 text-xs text-slate-500 italic">
            → Transmitted securely via TLS 1.3 encrypted REST APIs to the PostgreSQL datastore.
          </div>
        </div>

        {/* Right Column: What Capacity Connect GIVES BACK to Role */}
        <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-emerald-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <h5 className="text-sm font-extrabold text-slate-900 uppercase">
                  2. What Platform Returns to {current.roleTitle}
                </h5>
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                OUTBOUND VALUE & INTELLIGENCE
              </span>
            </div>

            <div className="space-y-3">
              {current.platformFeedback.map((item, idx) => (
                <div key={idx} className="p-3 bg-emerald-50/40 border border-emerald-100 rounded-xl flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900">
                      {item.label}
                    </div>
                    <div className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-emerald-100 text-xs text-slate-500 italic">
            → Computed instantaneously via Python AI scoring engine and pushed to client apps.
          </div>
        </div>
      </div>

      {/* Interactive Live Data Exchange Simulator */}
      <div className="mt-8 pt-6 border-t-2 border-orange-100 bg-gradient-to-r from-orange-50 via-white to-orange-50 rounded-2xl p-5 border border-orange-200">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-orange-700 uppercase tracking-wider block mb-0.5">
              Live Interactive Data Exchange Test
            </span>
            <div className="text-sm font-black text-slate-900">
              Test how Capacity Connect processes a real {current.roleTitle} operational event
            </div>
          </div>

          <button
            onClick={runSimulation}
            className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow-md hover:shadow-orange-500/20 flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>{current.simulationAction}</span>
          </button>
        </div>

        {simulationStatus && (
          <div className="mt-4 p-3.5 bg-white border-2 border-orange-400 rounded-xl text-xs font-mono text-slate-800 shadow-xs flex items-center gap-2.5 animate-in fade-in duration-200">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
            <div>
              <strong className="text-orange-700 font-bold">LIVE TELEMETRY LOG: </strong>
              <span>{simulationStatus}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
