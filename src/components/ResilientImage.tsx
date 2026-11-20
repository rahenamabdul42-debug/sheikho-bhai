import React, { useState } from 'react';
import { Film } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  fallbackTitle,
  className = '',
  loading = 'lazy',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#121216] via-[#09090B] to-[#1A1508] text-center p-6 ${className}`}
      >
        <div className="w-12 h-12 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 flex items-center justify-center mb-3 text-[#D4AF37]">
          <Film className="w-5 h-5" aria-hidden="true" />
        </div>
        <span className="font-display text-sm font-medium text-zinc-200 tracking-wide">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
