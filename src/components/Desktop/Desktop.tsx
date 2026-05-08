import { useEffect, useMemo, useState } from 'react';
import { AboutApp } from '../Apps/AboutApp';
import { ContactApp } from '../Apps/ContactApp';
import { ProjectDetailApp } from '../Apps/ProjectDetailApp';
import { ProjectsApp } from '../Apps/ProjectsApp';
import { SkillsApp } from '../Apps/SkillsApp';
import { TerminalApp } from '../Apps/TerminalApp';
import { WorkApp } from '../Apps/WorkApp';
import { BootSequence } from '../Boot/BootSequence';
import { Window } from '../Window/Window';
import { Dock } from './Dock';
import { DesktopIcon } from './DesktopIcon';
import { Menubar } from './Menubar';
import { Wallpaper } from './Wallpaper';
import { appIconConfig, getIconStyle } from './appIconConfig';
import { copy, getWindowTitle } from '../../i18n';
import { useDesktopStore } from '../../store/desktopStore';
import type { MainAppId, PortfolioWindow, WindowId } from '../../types';

const desktopIcons: Array<{ id: MainAppId; icon: string; label: string }> = [
  { id: 'about', icon: '👤', label: 'About.app' },
  { id: 'work', icon: '💼', label: 'Work.app' },
  { id: 'skills', icon: '🛠', label: 'Skills.app' },
  { id: 'contact', icon: '✉', label: 'Contact.app' },
  { id: 'projects', icon: '📁', label: 'Projects/' },
  { id: 'terminal', icon: '>_', label: 'Terminal.app' },
];

interface CursorPoint {
  id: number;
  x: number;
  y: number;
}

interface ConfettiPiece {
  id: number;
  x: number;
  delay: number;
  rotate: number;
  color: string;
}

export function Desktop() {
  const windowsMap = useDesktopStore((state) => state.windows);
  const bootComplete = useDesktopStore((state) => state.bootComplete);
  const theme = useDesktopStore((state) => state.theme);
  const language = useDesktopStore((state) => state.language);
  const cursorTrailEnabled = useDesktopStore((state) => state.cursorTrailEnabled);
  const toasts = useDesktopStore((state) => state.toasts);
  const openWindow = useDesktopStore((state) => state.openWindow);
  const cycleWallpaper = useDesktopStore((state) => state.cycleWallpaper);
  const toggleCursorTrail = useDesktopStore((state) => state.toggleCursorTrail);
  const addToast = useDesktopStore((state) => state.addToast);
  const removeToast = useDesktopStore((state) => state.removeToast);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const [cursorPoints, setCursorPoints] = useState<CursorPoint[]>([]);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const t = copy[language];

  const windows = useMemo(
    () =>
      Object.values(windowsMap)
        .filter((window) => window.isOpen)
        .sort((a, b) => a.zIndex - b.zIndex),
    [windowsMap],
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      addToast({ title: t.desktop.notificationTitle, message: t.desktop.notificationMessage });
    }, 30000);
    return () => window.clearTimeout(timer);
  }, [addToast, t.desktop.notificationMessage, t.desktop.notificationTitle]);

  useEffect(() => {
    document.documentElement.lang = language === 'uk' ? 'uk' : 'en';
  }, [language]);

  useEffect(() => {
    const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let index = 0;

    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      if (key === sequence[index]) {
        index += 1;
        if (index === sequence.length) {
          cycleWallpaper();
          addToast({ title: t.desktop.wallpaperChanged, message: t.desktop.konami });
          index = 0;
        }
      } else {
        index = key === sequence[0] ? 1 : 0;
      }

      if ((event.metaKey || event.ctrlKey) && event.shiftKey && event.key === '3') {
        event.preventDefault();
        addToast({ title: t.desktop.screenshotTitle, message: t.desktop.screenshotMessage });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [addToast, cycleWallpaper, t.desktop.konami, t.desktop.screenshotMessage, t.desktop.screenshotTitle, t.desktop.wallpaperChanged]);

  useEffect(() => {
    if (!cursorTrailEnabled) {
      setCursorPoints([]);
      return undefined;
    }

    let pointId = 0;
    const timers = new Set<number>();

    const handleMouseMove = (event: MouseEvent) => {
      if (event.buttons !== 0) return;
      pointId += 1;
      const id = pointId;
      setCursorPoints((current) => [{ id, x: event.clientX, y: event.clientY }, ...current].slice(0, 8));

      const timer = window.setTimeout(() => {
        setCursorPoints((current) => current.filter((point) => point.id !== id));
        timers.delete(timer);
      }, 620);
      timers.add(timer);
    };

    const clearTrail = () => {
      setCursorPoints([]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('pointerdown', clearTrail);
    window.addEventListener('blur', clearTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('pointerdown', clearTrail);
      window.removeEventListener('blur', clearTrail);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [cursorTrailEnabled]);

  useEffect(() => {
    const fire = () => {
      const colors = ['#0066FF', '#5856D6', '#34C759', '#FF9500', '#FF3B30', '#64D2FF'];
      const pieces = Array.from({ length: 42 }, (_, index) => ({
        id: Date.now() + index,
        x: 10 + Math.random() * 80,
        delay: Math.random() * 0.4,
        rotate: Math.random() * 360,
        color: colors[index % colors.length],
      }));
      setConfetti(pieces);
      window.setTimeout(() => setConfetti([]), 2200);
    };

    window.addEventListener('portfolio-confetti', fire);
    return () => window.removeEventListener('portfolio-confetti', fire);
  }, []);

  useEffect(() => {
    if (toasts.length === 0) return undefined;
    const timers = toasts.map((toast) => window.setTimeout(() => removeToast(toast.id), 5200));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [removeToast, toasts]);

  const openApp = (id: WindowId) => {
    openWindow(id);
    setContextMenu(null);
  };

  const changeWallpaper = () => {
    cycleWallpaper();
    setContextMenu(null);
  };

  return (
    <main
      className={`desktopRoot ${bootComplete ? 'isBooted' : ''}`}
      data-theme={theme}
      data-language={language}
      onContextMenu={(event) => {
        event.preventDefault();
        setContextMenu({ x: event.clientX, y: event.clientY });
      }}
      onPointerDown={() => setContextMenu(null)}
    >
      <Wallpaper />
      <Menubar />

      <div className="desktopIconGrid" aria-label="Desktop icons">
        {appIconConfig.map((app) => (
          <div key={app.id} style={getIconStyle(app)}>
            <DesktopIcon id={app.id} Icon={app.Icon} label={app.label} onOpen={openApp} />
          </div>
        ))}
      </div>

      <div className="windowLayer">
        {windows.map((window) => (
          <Window key={window.id} window={{ ...window, title: getWindowTitle(window.id, window.title, language) }}>
            {renderWindowContent(window)}
          </Window>
        ))}
      </div>

      <Dock />

      {contextMenu && (
        <div className="contextMenu" style={{ left: contextMenu.x, top: contextMenu.y }} role="menu" onPointerDown={(event) => event.stopPropagation()}>
          <button type="button" role="menuitem" onClick={changeWallpaper}>
            {t.desktop.changeWallpaper}
          </button>
          <button type="button" role="menuitem" onClick={toggleCursorTrail}>
            {t.desktop.cursorTrail}
          </button>
          <button type="button" role="menuitem" onClick={() => openApp('about')}>
            {t.desktop.aboutSite}
          </button>
        </div>
      )}

      <div className="toastStack" aria-live="polite">
        {toasts.map((toast) => (
          <article className="toast" key={toast.id}>
            <strong>{toast.title}</strong>
            {toast.message && <span>{toast.message}</span>}
          </article>
        ))}
      </div>

      {cursorPoints.map((point, index) => (
        <span
          key={point.id}
          className="cursorTrail"
          style={{
            left: point.x,
            top: point.y,
            opacity: 1 - index / 14,
            transform: `translate(-50%, -50%) scale(${1 - index / 20})`,
          }}
          aria-hidden="true"
        />
      ))}

      {confetti.map((piece) => (
        <span
          key={piece.id}
          className="confettiPiece"
          style={{
            left: `${piece.x}%`,
            animationDelay: `${piece.delay}s`,
            background: piece.color,
            transform: `rotate(${piece.rotate}deg)`,
          }}
          aria-hidden="true"
        />
      ))}

      {!bootComplete && <BootSequence />}
    </main>
  );
}

function renderWindowContent(window: PortfolioWindow) {
  switch (window.id) {
    case 'about':
      return <AboutApp />;
    case 'work':
      return <WorkApp />;
    case 'skills':
      return <SkillsApp />;
    case 'projects':
      return <ProjectsApp />;
    case 'terminal':
      return <TerminalApp />;
    case 'contact':
      return <ContactApp />;
    default:
      return window.projectSlug ? <ProjectDetailApp slug={window.projectSlug} /> : null;
  }
}
