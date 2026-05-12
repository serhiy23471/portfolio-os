import { useDesktopStore } from '../../store/desktopStore';

export function CaseStudyLanguageSwitch() {
  const language = useDesktopStore((state) => state.language);
  const toggleLanguage = useDesktopStore((state) => state.toggleLanguage);
  const nextLanguage = language === 'uk' ? 'EN' : 'UA';
  const label = language === 'uk' ? 'Перемкнути на англійську' : 'Switch to Ukrainian';

  return (
    <button type="button" className="caseStudyLanguageButton" onClick={toggleLanguage} aria-label={label}>
      {nextLanguage}
    </button>
  );
}
