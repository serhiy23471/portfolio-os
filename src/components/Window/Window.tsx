import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, PointerEvent as ReactPointerEvent, ReactNode } from 'react';
import { useDesktopStore } from '../../store/desktopStore';
import type { PortfolioWindow } from '../../types';
import { WindowChrome } from './WindowChrome';

interface WindowProps {
  window: PortfolioWindow;
  children: ReactNode;
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function Window({ window, children }: WindowProps) {
  const frameRef = useRef<HTMLElement | null>(null);
  const [isShaking, setIsShaking] = useState(false);
  const [motion, setMotion] = useState<'opening' | 'closing' | 'minimizing' | 'restoring' | null>('opening');
  const previousMinimizedRef = useRef(window.isMinimized);
  const activeWindowId = useDesktopStore((state) => state.activeWindowId);
  const closeWindow = useDesktopStore((state) => state.closeWindow);
  const minimizeWindow = useDesktopStore((state) => state.minimizeWindow);
  const maximizeWindow = useDesktopStore((state) => state.maximizeWindow);
  const focusWindow = useDesktopStore((state) => state.focusWindow);
  const updatePosition = useDesktopStore((state) => state.updatePosition);
  const updateSize = useDesktopStore((state) => state.updateSize);

  const isActive = activeWindowId === window.id;

  useEffect(() => {
    if (isActive) {
      frameRef.current?.focus({ preventScroll: true });
    }
  }, [isActive]);

  useEffect(() => {
    if (previousMinimizedRef.current && !window.isMinimized && window.isOpen) {
      setMotion('restoring');
      const timer = globalThis.window.setTimeout(() => setMotion(null), 260);
      previousMinimizedRef.current = window.isMinimized;
      return () => globalThis.window.clearTimeout(timer);
    }

    previousMinimizedRef.current = window.isMinimized;
    if (window.isOpen && !window.isMinimized && motion === 'opening') {
      const timer = globalThis.window.setTimeout(() => setMotion(null), 260);
      return () => globalThis.window.clearTimeout(timer);
    }

    return undefined;
  }, [motion, window.isMinimized, window.isOpen]);

  useEffect(() => {
    if (!isActive) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeWindow(window.id);
      }
    };

    windowRef().addEventListener('keydown', handleKeyDown);
    return () => windowRef().removeEventListener('keydown', handleKeyDown);
  }, [closeWindow, isActive, window.id]);

  if (!window.isOpen || window.isMinimized) {
    return null;
  }

  const triggerShake = () => {
    setIsShaking(true);
    globalThis.window.setTimeout(() => setIsShaking(false), 260);
  };

  const animateMinimize = () => {
    setMotion('minimizing');
    globalThis.window.setTimeout(() => minimizeWindow(window.id), 220);
  };

  const animateClose = () => {
    setMotion('closing');
    globalThis.window.setTimeout(() => closeWindow(window.id), 180);
  };

  const animateMaximize = () => {
    setMotion(window.isMaximized ? 'restoring' : 'opening');
    maximizeWindow(window.id);
    globalThis.window.setTimeout(() => setMotion(null), 280);
  };

  const startDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (window.isMaximized || event.button !== 0) return;
    focusWindow(window.id);

    const startX = event.clientX;
    const startY = event.clientY;
    const initialX = window.position.x;
    const initialY = window.position.y;

    const move = (moveEvent: PointerEvent) => {
      const nextX = initialX + moveEvent.clientX - startX;
      const nextY = initialY + moveEvent.clientY - startY;
      const maxX = globalThis.window.innerWidth - window.size.width - 12;
      const maxY = globalThis.window.innerHeight - window.size.height - 86;
      const clampedX = clamp(nextX, 12, Math.max(12, maxX));
      const clampedY = clamp(nextY, 40, Math.max(40, maxY));

      if (Math.abs(nextX - clampedX) > 10 || Math.abs(nextY - clampedY) > 10) {
        triggerShake();
      }

      updatePosition(window.id, { x: clampedX, y: clampedY });
    };

    const stop = () => {
      document.body.classList.remove('isDraggingWindow');
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', stop);
    };

    document.body.classList.add('isDraggingWindow');
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', stop, { once: true });
  };

  const startResize = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (window.isMaximized || event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    focusWindow(window.id);

    const startX = event.clientX;
    const startY = event.clientY;
    const initialWidth = window.size.width;
    const initialHeight = window.size.height;

    const move = (moveEvent: PointerEvent) => {
      const maxWidth = globalThis.window.innerWidth - window.position.x - 16;
      const maxHeight = globalThis.window.innerHeight - window.position.y - 86;
      const width = clamp(initialWidth + moveEvent.clientX - startX, window.minSize.width, Math.max(window.minSize.width, maxWidth));
      const height = clamp(initialHeight + moveEvent.clientY - startY, window.minSize.height, Math.max(window.minSize.height, maxHeight));
      updateSize(window.id, { width, height });
    };

    const stop = () => {
      document.body.classList.remove('isDraggingWindow');
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', stop);
    };

    document.body.classList.add('isDraggingWindow');
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', stop, { once: true });
  };

  const frameStyle: CSSProperties = window.isMaximized
    ? {
        zIndex: window.zIndex,
      }
    : {
        width: window.size.width,
        height: window.size.height,
        '--window-x': `${window.position.x}px`,
        '--window-y': `${window.position.y}px`,
        transform: `translate3d(${window.position.x}px, ${window.position.y}px, 0)`,
        zIndex: window.zIndex,
      } as CSSProperties;

  return (
    <section
      ref={frameRef}
      className={`windowFrame ${isActive ? 'isActive' : ''} ${window.isMaximized ? 'isMaximized' : ''} ${isShaking ? 'isShaking' : ''} ${motion ? `is${motion[0].toUpperCase()}${motion.slice(1)}` : ''}`}
      style={frameStyle}
      role="dialog"
      aria-label={window.title}
      aria-modal="false"
      tabIndex={-1}
      onPointerDown={() => focusWindow(window.id)}
    >
      <div className="windowDragArea" onPointerDown={startDrag} onDoubleClick={animateMaximize}>
        <WindowChrome
          id={window.id}
          title={window.title}
          icon={window.icon}
          isMaximized={window.isMaximized}
          onMinimize={animateMinimize}
          onMaximize={animateMaximize}
          onClose={animateClose}
        />
      </div>
      <div className="windowBody">{children}</div>
      {!window.isMaximized && <div className="resizeHandle" aria-hidden="true" onPointerDown={startResize} />}
    </section>
  );
}

function windowRef() {
  return globalThis.window;
}
