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
    link.download = `${profile.name}-Junior-Frontend-CV.pdf`;
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
  const lines = [
    profile.name,
    profile.role,
    `${profile.location} | ${profile.email}`,
    'Stack: React, TypeScript, JavaScript, HTML, CSS, Vite, Git',
    'Focus: responsive UI, accessible forms, component architecture',
    'Portfolio OS: browser desktop with windows, dock, terminal and mobile layout',
  ];

  const stream = [
    'BT',
    '/F1 24 Tf',
    '72 720 Td',
    `(${escapePdf(lines[0])}) Tj`,
    '/F1 14 Tf',
    ...lines.slice(1).flatMap((line) => ['0 -28 Td', `(${escapePdf(line)}) Tj`]),
    'ET',
  ].join('\n');

  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>',
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
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

function escapePdf(value: string) {
  return value.replace(/[()\\]/g, '\\$&');
}
