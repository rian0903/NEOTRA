export type Service = {
  id: string;
  number: string;
  name: string;
  category: string;
  summary: string;
  capabilities: string[];
  cta: string;
  iconName: string;
};

export type WorkItem = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: number;
  summary: string;
  fullDescription: string;
  client?: string;
  role?: string;
  image?: string;
  technologies: string[];
  href?: string;
  metrics?: { label: string; value: string }[];
};

export type ProcessStep = {
  number: string;
  name: string;
  summary: string;
  details: string[];
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type TechStackItem = {
  name: string;
  category: string;
};
