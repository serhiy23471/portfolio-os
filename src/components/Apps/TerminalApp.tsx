import { useEffect, useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useTerminal } from '../../hooks/useTerminal';
import { useDesktopStore } from '../../store/desktopStore';

export function TerminalApp() {
  const outputRef = useRef<HTMLDivElement | null>(null);
  const openWindow = useDesktopStore((state) => state.openWindow);
  const addToast = useDesktopStore((state) => state.addToast);
  const { input, setInput, terminalHistory, suggestions, executeCommand, handleKeyDown } = useTerminal({
    onHireMe: () => {
      openWindow('contact');
      window.dispatchEvent(new Event('portfolio-confetti'));
      addToast({ title: 'HIRED!', message: 'Contact.app готовий до повідомлення.' });
    },
  });

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight, behavior: 'smooth' });
  }, [terminalHistory]);

  return (
    <section className="terminalApp">
      <div className="terminalOutput" ref={outputRef} aria-live="polite">
        {terminalHistory.map((entry) => (
          <pre key={entry.id} className={`terminalEntry ${entry.type}`}>
            {entry.value}
          </pre>
        ))}
      </div>

      <div className="terminalSuggestions" aria-label="Command suggestions">
        {suggestions.map((suggestion) => (
          <button key={suggestion} type="button" onClick={() => executeCommand(suggestion)}>
            {suggestion}
          </button>
        ))}
      </div>

      <form
        className="terminalInputRow"
        onSubmit={(event) => {
          event.preventDefault();
          executeCommand(input);
        }}
      >
        <span>$</span>
        <input value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={handleKeyDown} autoFocus aria-label="Terminal command" spellCheck={false} />
        <button type="submit" aria-label="Run command">
          <FaPaperPlane aria-hidden="true" />
        </button>
      </form>
    </section>
  );
}
