import type { CSSProperties } from 'react';
import { FaExternalLinkAlt, FaFileAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../../data/projects';
import { copy, getProjectText } from '../../i18n';
import { useDesktopStore } from '../../store/desktopStore';
import { SkeletonImage } from '../UI/SkeletonImage';

interface ProjectDetailAppProps {
  slug: string;
}

export function ProjectDetailApp({ slug }: ProjectDetailAppProps) {
  const language = useDesktopStore((state) => state.language);
  const sourceProject = projects.find((item) => item.slug === slug);
  const t = copy[language].projects;

  if (!sourceProject) {
    return <div className="appSurface">Project not found.</div>;
  }

  const project = getProjectText(sourceProject, language);

  return (
    <article className="projectDetail appSurface" style={{ '--project-accent': project.accent } as CSSProperties}>
      <div className={`projectHeroVisual ${project.imageUrl ? 'hasImage' : ''}`} aria-hidden="true">
        {project.imageUrl ? (
          <SkeletonImage src={project.imageUrl} alt="" loading="eager" />
        ) : (
          <>
            <span className="heroWindowBar" />
            <span className="heroChart" />
            <span className="heroSidebar" />
            <span className="heroCard one" />
            <span className="heroCard two" />
          </>
        )}
      </div>

      <div className="projectDetailContent">
        <p className="eyebrow">{t.caseStudy}</p>
        <h2>{project.name}</h2>
        <p className="leadText">{project.description}</p>

        <div className="detailGrid">
          <section>
            <h3>{t.problem}</h3>
            <p>{project.problem}</p>
          </section>
          <section>
            <h3>{t.solution}</h3>
            <p>{project.solution}</p>
          </section>
        </div>

        <div className="stackRow detailStack">
          {project.stack.map((tech) => (
            <span key={tech} className="stackBadge">
              {tech}
            </span>
          ))}
        </div>

        <div className="actionRow">
          <a className="primaryButton" href={project.demoUrl} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt aria-hidden="true" />
            Live Demo
          </a>
          <a className="secondaryButton" href={project.codeUrl} target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
          {project.caseStudyUrl && (
            <a className="secondaryButton" href={project.caseStudyUrl} target="_blank" rel="noreferrer">
              <FaFileAlt aria-hidden="true" />
              Case Study
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
