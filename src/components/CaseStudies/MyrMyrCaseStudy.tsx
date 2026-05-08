import {
  FaBug,
  FaChartLine,
  FaCheck,
  FaCode,
  FaDatabase,
  FaGamepad,
  FaGithub,
  FaLayerGroup,
  FaPaintBrush,
  FaPalette,
  FaServer,
  FaSteam,
  FaTicketAlt,
  FaTools,
} from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { useEffect } from 'react';

const overviewItems = ['ігровий сервер', 'власний вебсайт', 'Steam авторизацію', 'систему скінів', 'адмін-панель', 'систему тікетів', 'live моніторинг серверу', 'кастомний UI у стилі gaming/community platform'];

const challengeProblems = ['застарілі CMS', 'незручні адмінки', 'слабку інтеграцію зі Steam', 'відсутність сучасного UI/UX', 'ручне керування серверами'];

const challengeGoals = ['сучасний gaming web platform', 'автоматизовану систему адміністрування', 'повну Steam інтеграцію', 'кастомний SkinChanger', 'responsive UI', 'live server ecosystem'];

const techStack = [
  { title: 'Frontend', items: ['React', 'SCSS', 'Vite', 'React Context API', 'React Icons'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'Passport Steam', 'MySQL', 'PM2', 'Nginx'] },
  { title: 'Game Integration', items: ['CounterStrikeSharp', 'WeaponPaints', 'DatHost API', 'GameDig', 'Steam OpenID'] },
];

const designIdentity = ['червоно-чорна тема', 'gaming UI', 'neon/shadow effects', 'котячий branding', 'custom scrollbars', 'animated cards & modals'];

const features: Array<{
  Icon: IconType;
  title: string;
  intro: string;
  groups: Array<{ title: string; items: string[] }>;
}> = [
  {
    Icon: FaSteam,
    title: 'Steam Authentication',
    intro: 'Було реалізовано повну Steam OpenID авторизацію. Також було перероблено serialize/deserialize логіку для стабільності після рестартів сервера.',
    groups: [
      {
        title: 'Authentication flow',
        items: ['login/logout', 'Steam avatar sync', 'профіль гравця', 'persistent sessions', 'secure cookies', 'Express session handling'],
      },
    ],
  },
  {
    Icon: FaPaintBrush,
    title: 'Advanced SkinChanger System',
    intro: 'Було створено повністю кастомний інтерфейс для керування loadout і косметичними елементами гравця.',
    groups: [
      {
        title: 'Supported customization',
        items: ['weapon skins', 'knives', 'gloves', 'agents', 'music kits', 'pins', 'stickers', 'StatTrak', 'float/seed settings'],
      },
      {
        title: 'API Endpoints',
        items: ['/api/skins/all', '/api/skins/weapon', '/api/skins/knife', '/api/skins/gloves', '/api/skins/music', '/api/skins/pin'],
      },
      {
        title: 'UI System',
        items: ['sidebar navigation', 'rarity colors', 'live selected loadout preview', 'weapon search', 'rarity sorting', 'responsive cards', 'animated modals'],
      },
    ],
  },
  {
    Icon: FaTools,
    title: 'Admin Panel',
    intro: 'Одна з ключових частин платформи — власна адмін система для керування сервером і модерації.',
    groups: [
      {
        title: 'Dashboard',
        items: ['live online', 'current map', 'server IP', 'DatHost metrics'],
      },
      {
        title: 'Server Management',
        items: ['console commands', 'start/stop server', 'player management'],
      },
      {
        title: 'Moderation',
        items: ['bans', 'mutes', 'VIP management', 'admin management', 'audit logs'],
      },
    ],
  },
  {
    Icon: FaTicketAlt,
    title: 'Ticket System',
    intro: 'Було створено повноцінну support систему. Особливу увагу було приділено UX для діалогів, вкладень і довгих повідомлень.',
    groups: [
      {
        title: 'Features',
        items: ['image uploads', 'live chat', 'admin replies', 'ticket statuses', 'sticky ticket lists', 'image lightbox', 'expandable history'],
      },
      {
        title: 'UX details',
        items: ['chat bubble styling', 'responsive layout', 'long text wrapping', 'modal previews', 'attachment handling'],
      },
    ],
  },
  {
    Icon: FaChartLine,
    title: 'Real-Time Server Integration',
    intro: 'Сайт отримує дані в реальному часі, а оновлення відбувається автоматично кожні 30 секунд.',
    groups: [
      {
        title: 'Live Server Data',
        items: ['online players', 'server status', 'current map', 'server metrics', 'player lists'],
      },
      {
        title: 'Technologies Used',
        items: ['GameDig', 'DatHost API'],
      },
    ],
  },
  {
    Icon: FaLayerGroup,
    title: 'Responsive Experience',
    intro: 'Було адаптовано основні частини інтерфейсу і додано мобільні патерни навігації.',
    groups: [
      {
        title: 'Adapted areas',
        items: ['Hero section', 'Navbar', 'Players', 'Tables', 'Comments system', 'Mobile menu'],
      },
      {
        title: 'Added',
        items: ['hamburger navigation', 'responsive grids', 'mobile-friendly layouts'],
      },
    ],
  },
];

const engineeringFixes = [
  {
    title: 'React Hooks Violations',
    problem: 'useState() всередині .map()',
    solution: 'винесення логіки в окремі компоненти',
  },
  {
    title: 'Steam Session Failures',
    problem: 'старі сесії ламались після рестарту сервера',
    solution: 'serialize тільки steamId, повторне завантаження юзера з БД',
  },
  {
    title: 'Large Image Uploads',
    problem: 'Express блокував base64 upload',
    solution: 'збільшення express.json() limit до 15MB',
  },
  {
    title: 'JSON Parsing Issues',
    problem: 'MySQL повертав JSON іноді як object',
    solution: "універсальна перевірка: typeof raw === 'string'",
  },
];

const results = [
  'Modern gaming platform architecture',
  'Fully custom CS2 ecosystem',
  'Real-time server integration',
  'Advanced admin automation',
  'Full Steam integration',
  'Responsive UI/UX',
  'Scalable backend architecture',
  'Custom SkinChanger system',
  'Professional gaming branding',
];

const takeawayItems = ['вебсайт', 'сервер', 'Steam', 'адміністрація', 'кастомізація', 'підтримка гравців'];

const responsibilities = ['Frontend Architecture', 'Backend API Development', 'Steam Authentication', 'Game Server Integration', 'Database Design', 'UI/UX Design', 'Admin Systems', 'Deployment & Infrastructure'];

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

export function MyrMyrCaseStudy() {
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
    <main className="caseStudyPage">
      <nav className="caseStudyNav" aria-label="Case study navigation">
        <a className="caseStudyBrand" href="/">
          <FaGamepad aria-hidden="true" />
          MYR-MYR Project
        </a>
        <div>
          <a href="/">Portfolio</a>
          <a href="https://github.com/serhiy23471/myr-myr-project" target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
          <a className="isPrimary" href="https://myr-myr.fun/" target="_blank" rel="noreferrer">
            Live Project
          </a>
        </div>
      </nav>

      <header className="caseStudyHero">
        <section>
          <p className="caseStudyEyebrow">Case Study — MYR-MYR Project</p>
          <h1>MYR-MYR Project</h1>
          <h2 className="caseStudyHeroTitle">CS2 Gaming Platform & Community Ecosystem</h2>
          <p>
            MYR-MYR Project — це сучасна екосистема для CS2 серверу, створена як повноцінна платформа для комʼюніті,
            а не просто landing page для серверу.
          </p>
          <div className="caseStudyTags">
            <span>Gaming Platform</span>
            <span>CS2 Community Ecosystem</span>
            <span>Fullstack Web Application</span>
            <span>Role: Fullstack Developer</span>
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
          <img src="/projects/myr-myr-project.png" alt="MYR-MYR Project website screenshot" />
        </aside>
      </header>

      <section className="caseStudySection" id="overview">
        <p className="caseStudyEyebrow">Overview</p>
        <h2>MYR-MYR Project</h2>
        <p>MYR-MYR Project — це сучасна екосистема для CS2 серверу, яка поєднує:</p>
        <div className="caseStudyCards">
          {overviewItems.map((item) => (
            <article key={item}>
              <FaGamepad aria-hidden="true" />
              <h3>{item}</h3>
            </article>
          ))}
        </div>
        <p className="caseStudyBlockText">
          Проєкт був створений як повноцінна платформа для комʼюніті, а не просто landing page для серверу.
          Основний фокус — UX, автоматизація адміністрації та глибока інтеграція з CS2 сервером.
        </p>
      </section>

      <section className="caseStudySection" id="challenge">
        <p className="caseStudyEyebrow">Challenge</p>
        <h2>Що потрібно було змінити</h2>
        <div className="caseStudyColumns">
          <article>
            <FaBug aria-hidden="true" />
            <h3>Більшість CS2 серверів використовують</h3>
            <IconList items={challengeProblems} />
          </article>
          <article>
            <FaTools aria-hidden="true" />
            <h3>Задача MYR-MYR була створити</h3>
            <IconList items={challengeGoals} />
          </article>
        </div>
      </section>

      <section className="caseStudySection">
        <p className="caseStudyEyebrow">Tech Stack</p>
        <h2>Frontend, backend and game integration</h2>
        <div className="caseStudyColumns">
          {techStack.map((group) => (
            <article key={group.title}>
              <FaCode aria-hidden="true" />
              <h3>{group.title}</h3>
              <IconList items={group.items} />
            </article>
          ))}
        </div>
      </section>

      <section className="caseStudySection">
        <p className="caseStudyEyebrow">Design System</p>
        <h2>Visual Identity</h2>
        <div className="caseStudyColumns">
          <article>
            <FaPalette aria-hidden="true" />
            <h3>Стиль</h3>
            <p>Проєкт отримав власний впізнаваний стиль:</p>
            <IconList items={designIdentity} />
          </article>
          <article>
            <FaPaintBrush aria-hidden="true" />
            <h3>Primary Colors</h3>
            <div className="caseStudySwatches">
              <span style={{ background: '#FA3A3A' }}>#FA3A3A</span>
              <span style={{ background: '#0d0000' }}>#0d0000</span>
            </div>
          </article>
          <article>
            <FaLayerGroup aria-hidden="true" />
            <h3>Fonts</h3>
            <IconList items={['Shojumaru', 'Nunito']} />
          </article>
        </div>
      </section>

      <section className="caseStudySection" id="features">
        <p className="caseStudyEyebrow">Main Features</p>
        <h2>Повна функціональність платформи</h2>
        <div className="caseStudyFeatureGrid">
          {features.map((feature) => {
            const Icon = feature.Icon;
            return (
              <article key={feature.title}>
                <Icon aria-hidden="true" />
                <h3>{feature.title}</h3>
                <p>{feature.intro}</p>
                {feature.groups.map((group) => (
                  <div className="caseStudySubsection" key={group.title}>
                    <h4>{group.title}</h4>
                    <IconList items={group.items} />
                  </div>
                ))}
              </article>
            );
          })}
        </div>
      </section>

      <section className="caseStudySection">
        <p className="caseStudyEyebrow">Architecture</p>
        <h2>Advanced SkinChanger System</h2>
        <p>Architecture:</p>
        <div className="caseStudyFlow" aria-label="SkinChanger architecture flow">
          <span>CS2 Server</span>
          <span>WeaponPaints</span>
          <span>MySQL</span>
          <span>Node.js API</span>
          <span>React UI</span>
        </div>
      </section>

      <section className="caseStudySection">
        <p className="caseStudyEyebrow">Engineering Challenges Solved</p>
        <h2>Some notable fixes</h2>
        <div className="caseStudyColumns">
          {engineeringFixes.map((fix) => (
            <article key={fix.title}>
              <FaBug aria-hidden="true" />
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
        <h2>The project achieved</h2>
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
        <p className="caseStudyEyebrow">Key Takeaways</p>
        <h2>MYR-MYR став gaming platform ecosystem</h2>
        <p>MYR-MYR став не просто сайтом для сервера, а повноцінною gaming platform ecosystem, де:</p>
        <div className="caseStudyCards">
          {takeawayItems.map((item) => (
            <article key={item}>
              <FaServer aria-hidden="true" />
              <h3>{item}</h3>
            </article>
          ))}
        </div>
        <p className="caseStudyBlockText">працюють як одна система.</p>
      </section>

      <section className="caseStudySection">
        <p className="caseStudyEyebrow">Live Project</p>
        <h2>MYR-MYR Project</h2>
        <div className="caseStudyColumns">
          <article>
            <FaGamepad aria-hidden="true" />
            <h3>Project Type</h3>
            <p>Gaming Platform / CS2 Community Ecosystem / Fullstack Web Application</p>
          </article>
          <article>
            <FaCode aria-hidden="true" />
            <h3>Role</h3>
            <p>Fullstack Developer</p>
          </article>
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
