import { useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import { FaCode, FaCodeBranch, FaExternalLinkAlt, FaFolderOpen, FaGlobe, FaListUl, FaPalette, FaRegStar, FaThLarge } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { projects, type ProjectCategory } from '../../data/projects';
import { copy, getProjectText } from '../../i18n';
import { useDesktopStore } from '../../store/desktopStore';
import type { WindowId } from '../../types';
import { SkeletonImage } from '../UI/SkeletonImage';

const categoryItems: Array<{ id: 'all' | ProjectCategory; labelKey: 'all' | 'web' | 'ui' | 'openSource'; Icon: IconType }> = [
  { id: 'all', labelKey: 'all', Icon: FaFolderOpen },
  { id: 'web', labelKey: 'web', Icon: FaGlobe },
  { id: 'ui', labelKey: 'ui', Icon: FaPalette },
  { id: 'open-source', labelKey: 'openSource', Icon: FaCodeBranch },
];

export function ProjectsApp() {
  const [category, setCategory] = useState<'all' | ProjectCategory>('all');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const openWindow = useDesktopStore((state) => state.openWindow);
  const language = useDesktopStore((state) => state.language);
  const t = copy[language].projects;

  const filteredProjects = useMemo(
    () => (category === 'all' ? projects : projects.filter((project) => project.category === category)),
    [category],
  );

  const counts = useMemo(
    () =>
      categoryItems.reduce<Record<string, number>>((acc, item) => {
        acc[item.id] = item.id === 'all' ? projects.length : projects.filter((project) => project.category === item.id).length;
        return acc;
      }, {}),
    [],
  );

  const openProject = (slug: string) => openWindow(`project-${slug}` as WindowId);

  return (
    <section className="projectsApp">
      <aside className="finderSidebar" aria-label="Project categories">
        {categoryItems.map((item) => {
          const Icon = item.Icon;
          return (
            <button key={item.id} type="button" className={category === item.id ? 'isActive' : ''} onClick={() => setCategory(item.id)}>
              <Icon aria-hidden="true" />
              {t.sidebar[item.labelKey]}
              <small>{counts[item.id]}</small>
            </button>
          );
        })}
      </aside>

      <div className="finderMain">
        <div className="finderToolbar">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.title}</h2>
          </div>
          <div className="segmentedControl" aria-label="View mode">
            <button type="button" className={view === 'grid' ? 'isActive' : ''} onClick={() => setView('grid')} aria-label="Grid view">
              <FaThLarge aria-hidden="true" />
            </button>
            <button type="button" className={view === 'list' ? 'isActive' : ''} onClick={() => setView('list')} aria-label="List view">
              <FaListUl aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className={`projectCollection ${view === 'list' ? 'isList' : ''}`}>
          {filteredProjects.map((sourceProject) => {
            const project = getProjectText(sourceProject, language);
            return (
              <article
                key={project.slug}
                className="projectCard"
                style={{ '--project-accent': project.accent } as CSSProperties}
                onClick={() => openProject(project.slug)}
              >
                <div className={`projectPreview ${project.imageUrl ? 'hasImage' : ''}`} aria-hidden="true">
                  {project.imageUrl ? (
                    <SkeletonImage src={project.imageUrl} alt="" loading="lazy" />
                  ) : (
                    <>
                      <span className="previewChrome" />
                      <span className="previewPanel primary" />
                      <span className="previewPanel secondary" />
                      <span className="previewPanel tertiary" />
                    </>
                  )}
                  <span className="previewOverlay">{t.viewProject}</span>
                </div>
                <div className="projectMeta">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="stackRow">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="stackBadge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="projectStats">
                    <span>
                      <FaRegStar aria-hidden="true" /> {project.stars}
                    </span>
                    <span>
                      <FaCodeBranch aria-hidden="true" /> {project.forks}
                    </span>
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>
                      Demo <FaExternalLinkAlt aria-hidden="true" />
                    </a>
                    <a href={project.codeUrl} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>
                      Code <FaCode aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
