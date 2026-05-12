import type { ExperienceItem } from './data/experience';
import type { Project } from './data/projects';
import type { Language, WindowId } from './types';

export const copy = {
  uk: {
    locale: 'uk-UA',
    windowTitles: {
      about: 'Про мене',
      work: 'Досвід роботи',
      projects: 'Проєкти',
      skills: 'Навички',
      terminal: 'Термінал',
      contact: 'Контакти',
    },
    menubar: {
      theme: 'Перемкнути чорну тему',
      language: 'EN',
      languageAria: 'Перемкнути мову на англійську',
    },
    desktop: {
      notificationTitle: 'Привіт!',
      notificationMessage: 'Спробуй відкрити Terminal.app',
      screenshotTitle: 'Знімок екрана',
      screenshotMessage: 'Зберігається знімок робочого столу...',
      wallpaperChanged: 'Шпалери змінено',
      konami: 'Konami режим відкрито.',
      changeWallpaper: 'Змінити шпалери',
      cursorTrail: 'Слід курсора',
      aboutSite: 'Про цей сайт',
    },
    about: {
      eyebrow: 'Frontend / Fullstack Portfolio',
      availability: 'Відкритий до роботи',
      location: 'Rivne, Ukraine',
      countryLabel: 'Ukraine',
      downloadCv: 'Завантажити CV',
      cvToast: 'PDF підготовлено до завантаження.',
      roles: ['Junior Frontend Developer', 'React Learner', 'UI Craftsman'],
      bio: [
        'Я junior frontend розробник, який любить чисті інтерфейси, зрозумілу логіку і маленькі деталі, через які продукт відчувається живим.',
        'Працюю з React, TypeScript та адаптивною версткою, багато практикую компонентний підхід і уважно ставлюся до станів інтерфейсу.',
        'Зараз шукаю команду, де можна рости швидко, брати відповідальність і робити корисні речі для реальних користувачів.',
      ],
      facts: ['Coffee addict', 'Guitar player', 'Cat owner'],
    },
    work: {
      eyebrow: 'Карʼєрний шлях',
      title: 'Досвід роботи',
      visit: 'Відвідати сайт',
    },
    projects: {
      sidebar: {
        all: 'Усі проєкти',
        web: 'Веб-застосунки',
        ui: 'UI бібліотеки',
        openSource: 'Відкритий код',
      },
      eyebrow: 'Пошук',
      title: 'Проєкти',
      viewProject: 'Переглянути',
      problem: 'Проблема',
      solution: 'Технічне рішення',
      caseStudy: 'Розбір проєкту',
    },
    skills: {
      tabs: {
        tech: 'Технології',
        radar: 'Радар',
        certificates: 'Сертифікати',
      },
      verify: 'Перевірити',
    },
    contact: {
      open: 'Відкритий до нових можливостей',
      timezone: 'Rivne (UTC+3) · Зараз',
      name: "Ваше ім'я *",
      email: 'Пошта *',
      topic: 'Тема',
      message: 'Повідомлення *',
      messagePlaceholder: 'Ваше повідомлення...',
      send: 'Надіслати',
      sending: 'Надсилаю...',
      sentTitle: 'Повідомлення надіслано',
      sentMessage: 'Форма готова до підключення Formspree або EmailJS.',
      emailCopied: 'Пошту скопійовано',
      options: ['Хочу вас найняти', 'Пропоную колаборацію', 'Просто поспілкуватись'],
      errors: {
        name: "Вкажіть ім'я",
        email: 'Вкажіть коректний email',
        message: 'Додайте коротке повідомлення',
      },
    },
    mobile: {
      heroEyebrow: 'Junior Frontend',
      contactCta: "Зв'язатись",
      workTitle: 'Досвід',
      projectsTitle: 'Проєкти',
      skillsTitle: 'Навички',
      contactTitle: 'Напиши мені',
    },
  },
  en: {
    locale: 'en-US',
    windowTitles: {
      about: 'About Me',
      work: 'Work Experience',
      projects: 'Projects',
      skills: 'Skills',
      terminal: 'Terminal',
      contact: 'Contact',
    },
    menubar: {
      theme: 'Toggle black theme',
      language: 'UA',
      languageAria: 'Switch language to Ukrainian',
    },
    desktop: {
      notificationTitle: 'Hi!',
      notificationMessage: 'Try opening Terminal.app',
      screenshotTitle: 'Screenshot',
      screenshotMessage: 'Saving desktop screenshot...',
      wallpaperChanged: 'Wallpaper changed',
      konami: 'Konami mode unlocked.',
      changeWallpaper: 'Change wallpaper',
      cursorTrail: 'Cursor trail',
      aboutSite: 'About this site',
    },
    about: {
      eyebrow: 'Frontend / Fullstack Portfolio',
      availability: 'Available for work',
      location: 'Kyiv, Ukraine',
      countryLabel: 'Ukraine',
      downloadCv: 'Download CV',
      cvToast: 'PDF is ready to download.',
      roles: ['Junior Frontend Developer', 'React Learner', 'UI Craftsman'],
      bio: [
        'I am a junior frontend developer who loves clean interfaces, clear logic, and small details that make a product feel alive.',
        'I work with React, TypeScript, and responsive layouts, with a strong focus on component thinking and polished UI states.',
        'I am looking for a team where I can grow quickly, take responsibility, and build useful things for real users.',
      ],
      facts: ['Coffee addict', 'Guitar player', 'Cat owner'],
    },
    work: {
      eyebrow: 'Career path',
      title: 'Work Experience',
      visit: 'Visit website',
    },
    projects: {
      sidebar: {
        all: 'All Projects',
        web: 'Web Apps',
        ui: 'UI Libraries',
        openSource: 'Open Source',
      },
      eyebrow: 'Finder',
      title: 'Projects',
      viewProject: 'View Project',
      problem: 'Problem',
      solution: 'Technical solution',
      caseStudy: 'Case study',
    },
    skills: {
      tabs: {
        tech: 'Technologies',
        radar: 'Radar',
        certificates: 'Certificates',
      },
      verify: 'Verify link',
    },
    contact: {
      open: 'Open to new opportunities',
      timezone: 'Rivne  (UTC+3) · Now',
      name: 'Your name *',
      email: 'Email *',
      topic: 'Topic',
      message: 'Message *',
      messagePlaceholder: 'Your message...',
      send: 'Send',
      sending: 'Sending...',
      sentTitle: 'Message sent',
      sentMessage: 'The form is ready to connect to Formspree or EmailJS.',
      emailCopied: 'Email copied',
      options: ['I want to hire you', 'Collaboration proposal', 'Just want to chat'],
      errors: {
        name: 'Please enter your name',
        email: 'Please enter a valid email',
        message: 'Please add a short message',
      },
    },
    mobile: {
      heroEyebrow: 'Junior Frontend',
      contactCta: 'Contact me',
      workTitle: 'Work',
      projectsTitle: 'Projects',
      skillsTitle: 'Skills',
      contactTitle: 'Write to me',
    },
  },
} as const;

const projectEnglish: Record<string, Pick<Project, 'description' | 'problem' | 'solution'>> = {
  taskflow: {
    description: 'A Kanban board with drag-and-drop, filters, and local persistence.',
    problem: 'The goal was a simple task manager with no registration that opens fast and keeps state safely.',
    solution: 'I built it with React, optimistic UI updates, local persistence, and accessible drag handles.',
  },
  shoplite: {
    description: 'A mini e-commerce app with cart logic, sorting, and responsive product cards.',
    problem: 'The catalog needed to stay clear on mobile and update the cart without page reloads.',
    solution: 'I split the UI into small components, moved cart logic into a reducer, and added lazy images.',
  },
  'weather-os': {
    description: 'A weather app with search history, unit switches, and skeleton loading states.',
    problem: 'Users needed quick weather data without layout jumps during API loading.',
    solution: 'I added recent-city caching, API state handling, and smooth skeleton placeholders.',
  },
  'notes-hub': {
    description: 'A Markdown notes app with search, tags, and split preview.',
    problem: 'The editor needed to keep writing and previewing comfortable in one compact UI.',
    solution: 'I implemented a controlled editor, debounced search, and keyboard-first navigation.',
  },
  'portfolio-os': {
    description: 'This portfolio: desktop, windows, dock, boot sequence, and terminal.',
    problem: 'A normal CV does not show how a developer thinks about UX and interaction.',
    solution: 'I built a browser OS metaphor with a window manager, responsive fallback, and terminal easter eggs.',
  },
  'myr-myr-project': {
    description: 'Landing page for a Ukrainian CS2 community server with a strong gaming style, server positioning, and feature highlights.',
    problem: 'The server needed a clear public page that quickly explains why players should join: SkinChanger, statistics, VIP options, and both competitive and fun gameplay.',
    solution: 'I built a focused gaming landing page with dark visual styling, SEO and social preview metadata, feature sections, and a direct live domain for players.',
  },
  'nice-gadgets': {
    description: 'Responsive phone catalog with product cards, category pages, search, sorting, favorites, cart logic, and detailed product pages.',
    problem: 'A phone store catalog needs to stay fast and readable while users browse many products, compare details, save favorites, and manage a cart without page reloads.',
    solution: 'I built a React catalog with reusable UI components, route-based product pages, client-side state for cart and favorites, responsive layouts, and predictable catalog filtering.',
  },
  'admin-pulse': {
    description: 'A dashboard with tables, filters, charts, and compact operational UI.',
    problem: 'Operational teams need dense interfaces without marketing-style sections.',
    solution: 'I created a scannable layout, sticky controls, and clear empty, error, and loading states.',
  },
  'ui-sprout': {
    description: 'A small component kit: buttons, inputs, tabs, modals, and toasts.',
    problem: 'Pet projects often duplicate the same UI decisions without consistent states.',
    solution: 'I built a compact component library with focus states, tokens, and a demo page.',
  },
  '2048-game': {
    description: 'Playable 2048 puzzle game with tile movement, merge logic, score tracking, restart flow, and responsive layout.',
    problem: 'A small game still needs reliable rules: tiles should merge once per move, invalid moves should not spawn new tiles, and the board should stay comfortable on desktop and mobile.',
    solution: 'I built a JavaScript game with clear board logic, move handling, score updates, responsive SCSS layout, and a focused Vercel demo.',
  },
  'form-kit': {
    description: 'Form patterns with realtime validation, masks, and accessible errors.',
    problem: 'Forms often fail on labels, errors, keyboard flow, and mobile input details.',
    solution: 'I created a reusable field API and covered edge cases for email, textarea, select, and disabled states.',
  },
  'motion-snips': {
    description: 'A collection of micro-interactions for cards, menus, dialogs, and buttons.',
    problem: 'Animations should help the interface, not distract from it.',
    solution: 'I collected short transition patterns with prefers-reduced-motion fallbacks.',
  },
  'open-widgets': {
    description: 'Small profile widgets: status, stack, timeline, and project badges.',
    problem: 'Developers need polished but lightweight blocks for READMEs and portfolios.',
    solution: 'I made configurable components with a minimal API and quick-start docs.',
  },
  'bug-notes': {
    description: 'An issue-report template for bugs, reproduction steps, and expected results.',
    problem: 'Beginners often struggle to describe bugs in a way a team can reproduce quickly.',
    solution: 'I prepared a simple template, examples, and a QA-friendly checklist.',
  },
  'css-lab': {
    description: 'A CSS pattern playground: grid layouts, glass panels, and responsive utilities.',
    problem: 'CSS is easier to learn when patterns can be adjusted and compared directly.',
    solution: 'I collected isolated examples with notes on variables, constraints, and responsive behavior.',
  },
};

const experienceEnglish: Record<string, Pick<ExperienceItem, 'role' | 'company' | 'highlights'>> = {
  'myr-myr-project': {
    company: 'Myr-Myr Project',
    role: 'Fullstack Developer',
    highlights: [
      'Built the Myr-Myr Project website: a landing page for a Ukrainian CS2 server with a dark gaming visual style.',
      'Handled the fullstack scope: application structure, frontend interface, live domain integration, and SEO/social metadata.',
      'Created sections for the server features: SkinChanger, statistics, VIP, competitive gameplay, and fun server experience.',
      'Improved responsiveness, page performance, basic optimization, and preparation for public launch.',
    ],
  },
  'portfolio-os': {
    company: 'Portfolio OS',
    role: 'Frontend Developer',
    highlights: [
      'Created an interactive portfolio in a desktop OS style with windows, dock, boot screen, terminal, and a separate mobile version.',
      'Built a window manager with open, close, focus, minimize, maximize, position, and z-index states.',
      'Moved profile, projects, certificates, skills, and experience into a data-driven structure for fast content updates.',
      'Added project detail windows, case study pages, terminal commands, theme switching, and a responsive mobile fallback.',
    ],
  },
  'nice-gadgets': {
    company: 'Nice Gadgets',
    role: 'Frontend Developer',
    highlights: [
      'Developed a responsive phone catalog with categories, product cards, product detail pages, search, and sorting.',
      'Implemented client-side cart and favorites logic without page reloads.',
      'Built reusable UI components for catalog layout, product cards, navigation, empty states, and responsive grids.',
      'Prepared GitHub Pages deployment and a dedicated case study describing the architecture and user flow.',
    ],
  },
  '2048-game': {
    company: '2048 Game',
    role: 'Frontend Developer',
    highlights: [
      'Built a playable 2048 puzzle game with JavaScript, SCSS, HTML, tile movement, merge rules, score tracking, and restart flow.',
      'Implemented board state updates so invalid moves do not spawn new tiles or change the score.',
      'Added keyboard-friendly controls and responsive layout for desktop and mobile screens.',
      'Prepared a live Vercel deployment and a dedicated case study with demo and GitHub links.',
    ],
  },
};

export function getWindowTitle(id: WindowId, fallback: string, language: Language) {
  if (id.startsWith('project-')) return fallback;
  const key = id as keyof typeof copy.uk.windowTitles;
  return copy[language].windowTitles[key] ?? fallback;
}

export function getProjectText(project: Project, language: Language) {
  if (language === 'uk') return project;
  return {
    ...project,
    ...projectEnglish[project.slug],
  };
}

export function getExperienceText(item: ExperienceItem, language: Language) {
  if (language === 'uk') return item;
  return {
    ...item,
    ...experienceEnglish[item.id],
  };
}
