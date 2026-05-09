export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate?: string;
  type: 'Full-time' | 'Freelance' | 'Contract' | 'Learning';
  stack: string[];
  highlights: string[];
  url: string;
}

export const experience: ExperienceItem[] = [
  {
    id: 'myr-myr-project',
    company: 'Myr-Myr Project',
    role: 'Fullstack Developer',
    period: '2026 - Present',
    startDate: '2026-03-23',
    type: 'Freelance',
    stack: ['React', 'SCSS', 'JS', 'SEO', 'Deployment'],
    highlights: [
      'Розробив сайт для Myr-Myr Project для українського CS2 сервера з темною gaming-стилістикою.',
      'Займався fullstack-частиною: структура застосунку, frontend-інтерфейс, інтеграція live-домену, SEO/meta для соцмереж.',
      'Опрацював блоки з ключовими можливостями сервера: SkinChanger, статистика, VIP, competitive і fun gameplay.',
      'Налаштував адаптивність, продуктивність, базову оптимізацію сторінки і підготовку до публічного запуску.',
    ],
    url: 'https://myr-myr.fun/',
  },
  {
    id: 'portfolio-os',
    company: 'Portfolio OS',
    role: 'Frontend Developer',
    period: '2026',
    startDate: '2026-02-01',
    type: 'Learning',
    stack: ['React', 'TypeScript', 'Zustand', 'Vite', 'CSS'],
    highlights: [
      'Створив інтерактивне портфоліо у стилі desktop OS з вікнами, dock, boot screen, terminal і мобільною версією.',
      'Побудував window manager зі станами open, close, focus, minimize, maximize, position і z-index.',
      'Виніс профіль, проєкти, сертифікати, навички та досвід у data-driven структуру для швидкого оновлення контенту.',
      'Додав project detail windows, case study сторінки, terminal commands, theme switch і responsive fallback для мобільних екранів.',
    ],
    url: 'https://portfolio-os-lovat.vercel.app/',
  },
  {
    id: 'nice-gadgets',
    company: 'Nice Gadgets',
    role: 'Frontend Developer',
    period: '2025 - 2026',
    startDate: '2025-11-01',
    endDate: '2026-01-31',
    type: 'Learning',
    stack: ['React', 'TypeScript', 'React Router', 'SCSS', 'REST API'],
    highlights: [
      'Розробив responsive phone catalog з категоріями, картками товарів, детальними сторінками, пошуком і сортуванням.',
      'Реалізував client-side логіку для cart і favorites без перезавантаження сторінки.',
      'Побудував reusable UI-компоненти для каталогу, product cards, navigation, empty states і responsive grid.',
      'Підготував GitHub Pages deployment і окремий case study з описом архітектури та user flow.',
    ],
    url: 'https://serhiy23471.github.io/react_phone-catalog/#/',
  },
  {
    id: 'ui-kit',
    company: 'UI Kit',
    role: 'Frontend Developer',
    period: '2025',
    startDate: '2025-09-01',
    endDate: '2025-10-31',
    type: 'Learning',
    stack: ['React', 'CSS Variables', 'A11y', 'Component Design'],
    highlights: [
      'Зібрав набір повторно використовуваних UI-компонентів для pet-проєктів: кнопки, inputs, modals, tabs, cards і form states.',
      'Опрацював hover, focus, loading, disabled і error стани, щоб компоненти були передбачуваними у різних сценаріях.',
      'Використав CSS variables для кольорів, spacing і базових токенів, щоб швидше підтримувати єдиний стиль.',
      'Сфокусувався на доступності, keyboard states і чистій структурі компонентів.',
    ],
    url: 'https://github.com/serhii-dev/ui-kit',
  },
];
