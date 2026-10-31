export interface Client {
  id: string;
  name: string;
  industry: string;
  scope: string;
  year: string;
  description: string;
  highlight: string;
  tagline: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  industry: string;
  timeframe: string;
  role: string;
  objective: string;
  challenge: string;
  strategy: string[];
  execution: {
    title: string;
    description: string;
  }[];
  results: {
    metric: string;
    label: string;
    verified: boolean;
    context: string;
  }[];
  keyLearnings: string[];
  adChannels: string[];
  campaignType: string;
  creativeFocus: string;
  isConceptual?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  skills: string[];
}

export interface ConceptualProject {
  title: string;
  clientConcept: string;
  industry: string;
  oneWeekSyllabus: string;
  strategicObjective: string;
  deliverables: string[];
}
