import { useEffect } from 'react';
import {
  FaCheck,
  FaCode,
  FaDatabase,
  FaFilter,
  FaGithub,
  FaHeart,
  FaLayerGroup,
  FaMobileAlt,
  FaReact,
  FaRoute,
  FaSearch,
  FaShoppingCart,
} from 'react-icons/fa';

const overviewItems = [
  'phone catalog',
  'product categories',
  'product details',
  'search and sorting',
  'favorites flow',
  'cart logic',
  'responsive layout',
  'GitHub Pages deploy',
];

const challenges = [
  'каталог має бути зручним для перегляду великої кількості товарів',
  'користувач повинен швидко знаходити потрібну модель через пошук, категорії та сортування',
  'кошик і favorites мають оновлюватися без перезавантаження сторінки',
  'детальна сторінка товару має показувати характеристики і повертати користувача до каталогу',
  'інтерфейс повинен однаково добре працювати на desktop, tablet і mobile екранах',
];

const goals = [
  'побудувати реалістичний e-commerce catalog experience',
  'показати роботу з React, TypeScript, routing і станом інтерфейсу',
  'розділити UI на повторно використовувані компоненти',
  'зробити передбачувану логіку cart і favorites',
  'зберегти чисту адаптивну верстку для різних viewport',
];

const techStack = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'SCSS', 'React Router'] },
  { title: 'Data & State', items: ['REST-style product data', 'client-side filtering', 'cart state', 'favorites state'] },
  { title: 'UX Details', items: ['responsive grids', 'product cards', 'category navigation', 'empty states', 'GitHub Pages routing'] },
];

const features = [
  {
    Icon: FaMobileAlt,
    title: 'Product Catalog',
    text: 'Каталог показує телефони у зрозумілій сітці з ціною, знижкою, основними характеристиками і діями для кошика та favorites.',
    items: ['product cards', 'category pages', 'price display', 'quick actions'],
  },
  {
    Icon: FaSearch,
    title: 'Search & Sorting',
    text: 'Користувач може звузити список товарів через пошук, категорії, pagination-style browsing і сортування за потрібним сценарієм.',
    items: ['search query', 'sort options', 'category filters', 'visible result state'],
  },
  {
    Icon: FaShoppingCart,
    title: 'Cart Flow',
    text: 'Кошик працює як окремий user flow: додавання товарів, зміна кількості, видалення позицій і перерахунок підсумкової суми.',
    items: ['add to cart', 'quantity controls', 'remove item', 'total price calculation'],
  },
  {
    Icon: FaHeart,
    title: 'Favorites',
    text: 'Favorites дає можливість відкласти товари і повернутися до них без втрати контексту під час перегляду каталогу.',
    items: ['toggle favorite', 'favorites page', 'saved products', 'empty state'],
  },
  {
    Icon: FaRoute,
    title: 'Product Pages',
    text: 'Окремі сторінки товарів допомагають порівняти деталі: фото, кольори, capacity options, ціну і технічні характеристики.',
    items: ['dynamic route', 'product gallery', 'specifications', 'back navigation'],
  },
  {
    Icon: FaLayerGroup,
    title: 'Reusable UI',
    text: 'Компоненти каталогу розділені так, щоб картки, списки, кнопки, навігація і стани можна було підтримувати без дублювання.',
    items: ['shared components', 'layout sections', 'button states', 'consistent spacing'],
  },
];

const engineeringFixes = [
  {
    title: 'Catalog State',
    problem: 'пошук, сортування, категорії і сторінки каталогу можуть швидко створити заплутану логіку',
    solution: 'розділив відповідальність між route state, даними продуктів і UI-компонентами, щоб кожен сценарій мав прогнозований результат',
  },
  {
    title: 'Cart Consistency',
    problem: 'кошик має правильно реагувати на повторне додавання товару, зміну кількості і видалення позиції',
    solution: 'виніс поведінку кошика у стабільні handlers з перерахунком totals після кожної зміни',
  },
  {
    title: 'Responsive Product Grid',
    problem: 'картки з цінами, кнопками і характеристиками легко ламають layout на вузьких екранах',
    solution: 'налаштував адаптивні grid правила, контрольовані відступи і компактні стани для mobile viewport',
  },
];

const results = [
  'Realistic e-commerce catalog project',
  'Product browsing, details, cart and favorites flows',
  'Reusable React component structure',
  'Responsive layout across screen sizes',
  'Search, sorting and category-based navigation',
  'Public GitHub Pages deployment',
];

const responsibilities = [
  'React Development',
  'TypeScript Logic',
  'Routing',
  'Catalog UI',
  'Cart & Favorites State',
  'Responsive SCSS',
  'Component Composition',
  'Deployment',
];

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

export function NiceGadgetsCaseStudy() {
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
    <main className="caseStudyPage caseStudyPageGadgets">
      <nav className="caseStudyNav" aria-label="Case study navigation">
        <a className="caseStudyBrand" href="/">
          <FaMobileAlt aria-hidden="true" />
          Nice Gadgets
        </a>
        <div>
          <a href="/">Portfolio</a>
          <a href="https://github.com/serhiy23471/react_phone-catalog/tree/develop" target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
          <a className="isPrimary" href="https://serhiy23471.github.io/react_phone-catalog/#/" target="_blank" rel="noreferrer">
            Live Demo
          </a>
        </div>
      </nav>

      <header className="caseStudyHero">
        <section>
          <p className="caseStudyEyebrow">Case Study — Nice Gadgets</p>
          <h1>Nice Gadgets</h1>
          <h2 className="caseStudyHeroTitle">Responsive Phone Catalog & E-commerce UI</h2>
          <p>
            Nice Gadgets is a React phone catalog that works like a small e-commerce product browser: categories, product cards,
            detailed pages, search, sorting, favorites, cart logic and a responsive layout for real shopping scenarios.
          </p>
          <div className="caseStudyTags">
            <span>Phone Catalog</span>
            <span>React + TypeScript</span>
            <span>Responsive E-commerce UI</span>
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
          <img src="/projects/nice-gadgets.png" alt="Nice Gadgets catalog screenshot" />
        </aside>
      </header>

      <section className="caseStudySection" id="overview">
        <p className="caseStudyEyebrow">Overview</p>
        <h2>Catalog experience with real product flows</h2>
        <p>
          Проєкт показує не просто верстку магазину, а повний frontend-flow для каталогу: користувач заходить у категорію,
          шукає потрібний товар, відкриває детальну сторінку, додає позиції у favorites або cart і бачить актуальний стан без reload.
        </p>
        <div className="caseStudyCards">
          {overviewItems.map((item) => (
            <article key={item}>
              <FaMobileAlt aria-hidden="true" />
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
            <FaFilter aria-hidden="true" />
            <h3>Завдання каталогу</h3>
            <IconList items={challenges} />
          </article>
          <article>
            <FaCode aria-hidden="true" />
            <h3>Цілі розробки</h3>
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
        <h2>Core catalog modules</h2>
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
        <h2>User flow and data flow</h2>
        <p>
          Користувач рухається від категорії до товару, а React-компоненти синхронізують route, product data, cart і favorites state.
        </p>
        <div className="caseStudyFlow" aria-label="Nice Gadgets architecture flow">
          <span>Category Route</span>
          <span>Product Data</span>
          <span>Catalog UI</span>
          <span>Product Page</span>
          <span>Cart / Favorites</span>
        </div>
      </section>

      <section className="caseStudySection">
        <p className="caseStudyEyebrow">Engineering Challenges Solved</p>
        <h2>Some notable fixes</h2>
        <div className="caseStudyColumns">
          {engineeringFixes.map((fix) => (
            <article key={fix.title}>
              <FaDatabase aria-hidden="true" />
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
