import { portfolioCertificates } from './portfolioContent';

export type SkillCategory = 'Frontend' | 'Backend' | 'Tools & DevOps' | 'Design';
export type SkillLevel = 'Proficient' | 'Comfortable' | 'Familiar';

export interface Skill {
  name: string;
  short: string;
  category: SkillCategory;
  level: SkillLevel;
  progress: number;
  color: string;
}

export const skills: Skill[] = [
  { name: 'HTML5', short: 'H5', category: 'Frontend', level: 'Proficient', progress: 88, color: '#E34F26' },
  { name: 'CSS3', short: 'CSS', category: 'Frontend', level: 'Proficient', progress: 86, color: '#1572B6' },
  { name: 'JavaScript', short: 'JS', category: 'Frontend', level: 'Proficient', progress: 50, color: '#F7DF1E' },
  { name: 'TypeScript', short: 'TS', category: 'Frontend', level: 'Comfortable', progress: 30, color: '#3178C6' },
  { name: 'React', short: 'R', category: 'Frontend', level: 'Comfortable', progress: 78, color: '#61DAFB' },
  { name: 'Vite', short: 'V', category: 'Frontend', level: 'Comfortable', progress: 74, color: '#646CFF' },
  { name: 'Node.js', short: 'N', category: 'Backend', level: 'Familiar', progress: 5, color: '#339933' },
  { name: 'REST API', short: 'API', category: 'Backend', level: 'Comfortable', progress: 15, color: '#34C759' },
  { name: 'Git', short: 'Git', category: 'Tools & DevOps', level: 'Comfortable', progress: 76, color: '#F05032' },
  { name: 'npm', short: 'npm', category: 'Tools & DevOps', level: 'Comfortable', progress: 70, color: '#CB3837' },
  { name: 'Figma', short: 'Fig', category: 'Design', level: 'Comfortable', progress: 72, color: '#A259FF' },
  { name: 'UI/UX Basics', short: 'UX', category: 'Design', level: 'Comfortable', progress: 33, color: '#FF9500' },
];

export const radarSkills = [
  { label: 'UI/UX Design', value: 40 },
  { label: 'React Ecosystem', value: 76 },
  { label: 'Performance', value: 64 },
  { label: 'Backend', value: 5 },
  { label: 'Testing', value: 10 },
  { label: 'Architecture', value: 58 },
];

export const certificates = portfolioCertificates;
