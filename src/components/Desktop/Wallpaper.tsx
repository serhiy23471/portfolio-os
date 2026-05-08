import { useDesktopStore } from '../../store/desktopStore';

export function Wallpaper() {
  const theme = useDesktopStore((state) => state.theme);
  const variant = useDesktopStore((state) => state.wallpaperVariant);

  return <div className={`wallpaper wallpaperVariant${variant} ${theme === 'dark' ? 'wallpaperDark' : ''}`} aria-hidden="true" />;
}
