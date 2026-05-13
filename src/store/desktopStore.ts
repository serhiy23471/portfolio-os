import { create } from 'zustand';
import { projects } from '../data/projects';
import type { Language, PortfolioWindow, Position, Size, TerminalEntry, Theme, Toast, WindowId } from '../types';
import { playSystemSound } from '../utils/sounds';

const THEME_STORAGE_KEY = 'portfolio-os-theme';
const LANGUAGE_STORAGE_KEY = 'portfolio-os-language';

const isTheme = (value: string | null): value is Theme => value === 'light' || value === 'dark';
const isLanguage = (value: string | null): value is Language => value === 'uk' || value === 'en';

const getStoredTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return isTheme(storedTheme) ? storedTheme : 'light';
};

const getStoredLanguage = (): Language => {
  if (typeof window === 'undefined') return 'uk';
  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return isLanguage(storedLanguage) ? storedLanguage : 'uk';
};

const mainWindows: PortfolioWindow[] = [
  {
    id: 'about',
    title: 'Про мене',
    icon: '👤',
    isOpen: true,
    isMinimized: false,
    isMaximized: false,
    position: { x: 88, y: 86 },
    size: { width: 820, height: 560 },
    minSize: { width: 560, height: 420 },
    zIndex: 10,
  },
  {
    id: 'work',
    title: 'Досвід роботи',
    icon: '💼',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 210, y: 96 },
    size: { width: 760, height: 600 },
    minSize: { width: 540, height: 420 },
    zIndex: 8,
  },
  {
    id: 'skills',
    title: 'Навички',
    icon: '🛠',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 250, y: 118 },
    size: { width: 820, height: 590 },
    minSize: { width: 560, height: 430 },
    zIndex: 8,
  },
  {
    id: 'contact',
    title: 'Контакти',
    icon: '✉',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 330, y: 112 },
    size: { width: 820, height: 540 },
    minSize: { width: 560, height: 420 },
    zIndex: 8,
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: '📁',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 130, y: 72 },
    size: { width: 960, height: 650 },
    minSize: { width: 680, height: 500 },
    zIndex: 8,
  },
  {
    id: 'terminal',
    title: 'Terminal',
    icon: '>_',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 300, y: 148 },
    size: { width: 760, height: 460 },
    minSize: { width: 560, height: 340 },
    zIndex: 8,
  },
];

const projectWindows: PortfolioWindow[] = projects.map((project, index) => ({
  id: `project-${project.slug}` as WindowId,
  title: `${project.name}.app`,
  icon: '▣',
  isOpen: false,
  isMinimized: false,
  isMaximized: false,
  position: { x: 150 + (index % 4) * 28, y: 84 + (index % 5) * 24 },
  size: { width: 860, height: 620 },
  minSize: { width: 600, height: 440 },
  zIndex: 8,
  projectSlug: project.slug,
}));

const createInitialWindows = () =>
  [...mainWindows, ...projectWindows].reduce<Record<string, PortfolioWindow>>((acc, window) => {
    acc[window.id] = { ...window, position: { ...window.position }, size: { ...window.size } };
    return acc;
  }, {});

const initialTerminalHistory: TerminalEntry[] = [
  {
    id: 'welcome',
    type: 'system',
    value: 'Portfolio OS Terminal. Type "help" to see available commands.',
  },
];

interface DesktopState {
  windows: Record<string, PortfolioWindow>;
  activeWindowId: WindowId | null;
  nextZIndex: number;
  bootComplete: boolean;
  theme: Theme;
  language: Language;
  wallpaperVariant: number;
  cursorTrailEnabled: boolean;
  terminalHistory: TerminalEntry[];
  toasts: Toast[];
  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  minimizeWindow: (id: WindowId) => void;
  maximizeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  updatePosition: (id: WindowId, position: Position) => void;
  updateSize: (id: WindowId, size: Size) => void;
  setBootComplete: (value: boolean) => void;
  toggleTheme: () => void;
  toggleLanguage: () => void;
  cycleWallpaper: () => void;
  toggleCursorTrail: () => void;
  addTerminalEntry: (entry: Omit<TerminalEntry, 'id'>) => void;
  clearTerminal: () => void;
  addToast: (toast: Omit<Toast, 'id'>) => string;
  removeToast: (id: string) => void;
}

const makeId = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

export const useDesktopStore = create<DesktopState>((set, get) => ({
  windows: createInitialWindows(),
  activeWindowId: 'about',
  nextZIndex: 20,
  bootComplete: false,
  theme: getStoredTheme(),
  language: getStoredLanguage(),
  wallpaperVariant: 0,
  cursorTrailEnabled: true,
  terminalHistory: initialTerminalHistory,
  toasts: [],

  openWindow: (id) => {
    const window = get().windows[id];
    if (!window) return;
    const shouldPlaySound = !window.isOpen || window.isMinimized;

    set((state) => {
      const zIndex = state.nextZIndex + 1;
      return {
        windows: {
          ...state.windows,
          [id]: {
            ...window,
            isOpen: true,
            isMinimized: false,
            zIndex,
          },
        },
        activeWindowId: id,
        nextZIndex: zIndex,
      };
    });
    if (shouldPlaySound) playSystemSound('open');
  },

  closeWindow: (id) => {
    const window = get().windows[id];
    if (window?.isOpen) playSystemSound('close');

    set((state) => {
      const nextWindows = {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          isOpen: false,
          isMinimized: false,
          isMaximized: false,
        },
      };
      const openWindows = Object.values(nextWindows)
        .filter((window) => window.isOpen && !window.isMinimized)
        .sort((a, b) => b.zIndex - a.zIndex);

      return {
        windows: nextWindows,
        activeWindowId: openWindows[0]?.id ?? null,
      };
    });
  },

  minimizeWindow: (id) => {
    set((state) => {
      const nextWindows = {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          isMinimized: true,
        },
      };
      const openWindows = Object.values(nextWindows)
        .filter((window) => window.isOpen && !window.isMinimized)
        .sort((a, b) => b.zIndex - a.zIndex);

      return {
        windows: nextWindows,
        activeWindowId: openWindows[0]?.id ?? null,
      };
    });
  },

  maximizeWindow: (id) => {
    const window = get().windows[id];
    if (!window) return;

    set((state) => {
      const zIndex = state.nextZIndex + 1;
      return {
        windows: {
          ...state.windows,
          [id]: {
            ...state.windows[id],
            isOpen: true,
            isMinimized: false,
            isMaximized: !state.windows[id].isMaximized,
            zIndex,
          },
        },
        activeWindowId: id,
        nextZIndex: zIndex,
      };
    });
  },

  focusWindow: (id) => {
    const window = get().windows[id];
    if (!window) return;

    set((state) => {
      const zIndex = state.nextZIndex + 1;
      return {
        windows: {
          ...state.windows,
          [id]: {
            ...state.windows[id],
            zIndex,
            isMinimized: false,
          },
        },
        activeWindowId: id,
        nextZIndex: zIndex,
      };
    });
  },

  updatePosition: (id, position) => {
    const window = get().windows[id];
    if (!window) return;

    set((state) => ({
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          position,
        },
      },
    }));
  },

  updateSize: (id, size) => {
    const window = get().windows[id];
    if (!window) return;

    set((state) => ({
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          size,
        },
      },
    }));
  },

  setBootComplete: (value) => set({ bootComplete: value }),
  toggleTheme: () =>
    set((state) => {
      const theme = state.theme === 'light' ? 'dark' : 'light';
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
      playSystemSound('switch');
      return { theme };
    }),
  toggleLanguage: () =>
    set((state) => {
      const language = state.language === 'uk' ? 'en' : 'uk';
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
      playSystemSound('switch');
      return { language };
    }),
  cycleWallpaper: () => set((state) => ({ wallpaperVariant: (state.wallpaperVariant + 1) % 3 })),
  toggleCursorTrail: () => set((state) => ({ cursorTrailEnabled: !state.cursorTrailEnabled })),

  addTerminalEntry: (entry) => {
    set((state) => ({
      terminalHistory: [
        ...state.terminalHistory,
        {
          ...entry,
          id: makeId(),
        },
      ],
    }));
  },

  clearTerminal: () => set({ terminalHistory: [] }),

  addToast: (toast) => {
    const id = makeId();
    set((state) => ({
      toasts: [...state.toasts, { ...toast, id }],
    }));
    return id;
  },

  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }));
  },
}));
