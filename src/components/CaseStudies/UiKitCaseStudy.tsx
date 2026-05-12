import { useEffect } from 'react';
import { FaCheck, FaCode, FaGithub, FaKeyboard, FaLayerGroup, FaPalette, FaReact, FaUniversalAccess } from 'react-icons/fa';
import { CaseStudyLanguageSwitch } from './CaseStudyLanguageSwitch';
import { SkeletonImage } from '../UI/SkeletonImage';

const overviewItems = [
  'варіанти кнопок',
  'стани інпутів',
  'модальні вікна',
  'tabs pattern',
  'card layouts',
  'design tokens',
  'keyboard focus',
  'demo examples',
];

const challenges = [
  'У pet-проєктах часто доводиться з нуля повторювати ті самі кнопки, форми, картки й модальні вікна.',
  'Маленькі UI-стани на кшталт hover, focus, disabled, loading та error легко пропустити.',
  'Єдина візуальна система робить проєкти чистішими й пришвидшує розробку.',
  'Компоненти мають залишатися простими, щоб їх було легко використовувати в навчальних і портфоліо-проєктах.',
];

const goals = [
  'Створити компактний React UI kit для повторюваних екранів у портфоліо та pet-проєктах.',
  'Залишити компоненти читабельними, повторно використовуваними й легкими для зміни стилю через CSS variables.',
  'Показати реальні стани інтерфейсу, а не тільки статичні screenshots.',
  'Зробити demo-сторінку як швидкий візуальний reference для майбутніх проєктів.',
];

const techStack = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'Vite'] },
  { title: 'Стилізація', items: ['CSS variables', 'responsive layout', 'component states'] },
  { title: 'UX', items: ['keyboard focus', 'accessible labels', 'predictable spacing'] },
];

const features = [
  {
    Icon: FaLayerGroup,
    title: 'Набір компонентів',
    text: 'Невеликий reusable-набір для елементів, які є майже в кожному застосунку: кнопки, інпути, tabs, картки, badges і модальні вікна.',
    items: ['primary і secondary buttons', 'text fields', 'tab controls', 'content cards'],
  },
  {
    Icon: FaPalette,
    title: 'Design Tokens',
    text: 'Основні кольори, радіуси, відступи й тіні керуються через variables, тому стиль kit можна міняти без переписування компонентів.',
    items: ['color variables', 'spacing scale', 'border radius', 'surface shadows'],
  },
  {
    Icon: FaKeyboard,
    title: 'UI-стани',
    text: 'Kit показує корисні interaction states, щоб компоненти виглядали завершено в реальних сценаріях застосунку.',
    items: ['hover', 'focus-visible', 'disabled', 'loading', 'error'],
  },
  {
    Icon: FaUniversalAccess,
    title: 'Основи доступності',
    text: 'Фокус на практичних базових речах: видимий focus, зрозумілі labels, семантичні controls і keyboard-friendly UI.',
    items: ['visible focus rings', 'button semantics', 'form labels', 'contrast checks'],
  },
];

const results = [
  'Reusable component foundation для майбутніх проєктів',
  'Чистіша й швидша реалізація UI',
  'Узгоджені стани форм, кнопок, карток і модальних вікон',
  'Demo-сторінка для швидкого візуального перегляду',
  'Краща подача UI-проєкту в портфоліо',
];

const responsibilities = ['React Components', 'TypeScript Props', 'CSS Tokens', 'Interaction States', 'Responsive UI', 'Accessibility Basics', 'Demo Page', 'Project Documentation'];

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

export function UiKitCaseStudy() {
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
    <main className="caseStudyPage caseStudyPageUiKit">
      <nav className="caseStudyNav" aria-label="Case study navigation">
        <a className="caseStudyBrand" href="/">
          <FaLayerGroup aria-hidden="true" />
          UI Kit
        </a>
        <div>
          <a href="/">Портфоліо</a>
          <a href="https://github.com/serhiy23471/ui-kit" target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
          <a className="isPrimary" href="/demos/ui-kit">
            Demo
          </a>
          <CaseStudyLanguageSwitch />
        </div>
      </nav>

      <header className="caseStudyHero">
        <section>
          <p className="caseStudyEyebrow">Кейс - UI Kit</p>
          <h1>UI Kit</h1>
          <h2 className="caseStudyHeroTitle">Reusable React-компоненти й стани інтерфейсу</h2>
          <p>
            UI Kit - це компактна основа компонентів для pet-проєктів: reusable buttons, inputs, tabs, cards, modal surfaces,
            tokens і типові стани інтерфейсу, які роблять маленькі застосунки більш завершеними.
          </p>
          <div className="caseStudyTags">
            <span>React Components</span>
            <span>TypeScript</span>
            <span>CSS Variables</span>
            <span>Роль: Frontend Developer</span>
          </div>
          <div className="caseStudyHeroLinks" aria-label="Case study sections">
            <a href="#overview">Overview</a>
            <a href="#challenge">Задача</a>
            <a href="#features">Фічі</a>
            <a href="#results">Результат</a>
          </div>
        </section>
        <aside className="caseStudyPreview">
          <div className="caseStudyBrowserBar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <SkeletonImage src="/projects/ui-kit.svg" alt="Прев'ю компонентів UI Kit" loading="eager" />
        </aside>
      </header>

      <section className="caseStudySection" id="overview">
        <p className="caseStudyEyebrow">Overview</p>
        <h2>Маленька design system для швидшого старту проєктів</h2>
        <p>
          Проєкт збирає повторювані UI-рішення в одному місці. Замість того щоб щоразу заново збирати базовий інтерфейс,
          kit дає стабільну стартову точку з чіткими станами, узгодженими відступами й компонентами, які можна копіювати або розширювати.
        </p>
        <div className="caseStudyCards">
          {overviewItems.map((item) => (
            <article key={item}>
              <FaLayerGroup aria-hidden="true" />
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="caseStudySection" id="challenge">
        <p className="caseStudyEyebrow">Задача</p>
        <h2>Що вирішує цей kit</h2>
        <div className="caseStudyColumns">
          <article>
            <FaCode aria-hidden="true" />
            <h3>Повторювана UI-робота</h3>
            <IconList items={challenges} />
          </article>
          <article>
            <FaReact aria-hidden="true" />
            <h3>Цілі розробки</h3>
            <IconList items={goals} />
          </article>
        </div>
      </section>

      <section className="caseStudySection">
        <p className="caseStudyEyebrow">Tech Stack</p>
        <h2>Проста архітектура компонентів</h2>
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
        <p className="caseStudyEyebrow">Основні фічі</p>
        <h2>Ключові UI-модулі</h2>
        <div className="caseStudyFeatureGrid">
          {features.map((feature) => {
            const Icon = feature.Icon;

            return (
              <article key={feature.title}>
                <Icon aria-hidden="true" />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <div className="caseStudySubsection">
                  <h4>Включає</h4>
                  <IconList items={feature.items} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="caseStudySection">
        <p className="caseStudyEyebrow">Архітектура</p>
        <h2>Від tokens до екранів</h2>
        <p>CSS variables задають візуальну систему, невеликі React-компоненти використовують ці tokens, а demo-секції показують реальні стани.</p>
        <div className="caseStudyFlow" aria-label="UI Kit architecture flow">
          <span>Tokens</span>
          <span>Base Controls</span>
          <span>Composed Cards</span>
          <span>State Examples</span>
          <span>Demo Page</span>
        </div>
      </section>

      <section className="caseStudyResult" id="results">
        <p className="caseStudyEyebrow">Результат</p>
        <h2>Що демонструє проєкт</h2>
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
