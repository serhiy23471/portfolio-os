import { useState } from 'react';

interface SkeletonImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function SkeletonImage({ src, alt, className = '', loading = 'lazy' }: SkeletonImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <>
      {status !== 'loaded' && <span className="imageSkeleton" aria-hidden="true" />}
      {status === 'error' && (
        <span className="imageSkeletonFallback" aria-hidden="true">
          Preview
        </span>
      )}
      <img
        className={`${className} skeletonImage ${status === 'loaded' ? 'isLoaded' : ''}`}
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
      />
    </>
  );
}
