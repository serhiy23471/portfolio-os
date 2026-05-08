export type MainAppId = 'about' | 'work' | 'projects' | 'skills' | 'terminal' | 'contact';
export type WindowId = MainAppId | `project-${string}`;
export type Theme = 'light' | 'dark';
export type Language = 'uk' | 'en';

export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface PortfolioWindow {
  id: WindowId;
  title: string;
  icon: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  position: Position;
  size: Size;
  minSize: Size;
  zIndex: number;
  projectSlug?: string;
}

export interface Toast {
  id: string;
  title: string;
  message?: string;
}

export interface TerminalEntry {
  id: string;
  type: 'input' | 'output' | 'system';
  value: string;
}
