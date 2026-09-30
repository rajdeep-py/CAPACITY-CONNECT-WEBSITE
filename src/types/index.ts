export type RoleType = 'trainee' | 'trainer' | 'admin';

export interface EcosystemNode {
  id: string;
  name: string;
  role: RoleType | 'platform';
  subtitle: string;
  description: string;
  items: string[];
  color: string;
  accent: string;
}

export interface DataExchangeItem {
  source: string;
  target: string;
  payload: string[];
  frequency: string;
  direction: 'bidirectional' | 'outgoing' | 'incoming';
  description: string;
}

export interface ModuleInfo {
  id: RoleType;
  title: string;
  tagline: string;
  purpose: string;
  features: string[];
  coreOutput: string;
  color: string;
  iconName: string;
}

export interface TechCardInfo {
  name: string;
  layer: string;
  usedFor: string[];
  whySelected: string;
  badge: string;
  specs: string[];
}

export interface ProblemItem {
  number: string;
  title: string;
  description: string;
  impact: string;
}

export interface ImpactColumn {
  role: string;
  tagline: string;
  benefits: string[];
  impactStatement: string;
}
