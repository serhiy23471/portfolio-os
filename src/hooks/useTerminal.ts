import { useMemo, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { experience } from '../data/experience';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { copy, getExperienceText, getProjectText } from '../i18n';
import { useDesktopStore } from '../store/desktopStore';
import type { MainAppId } from '../types';

const commands = ['help', 'about', 'skills', 'projects', 'contact', 'history', 'resume', 'clear', 'sudo hire-me', 'cat secret.txt', 'ls'];

const appCommands: Partial<Record<string, MainAppId>> = {
  about: 'about',
  skills: 'skills',
  projects: 'projects',
  contact: 'contact',
  history: 'work',
};

interface UseTerminalOptions {
  onHireMe: () => void;
}

export function useTerminal({ onHireMe }: UseTerminalOptions) {
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const terminalHistory = useDesktopStore((state) => state.terminalHistory);
  const language = useDesktopStore((state) => state.language);
  const addTerminalEntry = useDesktopStore((state) => state.addTerminalEntry);
  const clearTerminal = useDesktopStore((state) => state.clearTerminal);
  const openWindow = useDesktopStore((state) => state.openWindow);
  const addToast = useDesktopStore((state) => state.addToast);

  const suggestions = useMemo(
    () => commands.filter((command) => command.toLowerCase().startsWith(input.toLowerCase())).slice(0, 4),
    [input],
  );
  const t = copy[language];

  const printOutput = (value: string) => {
    addTerminalEntry({ type: 'output', value });
  };

  const executeCommand = (rawCommand: string) => {
    const command = rawCommand.trim();
    if (!command) return;

    addTerminalEntry({ type: 'input', value: `$ ${command}` });
    setCommandHistory((current) => [...current, command]);
    setHistoryIndex(null);
    setInput('');

    if (command === 'clear') {
      clearTerminal();
      return;
    }

    const appId = appCommands[command];
    if (appId) {
      openWindow(appId);
    }

    switch (command) {
      case 'help':
        printOutput(`Available commands:\n${commands.map((item) => `  ${item}`).join('\n')}`);
        break;
      case 'about':
        printOutput(`${profile.name} - ${profile.role}\n${t.about.bio.join(' ')}`);
        break;
      case 'skills':
        printOutput(
          ['Skill                Level        Progress']
            .concat(skills.slice(0, 8).map((skill) => `${skill.name.padEnd(20)} ${skill.level.padEnd(12)} ${skill.progress}%`))
            .join('\n'),
        );
        break;
      case 'projects':
        printOutput(projects.map((project) => {
          const text = getProjectText(project, language);
          return `- ${text.name}: ${text.description}`;
        }).join('\n'));
        break;
      case 'contact':
        printOutput(`Email: ${profile.email}\nGitHub: ${profile.socials.github}\nLinkedIn: ${profile.socials.linkedin}`);
        break;
      case 'history':
        printOutput(experience.map((item) => {
          const text = getExperienceText(item, language);
          return `${text.period} | ${text.role} @ ${text.company}`;
        }).join('\n'));
        break;
      case 'resume':
        printOutput(
          [
            '   ___        __          ',
            '  / _ | ___  / /_ ____ ___',
            ' / __ |(_-< / __// __// _ \\',
            '/_/ |_/___/ \\__//_/   \\___/',
            '',
            `${profile.name} - ${profile.role}`,
            `${profile.location} | ${profile.email}`,
            'Stack: React, TypeScript, SCSS, Vite, Git',
          ].join('\n'),
        );
        break;
      case 'sudo hire-me':
        printOutput('Permission granted. Opening contact channel... HIRED MODE ACTIVATED.');
        onHireMe();
        break;
      case 'cat secret.txt':
        printOutput('Secret: I debug CSS with snacks, patience, and suspiciously many browser tabs.');
        break;
      case 'ls':
        printOutput('About.app  Work.app  Skills.app  Contact.app  Projects/  Terminal.app  secret.txt');
        break;
      default:
        printOutput(`Command not found: ${command}. Type "help" for a list of commands.`);
        addToast({ title: 'Terminal', message: `Unknown command: ${command}` });
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      executeCommand(input);
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      const [firstSuggestion] = suggestions;
      if (firstSuggestion) setInput(firstSuggestion);
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      const nextIndex = historyIndex === null ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      if (commandHistory[nextIndex]) {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(null);
        setInput('');
        return;
      }
      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
    }
  };

  return {
    input,
    setInput,
    terminalHistory,
    suggestions,
    executeCommand,
    handleKeyDown,
  };
}
