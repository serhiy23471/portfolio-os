type SoundName = 'open' | 'close' | 'switch';

let audioContext: AudioContext | null = null;
let lastPlayedAt = 0;
const assetAvailability = new Map<string, boolean>();

const assetSources: Record<SoundName, string[]> = {
  open: ['/sounds/window-open.mp3', '/sounds/window-open.wav', '/sounds/window-open.caf'],
  close: ['/sounds/window-close.mp3', '/sounds/window-close.wav', '/sounds/window-close.caf'],
  switch: ['/sounds/switch.mp3', '/sounds/switch.wav', '/sounds/switch.caf'],
};

const volumes: Record<SoundName, number> = {
  open: 0.46,
  close: 0.42,
  switch: 0.36,
};

const getAudioContext = () => {
  if (typeof window === 'undefined') return null;

  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextCtor) return null;

  audioContext ??= new AudioContextCtor();
  if (audioContext.state === 'suspended') void audioContext.resume();

  return audioContext;
};

const noteSets: Record<SoundName, number[]> = {
  open: [523.25, 659.25, 987.77],
  close: [392, 329.63],
  switch: [587.33, 783.99],
};

export function playSystemSound(name: SoundName) {
  const now = performance.now();
  if (now - lastPlayedAt < 70) return;
  lastPlayedAt = now;

  void playAssetSound(name).then((played) => {
    if (!played) playSyntheticSound(name);
  });
}

async function playAssetSound(name: SoundName) {
  if (typeof window === 'undefined') return false;

  for (const source of assetSources[name]) {
    const isAvailable = await isAssetAvailable(source);
    if (!isAvailable) continue;

    try {
      const audio = new Audio(source);
      audio.volume = volumes[name];
      audio.currentTime = 0;
      await audio.play();
      return true;
    } catch {
      assetAvailability.set(source, false);
    }
  }

  return false;
}

async function isAssetAvailable(source: string) {
  if (assetAvailability.has(source)) {
    return assetAvailability.get(source) ?? false;
  }

  try {
    const response = await fetch(source, { method: 'HEAD', cache: 'force-cache' });
    const isAvailable = response.ok;
    assetAvailability.set(source, isAvailable);
    return isAvailable;
  } catch {
    assetAvailability.set(source, false);
    return false;
  }
}

function playSyntheticSound(name: SoundName) {
  const context = getAudioContext();
  if (!context) return;

  const start = context.currentTime;
  const master = context.createGain();
  master.gain.setValueAtTime(0.0001, start);
  master.gain.exponentialRampToValueAtTime(name === 'close' ? 0.05 : 0.065, start + 0.012);
  master.gain.exponentialRampToValueAtTime(0.0001, start + 0.24);
  master.connect(context.destination);

  noteSets[name].forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const offset = index * 0.035;

    oscillator.type = name === 'close' ? 'triangle' : 'sine';
    oscillator.frequency.setValueAtTime(frequency, start + offset);
    oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.012, start + offset + 0.08);

    gain.gain.setValueAtTime(0.0001, start + offset);
    gain.gain.exponentialRampToValueAtTime(0.42 / (index + 1), start + offset + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + offset + 0.18);

    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start(start + offset);
    oscillator.stop(start + offset + 0.2);
  });
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}
