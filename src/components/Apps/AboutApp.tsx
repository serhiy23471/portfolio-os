import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMagic, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';
import { profile } from '../../data/profile';
import { useTypewriter } from '../../hooks/useTypewriter';
import { copy } from '../../i18n';
import { useDesktopStore } from '../../store/desktopStore';

export function AboutApp() {
  const language = useDesktopStore((state) => state.language);
  const addToast = useDesktopStore((state) => state.addToast);
  const t = copy[language].about;
  const typedRole = useTypewriter(t.roles);
  const avatarUrl = profile.avatarUrl;

  const downloadCv = () => {
    const blob = createResumePdf();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV. Serhii Piatachenko. Frontend Developer. Rivne.pdf';
    link.click();
    URL.revokeObjectURL(url);
    addToast({ title: 'CV', message: t.cvToast });
  };

  return (
    <article className="aboutApp appSurface">
      <div className="avatarPanel">
        <div className="avatarOrb" aria-hidden="true">
          {avatarUrl ? <img src={avatarUrl} alt="" /> : <span>{profile.name.slice(0, 1).toUpperCase()}</span>}
        </div>
        <div className="availabilityBadge">
          <span aria-hidden="true" />
          {t.availability}
        </div>
      </div>

      <div className="aboutContent">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{profile.name}</h1>
        <p className="typewriterRole">
          {typedRole}
          <span className="typewriterCaret" aria-hidden="true" />
        </p>

        <p className="locationLine">
          <FaMapMarkerAlt aria-hidden="true" />
          {t.location} <span aria-label={t.countryLabel}>🇺🇦</span>
        </p>

        <div className="bioStack">
          {t.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="socialRow" aria-label="Social links">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub aria-hidden="true" />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin aria-hidden="true" />
          </a>
          <a href={profile.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter/X">
            <FaTwitter aria-hidden="true" />
          </a>
          <a href={profile.socials.email} aria-label="Email">
            <FaEnvelope aria-hidden="true" />
          </a>
        </div>

        <button className="primaryButton" type="button" onClick={downloadCv}>
          <FaDownload aria-hidden="true" />
          {t.downloadCv}
        </button>

        <div className="chipRow" aria-label="Fun facts">
          {t.facts.map((fact) => (
            <span key={fact} className="funChip">
              <FaMagic aria-hidden="true" />
              {fact}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function createResumePdf() {
  const resume = {
    name: 'Serhii Piatachenko',
    role: 'Frontend Developer',
    contact: [
      'Rivne, Ukraine | Remote',
      profile.email,
      'GitHub: github.com/serhiy23471',
      'LinkedIn: linkedin.com/in/serhii-dev',
      'Portfolio: serhiy23471.github.io/react_phone-catalog',
    ],
    summary:
      'Frontend Developer focused on React, TypeScript, responsive interfaces, and component-based architecture. Built several portfolio projects: a phone catalog with cart and favorites logic, an interactive desktop-style portfolio, and a CS2 community website. Experienced with routing, reusable UI components, client-side state, responsive SCSS, Git, Vite, and deployment to public hosting. Strong attention to readable code, clean UI states, and practical user flows.',
    skills: [
      'Frontend: React, TypeScript, JavaScript, HTML5, CSS3, SCSS, Vite',
      'UI: responsive layout, reusable components, forms, accessibility basics, CSS variables',
      'State and routing: React hooks, React Router, Zustand, client-side state',
      'Tools: Git, GitHub, GitHub Pages, npm, Chrome DevTools, Figma basics',
      'Methodologies: SDLC, Agile concepts, Scrum, Kanban',
      'Languages: Ukrainian native, English intermediate',
    ],
    experience: [
      {
        title: 'Myr-Myr Project | Fullstack Developer | Mar 2026 - Present',
        items: [
          'Built a public website for a Ukrainian CS2 server with a dark gaming visual style and responsive layout.',
          'Implemented sections for key server features: SkinChanger, statistics, VIP options, competitive gameplay, and fun server modes.',
          'Handled frontend structure, SEO/social metadata, live domain setup, and preparation for public launch.',
        ],
      },
      {
        title: 'Portfolio OS | Frontend Developer | Feb 2026',
        items: [
          'Created an interactive portfolio in a desktop OS style with windows, dock, boot screen, terminal, and a mobile version.',
          'Built a window manager with open, close, focus, minimize, maximize, position, and z-index states.',
          'Moved profile, projects, certificates, skills, and experience into data files for faster content updates.',
        ],
      },
      {
        title: 'Nice Gadgets | Frontend Developer | Nov 2025 - Jan 2026',
        items: [
          'Developed a responsive phone catalog with categories, product cards, product detail pages, search, and sorting.',
          'Implemented client-side cart and favorites logic without page reloads.',
          'Created reusable components for catalog layout, product cards, navigation, empty states, and responsive grids.',
        ],
      },
      {
        title: '2048 Game | Frontend Developer | Sep 2025 - Oct 2025',
        items: [
          'Built a playable 2048 puzzle game with JavaScript, SCSS, HTML, tile movement, merge rules, score tracking, and restart flow.',
          'Added keyboard-friendly controls, invalid move handling, and a responsive board layout.',
        ],
      },
    ],
    education: [
      'Mate academy | Frontend Development | 2025 - 2026',
      'Certificates: HTML + CSS Advanced, JavaScript Advanced, React, React with TypeScript, Redux',
    ],
    achievements: [
      'Built and deployed multiple public frontend projects with live demos and case studies.',
      'Created a portfolio that demonstrates project thinking, UI states, routing, and responsive architecture.',
    ],
  };

  const pages = buildResumePages(resume);
  const fontObjectNumber = pages.length * 2 + 3;
  const pageObjects = pages.map((stream, index) => {
    const pageObjectNumber = 3 + index * 2;
    const contentObjectNumber = pageObjectNumber + 1;

    return {
      page: `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents ${contentObjectNumber} 0 R /Resources << /Font << /F1 ${fontObjectNumber} 0 R >> >> >>`,
      content: `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
    };
  });

  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    `<< /Type /Pages /Kids [${pageObjects.map((_, index) => `${3 + index * 2} 0 R`).join(' ')}] /Count ${pages.length} >>`,
    ...pageObjects.flatMap((item) => [item.page, item.content]),
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  ];

  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += '0000000000 65535 f \n';
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, '0')} 00000 n \n`;
  });
  pdf += `trailer\n<< /Root 1 0 R /Size ${objects.length + 1} >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return new Blob([pdf], { type: 'application/pdf' });
}

type ResumeData = {
  name: string;
  role: string;
  contact: string[];
  summary: string;
  skills: string[];
  experience: Array<{ title: string; items: string[] }>;
  education: string[];
  achievements: string[];
};

function buildResumePages(resume: ResumeData) {
  const pages: string[][] = [[]];
  let y = 744;

  const currentPage = () => pages[pages.length - 1];
  const addPage = () => {
    pages.push([]);
    y = 744;
  };
  const ensureSpace = (height: number) => {
    if (y - height < 52) addPage();
  };
  const addText = (text: string, x: number, size: number, leading = 15) => {
    ensureSpace(leading);
    currentPage().push(`BT /F1 ${size} Tf ${x} ${y} Td (${escapePdf(text)}) Tj ET`);
    y -= leading;
  };
  const addWrapped = (text: string, x: number, size: number, maxChars: number, leading = 14, prefix = '') => {
    const lines = wrapText(text, maxChars);
    lines.forEach((line, index) => addText(`${index === 0 ? prefix : '  '}${line}`, x, size, leading));
  };
  const addGap = (height: number) => {
    y -= height;
  };
  const addSection = (title: string) => {
    addGap(8);
    addText(title.toUpperCase(), 54, 11, 17);
  };

  addText(resume.name, 54, 25, 28);
  addText(resume.role, 54, 15, 20);
  resume.contact.forEach((item) => addText(item, 54, 9, 12));

  addSection('Summary');
  addWrapped(resume.summary, 54, 10, 91, 13);

  addSection('Skills');
  resume.skills.forEach((item) => addWrapped(item, 66, 10, 86, 13, '- '));

  addSection('Project Experience');
  resume.experience.forEach((item) => {
    addGap(3);
    addWrapped(item.title, 54, 11, 82, 15);
    item.items.forEach((highlight) => addWrapped(highlight, 66, 10, 84, 13, '- '));
  });

  addSection('Education and Certificates');
  resume.education.forEach((item) => addWrapped(item, 66, 10, 86, 13, '- '));

  addSection('Achievements');
  resume.achievements.forEach((item) => addWrapped(item, 66, 10, 86, 13, '- '));

  return pages.map((page) => page.join('\n'));
}

function wrapText(text: string, maxChars: number) {
  const words = text.split(' ');
  const lines: string[] = [];
  let line = '';

  words.forEach((word) => {
    const nextLine = line ? `${line} ${word}` : word;

    if (nextLine.length > maxChars && line) {
      lines.push(line);
      line = word;
      return;
    }

    line = nextLine;
  });

  if (line) lines.push(line);
  return lines;
}

function escapePdf(value: string) {
  return value.replace(/[()\\]/g, '\\$&');
}
