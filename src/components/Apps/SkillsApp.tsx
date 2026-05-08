import { useState } from 'react';
import type { CSSProperties } from 'react';
import { FaAward, FaChartPie, FaDownload, FaExternalLinkAlt, FaEye, FaTimes, FaTools } from 'react-icons/fa';
import { certificates, radarSkills, skills, type SkillCategory } from '../../data/skills';
import { copy } from '../../i18n';
import { useDesktopStore } from '../../store/desktopStore';

const tabs = [
  { id: 'tech', labelKey: 'tech', icon: FaTools },
  { id: 'radar', labelKey: 'radar', icon: FaChartPie },
  { id: 'certificates', labelKey: 'certificates', icon: FaAward },
] as const;

const categories: SkillCategory[] = ['Frontend', 'Backend', 'Tools & DevOps', 'Design'];

export function SkillsApp() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]['id']>('tech');
  const language = useDesktopStore((state) => state.language);
  const t = copy[language].skills;

  return (
    <section className="skillsApp appSurface">
      <div className="tabs" role="tablist" aria-label="Skills tabs">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button key={tab.id} type="button" role="tab" aria-selected={activeTab === tab.id} className={activeTab === tab.id ? 'isActive' : ''} onClick={() => setActiveTab(tab.id)}>
              <Icon size={16} />
              {t.tabs[tab.labelKey]}
            </button>
          );
        })}
      </div>

      {activeTab === 'tech' && <TechGrid />}
      {activeTab === 'radar' && <RadarChart />}
      {activeTab === 'certificates' && <CertificateGrid verifyLabel={t.verify} />}
    </section>
  );
}

function TechGrid() {
  return (
    <div className="techCategories">
      {categories.map((category) => (
        <section key={category} className="techCategory">
          <h3>{category}</h3>
          <div className="techGrid">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <article className="skillTile" key={skill.name} style={{ '--skill-color': skill.color, '--skill-progress': `${skill.progress}%` } as CSSProperties}>
                  <span className="skillIcon">{skill.short}</span>
                  <span className="skillName">{skill.name}</span>
                  <span className="skillLevel">{skill.level}</span>
                  <span className="skillBar" aria-hidden="true">
                    <span />
                  </span>
                </article>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function RadarChart() {
  const size = 340;
  const center = size / 2;
  const maxRadius = 112;
  const points = radarSkills.map((item, index) => polarPoint(center, maxRadius * (item.value / 100), index, radarSkills.length));
  const rings = [0.25, 0.5, 0.75, 1];

  return (
    <div className="radarPanel">
      <svg className="radarChart" viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Skills radar chart">
        {rings.map((ring) => {
          const ringPoints = radarSkills.map((_, index) => polarPoint(center, maxRadius * ring, index, radarSkills.length));
          return <polygon key={ring} points={ringPoints.map((point) => `${point.x},${point.y}`).join(' ')} className="radarRing" />;
        })}
        {radarSkills.map((item, index) => {
          const end = polarPoint(center, maxRadius, index, radarSkills.length);
          const label = polarPoint(center, maxRadius + 32, index, radarSkills.length);
          return (
            <g key={item.label}>
              <line x1={center} y1={center} x2={end.x} y2={end.y} className="radarAxis" />
              <text x={label.x} y={label.y} textAnchor="middle" dominantBaseline="middle" className="radarLabel">
                {item.label}
              </text>
            </g>
          );
        })}
        <polygon points={points.map((point) => `${point.x},${point.y}`).join(' ')} className="radarShape" />
        {points.map((point, index) => (
          <circle key={radarSkills[index].label} cx={point.x} cy={point.y} r="5" className="radarPoint" />
        ))}
      </svg>
      <div className="radarLegend">
        {radarSkills.map((item) => (
          <span key={item.label}>
            {item.label}
            <strong>{item.value}%</strong>
          </span>
        ))}
      </div>
    </div>
  );
}

function CertificateGrid({ verifyLabel }: { verifyLabel: string }) {
  const [activeCertificate, setActiveCertificate] = useState<(typeof certificates)[number] | null>(null);

  return (
    <>
      <div className="certificateGrid">
        {certificates.map((certificate) => (
          <article className="certificateCard" key={certificate.title}>
            <button type="button" className="certificatePreview" onClick={() => setActiveCertificate(certificate)} aria-label={`View ${certificate.title}`}>
              <CertificatePreviewMedia certificate={certificate} />
              <span>
                <FaEye aria-hidden="true" />
                View
              </span>
            </button>
            <p className="eyebrow">{certificate.organization}</p>
            <h3>{certificate.title}</h3>
            <p>{certificate.date}</p>
            <div className="certificateActions">
              <button type="button" onClick={() => setActiveCertificate(certificate)}>
                <FaEye aria-hidden="true" />
                View
              </button>
              <a href={certificate.imageUrl} download={certificate.downloadName}>
                <FaDownload aria-hidden="true" />
                Download
              </a>
              <a href={certificate.url} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt aria-hidden="true" />
                {verifyLabel}
              </a>
            </div>
          </article>
        ))}
      </div>

      {activeCertificate && (
        <div className="certificateModal" role="dialog" aria-modal="true" aria-label={activeCertificate.title} onClick={() => setActiveCertificate(null)}>
          <div className="certificateModalPanel" onClick={(event) => event.stopPropagation()}>
            <div className="certificateModalHeader">
              <div>
                <p className="eyebrow">{activeCertificate.organization}</p>
                <h3>{activeCertificate.title}</h3>
              </div>
              <button type="button" className="iconButton" onClick={() => setActiveCertificate(null)} aria-label="Close certificate preview">
                <FaTimes aria-hidden="true" />
              </button>
            </div>
            <CertificateModalMedia certificate={activeCertificate} />
            <div className="certificateModalActions">
              <a className="primaryButton" href={activeCertificate.imageUrl} download={activeCertificate.downloadName}>
                <FaDownload aria-hidden="true" />
                Download
              </a>
              <a className="secondaryButton" href={activeCertificate.url} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt aria-hidden="true" />
                {verifyLabel}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CertificatePreviewMedia({ certificate }: { certificate: (typeof certificates)[number] }) {
  if (isPdf(certificate.imageUrl)) {
    return (
      <span className="certificatePdfPreview" aria-hidden="true">
        <FaAward aria-hidden="true" />
        <strong>PDF</strong>
      </span>
    );
  }

  return <img src={certificate.imageUrl} alt="" loading="lazy" />;
}

function CertificateModalMedia({ certificate }: { certificate: (typeof certificates)[number] }) {
  if (isPdf(certificate.imageUrl)) {
    return (
      <div className="certificateImageFrame certificatePdfFrame">
        <object data={certificate.imageUrl} type="application/pdf" title={`${certificate.title} certificate`}>
          <a href={certificate.imageUrl} target="_blank" rel="noreferrer">
            Open certificate PDF
          </a>
        </object>
      </div>
    );
  }

  return (
    <div className="certificateImageFrame">
      <img src={certificate.imageUrl} alt={`${certificate.title} certificate`} />
    </div>
  );
}

function isPdf(path: string) {
  return path.toLowerCase().endsWith('.pdf');
}

function polarPoint(center: number, radius: number, index: number, total: number) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  return {
    x: center + radius * Math.cos(angle),
    y: center + radius * Math.sin(angle),
  };
}
