import { useEffect, useState } from 'react';
import { FaCheck, FaGithub, FaLayerGroup, FaSpinner } from 'react-icons/fa';

const tabs = ['Preview', 'Form', 'States'] as const;

export function UiKitDemo() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('Preview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  const runLoadingState = () => {
    setIsLoading(true);
    window.setTimeout(() => setIsLoading(false), 900);
  };

  return (
    <main className="uiKitDemoPage">
      <nav className="uiKitDemoNav" aria-label="UI Kit demo navigation">
        <a href="/" className="uiKitDemoBrand">
          <FaLayerGroup aria-hidden="true" />
          UI Kit Demo
        </a>
        <div>
          <a href="/case-studies/ui-kit">Case Study</a>
          <a href="https://github.com/serhiy23471/ui-kit" target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
        </div>
      </nav>

      <section className="uiKitDemoShell">
        <header className="uiKitDemoHero">
          <p>React component playground</p>
          <h1>Compact UI kit for project starts</h1>
          <div>
            <button type="button" onClick={runLoadingState} className="uiKitButton primary">
              {isLoading ? <FaSpinner aria-hidden="true" /> : <FaCheck aria-hidden="true" />}
              {isLoading ? 'Saving' : 'Save changes'}
            </button>
            <button type="button" onClick={() => setIsModalOpen(true)} className="uiKitButton secondary">
              Open modal
            </button>
          </div>
        </header>

        <section className="uiKitDemoPanel" aria-label="Component preview">
          <div className="uiKitTabs" role="tablist" aria-label="Demo tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={activeTab === tab ? 'isActive' : ''}
                onClick={() => setActiveTab(tab)}
                role="tab"
                aria-selected={activeTab === tab}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'Preview' && (
            <div className="uiKitDemoGrid">
              <article className="uiKitCard">
                <span className="uiKitIcon">A</span>
                <h2>Action Card</h2>
                <p>Reusable surface with title, short text, status badge, and actions.</p>
                <button type="button" className="uiKitButton compact">
                  View details
                </button>
              </article>
              <article className="uiKitCard">
                <span className="uiKitIcon success">B</span>
                <h2>Status Card</h2>
                <p>Good for dashboards, profile blocks, and compact project summaries.</p>
                <span className="uiKitBadge">Ready</span>
              </article>
            </div>
          )}

          {activeTab === 'Form' && (
            <form className="uiKitForm">
              <label>
                Name
                <input type="text" defaultValue="Serhii" />
              </label>
              <label>
                Email
                <input type="email" defaultValue="serhii@example.com" />
              </label>
              <label>
                Message
                <textarea defaultValue="Reusable UI states make small apps feel more polished." />
              </label>
              <p className="uiKitFormHint">Focus the fields to see the shared focus style.</p>
            </form>
          )}

          {activeTab === 'States' && (
            <div className="uiKitStateGrid">
              <button type="button" className="uiKitButton primary">
                Default
              </button>
              <button type="button" className="uiKitButton secondary">
                Secondary
              </button>
              <button type="button" className="uiKitButton primary" disabled>
                Disabled
              </button>
              <button type="button" className="uiKitButton primary isLoading">
                <FaSpinner aria-hidden="true" />
                Loading
              </button>
            </div>
          )}
        </section>
      </section>

      {isModalOpen && (
        <div className="uiKitModalBackdrop" role="presentation" onClick={() => setIsModalOpen(false)}>
          <section className="uiKitModal" role="dialog" aria-modal="true" aria-labelledby="ui-kit-modal-title" onClick={(event) => event.stopPropagation()}>
            <h2 id="ui-kit-modal-title">Reusable modal</h2>
            <p>This is a demo dialog with the same radius, spacing, typography, and action styles as the rest of the kit.</p>
            <div>
              <button type="button" className="uiKitButton secondary" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="button" className="uiKitButton primary" onClick={() => setIsModalOpen(false)}>
                Confirm
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
