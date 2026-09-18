export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  tag: string;
  iconName: 'Share2' | 'Palette' | 'Compass';
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  detail: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  tagline: string;
  badge: string;
  location: string;
  industry: string;
  year: string;
  overview: string;
  objectives: string[];
  strategy: {
    title: string;
    points: string[];
  };
  execution: {
    title: string;
    points: string[];
  };
  results: CaseStudyMetric[];
  instagramHandle: string;
  instagramStats: {
    posts: number;
    followers: string;
    following: number;
  };
}

export interface StrategyPillar {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  icon: 'BookOpen' | 'HeartHandshake' | 'Sparkles' | 'Users';
  examples: string[];
  percentage: string;
}

export interface ContentExecutionItem {
  id: string;
  category: string;
  title: string;
  description: string;
  aspect: string;
  tag: string;
  imageKey: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  deliverables: string[];
  imageKey: string;
  aspectRatio?: string;
  featured?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}
