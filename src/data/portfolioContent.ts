import type { Project } from './projects';

export const portfolioProfile = {
  name: 'Serhii',
  role: 'Junior Frontend Developer',
  location: 'Rivne, Ukraine',
  email: 'sergsy.pyatachenko@gmail.com',
  timezone: 'Europe/Kyiv',
  handle: '@serhii.dev',
  // Put your photo into public/profile/ and set the path here.
  // Example: avatarUrl: '/profile/serhii.jpg'
  avatarUrl: '/profile/serhii.jpg',
  contactAvatarUrl: '',
  socials: {
    github: 'https://github.com/serhiy23471',
    linkedin: 'https://www.linkedin.com/in/serhii-dev',
    twitter: 'https://x.com/serhii_dev',
    email: 'mailto:sergsy.pyatachenko@gmail.com',
  },
  bio: [
    'I am a junior frontend developer focused on clean interfaces, clear logic, and responsive user experiences.',
    'I work with React, TypeScript, JavaScript, HTML, CSS, Vite, and Git.',
    'I am looking for a team where I can grow, take responsibility, and build useful products for real users.',
  ],
  facts: ['Coffee and code', 'Frontend practice', 'Clean UI details'],
  roles: ['Junior Frontend Developer', 'React Developer', 'UI-focused Engineer'],
};

// Add or edit projects here. They automatically appear in Projects.app,
// project detail windows, and the mobile portfolio.
export const portfolioProjects: Project[] = [
  {
    slug: 'portfolio-os',
    name: 'Portfolio OS',
    category: 'web',
    description: 'Інтерактивне портфоліо у стилі desktop OS з вікнами, dock, boot screen, терміналом і мобільною версією.',
    problem: 'Звичайна CV-сторінка погано показує мислення про UX, інтерактивність, структуру компонентів і увагу до деталей.',
    solution: 'Побудував React + TypeScript інтерфейс з менеджером вікон, адаптивною мобільною версією і data-driven секціями.',
    stack: ['React', 'TypeScript', 'Zustand'],
    stars: 0,
    forks: 0,
    demoUrl: 'https://example.com/portfolio-os',
    codeUrl: 'https://github.com/serhii-dev/portfolio-os',
    caseStudyUrl: '/case-studies/portfolio-os',
    accent: '#2563EB',
    imageUrl: '/projects/portfolio-os.png',
  },
  {
    slug: 'myr-myr-project',
    name: 'Myr-Myr Project',
    category: 'web',
    description: 'Сайт для українського CS2 community. Server з ігровою атмосферою, позиціонуванням сервера і блоками ключових можливостей.',
    problem: 'Серверу потрібна зрозуміла публічна сторінка, яка швидко пояснює гравцям переваги: SkinChanger, статистика, VIP, competitive і fun gameplay.',
    solution: 'Зробив сфокусований gaming website з темним візуальним стилем, SEO/meta для соцмереж, блоками фіч і прямим live-доменом.',
    stack: ['React', 'SCSS', 'JavaScript', 'Node.js'],
    stars: 0,
    forks: 0,
    demoUrl: 'https://myr-myr.fun/',
    codeUrl: 'https://github.com/serhiy23471/myr-myr-project',
    caseStudyUrl: '/case-studies/myr-myr-project',
    accent: '#DC2626',
    imageUrl: '/projects/myr-myr-project.png',
  },
  {
    slug: 'nice-gadgets',
    name: 'Nice Gadgets',
    category: 'web',
    description: 'Адаптивний каталог телефонів із картками товарів, категоріями, пошуком, сортуванням, favorites, кошиком і детальними сторінками.',
    problem: 'Каталог магазину має залишатися швидким і зрозумілим, поки користувач переглядає товари, порівнює характеристики, зберігає favorites і керує кошиком без перезавантаження.',
    solution: 'Побудував React каталог із reusable UI-компонентами, route-based product pages, client-side state для cart/favorites, responsive layouts і передбачуваною фільтрацією.',
    stack: ['React', 'TypeScript', 'SCSS', 'React Router', 'REST API'],
    stars: 0,
    forks: 0,
    demoUrl: 'https://serhiy23471.github.io/react_phone-catalog/#/',
    codeUrl: 'https://github.com/serhiy23471/react_phone-catalog/tree/develop',
    caseStudyUrl: '/case-studies/nice-gadgets',
    accent: '#D97706',
    imageUrl: '/projects/nice-gadgets.png'
  },
  {
    slug: '2048-game',
    name: '2048 Game',
    category: 'web',
    description: 'Playable 2048 puzzle game з рухом плиток, merge logic, score tracking, restart flow і responsive layout.',
    problem: 'Навіть маленька гра потребує надійних правил: плитки мають merge тільки один раз за move, invalid moves не повинні створювати нові плитки, а board має бути зручним на desktop і mobile.',
    solution: 'Побудував гру на JavaScript із чіткою board logic, обробкою рухів, score updates, responsive SCSS layout і live Vercel demo.',
    stack: ['JavaScript', 'SCSS', 'HTML'],
    stars: 0,
    forks: 0,
    demoUrl: 'https://2048-game-topaz-mu.vercel.app/',
    codeUrl: 'https://github.com/serhiy23471/2048-game',
    caseStudyUrl: '/case-studies/2048-game',
    accent: '#F59E0B',
    imageUrl: '/projects/game-2048.png',
  },
];

// Put certificate images into public/certificates/.
// Then set imageUrl to "/certificates/your-file-name.jpg" or .png/.webp/.pdf.
// They automatically appear in Skills.app with preview and download actions.
export const portfolioCertificates = [
  {
    title: 'JavaScript Advanced',
    organization: 'Mate academy',
    date: '2025',
    url: '/certificates/piatachenko-certificate-javascript-advanced.pdf',
    imageUrl: '/certificates/piatachenko-certificate-javascript-advanced.pdf',
    downloadName: 'piatachenko-certificate-javascript-advanced.pdf',
  },
  {
    title: 'HTML + CSS Advanced',
    organization: 'Mate academy',
    date: '2025',
    url: '/certificates/piatachenko-certificate-html-css-advanced.pdf',
    imageUrl: '/certificates/piatachenko-certificate-html-css-advanced.pdf',
    downloadName: 'piatachenko-certificate-html-css-advanced.pdf',
  },
  {
    title: 'React',
    organization: 'Mate academy',
    date: '2025',
    url: '/certificates/piatachenko-certificate-react.pdf',
    imageUrl: '/certificates/piatachenko-certificate-react.pdf',
    downloadName: 'piatachenko-certificate-react.pdf',
  },
  {
    title: 'React with TypeScript',
    organization: 'Mate academy',
    date: '2026',
    url: '/certificates/piatachenko-certificate-react-typescript.pdf',
    imageUrl: '/certificates/piatachenko-certificate-react-typescript.pdf',
    downloadName: 'piatachenko-certificate-react-typescript.pdf',
  },
  {
    title: 'Redux',
    organization: 'Mate academy',
    date: '2026',
    url: '/certificates/piatachenko-certificate-redux.pdf',
    imageUrl: '/certificates/piatachenko-certificate-redux.pdf',
    downloadName: 'piatachenko-certificate-redux.pdf',
  },
];
