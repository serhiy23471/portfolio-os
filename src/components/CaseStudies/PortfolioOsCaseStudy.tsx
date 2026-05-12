import { useEffect } from 'react';
import { FaCheck, FaCode, FaDesktop, FaGithub, FaLayerGroup, FaMobileAlt, FaMousePointer, FaProjectDiagram, FaReact, FaTerminal, FaTools, FaWindowMaximize } from 'react-icons/fa';
import { CaseStudyLanguageSwitch } from './CaseStudyLanguageSwitch';

const overviewItems = [
  'desktop OS metaphor',
  'window manager',
  'dock and app launcher',
  'boot screen',
  'terminal commands',
  'mobile portfolio version',
  'data-driven projects',
  'interactive UI details',
];

const challenges = [
  'звичайна CV-сторінка погано показує UX мислення',
  'портфоліо має бути помітним, але не хаотичним',
  'desktop-інтерфейс повинен працювати як справжня система',
  'контент має легко редагуватись через data files',
  'потрібна окрема мобільна версія без перевантаження',
];

const goals = [
  'створити інтерактивне portfolio OS',
  'показати навички React + TypeScript',
  'зробити вікна, dock, terminal і boot sequence',
  'розділити контент від UI через data-driven структуру',
  'зберегти адаптивність і нормальний UX на мобільних',
];

const techStack = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'CSS Modules / global CSS patterns'] },
  { title: 'State & Logic', items: ['Zustand', 'custom hooks', 'window manager state', 'terminal command parser'] },
  { title: 'UI / Experience', items: ['responsive layout', 'desktop metaphor', 'dark/light theme', 'animations', 'React Icons'] },
];

const features = [
  {
    Icon: FaWindowMaximize,
    title: 'Window Manager',
    text: 'Вікна можна відкривати, фокусити, згортати, розгортати, закривати і переміщувати. Кожне вікно має власний z-index, позицію, розмір і мінімальні обмеження.',
    items: ['open / close', 'minimize / maximize', 'drag positioning', 'active window state', 'project detail windows'],
  },
  {
    Icon: FaDesktop,
    title: 'Desktop Experience',
    text: 'Desktop-режим імітує робочу систему з wallpaper, menubar, dock, app icons, контекстним меню і toast notifications.',
    items: ['desktop icons', 'dock', 'menubar', 'wallpaper switcher', 'context menu', 'toast stack'],
  },
  {
    Icon: FaTerminal,
    title: 'Terminal App',
    text: 'Terminal додає інтерактивність і показує, що портфоліо не є статичною сторінкою. Команди можуть відкривати застосунки, показувати help і запускати мікроефекти.',
    items: ['command suggestions', 'command history', 'help output', 'hire command', 'confetti event'],
  },
  {
    Icon: FaLayerGroup,
    title: 'Data-Driven Content',
    text: 'Проєкти, сертифікати, профіль і досвід винесені в окремі data files, щоб оновлення контенту не вимагало переписування компонентів.',
    items: ['portfolioContent.ts', 'projects.ts', 'skills.ts', 'experience.ts', 'profile.ts'],
  },
  {
    Icon: FaMobileAlt,
    title: 'Mobile Portfolio',
    text: 'Для мобільних екранів використовується не зменшена копія desktop OS, а окрема сканована сторінка з секціями About, Work, Projects, Skills і Contact.',
    items: ['mobile header', 'section navigation', 'project cards', 'skills grid', 'contact CTA'],
  },
  {
    Icon: FaMousePointer,
    title: 'Microinteractions',
    text: 'Маленькі деталі роблять інтерфейс живим: boot sequence, cursor trail, Konami wallpaper change, hover states, animated cards and modals.',
    items: ['boot sequence', 'cursor trail', 'Konami mode', 'hover transitions', 'theme switch'],
  },
];

const engineeringFixes = [
  {
    title: 'Window State Complexity',
    problem: 'багато вікон мають різні стани: isOpen, isMinimized, isMaximized, zIndex, position, size',
    solution: 'централізований Zustand store з окремими actions для open, close, focus, minimize, maximize, resize and move',
  },
  {
    title: 'Desktop vs Mobile UX',
    problem: 'desktop OS metaphor погано масштабується на маленькі екрани',
    solution: 'окремий MobilePortfolio компонент замість спроби запхати desktop windows у mobile viewport',
  },
  {
    title: 'Editable Portfolio Content',
    problem: 'контент портфоліо швидко стає важко підтримувати, якщо він захований у JSX',
    solution: 'винесення профілю, проєктів, досвіду, навичок і сертифікатів у структуровані data files',
  },
  {
    title: 'Case Study Routing',
    problem: 'портфоліо не мало повного роутингу, але case study потрібно відкривати як окрему сторінку',
    solution: 'легкий pathname-based render у App.tsx для окремих case study сторінок',
  },
];

const results = [
  'Interactive desktop portfolio experience',
  'Reusable app/window architecture',
  'Separate mobile portfolio flow',
  'Data-driven content structure',
  'Project detail windows with case study links',
  'Terminal, dock, boot screen and UI microinteractions',
  'Dark/light theme support',
  'Better storytelling than a static CV page',
];

const responsibilities = ['Frontend Architecture', 'React Component Design', 'TypeScript Types', 'Zustand State Management', 'Responsive UX', 'UI/UX Design', 'Portfolio Content System', 'Interactive Details'];

function IconList({ items }: { items: string[] }) {
  return (
    <ul className="caseStudyList">
      {items.map((item) => (
        <li key={item}>
          <FaCheck aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function PortfolioOsCaseStudy() {
  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  return (
    <main className="caseStudyPage caseStudyPageBlue">
      <nav className="caseStudyNav" aria-label="Case study navigation">
        <a className="caseStudyBrand" href="/">
          <FaDesktop aria-hidden="true" />
          Portfolio OS
        </a>
        <div>
          <a href="/">Portfolio</a>
          <a href="https://github.com/serhii-dev/portfolio-os" target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
          <a className="isPrimary" href="https://example.com/portfolio-os" target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <CaseStudyLanguageSwitch />
        </div>
      </nav>

      <header className="caseStudyHero">
        <section>
          <p className="caseStudyEyebrow">Case Study — Portfolio OS</p>
          <h1>Portfolio OS</h1>
          <h2 className="caseStudyHeroTitle">Interactive Desktop Portfolio Experience</h2>
          <p>
            Portfolio OS — це інтерактивне портфоліо у стилі desktop operating system: вікна, dock, boot screen,
            terminal, project apps, mobile fallback і data-driven структура контенту.
          </p>
          <div className="caseStudyTags">
            <span>Frontend Portfolio</span>
            <span>Desktop OS UI</span>
            <span>React + TypeScript</span>
            <span>Role: Frontend Developer</span>
          </div>
          <div className="caseStudyHeroLinks" aria-label="Case study sections">
            <a href="#overview">Overview</a>
            <a href="#challenge">Challenge</a>
            <a href="#features">Features</a>
            <a href="#results">Results</a>
          </div>
        </section>
        <aside className="caseStudyPreview">
          <div className="caseStudyBrowserBar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <img src="/projects/portfolio-os.png" alt="Portfolio OS screenshot" />
        </aside>
      </header>

      <section className="caseStudySection" id="overview">
        <p className="caseStudyEyebrow">Overview</p>
        <h2>Portfolio as a usable interface</h2>
        <p>
          Ідея проєкту — показати не тільки список навичок, а й мислення про інтерфейси, стани, взаємодію і структуру компонентів.
          Замість класичної CV-сторінки портфоліо працює як маленька browser OS.
        </p>
        <div className="caseStudyCards">
          {overviewItems.map((item) => (
            <article key={item}>
              <FaDesktop aria-hidden="true" />
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="caseStudySection" id="challenge">
        <p className="caseStudyEyebrow">Challenge</p>
        <h2>Що потрібно було вирішити</h2>
        <div className="caseStudyColumns">
          <article>
            <FaTools aria-hidden="true" />
            <h3>Проблеми звичайного портфоліо</h3>
            <IconList items={challenges} />
          </article>
          <article>
            <FaProjectDiagram aria-hidden="true" />
            <h3>Цілі Portfolio OS</h3>
            <IconList items={goals} />
          </article>
        </div>
      </section>

      <section className="caseStudySection">
        <p className="caseStudyEyebrow">Tech Stack</p>
        <h2>Frontend architecture</h2>
        <div className="caseStudyColumns">
          {techStack.map((group) => (
            <article key={group.title}>
              <FaReact aria-hidden="true" />
              <h3>{group.title}</h3>
              <IconList items={group.items} />
            </article>
          ))}
        </div>
      </section>

      <section className="caseStudySection" id="features">
        <p className="caseStudyEyebrow">Main Features</p>
        <h2>Core experience modules</h2>
        <div className="caseStudyFeatureGrid">
          {features.map((feature) => {
            const Icon = feature.Icon;
            return (
              <article key={feature.title}>
                <Icon aria-hidden="true" />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <div className="caseStudySubsection">
                  <h4>Includes</h4>
                  <IconList items={feature.items} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="caseStudySection">
        <p className="caseStudyEyebrow">Architecture</p>
        <h2>Window system flow</h2>
        <p>Користувач відкриває app icon або dock item, store оновлює window state, а WindowLayer рендерить потрібний app component.</p>
        <div className="caseStudyFlow" aria-label="Portfolio OS architecture flow">
          <span>Desktop Icon</span>
          <span>Zustand Store</span>
          <span>Window State</span>
          <span>Window Layer</span>
          <span>App Component</span>
        </div>
      </section>

      <section className="caseStudySection">
        <p className="caseStudyEyebrow">Engineering Challenges Solved</p>
        <h2>Some notable fixes</h2>
        <div className="caseStudyColumns">
          {engineeringFixes.map((fix) => (
            <article key={fix.title}>
              <FaCode aria-hidden="true" />
              <h3>{fix.title}</h3>
              <p>
                <strong>Проблема:</strong> {fix.problem}
              </p>
              <p>
                <strong>Рішення:</strong> {fix.solution}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="caseStudyResult" id="results">
        <p className="caseStudyEyebrow">Results</p>
        <h2>What the project demonstrates</h2>
        <div>
          {results.map((result) => (
            <span key={result}>
              <FaCheck aria-hidden="true" />
              {result}
            </span>
          ))}
        </div>
      </section>

      <section className="caseStudySection">
        <p className="caseStudyEyebrow">Responsibilities</p>
        <h2>Що я робив у проєкті</h2>
        <div className="caseStudyTags">
          {responsibilities.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
