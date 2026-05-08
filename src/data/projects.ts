import { portfolioProjects } from './portfolioContent';

export type ProjectCategory = 'web' | 'ui' | 'open-source';

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  stars: number;
  forks: number;
  demoUrl: string;
  codeUrl: string;
  caseStudyUrl?: string;
  accent: string;
  imageUrl?: string;
}

export const projects: Project[] = portfolioProjects;
