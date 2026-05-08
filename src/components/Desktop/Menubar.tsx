import { FaBatteryFull, FaLanguage, FaMoon, FaSun, FaWifi } from 'react-icons/fa';
import { profile } from '../../data/profile';
import { useClock } from '../../hooks/useClock';
import { copy } from '../../i18n';
import { useDesktopStore } from '../../store/desktopStore';

export function Menubar() {
  const theme = useDesktopStore((state) => state.theme);
  const language = useDesktopStore((state) => state.language);
  const toggleTheme = useDesktopStore((state) => state.toggleTheme);
  const toggleLanguage = useDesktopStore((state) => state.toggleLanguage);
  const addToast = useDesktopStore((state) => state.addToast);
  const t = copy[language];
  const clock = useClock({ weekday: 'short', day: '2-digit', month: 'short' }, t.locale);
  const languageLabel = language === 'uk' ? 'UK active · EN' : 'EN active · UK';

  return (
    <header className="menubar">
      <div className="menubarGroup">
        <button
          type="button"
          className="menubarLogo"
          onClick={() => addToast({ title: 'Portfolio OS', message: 'React + TypeScript desktop portfolio.' })}
          aria-label="Portfolio OS"
        >
          ◈
        </button>
        <span className="menubarTitle">Portfolio OS</span>
        <span className="menubarItem">{profile.name}</span>
      </div>
      <div className="menubarGroup">
        <button type="button" className="menubarIconButton languageButton" aria-label={t.menubar.languageAria} onClick={toggleLanguage}>
          <FaLanguage aria-hidden="true" />
          <span>{languageLabel}</span>
        </button>
        <button type="button" className="menubarIconButton" aria-label={t.menubar.theme} onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
        </button>
        <FaWifi aria-hidden="true" />
        <FaBatteryFull aria-hidden="true" />
        <time className="menubarClock">{clock}</time>
      </div>
    </header>
  );
}
