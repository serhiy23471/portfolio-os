import { useEffect, useState } from 'react';
import { profile } from '../../data/profile';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useDesktopStore } from '../../store/desktopStore';

const bootLines = [
  'Initializing Portfolio OS v2.0...',
  'Loading components...      ████░░ 67%',
  'Mounting React tree...     ██████ 100%',
  'Preparing frosted desktop...',
  `Welcome back, ${profile.name}.`,
];

export function BootSequence() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const setBootComplete = useDesktopStore((state) => state.setBootComplete);
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    if (prefersReducedMotion) {
      setBootComplete(true);
      return undefined;
    }

    const activeLine = bootLines[lineIndex];
    const isLineDone = charIndex >= activeLine.length;
    const isSequenceDone = lineIndex >= bootLines.length - 1 && isLineDone;

    if (isSequenceDone) {
      const timer = window.setTimeout(() => setBootComplete(true), 520);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(
      () => {
        if (isLineDone) {
          setLineIndex((current) => current + 1);
          setCharIndex(0);
          return;
        }
        setCharIndex((current) => current + 1);
      },
      isLineDone ? 260 : 24 + Math.random() * 28,
    );

    return () => window.clearTimeout(timer);
  }, [charIndex, lineIndex, prefersReducedMotion, setBootComplete]);

  return (
    <div className="bootScreen" role="status" aria-live="polite">
      <div className="bootTerminal" aria-label="Portfolio OS boot sequence">
        {bootLines.slice(0, lineIndex).map((line) => (
          <div key={line} className="bootLine">
            &gt; {line}
          </div>
        ))}
        <div className="bootLine">
          &gt; {bootLines[lineIndex].slice(0, charIndex)}
          <span className="terminalCursor" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
