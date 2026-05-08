import type { CSSProperties } from 'react';
import { FaBriefcase, FaEnvelope, FaFolder, FaRegFileCode, FaTerminal, FaTools, FaUserAlt } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import type { MainAppId, WindowId } from '../../types';

export interface AppIconConfig {
  id: MainAppId;
  title: string;
  label: string;
  Icon: IconType;
  color: string;
  background: string;
}

export const appIconConfig: AppIconConfig[] = [
  {
    id: 'about',
    title: 'About',
    label: 'About.app',
    Icon: FaUserAlt,
    color: '#7C3AED',
    background: 'linear-gradient(145deg, rgba(124, 58, 237, 0.18), rgba(124, 58, 237, 0.06))',
  },
  {
    id: 'work',
    title: 'Work',
    label: 'Work.app',
    Icon: FaBriefcase,
    color: '#B45309',
    background: 'linear-gradient(145deg, rgba(180, 83, 9, 0.2), rgba(180, 83, 9, 0.07))',
  },
  {
    id: 'skills',
    title: 'Skills',
    label: 'Skills.app',
    Icon: FaTools,
    color: '#0F766E',
    background: 'linear-gradient(145deg, rgba(15, 118, 110, 0.18), rgba(15, 118, 110, 0.06))',
  },
  {
    id: 'contact',
    title: 'Contact',
    label: 'Contact.app',
    Icon: FaEnvelope,
    color: '#2563EB',
    background: 'linear-gradient(145deg, rgba(37, 99, 235, 0.18), rgba(37, 99, 235, 0.06))',
  },
  {
    id: 'projects',
    title: 'Projects',
    label: 'Projects/',
    Icon: FaFolder,
    color: '#D97706',
    background: 'linear-gradient(145deg, rgba(217, 119, 6, 0.22), rgba(217, 119, 6, 0.08))',
  },
  {
    id: 'terminal',
    title: 'Terminal',
    label: 'Terminal.app',
    Icon: FaTerminal,
    color: '#16A34A',
    background: 'linear-gradient(145deg, rgba(22, 163, 74, 0.18), rgba(22, 163, 74, 0.06))',
  },
];

export const projectIconConfig: Omit<AppIconConfig, 'id' | 'label' | 'title'> = {
  Icon: FaRegFileCode,
  color: '#38BDF8',
  background: 'linear-gradient(145deg, rgba(56, 189, 248, 0.18), rgba(56, 189, 248, 0.06))',
};

export function getAppIconConfig(id: WindowId) {
  if (id.startsWith('project-')) return projectIconConfig;
  return appIconConfig.find((app) => app.id === id) ?? projectIconConfig;
}

export function getIconStyle(app: Pick<AppIconConfig, 'color' | 'background'>) {
  return {
    '--app-icon-color': app.color,
    '--app-icon-background': app.background,
  } as CSSProperties;
}

export function getWindowIconStyle(id: WindowId) {
  const app = getAppIconConfig(id);
  return {
    '--app-icon-color': app.color,
  } as CSSProperties;
}
