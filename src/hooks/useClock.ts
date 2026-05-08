import { useEffect, useState } from 'react';

export function useClock(options?: Intl.DateTimeFormatOptions, locale = 'uk-UA') {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
    ...options,
  }).format(now);
}
