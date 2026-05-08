import { getAppIconConfig, getWindowIconStyle } from '../Desktop/appIconConfig';
import type { WindowId } from '../../types';

interface WindowChromeProps {
  id: WindowId;
  title: string;
  icon: string;
  isMaximized: boolean;
  onMinimize: (id: WindowId) => void;
  onMaximize: (id: WindowId) => void;
  onClose: (id: WindowId) => void;
}

export function WindowChrome({ id, title, icon, isMaximized, onMinimize, onMaximize, onClose }: WindowChromeProps) {
  const Icon = getAppIconConfig(id).Icon;

  return (
    <div className="windowChrome">
      <div className="trafficLights">
        <button type="button" className="traffic trafficRed" aria-label={`Close ${title}`} onPointerDown={(event) => event.stopPropagation()} onClick={() => onClose(id)}>
          <span>×</span>
        </button>
        <button type="button" className="traffic trafficYellow" aria-label={`Minimize ${title}`} onPointerDown={(event) => event.stopPropagation()} onClick={() => onMinimize(id)}>
          <span>−</span>
        </button>
        <button
          type="button"
          className="traffic trafficGreen"
          aria-label={isMaximized ? `Restore ${title}` : `Maximize ${title}`}
          onPointerDown={(event) => event.stopPropagation()}
          onClick={() => onMaximize(id)}
        >
          <span>+</span>
        </button>
      </div>

      <div className="windowTitle">
        <span className="windowTitleIcon" style={getWindowIconStyle(id)} title={icon}>
          <Icon aria-hidden="true" />
        </span>
        <span>{title}</span>
      </div>

      <div className="windowActions" aria-hidden="true" />
    </div>
  );
}
