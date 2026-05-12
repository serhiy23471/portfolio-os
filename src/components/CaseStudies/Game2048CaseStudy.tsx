import { useEffect } from 'react';
import {
  FaBolt,
  FaCheck,
  FaCode,
  FaGamepad,
  FaGithub,
  FaKeyboard,
  FaLayerGroup,
  FaMobileAlt,
  FaReact,
  FaRedo,
  FaTrophy,
} from 'react-icons/fa';
import { useDesktopStore } from '../../store/desktopStore';
import { CaseStudyLanguageSwitch } from './CaseStudyLanguageSwitch';
import { SkeletonImage } from '../UI/SkeletonImage';

const copy = {
  uk: {
    portfolio: 'Портфоліо',
    liveDemo: 'Live Demo',
    eyebrow: 'Кейс - 2048 Game',
    title: '2048 Game',
    heroTitle: 'Puzzle game на JavaScript з чистою логікою board',
    intro:
      '2048 Game - це браузерна puzzle game на JavaScript, SCSS і HTML з рухом плиток, merge rules, score tracking, restart flow і responsive interface для портфоліо.',
    tags: ['Browser Game', 'JavaScript + SCSS + HTML', 'Game Logic', 'Роль: Frontend Developer'],
    nav: ['Огляд', 'Задача', 'Фічі', 'Результат'],
    overviewEyebrow: 'Огляд',
    overviewTitle: 'Компактна гра, яка показує логіку, state і UI polish',
    overviewText:
      'Проєкт невеликий за обсягом, але має реальну frontend-глибину: move handling, score updates, game status, повторюваний user input і layout constraints для фіксованого game board.',
    overviewItems: ['2048 gameplay', 'keyboard controls', 'touch-friendly board', 'score tracking', 'restart flow', 'win and lose states', 'responsive layout', 'Vercel deployment'],
    challengeEyebrow: 'Задача',
    challengeTitle: 'Що мало працювати надійно',
    rulesTitle: 'Game rules',
    goalsTitle: 'Цілі розробки',
    challenges: [
      'Зберегти передбачувану board logic, коли tiles рухаються, merge-яться і зʼявляються після валідного move.',
      'Не змінювати score і не додавати нову tile після invalid move.',
      'Зробити гру зручною на desktop і mobile через keyboard та touch interactions.',
      'Показати зрозумілий feedback для game over, winning state, score і restart action.',
    ],
    goals: [
      'Побудувати playable 2048 game на JavaScript з чіткою board rendering логікою.',
      'Відділити move logic від visual layer, щоб правила було легше підтримувати.',
      'Зробити polished portfolio project із live Vercel demo та public source code.',
      'Показати algorithmic thinking, UI state handling і responsive design.',
    ],
    techEyebrow: 'Tech Stack',
    techTitle: 'Frontend and game architecture',
    techStack: [
      { title: 'Frontend', items: ['JavaScript', 'SCSS', 'HTML'] },
      { title: 'Game Logic', items: ['tile movement', 'merge rules', 'score updates', 'game status'] },
      { title: 'UX Details', items: ['keyboard input', 'mobile layout', 'restart action', 'visual feedback'] },
    ],
    featuresEyebrow: 'Основні фічі',
    featuresTitle: 'Core gameplay modules',
    includes: 'Включає',
    features: [
      {
        Icon: FaGamepad,
        title: 'Playable 2048 Board',
        text: 'Гра рендерить classic 4x4 board, де кожен valid move рухає tiles, merge-ить однакові values, оновлює score і створює нову tile.',
        items: ['4x4 grid', 'tile values', 'merge behavior', 'new tile generation'],
      },
      {
        Icon: FaKeyboard,
        title: 'Keyboard Controls',
        text: 'Arrow-key input робить desktop experience швидким і знайомим, а invalid moves ігноруються, щоб board state залишався стабільним.',
        items: ['arrow keys', 'move validation', 'state updates', 'desktop play'],
      },
      {
        Icon: FaMobileAlt,
        title: 'Responsive Gameplay',
        text: 'Interface зберігає board читабельним на менших екранах і лишає достатньо простору для комфортної повторної гри.',
        items: ['mobile viewport', 'fluid board', 'compact controls', 'readable score'],
      },
      {
        Icon: FaTrophy,
        title: 'Game States',
        text: 'Score, winning conditions, game over state і restart behavior роблять проєкт завершеним, а не просто static board.',
        items: ['score panel', 'win state', 'game over', 'restart flow'],
      },
    ],
    architectureEyebrow: 'Архітектура',
    architectureTitle: 'From input to board update',
    architectureText:
      'Player action перетворюється на direction, move resolver рахує next board, score змінюється тільки після valid merge, а UI перемальовує board з оновленим game status.',
    flow: ['User Input', 'Move Resolver', 'Merge Rules', 'Score Update', 'Game Status'],
    fixesEyebrow: 'Engineering Challenges Solved',
    fixesTitle: 'Помітні рішення',
    problem: 'Проблема',
    solution: 'Рішення',
    engineeringFixes: [
      {
        title: 'Move Resolution',
        problem: 'Sliding і merging можуть випадково merge-ити одну tile двічі, якщо алгоритм руху нечіткий.',
        solution: 'Кожен move проходить row або column в одному напрямку, merge-ить тільки одну пару за раз і записує результат назад у board.',
      },
      {
        title: 'Invalid Move Handling',
        problem: 'Blocked move не повинен створювати нову tile або змінювати player score.',
        solution: 'Next board порівнюється з previous board перед тим, як score updates і tile spawning застосовуються.',
      },
      {
        title: 'Responsive Board',
        problem: 'Fixed tile sizes можуть overflow на mobile і робити гру незручною.',
        solution: 'Board використовує responsive sizing, щоб tiles лишались квадратними і не ламали layout.',
      },
    ],
    resultsEyebrow: 'Результат',
    resultsTitle: 'Що демонструє проєкт',
    results: [
      'Playable browser game with classic 2048 rules',
      'JavaScript logic for board, score, and status',
      'Keyboard-friendly desktop interaction',
      'Responsive layout for mobile screens',
      'Live Vercel demo and public GitHub repository',
    ],
    responsibilitiesEyebrow: 'Responsibilities',
    responsibilitiesTitle: 'Що я робив у проєкті',
    responsibilities: ['JavaScript Logic', 'SCSS Layout', 'HTML Structure', 'Game Rules', 'State Management', 'Responsive UI', 'Keyboard Interaction', 'Deployment'],
  },
  en: {
    portfolio: 'Portfolio',
    liveDemo: 'Live Demo',
    eyebrow: 'Case Study - 2048 Game',
    title: '2048 Game',
    heroTitle: 'JavaScript puzzle game with clean board logic',
    intro:
      '2048 Game is a browser puzzle project built with JavaScript, SCSS, and HTML, with tile movement, merge rules, score tracking, restart flow, and a responsive interface.',
    tags: ['Browser Game', 'JavaScript + SCSS + HTML', 'Game Logic', 'Role: Frontend Developer'],
    nav: ['Overview', 'Challenge', 'Features', 'Results'],
    overviewEyebrow: 'Overview',
    overviewTitle: 'A compact game that shows logic, state, and UI polish',
    overviewText:
      'The project is small enough to understand quickly, but it still has real frontend depth: deterministic move handling, score updates, game status, repeated user input, and layout constraints for a fixed-format board.',
    overviewItems: ['2048 gameplay', 'keyboard controls', 'touch-friendly board', 'score tracking', 'restart flow', 'win and lose states', 'responsive layout', 'Vercel deployment'],
    challengeEyebrow: 'Challenge',
    challengeTitle: 'What needed to work reliably',
    rulesTitle: 'Game rules',
    goalsTitle: 'Development goals',
    challenges: [
      'Keep the board logic predictable when tiles slide, merge, and spawn after each valid move.',
      'Prevent invalid moves from changing the score or adding a new tile.',
      'Make the game comfortable on desktop and mobile with keyboard and touch interactions.',
      'Show clear feedback for game over, winning state, score, and restart actions.',
    ],
    goals: [
      'Build a playable 2048 game with clear JavaScript board rendering logic.',
      'Separate move logic from the visual layer so the rules stay easy to maintain.',
      'Create a polished portfolio project with a live Vercel demo and public source code.',
      'Use the project to show algorithmic thinking, UI state handling, and responsive design.',
    ],
    techEyebrow: 'Tech Stack',
    techTitle: 'Frontend and game architecture',
    techStack: [
      { title: 'Frontend', items: ['JavaScript', 'SCSS', 'HTML'] },
      { title: 'Game Logic', items: ['tile movement', 'merge rules', 'score updates', 'game status'] },
      { title: 'UX Details', items: ['keyboard input', 'mobile layout', 'restart action', 'visual feedback'] },
    ],
    featuresEyebrow: 'Main Features',
    featuresTitle: 'Core gameplay modules',
    includes: 'Includes',
    features: [
      {
        Icon: FaGamepad,
        title: 'Playable 2048 Board',
        text: 'The game renders a classic 4x4 board where every valid move slides tiles, merges matching values, updates the score, and spawns a new tile.',
        items: ['4x4 grid', 'tile values', 'merge behavior', 'new tile generation'],
      },
      {
        Icon: FaKeyboard,
        title: 'Keyboard Controls',
        text: 'Arrow-key input keeps the desktop experience fast and familiar, while invalid moves are ignored so the board state stays stable.',
        items: ['arrow keys', 'move validation', 'state updates', 'desktop play'],
      },
      {
        Icon: FaMobileAlt,
        title: 'Responsive Gameplay',
        text: 'The interface keeps the board readable on smaller screens and preserves enough spacing for comfortable repeated play.',
        items: ['mobile viewport', 'fluid board', 'compact controls', 'readable score'],
      },
      {
        Icon: FaTrophy,
        title: 'Game States',
        text: 'Score, winning conditions, game over state, and restart behavior make the project feel complete instead of just a static board.',
        items: ['score panel', 'win state', 'game over', 'restart flow'],
      },
    ],
    architectureEyebrow: 'Architecture',
    architectureTitle: 'From input to board update',
    architectureText:
      'A player action becomes a direction, the move resolver calculates the next board, the score changes only after a valid merge, and the UI re-renders the board with the updated game status.',
    flow: ['User Input', 'Move Resolver', 'Merge Rules', 'Score Update', 'Game Status'],
    fixesEyebrow: 'Engineering Challenges Solved',
    fixesTitle: 'Some notable fixes',
    problem: 'Problem',
    solution: 'Solution',
    engineeringFixes: [
      {
        title: 'Move Resolution',
        problem: 'Sliding and merging can accidentally merge the same tile twice if the move algorithm is not strict.',
        solution: 'Each move resolves rows or columns in one direction, merges only one pair at a time, and then writes the result back to the board.',
      },
      {
        title: 'Invalid Move Handling',
        problem: 'A blocked move should not spawn a new tile or change the player score.',
        solution: 'The next board is compared against the previous board before score updates and tile spawning are committed.',
      },
      {
        title: 'Responsive Board',
        problem: 'Fixed tile sizes can overflow on mobile and make the game awkward to play.',
        solution: 'The board uses responsive sizing so tiles keep a square shape without breaking the layout.',
      },
    ],
    resultsEyebrow: 'Results',
    resultsTitle: 'What the project demonstrates',
    results: [
      'Playable browser game with classic 2048 rules',
      'JavaScript logic for board, score, and status',
      'Keyboard-friendly desktop interaction',
      'Responsive layout for mobile screens',
      'Live Vercel demo and public GitHub repository',
    ],
    responsibilitiesEyebrow: 'Responsibilities',
    responsibilitiesTitle: 'What I did in the project',
    responsibilities: ['JavaScript Logic', 'SCSS Layout', 'HTML Structure', 'Game Rules', 'State Management', 'Responsive UI', 'Keyboard Interaction', 'Deployment'],
  },
};

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

export function Game2048CaseStudy() {
  const language = useDesktopStore((state) => state.language);
  const t = copy[language];

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
    <main className="caseStudyPage caseStudyPage2048">
      <nav className="caseStudyNav" aria-label="Case study navigation">
        <a className="caseStudyBrand" href="/">
          <FaGamepad aria-hidden="true" />
          2048 Game
        </a>
        <div>
          <a href="/">{t.portfolio}</a>
          <a href="https://github.com/serhiy23471/2048-game" target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
          <a className="isPrimary" href="https://2048-game-topaz-mu.vercel.app/" target="_blank" rel="noreferrer">
            {t.liveDemo}
          </a>
          <CaseStudyLanguageSwitch />
        </div>
      </nav>

      <header className="caseStudyHero">
        <section>
          <p className="caseStudyEyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <h2 className="caseStudyHeroTitle">{t.heroTitle}</h2>
          <p>{t.intro}</p>
          <div className="caseStudyTags">
            {t.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="caseStudyHeroLinks" aria-label="Case study sections">
            <a href="#overview">{t.nav[0]}</a>
            <a href="#challenge">{t.nav[1]}</a>
            <a href="#features">{t.nav[2]}</a>
            <a href="#results">{t.nav[3]}</a>
          </div>
        </section>
        <aside className="caseStudyPreview">
          <div className="caseStudyBrowserBar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <SkeletonImage src="/projects/game-2048.png" alt="2048 game screenshot" loading="eager" />
        </aside>
      </header>

      <section className="caseStudySection" id="overview">
        <p className="caseStudyEyebrow">{t.overviewEyebrow}</p>
        <h2>{t.overviewTitle}</h2>
        <p>{t.overviewText}</p>
        <div className="caseStudyCards">
          {t.overviewItems.map((item) => (
            <article key={item}>
              <FaLayerGroup aria-hidden="true" />
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="caseStudySection" id="challenge">
        <p className="caseStudyEyebrow">{t.challengeEyebrow}</p>
        <h2>{t.challengeTitle}</h2>
        <div className="caseStudyColumns">
          <article>
            <FaBolt aria-hidden="true" />
            <h3>{t.rulesTitle}</h3>
            <IconList items={t.challenges} />
          </article>
          <article>
            <FaCode aria-hidden="true" />
            <h3>{t.goalsTitle}</h3>
            <IconList items={t.goals} />
          </article>
        </div>
      </section>

      <section className="caseStudySection">
        <p className="caseStudyEyebrow">{t.techEyebrow}</p>
        <h2>{t.techTitle}</h2>
        <div className="caseStudyColumns">
          {t.techStack.map((group) => (
            <article key={group.title}>
              <FaReact aria-hidden="true" />
              <h3>{group.title}</h3>
              <IconList items={group.items} />
            </article>
          ))}
        </div>
      </section>

      <section className="caseStudySection" id="features">
        <p className="caseStudyEyebrow">{t.featuresEyebrow}</p>
        <h2>{t.featuresTitle}</h2>
        <div className="caseStudyFeatureGrid">
          {t.features.map((feature) => {
            const Icon = feature.Icon;

            return (
              <article key={feature.title}>
                <Icon aria-hidden="true" />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <div className="caseStudySubsection">
                  <h4>{t.includes}</h4>
                  <IconList items={feature.items} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="caseStudySection">
        <p className="caseStudyEyebrow">{t.architectureEyebrow}</p>
        <h2>{t.architectureTitle}</h2>
        <p>{t.architectureText}</p>
        <div className="caseStudyFlow" aria-label="2048 game architecture flow">
          {t.flow.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="caseStudySection">
        <p className="caseStudyEyebrow">{t.fixesEyebrow}</p>
        <h2>{t.fixesTitle}</h2>
        <div className="caseStudyColumns">
          {t.engineeringFixes.map((fix) => (
            <article key={fix.title}>
              <FaRedo aria-hidden="true" />
              <h3>{fix.title}</h3>
              <p>
                <strong>{t.problem}:</strong> {fix.problem}
              </p>
              <p>
                <strong>{t.solution}:</strong> {fix.solution}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="caseStudyResult" id="results">
        <p className="caseStudyEyebrow">{t.resultsEyebrow}</p>
        <h2>{t.resultsTitle}</h2>
        <div>
          {t.results.map((result) => (
            <span key={result}>
              <FaCheck aria-hidden="true" />
              {result}
            </span>
          ))}
        </div>
      </section>

      <section className="caseStudySection">
        <p className="caseStudyEyebrow">{t.responsibilitiesEyebrow}</p>
        <h2>{t.responsibilitiesTitle}</h2>
        <div className="caseStudyTags">
          {t.responsibilities.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
