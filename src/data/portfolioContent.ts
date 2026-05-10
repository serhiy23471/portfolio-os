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
    solution: 'Зробив сфокусований gaming page з темним візуальним стилем, SEO/meta для соцмереж, блоками фіч і прямим live-доменом.',
    stack: ['React', 'SCSS', 'JS', 'Node.js'],
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
    description: 'Responsive phone catalog with product cards, category pages, search, sorting, favorites, cart logic, and detailed product pages.',
    problem: 'A phone store catalog needs to stay fast and readable while users browse many products, compare details, save favorites, and manage a cart without page reloads.',
    solution: 'Built a React catalog with reusable UI components, route-based product pages, client-side state for cart and favorites, responsive layouts, and predictable catalog filtering.',
    stack: ['React', 'TypeScript', 'React Router', 'SCSS', 'REST API'],
    stars: 0,
    forks: 0,
    demoUrl: 'https://serhiy23471.github.io/react_phone-catalog/#/',
    codeUrl: 'https://github.com/serhiy23471/react_phone-catalog/tree/develop',
    caseStudyUrl: '/case-studies/nice-gadgets',
    accent: '#D97706',
    imageUrl: '/projects/nice-gadgets.png'
  },
  {
    slug: 'ui-kit',
    name: 'UI Kit',
    category: 'ui',
    description: 'Component library for pet projects with buttons, inputs, modals, tabs, cards, form states, and reusable UI tokens.',
    problem: 'Pet projects often repeat the same interface decisions and miss important states like hover, focus, loading, disabled, and validation errors.',
    solution: 'Built a compact React UI kit with CSS variables, accessible keyboard states, consistent spacing, and small demo examples for faster project starts.',
    stack: ['React', 'TypeScript', 'CSS Variables', 'A11y'],
    stars: 0,
    forks: 0,
    demoUrl: '/demos/ui-kit',
    codeUrl: 'https://github.com/serhiy23471/ui-kit',
    caseStudyUrl: '/case-studies/ui-kit',
    accent: '#7C3AED',
    imageUrl: '/projects/ui-kit.svg',
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
