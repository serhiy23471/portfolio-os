import { useState } from 'react';
import type { CSSProperties } from 'react';
import { useDesktopStore } from '../../store/desktopStore';
import type { MainAppId } from '../../types';
import { appIconConfig, getIconStyle } from './appIconConfig';

export function Dock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [bouncingId, setBouncingId] = useState<MainAppId | null>(null);
  const windows = useDesktopStore((state) => state.windows);
  const openWindow = useDesktopStore((state) => state.openWindow);

  const openFromDock = (id: MainAppId) => {
    setBouncingId(id);
    window.setTimeout(() => setBouncingId(null), 520);
    openWindow(id);
  };

  return (
    <nav className="dock" aria-label="Dock">
      {appIconConfig.map((app, index) => {
        const distance = hoveredIndex === null ? 10 : Math.abs(index - hoveredIndex);
        const scale = Math.max(1, 1.82 - distance * 0.26);
        const isOpen = windows[app.id]?.isOpen;
        const Icon = app.Icon;

        return (
          <button
            key={app.id}
            type="button"
            className={`dockIcon ${bouncingId === app.id ? 'isBouncing' : ''}`}
            style={{ ...getIconStyle(app), '--dock-scale': scale } as CSSProperties}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onFocus={() => setHoveredIndex(index)}
            onBlur={() => setHoveredIndex(null)}
            onClick={() => openFromDock(app.id)}
            aria-label={`Open ${app.title}`}
          >
            <span className="dockTooltip">{app.title}</span>
            <span className="dockGlyph">
              <Icon aria-hidden="true" />
            </span>
            {isOpen && <span className="dockIndicator" aria-hidden="true" />}
          </button>
        );
      })}
    </nav>
  );
}
