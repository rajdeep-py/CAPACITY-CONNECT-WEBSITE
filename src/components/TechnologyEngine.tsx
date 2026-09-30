import React, { useState } from 'react';
import { TECH_CARDS, TECH_COMPARISON_MATRIX } from '../data/content';
import { 
  FlutterLogo, 
  FastAPILogo, 
  PythonLogo, 
  PostgreSQLLogo, 
  DockerLogo, 
  GitAndGitHubLogo 
} from './TechLogos';
import { 
  Cpu, 
  Check, 
  Terminal, 
  Server, 
  Activity, 
  Play, 
  RefreshCw
} from 'lucide-react';

export const TechnologyEngine: React.FC = () => {
  const [activePipelineScenario, setActivePipelineScenario] = useState<number>(0);
  const [pipelineTracing, setPipelineTracing] = useState<boolean>(false);
  const [traceCompleted, setTraceCompleted] = useState<boolean>(false);
  const [activeTierDetail, setActiveTierDetail] = useState<number | null>(null);

  const pipelineScenarios = [
    {
      id: 'assessment',
      title: 'Trainee Doppler Radar Exam Submission',
      endpoint: 'POST /api/v1/assessments/submit',
      payload: '{"station_id": "IMD-PUN", "module": "DWR-L2", "score": 92, "latency_ms": 1840}',
      response: '{"status": "SUCCESS", "competency_vector_updated": true, "new_score": 0.842, "db_commit_ms": 14}',
      tiers: [
        { name: 'Tier 1: Client Ingestion', tech: 'Flutter Web & Mobile', logo: 'flutter', action: 'Captures exam telemetry with local offline SQLite fallback and SHA-256 integrity hash', latency: '0ms' },
        { name: 'Tier 2: Gateway & Security', tech: 'FastAPI + JWT OAuth2', logo: 'fastapi', action: 'Validates bearer token, enforces role permissions, and dispatches to async task queue', latency: '+12ms' },
        { name: 'Tier 3: AI/ML Engine', tech: 'Python Psychometrics', logo: 'python', action: 'Executes item-response theory scoring, recalibrates station radar competency vector', latency: '+38ms' },
        { name: 'Tier 4: Relational Persistence', tech: 'PostgreSQL 16 (JSONB)', logo: 'postgres', action: 'Commits ACID transaction, updates competency passport, flags readiness to Admin', latency: '+14ms' },
        { name: 'Tier 5: Cloud Orchestration', tech: 'Docker Swarm / NIC Cloud', logo: 'docker', action: 'Emits WebSocket event updating Trainer cohort diagnostic and Admin live heatmap', latency: '+8ms' },
      ],
      totalLatency: '72ms (Real-Time Sub-100ms SLA)'
    },
    {
      id: 'curriculum',
      title: 'Trainer 4K Lecture & Cyclone SOP Publishing',
      endpoint: 'POST /api/v1/curriculum/publish-course',
      payload: '{"course_id": "CYC-ADV-04", "video_codec": "H.265", "chapters": 12, "rubric_count": 40}',
      response: '{"status": "PUBLISHED", "transcoded_resolutions": ["1080p", "720p", "480p_offline"], "storage_key": "s3://moes-lectures/2026/cyc"}',
      tiers: [
        { name: 'Tier 1: Client Ingestion', tech: 'Flutter Desktop Studio', logo: 'flutter', action: 'Uploads video chunks with resumable HTTP protocol and localized metadata validation', latency: '0ms' },
        { name: 'Tier 2: Gateway & Security', tech: 'FastAPI Asynchronous Gateway', logo: 'fastapi', action: 'Directs multipart media stream to secure object storage gateway with signed credentials', latency: '+18ms' },
        { name: 'Tier 3: AI/ML Engine', tech: 'Python Indexing Engine', logo: 'python', action: 'Extracts scientific lecture transcripts, tags key meteorological entities (NWP, Radar)', latency: '+84ms' },
        { name: 'Tier 4: Relational Persistence', tech: 'PostgreSQL 16 & S3 Vault', logo: 'postgres', action: 'Indexes lesson schema, stores question bank rubrics, links prerequisite syllabus trees', latency: '+22ms' },
        { name: 'Tier 5: Cloud Orchestration', tech: 'Docker Swarm / MeitY Cloud', logo: 'docker', action: 'Generates CDN cache keys, dispatches notification to 210 field observatories', latency: '+15ms' },
      ],
      totalLatency: '139ms (Accelerated Media Pipeline)'
    },
    {
      id: 'tna-scan',
      title: 'Directorate National TNA Readiness Heatmap Scan',
      endpoint: 'GET /api/v1/analytics/tna-readiness-matrix',
      payload: '{"region": "ALL_INDIA", "aggregation": "STATION_VECTOR", "include_historical": true}',
      response: '{"total_stations": 210, "readiness_index": 88.2, "critical_deficits": 0, "ai_trainer_matches": 48}',
      tiers: [
        { name: 'Tier 1: Client Ingestion', tech: 'Flutter Executive Portal', logo: 'flutter', action: 'Renders GPU-accelerated national GIS map with real-time station pin clustering', latency: '0ms' },
        { name: 'Tier 2: Gateway & Security', tech: 'FastAPI Microservice Proxy', logo: 'fastapi', action: 'Authorizes Super Admin scope, inspects security audit logs, checks Redis cache layer', latency: '+8ms' },
        { name: 'Tier 3: AI/ML Engine', tech: 'Python Vector Matcher', logo: 'python', action: 'Computes cosine-similarity matrix between faculty domain badges and regional deficits', latency: '+42ms' },
        { name: 'Tier 4: Relational Persistence', tech: 'PostgreSQL 16 Read Replica', logo: 'postgres', action: 'Executes analytical window queries over 2,840 user competency vectors in parallel', latency: '+16ms' },
        { name: 'Tier 5: Cloud Orchestration', tech: 'Docker Swarm / NIC Cloud', logo: 'docker', action: 'Compiles audit-ready compliance export compliant with Mission Karmayogi directives', latency: '+11ms' },
      ],
      totalLatency: '77ms (Sub-100ms Executive Query)'
    }
  ];

  const currentScenario = pipelineScenarios[activePipelineScenario];

  const runPipelineTrace = () => {
    setPipelineTracing(true);
    setTraceCompleted(false);
    setTimeout(() => {
      setPipelineTracing(false);
      setTraceCompleted(true);
    }, 1200);
  };

  const renderOfficialLogo = (name: string, className = 'w-7 h-7') => {
    const normalized = name.toUpperCase();
    if (normalized.includes('FLUTTER')) {
      return <FlutterLogo className={className} />;
    }
    if (normalized.includes('FASTAPI')) {
      return <FastAPILogo className={className} />;
    }
    if (normalized.includes('PYTHON') || normalized.includes('AI / ML')) {
      return <PythonLogo className={className} />;
    }
    if (normalized.includes('POSTGRESQL')) {
      return <PostgreSQLLogo className={className} />;
    }
    if (normalized.includes('DOCKER')) {
      return <DockerLogo className={className} />;
    }
    if (normalized.includes('GIT')) {
      return <GitAndGitHubLogo className="h-6" />;
    }
    return <Server className={`${className} text-orange-600`} />;
  };

  return (
    <section id="technology" className="py-24 bg-white text-slate-900 border-b border-orange-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-700 font-extrabold mb-3 bg-orange-100/80 px-3.5 py-1.5 rounded-full border border-orange-200 shadow-xs">
            <Cpu className="w-3.5 h-3.5 text-orange-600" />
            <span>High-Performance System Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 uppercase">
            TECHNOLOGY <span className="text-orange-600">ENGINE</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-balance">
            Engineered with modern, proven, and benchmarked open technologies tailored for institutional reliability, multi-device accessibility, and seamless AI integration across government infrastructure.
          </p>
        </div>

        {/* SECTION 1: EXECUTION ARCHITECTURE & END-TO-END DATA PIPELINE SIMULATOR */}
        <div className="bg-gradient-to-br from-orange-50/70 via-white to-orange-50/50 border-2 border-orange-200 rounded-3xl p-6 sm:p-10 shadow-lg shadow-orange-500/5 mb-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-orange-200 pb-6 mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-orange-700 font-extrabold mb-1">
                <Activity className="w-4 h-4 text-orange-600" />
                <span>Execution Architecture</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                End-to-End Technical Data Pipeline
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Trace how operational requests move through Client, Gateway, AI Engine, Database, and DevOps tiers.
              </p>
            </div>

            {/* Scenario Selector Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {pipelineScenarios.map((sc, idx) => (
                <button
                  key={sc.id}
                  onClick={() => {
                    setActivePipelineScenario(idx);
                    setTraceCompleted(false);
                  }}
                  className={`px-3.5 py-1.5 text-xs font-mono font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    activePipelineScenario === idx
                      ? 'bg-orange-500 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:text-orange-600 hover:bg-orange-50 border border-orange-200'
                  }`}
                >
                  Scenario 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Active Scenario Overview Bar */}
          <div className="bg-white border-2 border-orange-200 rounded-2xl p-4 sm:p-5 mb-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded">
                SIMULATING OPERATIONAL EVENT
              </span>
              <h4 className="text-base sm:text-lg font-black text-slate-900 mt-1">
                {currentScenario.title}
              </h4>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600 mt-0.5">
                <span className="text-orange-600 font-bold">{currentScenario.endpoint}</span>
                <span>·</span>
                <span className="text-emerald-700 font-semibold">{currentScenario.totalLatency}</span>
              </div>
            </div>

            <button
              onClick={runPipelineTrace}
              disabled={pipelineTracing}
              className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow-md hover:shadow-orange-500/20 flex items-center gap-2 cursor-pointer shrink-0"
            >
              {pipelineTracing ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Tracing Telemetry...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run Pipeline Trace</span>
                </>
              )}
            </button>
          </div>

          {/* 5-Tier Sequential Flow Visualizer with Official Brand Logos */}
          <div className="space-y-3">
            {currentScenario.tiers.map((tier, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTierDetail(activeTierDetail === idx ? null : idx)}
                className={`p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  pipelineTracing
                    ? 'bg-orange-100/70 border-orange-400 shadow-sm'
                    : 'bg-white border-orange-200 hover:border-orange-400'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3.5">
                    {/* Official Brand Logo Icon container */}
                    <div className="w-10 h-10 rounded-xl bg-orange-50/80 border border-orange-200 flex items-center justify-center shrink-0 shadow-xs">
                      {tier.logo === 'flutter' && <FlutterLogo className="w-5 h-5" />}
                      {tier.logo === 'fastapi' && <FastAPILogo className="w-5 h-5" />}
                      {tier.logo === 'python' && <PythonLogo className="w-5 h-5" />}
                      {tier.logo === 'postgres' && <PostgreSQLLogo className="w-5 h-5" />}
                      {tier.logo === 'docker' && <DockerLogo className="w-5 h-5" />}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-slate-900">
                          {tier.name}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                          {tier.tech}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {tier.action}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                    <span className="text-xs font-mono font-bold text-slate-700 bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200">
                      {tier.latency}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Real Telemetry Output Box */}
          {traceCompleted && (
            <div className="mt-8 p-5 bg-slate-900 text-orange-200 rounded-2xl font-mono text-xs shadow-md border border-slate-700 space-y-2 animate-in fade-in duration-200">
              <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800 text-[11px]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-orange-400" />
                  <span>LIVE EXECUTION PIPELINE TELEMETRY LOG</span>
                </div>
                <span className="text-emerald-400 font-bold">200 OK · ALL TIERS VERIFIED</span>
              </div>
              <div>
                <span className="text-slate-400">Request: </span>
                <code className="text-white">{currentScenario.payload}</code>
              </div>
              <div>
                <span className="text-slate-400">Response: </span>
                <code className="text-emerald-300">{currentScenario.response}</code>
              </div>
            </div>
          )}
        </div>

        {/* SECTION 2: 7 DETAILED TECHNOLOGY SPECIFICATION CARDS WITH OFFICIAL BRAND LOGOS */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-orange-700 font-bold block mb-1">
                Technology Specifications
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Detailed Stack Capabilities & Official Logos
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-orange-800 bg-orange-50 px-3 py-1 rounded-xl border border-orange-200">
              7 Production Layers
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_CARDS.map((tech) => (
              <div
                key={tech.name}
                className="bg-white border-2 border-orange-200 hover:border-orange-500 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Official Brand Logo Box */}
                    <div className="w-12 h-12 rounded-2xl bg-orange-50/80 border border-orange-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      {renderOfficialLogo(tech.name, 'w-7 h-7')}
                    </div>
                    <span className="text-[10px] font-mono text-orange-800 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200 font-bold">
                      {tech.badge}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold mb-1">
                    {tech.layer}
                  </div>
                  <h4 className="text-xl font-black text-slate-900 tracking-tight mb-3">
                    {tech.name}
                  </h4>

                  {/* Why Selected Box */}
                  <div className="p-3.5 rounded-xl bg-orange-50/70 border border-orange-200 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-orange-700 font-bold block mb-0.5">
                      Architectural Rationale:
                    </span>
                    <p className="text-xs text-slate-800 leading-relaxed font-semibold">
                      {tech.whySelected}
                    </p>
                  </div>

                  {/* Used For Checklist */}
                  <div className="space-y-1.5 mb-5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                      Engineered Capabilities:
                    </span>
                    {tech.usedFor.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5 stroke-[3]" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specs Footer */}
                <div className="pt-4 border-t border-orange-100 flex flex-wrap gap-1.5 font-mono text-[10px] text-slate-600 font-semibold">
                  {tech.specs.map((sp, idx) => (
                    <span key={idx} className="bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                      {sp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: "WHY THIS TECHNOLOGY STACK?" COMPARATIVE MATRIX */}
        <div className="bg-white border-2 border-orange-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-orange-700 font-bold">
              Architectural Defense
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Why This Technology Stack?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Rigorous comparative matrix contrasting our selected architecture against conventional legacy alternatives.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b-2 border-orange-200 bg-orange-50/50">
                  <th className="py-3 px-4 font-mono font-extrabold text-slate-800 uppercase">Architecture Requirement</th>
                  <th className="py-3 px-4 font-mono font-extrabold text-orange-700 uppercase">Chosen Technology</th>
                  <th className="py-3 px-4 font-mono font-extrabold text-slate-800 uppercase">Decisive Selection Factor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-100">
                {TECH_COMPARISON_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-orange-50/30 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{row.requirement}</td>
                    <td className="py-3.5 px-4 font-black text-orange-600 flex items-center gap-2">
                      <span className="w-4 h-4 shrink-0">{renderOfficialLogo(row.technology, 'w-4 h-4')}</span>
                      <span>{row.technology}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 leading-relaxed font-medium">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
