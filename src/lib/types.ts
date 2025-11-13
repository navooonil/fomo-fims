export interface Stat {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  client: string;
  subtitle: string;
  problem: string;
  approach: string;
  outcome: string;
  heroVideoUrl?: string;
  imageUrl: string;
  services: string[];
  stats?: Stat[];
  gallery: string[];
}

export interface Project {
  id: number;
  caseStudyId: number;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

export {}; // <-- ADD THIS
