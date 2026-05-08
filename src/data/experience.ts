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
];
