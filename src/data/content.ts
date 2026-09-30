export interface RiskMitigationItem {
  id: string;
  number: string;
  riskTitle: string;
  riskSeverity: 'Critical' | 'High' | 'Moderate';
  riskDescription: string;
  mitigationTitle: string;
  mitigationStrategy: string;
  concreteBenefit: string;
}

export interface EcosystemStep {
  stepNumber: number;
  title: string;
  activeNodes: string[];
  activePath: string;
  directionLabel: string;
  actionSummary: string;
  dataTransferred: string[];
  systemOutcome: string;
}

export interface RolePlan {
  id: 'trainee' | 'trainer' | 'admin';
  planName: string;
  codeName: string;
  tierBadge: string;
  tagline: string;
  primaryUsers: string;
  dataThroughput: string;
  coreResponsibilities: string[];
  architectureScope: string[];
  outputArtifact: string;
  slaTarget: string;
}

export const RISKS_AND_MITIGATIONS: RiskMitigationItem[] = [
  {
    id: 'risk-1',
    number: '01',
    riskTitle: 'Fragmented Learning Silos',
    riskSeverity: 'Critical',
    riskDescription: 'Training resources, technical guides, radar manuals, and lecture recordings are dispersed across isolated drives, email attachments, and ad-hoc FTP portals without central cataloging.',
    mitigationTitle: 'Unified Multi-Tenant Digital Learning Hub',
    mitigationStrategy: 'Deploy a single centralized digital portal with standardized taxonomy, role-based resource access, and unified syllabus governance across all national observatories.',
    concreteBenefit: 'Eliminates redundant training creation, ensures 100% curriculum compliance, and guarantees instant access for remote field stations.'
  },
  {
    id: 'risk-2',
    number: '02',
    riskTitle: 'Opaque Workforce Competencies',
    riskSeverity: 'Critical',
    riskDescription: 'Divisional directors lack verified real-time visibility into the exact skill proficiencies, scientific specializations, and operational readiness of station meteorologists.',
    mitigationTitle: 'Dynamic Competency Vector Matrix & Digital Skill Passport',
    mitigationStrategy: 'Map every trainee to an immutable multi-tier competency passport updated in real time through standardized formative assessments, practical labs, and certifications.',
    concreteBenefit: 'Enables objective evaluation of operational readiness with zero ambiguity during critical meteorological events.'
  },
  {
    id: 'risk-3',
    number: '03',
    riskTitle: 'Trainer-Curriculum Mismatch & Discovery Gaps',
    riskSeverity: 'High',
    riskDescription: 'Faculty assignment often relies on manual availability rather than verified subject-matter competency vectors, leading to suboptimal instructional quality.',
    mitigationTitle: 'Algorithmic Competency-Based Trainer Matching Engine',
    mitigationStrategy: 'Implement vector cosine-similarity algorithms in Python that match instructor research publications, verified skill badges, and past ratings against specific curriculum needs.',
    concreteBenefit: 'Guarantees the most qualified domain specialists are automatically deployed to train high-priority cohorts.'
  },
  {
    id: 'risk-4',
    number: '04',
    riskTitle: 'Institutional Knowledge Drain on Retirement',
    riskSeverity: 'High',
    riskDescription: 'When senior meteorologists, radar engineers, and forecasting directors retire or transfer, their tacit domain knowledge, operational heuristics, and case study SOPs are permanently lost.',
    mitigationTitle: 'Perpetual Digital Knowledge Hub & Reusable Artifact Vault',
    mitigationStrategy: 'Mandate digital lecture capture, indexed slide decks, Python research notebooks, and operational SOP archiving within a searchable institutional repository.',
    concreteBenefit: 'Transforms perishable individual expertise into enduring, searchable organizational assets for future generations.'
  },
  {
    id: 'risk-5',
    number: '05',
    riskTitle: 'Uninformed Training Needs Allocation',
    riskSeverity: 'High',
    riskDescription: 'Capacity building budgets and course schedules are traditionally established via annual estimates without empirical data on actual divisional skill deficits.',
    mitigationTitle: 'Live Divisional Readiness Heatmaps & Empirical TNA',
    mitigationStrategy: 'Aggregate granular examination telemetry across all divisions into macro-level regional readiness heatmaps, driving automated Training Needs Assessment (TNA).',
    concreteBenefit: 'Aligns training budgets directly to verified vulnerabilities, maximizing institutional return on training investment.'
  },
  {
    id: 'risk-6',
    number: '06',
    riskTitle: 'Stagnant Post-Course Trajectory',
    riskSeverity: 'Moderate',
    riskDescription: 'Conventional LMS implementations terminate upon course completion, offering no ongoing reinforcement, progressive mastery pathways, or longitudinal tracking.',
    mitigationTitle: 'Closed-Loop Cybernetic Feedback Architecture',
    mitigationStrategy: 'Assessment outcomes immediately update individual competency graphs, triggering automated personalized micro-learning recommendations and refresher cycles.',
    concreteBenefit: 'Sustains progressive career mastery and prevents skill atrophy among operational forecasting personnel.'
  }
];

export const ECOSYSTEM_STEPS: EcosystemStep[] = [
  {
    stepNumber: 1,
    title: 'Trainee Engagement & Competency Action',
    activeNodes: ['trainee'],
    activePath: 'trainee-to-core',
    directionLabel: 'TRAINEE → CORE PLATFORM',
    actionSummary: 'The trainee attends interactive lecture modules, completes numerical weather prediction simulation exercises, and submits timed assessment questionnaires.',
    dataTransferred: [
      'Authentication Session & Station Telemetry',
      'Course Module Progress & Video Completion Rates',
      'Granular Quiz Responses & Time-per-Question Metrics',
      'Self-Reported Domain Interests & Feedback'
    ],
    systemOutcome: 'Generates structured learner behavioral telemetry that is instantly dispatched to the Core Platform Assessment Engine.'
  },
  {
    stepNumber: 2,
    title: 'Core Platform Ingestion, Scoring & Competency Update',
    activeNodes: ['platform'],
    activePath: 'core-processing',
    directionLabel: 'CORE PLATFORM ENGINE PROCESSING',
    actionSummary: 'The Core Platform receives the raw assessment results, computes psychometric metrics, updates the trainee’s dynamic Skill Vector, and checks benchmark thresholds.',
    dataTransferred: [
      'Assessment Scoring & Normalized Grading',
      'Dynamic Competency Matrix Re-calculation',
      'Skill Gap Detection against National Standards',
      'Cryptographic Digital Certificate Generation'
    ],
    systemOutcome: 'The trainee’s Skill Passport reflects verified mastery or flags specific remedial prerequisites for upcoming courses.'
  },
  {
    stepNumber: 3,
    title: 'Trainer Diagnostic Telemetry & Curriculum Refinement',
    activeNodes: ['trainer', 'platform'],
    activePath: 'core-to-trainer',
    directionLabel: 'CORE PLATFORM ⇄ TRAINER',
    actionSummary: 'Faculty members receive automated cohort diagnostics highlighting low-scoring modules, at-risk trainees, and high-difficulty examination questions.',
    dataTransferred: [
      'Cohort Performance Spread & At-Risk Trainee Alerts',
      'Item-Response Psychometric Difficulty Breakdown',
      'Trainer Updates: Revised Question Banks & Uploaded SOPs',
      'Updated Lecture Recordings & Supplemental Datasets'
    ],
    systemOutcome: 'Instructors immediately refine instructional delivery and release targeted remedial materials to support struggling learners.'
  },
  {
    stepNumber: 4,
    title: 'Admin Directorate Strategic Intelligence & AI Matching',
    activeNodes: ['admin', 'platform'],
    activePath: 'core-to-admin',
    directionLabel: 'CORE PLATFORM ⇄ ADMIN',
    actionSummary: 'Aggregated divisional telemetry feeds real-time regional skill heatmaps. Headquarters identifies institutional deficits and uses AI to deploy optimal faculty.',
    dataTransferred: [
      'Regional Meteorological Station Readiness Indices',
      'Cross-Division Skill Gaps & Critical Shortage Alerts',
      'Cosine-Similarity Algorithmic Trainer Match Recommendations',
      'Directorate Course Authorizations & Training Calendars'
    ],
    systemOutcome: 'Management makes data-driven strategic decisions, approving targeted courses and matching subject-matter experts to regional deficits.'
  },
  {
    stepNumber: 5,
    title: 'Closed-Loop Propagation & Targeted Delivery',
    activeNodes: ['trainee', 'trainer', 'admin', 'platform'],
    activePath: 'closed-loop',
    directionLabel: 'ECOSYSTEM SYNCHRONIZATION ↺',
    actionSummary: 'The newly approved targeted curriculum is dispatched directly into the trainee’s personalized dashboard, completing the cybernetic continuous improvement cycle.',
    dataTransferred: [
      'Automated Recommended Course Enrollment Prompts',
      'Personalized Learning Pathway Updates',
      'Directorate Policy Circulars & Compliance Directives',
      'Longitudinal Organizational Capacity Elevation Metrics'
    ],
    systemOutcome: 'Individual skill growth directly elevates institutional forecasting accuracy, establishing a self-sustaining national capacity engine.'
  }
];

export const ROLE_PLANS: RolePlan[] = [
  {
    id: 'trainee',
    planName: 'OPERATIONAL TRAINEE BLUEPRINT',
    codeName: 'PLAN T-01 · LEARNER SPECIFICATION',
    tierBadge: 'End-User Tier',
    tagline: 'Personalized Skill Acquisition & Verifiable Milestones',
    primaryUsers: 'Station Meteorologists, Radar Observers, Scientific Assistants, Modellers',
    dataThroughput: 'High-frequency telemetry (quiz submissions, course progress, lab scores)',
    coreResponsibilities: [
      'Active participation in structured curriculum and self-paced multimedia modules',
      'Validation of operational competence through objective time-bound assessments',
      'Maintenance of continuous digital skill passport and station qualification badges',
      'Submission of bidirectional instructional quality and curriculum feedback'
    ],
    architectureScope: [
      'Digital Skill Passport with Multi-Tier Competency Vectors',
      'Interactive Course Catalogue with Prerequisite Verification',
      'High-Definition Lecture Streamer with Offline Sync Support',
      'Automated Remedial Pathway Recommendations Engine',
      'Tamper-Evident Digitally Signed Certification Vault'
    ],
    outputArtifact: 'Validated competency telemetry and certified operational qualification records.',
    slaTarget: '< 200ms assessment scoring latency & instant competency recalculation.'
  },
  {
    id: 'trainer',
    planName: 'FACULTY & INSTRUCTOR BLUEPRINT',
    codeName: 'PLAN F-02 · INSTRUCTOR SPECIFICATION',
    tierBadge: 'Authoring & Diagnostic Tier',
    tagline: 'Curriculum Authoring, Diagnostic Telemetry & Cohort Guidance',
    primaryUsers: 'Senior Scientific Officers, Research Specialists, Guest Academics, IMD Faculty',
    dataThroughput: 'Medium-frequency batch updates (curriculum authoring, video upload, grading keys)',
    coreResponsibilities: [
      'Modular curriculum creation conforming to national meteorological standards',
      'Authoring rigorous question banks with psychometrically calibrated rubrics',
      'Real-time monitoring of learner progression and proactive at-risk intervention',
      'Continuous iteration of lecture archives, scientific notebooks, and SOP manuals'
    ],
    architectureScope: [
      'Multi-Format Course Builder (Video, Jupyter Notebooks, Datasets, PDFs)',
      'Intelligent Questionnaire & Rubric Authoring Suite',
      'Real-Time Cohort Diagnostics & Early Warning Drop-Off Matrix',
      'Trainer Library with Reusable Educational Knowledge Artifacts',
      'Verified Instructor Domain Competency Portfolio'
    ],
    outputArtifact: 'Standardized instructional media, evaluative rubrics, and learner performance diagnostics.',
    slaTarget: '70% reduction in instructor administrative grading workload.'
  },
  {
    id: 'admin',
    planName: 'DIRECTORATE & GOVERNANCE BLUEPRINT',
    codeName: 'PLAN A-03 · GOVERNANCE SPECIFICATION',
    tierBadge: 'Strategic & Policy Tier',
    tagline: 'Macro Capacity Planning, AI Faculty Matching & Policy Steering',
    primaryUsers: 'HQ Capacity Building Directorate, Divisional Chiefs, HR Strategists, Evaluators',
    dataThroughput: 'Aggregated analytical feeds, compliance logs, and policy broadcast events',
    coreResponsibilities: [
      'Institutional user identity verification, station assignment, and role governance',
      'Standardization, formal approval, and lifecycle auditing of national course syllabi',
      'Algorithmic matching of specialized trainers to verified departmental skill deficits',
      'Annual Training Needs Assessment (TNA) allocation based on empirical metrics'
    ],
    architectureScope: [
      'Fine-Grained Role-Based Access Control (RBAC) & Identity Auditing',
      'Interactive Cross-Station Competency Heatmap & Gap Analytics Console',
      'AI-Powered Vector Cosine-Similarity Trainer Matching Engine',
      'Annual Training Calendar & Resource Planning Workbench',
      'Automated Audit Trail Generation Compliant with NIC & MeitY Standards'
    ],
    outputArtifact: 'Evidence-based capacity building directives, audit reports, and strategic faculty allocations.',
    slaTarget: 'Real-time visibility across 100% of meteorological observatories and institutes.'
  }
];

export const MODULES_DETAILED = [
  {
    id: 'trainee' as const,
    title: 'MODULE 01 — TRAINEE',
    tagline: 'Learn, assess and develop competencies.',
    purpose: 'Empowers every individual in the organization to navigate structured learning paths, validate their practical proficiency through assessments, and maintain an immutable record of certified competencies.',
    features: [
      'Professional Profile with Academic & Station Postings',
      'Digital Skill Passport with Multi-Tier Badges',
      'Interactive Competency Matrix with Benchmark Targets',
      'Role-Filtered Course Catalogue & Guided Search',
      'Frictionless Course Enrollment & Waitlist Management',
      'Multimedia Learning Resources (Video, PDF, Datasets)',
      'Adaptive Learning Paths with Prerequisite Gating',
      'Time-Bound Assessments & Real-Time Scoring',
      'Detailed Performance Analytics & Gap Highlights',
      'Cryptographically Verifiable Certificates',
      'Bi-Directional Course & Trainer Feedback',
      'Central Knowledge Hub & Searchable Lecture Archive'
    ],
    coreOutput: 'Learner competency records and structured learning data',
    color: 'orange',
    iconName: 'GraduationCap'
  },
  {
    id: 'trainer' as const,
    title: 'MODULE 02 — TRAINER',
    tagline: 'Create, deliver and monitor training.',
    purpose: 'Equips internal domain experts and guest faculty with intuitive tools to digitize specialized knowledge, design rigorous evaluations, and monitor student progression in real time.',
    features: [
      'Verified Subject-Matter Trainer Profile',
      'Domain Expertise & Research Taxonomy Mapping',
      'Published Competency Portfolio & Past Ratings',
      'Modular Course & Curriculum Creation Suite',
      'Lifecycle Course Scheduling & Cohort Management',
      'Multi-Format Questionnaire & Rubric Builder',
      'Automated & Manual Grading Workflows',
      'Trainer Library for Reusable Knowledge Artifacts',
      'High-Definition Lecture Video & Audio Uploads',
      'Presentation Slides, Jupyter Notebooks & PDF Packs',
      'Operational Datasets & Case Study Repository',
      'Real-Time Trainee Progress & Drop-Off Alerts',
      'Comprehensive Cohort Performance Analytics'
    ],
    coreOutput: 'Training content + trainer competency + learner performance data',
    color: 'orange',
    iconName: 'BookOpenCheck'
  },
  {
    id: 'admin' as const,
    title: 'MODULE 03 — ADMIN',
    tagline: 'Manage, analyze and optimize organizational capacity building.',
    purpose: 'Gives headquarters, HR directors, and scientific leadership centralized oversight to identify capability deficits, deploy optimal instructional talent, and measure training ROI.',
    features: [
      'Institutional User Onboarding & Identity Approval',
      'Fine-Grained Role-Based Access Control (RBAC)',
      'Curriculum Standardisation & Course Governance',
      'Centralized Assessment & Evaluation Auditing',
      'Competency Framework & Taxonomy Customization',
      'Departmental & Station-Level Skill Gap Analysis',
      'Algorithmic Trainer Matching by Domain & Rating',
      'Annual Training Calendar & Resource Planning',
      'Live Departmental Readiness Heatmaps',
      'Cross-Division Participation & Completion Benchmarks',
      'Digital Certificate Issuance & Validation Authority',
      'Broadcast Announcements, Directives & Notices',
      'Comprehensive Executive Reports & Exportable Audits',
      'Training Impact & Operational Efficiency Metrics',
      'Historical Training Trend Analysis & Projections'
    ],
    coreOutput: 'Organizational intelligence and evidence-based training decisions',
    color: 'orange',
    iconName: 'ShieldCheck'
  }
];

export const TECH_CARDS = [
  {
    name: 'FLUTTER',
    layer: 'Application Layer',
    badge: 'Cross-Platform UI',
    usedFor: [
      'Single codebase for Android, iOS, and Web deployment',
      'High-performance 60fps responsive UI across form factors',
      'Consistent design system matching national digital standards',
      'Offline-capable learning module caching for remote stations'
    ],
    whySelected: 'Single codebase + cross-platform accessibility with native execution performance across desktop workstations and field tablets.',
    specs: ['Dart 3.x', 'Flutter Web & Mobile', 'State: Riverpod/Bloc', 'Material 3 Design']
  },
  {
    name: 'FASTAPI',
    layer: 'API & Business Logic Layer',
    badge: 'High-Throughput REST APIs',
    usedFor: [
      'High-speed asynchronous REST endpoints',
      'OAuth2 / JWT stateless authentication & RBAC middleware',
      'Course scheduling, enrollment & assessment engines',
      'Native OpenAPI (Swagger) documentation generation'
    ],
    whySelected: 'High-performance Python backend + effortless native integration with Python AI/ML models without IPC serialization overhead.',
    specs: ['Python 3.11+', 'Pydantic v2 validation', 'Starlette async engine', 'Uvicorn ASGI']
  },
  {
    name: 'POSTGRESQL',
    layer: 'Data Storage Layer',
    badge: 'Enterprise Relational DB',
    usedFor: [
      'ACID-compliant storage of users, credentials, and audit logs',
      'Hierarchical course taxonomies, modules, and lessons',
      'Normalized competency matrix, skill vectors, and benchmarks',
      'Historical assessment scores, certifications, and analytics'
    ],
    whySelected: 'Reliable, battle-tested relational database with JSONB support, row-level security, and unmatched data integrity for government records.',
    specs: ['PostgreSQL 16', 'TimescaleDB / JSONB', 'pg_trgm for search', 'Connection Pooling']
  },
  {
    name: 'PYTHON AI / ML ENGINE',
    layer: 'Intelligence & Analytics Layer',
    badge: 'Decision Intelligence',
    usedFor: [
      'Automated competency gap clustering and classification',
      'Cosine-similarity algorithm for trainer-to-course matching',
      'Personalized course recommendation engine for trainees',
      'Natural Language Processing (NLP) of feedback and assessments'
    ],
    whySelected: 'Mature, production-grade ecosystem leveraging NumPy, Pandas, Scikit-learn, and HuggingFace for rapid analytical intelligence without vendor lock-in.',
    specs: ['Scikit-learn', 'NumPy & Pandas', 'Sentence-Transformers', 'Vector Embeddings']
  },
  {
    name: 'DOCKER',
    layer: 'Containerization & Orchestration Layer',
    badge: 'DevOps & Portability',
    usedFor: [
      'Hermetic containerization of backend, frontend web, and DB',
      'Reproducible microservice builds across dev, staging, and prod',
      'Horizontal auto-scaling under peak exam or enrollment load',
      'Zero-downtime rolling updates and isolated environment sandbox'
    ],
    whySelected: 'Guaranteed portability, enterprise cloud/on-premise deployment agility, and complete environment isolation.',
    specs: ['Multi-stage Dockerfiles', 'Docker Compose', 'Kubernetes-ready', 'Minimal Alpine images']
  },
  {
    name: 'GIT + GITHUB',
    layer: 'Version Control & Governance Layer',
    badge: 'Collaboration & CI/CD',
    usedFor: [
      'Complete commit history, branch governance, and peer reviews',
      'Automated CI/CD pipelines for linting, testing, and deployment',
      'Issue tracking, milestone coordination, and agile sprint boards',
      'Strict change auditing compliant with government ICT standards'
    ],
    whySelected: 'Industry-standard version control ensuring full transparency, code auditability, and synchronized multi-engineer collaboration.',
    specs: ['GitHub Actions CI/CD', 'Branch Protection Rules', 'Semantic Versioning', 'Automated Testing']
  },
  {
    name: 'SECURE CLOUD / OBJECT STORAGE',
    layer: 'Knowledge & Media Layer',
    badge: 'Content Delivery',
    usedFor: [
      'Encrypted storage of high-definition recorded scientific lectures',
      'Secure distribution of research slide decks, SOPs, and manuals',
      'Cryptographically signed certificate generation and PDF storage',
      'Resumable chunked uploads for bandwidth-constrained stations'
    ],
    whySelected: 'Cost-effective, highly durable storage with signed URL access controls ensuring proprietary government educational assets remain secure.',
    specs: ['S3-compatible / MinIO', 'AES-256 Server Encryption', 'Presigned URLs', 'CDN Acceleration']
  }
];

export const TECH_COMPARISON_MATRIX = [
  {
    requirement: 'Cross-Platform Accessibility',
    technology: 'Flutter (Dart)',
    reason: 'Single codebase powers web portal, Android tablets, and iOS devices with zero feature disparity.'
  },
  {
    requirement: 'Backend Performance & AI Bridge',
    technology: 'FastAPI (Python)',
    reason: 'Asynchronous event loop yields 15,000+ req/sec while sharing memory directly with PyTorch/Scikit-learn.'
  },
  {
    requirement: 'Structured Institutional Data',
    technology: 'PostgreSQL',
    reason: 'Rigid relational schema guarantees audit trails, zero record corruption, and ACID transaction security.'
  },
  {
    requirement: 'Competency & Trainer Matching',
    technology: 'Scikit-learn & Python ML',
    reason: 'Vectorized mathematical models match trainer competencies to curriculum requirements transparently.'
  },
  {
    requirement: 'Deployment Portability',
    technology: 'Docker & Compose',
    reason: 'Runs identical containers whether hosted on National Informatics Centre (NIC) cloud or on-prem servers.'
  },
  {
    requirement: 'Team Governance & CI/CD',
    technology: 'Git & GitHub Actions',
    reason: 'Enforces automated test passing, security vulnerability scanning, and auditable code reviews.'
  }
];

export const IMPACT_COLUMNS = [
  {
    role: 'Trainee',
    tagline: 'Continuous Professional Evolution',
    benefits: [
      'Personalized learning pathways tailored to operational roles',
      'Clear, unhindered visibility into individual competency ratings',
      'Automated skill-gap identification with targeted remedial suggestions',
      'Structured learning paths avoiding informational overload',
      'Frictionless 24/7 access to recorded lectures & technical manuals',
      'Continuous formative assessments with instant benchmark feedback',
      'Immutable digital certifications accelerating career advancement',
      'Equitable skill recognition across remote and central posts'
    ],
    impactStatement: 'Cultivates a continuously advancing, self-driven, and highly specialized operational workforce.'
  },
  {
    role: 'Trainer',
    tagline: 'Measurable Instructional Excellence',
    benefits: [
      'Centralized authoring workbench replacing fragmented email distributions',
      'Rapid question bank creation with automated psychometric scoring',
      'Reusable trainer library preventing repetitive content preparation',
      'Granular cohort diagnostic views highlighting struggling trainees',
      'Real-time feedback mechanisms informing iterative curriculum refinement',
      'National institutional recognition based on verifiable trainer ratings',
      'Streamlined grading reducing administrative burden by over 70%'
    ],
    impactStatement: 'Transforms passive instruction into measurable, high-impact capacity building.'
  },
  {
    role: 'Admin & Directorate',
    tagline: 'Evidence-Based Strategic Governance',
    benefits: [
      'Single-pane-of-glass governance across all training institutes and divisions',
      'Live organizational skill heatmaps revealing operational vulnerabilities',
      'Instantaneous trainer matching optimizing specialized faculty deployment',
      'Scientific Training Needs Assessment (TNA) informed by empirical data',
      'Real-time tracking of institutional compliance and mandatory certifications',
      'Measurable ROI on capacity-building investments and budget allocations',
      'Standardized national curriculum aligned with Ministry mandates'
    ],
    impactStatement: 'Empowers leadership to transition from intuition-driven scheduling to data-driven strategic capacity building.'
  }
];

export const ORGANIZATIONAL_IMPACT_CHAIN = [
  { step: '01', title: 'Centralized Learning', desc: 'Unified digital portal eliminates fragmented silos across departments and institutes.' },
  { step: '02', title: 'Better Knowledge Access', desc: 'Democratized 24/7 availability of lectures, research papers, and technical SOPs.' },
  { step: '03', title: 'Measurable Competency Development', desc: 'Continuous testing maps raw learning to quantifiable skill scores.' },
  { step: '04', title: 'Targeted Training', desc: 'Interventions address specific verified gaps instead of generic blanket courses.' },
  { step: '05', title: 'Better Trainer Utilization', desc: 'Subject experts are automatically paired with cohorts requiring their exact niche.' },
  { step: '06', title: 'Stronger Workforce', desc: 'Officers achieve verifiable operational readiness and up-to-date technical mastery.' },
  { step: '07', title: 'Enhanced Organizational Capacity', desc: 'The entire ministry operates with heightened resilience, speed, and analytical precision.' }
];

export const KEY_DIFFERENTIATORS = [
  {
    number: '01',
    title: 'Competency-Centric Architecture',
    description: 'Transcends traditional LMS models that merely log video watch-time. Capacity Connect quantifies skill acquisition through verifiable competency matrix benchmarks.'
  },
  {
    number: '02',
    title: 'Three-Way Connected Ecosystem',
    description: 'Eliminates one-directional broadcasts. Trainee actions inform Trainer curricula, Trainer metrics inform Admin resource allocation, and Admin strategies dictate Trainee pathways.'
  },
  {
    number: '03',
    title: 'Algorithmic Trainer Matching',
    description: 'Utilizes mathematical competency vectors to match instructors with training deficits, ensuring subject-matter experts are deployed where their impact is maximized.'
  },
  {
    number: '04',
    title: 'Organizational Skill Intelligence',
    description: 'Synthesizes thousands of granular test results into macro-level departmental heatmaps, giving directorates proactive foresight into institutional knowledge risks.'
  },
  {
    number: '05',
    title: 'Closed-Loop Continuous Feedback',
    description: 'Every completed assessment, learner rating, and course outcome directly updates the knowledge graph, perpetually improving subsequent instructional cycles.'
  },
  {
    number: '06',
    title: 'Cross-Platform & Scalable Engineering',
    description: 'Engineered with Flutter, FastAPI, and Docker for resilient deployment across desktop workstations, mobile tablets, and intermittent rural network conditions.'
  }
];

export const SECURITY_FEATURES = [
  {
    title: 'Role-Based Access Control (RBAC)',
    description: 'Strict cryptographic separation of Trainee, Trainer, and Admin operational privileges preventing unauthorized curriculum or score tampering.'
  },
  {
    title: 'End-to-End Encrypted Transport',
    description: 'All transit data is secured via TLS 1.3 with HSTS headers, protecting sensitive government training records and evaluation rubrics.'
  },
  {
    title: 'Stateless JWT & Secure Sessions',
    description: 'Cryptographically signed JSON Web Tokens with short expiry windows and secure HTTP-only cookie storage.'
  },
  {
    title: 'Immutable Audit Logging',
    description: 'Every grade change, course authorization, and user permission modification is irreversibly logged with timestamp and origin IP.'
  }
];

export const SCALABILITY_FEATURES = [
  {
    title: 'Dockerized Microservice Topology',
    description: 'Independent container scaling allows assessment compute clusters to scale seamlessly during nationwide testing cycles without affecting video streaming.'
  },
  {
    title: 'Asynchronous Event Handling',
    description: 'FastAPI async workers process concurrent file uploads, score calculations, and notification dispatches without blocking HTTP I/O.'
  },
  {
    title: 'Optimized PostgreSQL Indexing',
    description: 'B-tree and GiST indexing across user competencies, course codes, and assessment timestamps ensures sub-20ms query latency across millions of records.'
  },
  {
    title: 'Bandwidth-Adaptive Content Delivery',
    description: 'Client-side caching and dynamic bitrate transcoding support seamless access for remote meteorological observatories and field stations.'
  }
];
