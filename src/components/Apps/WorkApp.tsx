import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { experience } from '../../data/experience';
import { copy, getExperienceText } from '../../i18n';
import { useDesktopStore } from '../../store/desktopStore';

export function WorkApp() {
  const [activeId, setActiveId] = useState(experience[0]?.id);
  const language = useDesktopStore((state) => state.language);
  const t = copy[language].work;

  return (
    <section className="workApp appSurface">
      <div className="sectionHeader">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2>{t.title}</h2>
      </div>

      <div className="timeline">
        {experience.map((sourceItem) => {
          const item = getExperienceText(sourceItem, language);
          const isActive = activeId === item.id;
          const year = new Date(item.startDate).getFullYear();

          return (
            <article className={`timelineItem ${isActive ? 'isExpanded' : ''}`} key={item.id}>
              <div className="timelineYear">{year}</div>
              <button className="timelineCard" type="button" onClick={() => setActiveId(isActive ? '' : item.id)} aria-expanded={isActive}>
                <span className="timelineDot" aria-hidden="true" />
                <span className="companyLogo">{getInitials(item.company)}</span>
                <span className="timelineSummary">
                  <span className="roleLine">{item.role}</span>
                  <span className="companyLine">
                    {item.company}
                    <span className="durationPill">{calculateDuration(item.startDate, item.endDate, language)}</span>
                  </span>
                </span>
                <span className="typePill">{item.type}</span>
              </button>

              <div className="timelineDetails" aria-hidden={!isActive}>
                <div className="stackRow">
                  {item.stack.map((tech) => (
                    <span key={tech} className={`stackBadge tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <a href={item.url} target="_blank" rel="noreferrer" className="inlineLink">
                  {t.visit} <FaExternalLinkAlt aria-hidden="true" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function calculateDuration(start: string, end: string | undefined, language: 'uk' | 'en') {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  const months = Math.max(1, (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth() + 1);
  const years = Math.floor(months / 12);
  const restMonths = months % 12;

  if (language === 'en') {
    if (years === 0) return `${restMonths} mo.`;
    if (restMonths === 0) return `${years} yr.`;
    return `${years} yr. ${restMonths} mo.`;
  }

  if (years === 0) return `${restMonths} міс.`;
  if (restMonths === 0) return `${years} р.`;
  return `${years} р. ${restMonths} міс.`;
}

function getInitials(value: string) {
  return value
    .split(/[\s/]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join('');
}
