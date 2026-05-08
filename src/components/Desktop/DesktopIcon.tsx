import type { KeyboardEvent } from 'react';
import type { IconType } from 'react-icons';
import type { WindowId } from '../../types';

interface DesktopIconProps {
  id: WindowId;
  Icon: IconType;
  label: string;
  onOpen: (id: WindowId) => void;
}

export function DesktopIcon({ id, Icon, label, onOpen }: DesktopIconProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpen(id);
    }
  };

  return (
    <button className="desktopIcon" type="button" onDoubleClick={() => onOpen(id)} onKeyDown={handleKeyDown} aria-label={`Open ${label}`}>
      <span className="desktopIconGlyph">
        <Icon aria-hidden="true" />
      </span>
      <span className="desktopIconLabel">{label}</span>
    </button>
  );
}
