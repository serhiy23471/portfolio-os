import { useEffect, useState } from 'react';
import { useMediaQuery } from './useMediaQuery';

export function useTypewriter(words: readonly string[], speed = 64, pause = 1200) {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(words[0]?.length ?? 0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || words.length === 0) {
      setLetterIndex(words[0]?.length ?? 0);
      return undefined;
    }

    const activeWord = words[wordIndex];
    const isFullWord = letterIndex === activeWord.length && !isDeleting;
    const isEmpty = letterIndex === 0 && isDeleting;
    const delay = isFullWord ? pause : isDeleting ? speed / 1.7 : speed;

    const timer = window.setTimeout(() => {
      if (isFullWord) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty) {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        return;
      }

      setLetterIndex((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, letterIndex, pause, prefersReducedMotion, speed, wordIndex, words]);

  return words[wordIndex]?.slice(0, letterIndex) ?? '';
}
