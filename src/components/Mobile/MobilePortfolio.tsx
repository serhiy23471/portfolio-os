import { useState } from 'react';
import { FaBars, FaEnvelope, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { experience } from '../../data/experience';
import { profile } from '../../data/profile';
import { projects } from '../../data/projects';
import { skills } from '../../data/skills';
import { useTypewriter } from '../../hooks/useTypewriter';
import { copy, getExperienceText, getProjectText } from '../../i18n';
import { useDesktopStore } from '../../store/desktopStore';
import { SkeletonImage } from '../UI/SkeletonImage';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export function MobilePortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const language = useDesktopStore((state) => state.language);
  const theme = useDesktopStore((state) => state.theme);
  const toggleLanguage = useDesktopStore((state) => state.toggleLanguage);
  const toggleTheme = useDesktopStore((state) => state.toggleTheme);
  const t = copy[language];
  const typedRole = useTypewriter(t.about.roles);
  const languageLabel = language === 'uk' ? 'UK' : 'EN';
  const avatarUrl = profile.avatarUrl;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <main className="mobilePortfolio" data-theme={theme} data-language={language}>
      <header className="mobileHeader">
        <button type="button" className="mobileLogo" onClick={() => scrollToSection('about')} aria-label="Home">
          ◈ {profile.name}
        </button>
        <div className="mobileHeaderControls">
          <button type="button" className="mobileMenuButton" onClick={toggleLanguage} aria-label={t.menubar.languageAria}>
            {languageLabel}
          </button>
          <button type="button" className="mobileMenuButton" onClick={toggleTheme} aria-label={t.menubar.theme}>
            {theme === 'light' ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
          </button>
          <button type="button" className="mobileMenuButton" onClick={() => setMenuOpen((value) => !value)} aria-label="Menu">
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobileMenu">
            {navItems.map((item) => (
              <button key={item.id} type="button" onClick={() => scrollToSection(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <section className="mobileHero" id="about">
        <div className="mobileAvatar" aria-hidden="true">
          {avatarUrl ? <img src={avatarUrl} alt="" /> : profile.name.slice(0, 1).toUpperCase()}
        </div>
        <p className="eyebrow">{t.mobile.heroEyebrow}</p>
        <h1>{profile.name}</h1>
        <p className="typewriterRole">
          {typedRole}
          <span className="typewriterCaret" aria-hidden="true" />
        </p>
        <p>{t.about.bio[0]}</p>
        <button type="button" className="primaryButton" onClick={() => scrollToSection('contact')}>
          {t.mobile.contactCta}
        </button>
      </section>

      <nav className="mobileTabs" aria-label="Portfolio sections">
        {navItems.slice(0, 4).map((item) => (
          <button key={item.id} type="button" onClick={() => scrollToSection(item.id)}>
            {item.label}
          </button>
        ))}
      </nav>

      <section className="mobileSection" id="work">
        <p className="eyebrow">Career path</p>
        <h2>{t.mobile.workTitle}</h2>
        {experience.map((sourceItem) => {
          const item = getExperienceText(sourceItem, language);
          return (
            <article className="mobileCard" key={item.id}>
              <span>{item.period}</span>
              <h3>{item.role}</h3>
              <p>{item.company}</p>
            </article>
          );
        })}
      </section>

      <section className="mobileSection" id="projects">
        <p className="eyebrow">Selected work</p>
        <h2>{t.mobile.projectsTitle}</h2>
        {projects.slice(0, 6).map((sourceProject) => {
          const project = getProjectText(sourceProject, language);
          return (
            <article className="mobileProject" key={project.slug}>
              <div className={`mobileProjectPreview ${project.imageUrl ? 'hasImage' : ''}`} style={{ background: project.accent }} aria-hidden="true">
                {project.imageUrl && <SkeletonImage src={project.imageUrl} alt="" loading="lazy" />}
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="stackRow">
                {project.stack.slice(0, 3).map((tech) => (
                  <span className="stackBadge" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </section>

      <section className="mobileSection" id="skills">
        <p className="eyebrow">Stack</p>
        <h2>{t.mobile.skillsTitle}</h2>
        <div className="mobileSkillGrid">
          {skills.map((skill) => (
            <span key={skill.name}>{skill.name}</span>
          ))}
        </div>
      </section>

      <section className="mobileSection mobileContact" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>{t.mobile.contactTitle}</h2>
        <a href={`mailto:${profile.email}`} className="primaryButton">
          {profile.email}
        </a>
      </section>

      <button type="button" className="mobileFab" onClick={() => scrollToSection('contact')} aria-label="Contact">
        <FaEnvelope aria-hidden="true" />
      </button>
    </main>
  );
}
