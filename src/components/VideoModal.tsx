import React, { useEffect } from 'react';
import { X, ArrowUpRight, Play } from 'lucide-react';
import { CREATOR_CONFIG, type VideoItem } from '../config/creatorConfig';
import { ResilientImage } from './ResilientImage';
import { YouTubeIcon } from './PlatformIcons';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const youtubeChannelUrl =
    CREATOR_CONFIG.socials.find((s) => s.id === 'youtube')?.url ??
    'https://www.youtube.com';

  useEffect(() => {
    if (!video) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [video, onClose]);

  if (!video) return null;

  const hasEmbedId = Boolean(video.youtubeVideoId && video.youtubeVideoId.trim().length > 0);
  const watchUrl = hasEmbedId
    ? `https://www.youtube.com/watch?v=${video.youtubeVideoId}`
    : youtubeChannelUrl;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-[#0C0C0F] border border-[#D4AF37]/30 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-white/10">
          <div className="min-w-0">
            <p className="text-xs text-[#D4AF37] font-medium">
              {video.category} <span aria-hidden="true">·</span> {video.duration}
            </p>
            <h3
              id="video-modal-title"
              className="font-display text-base sm:text-lg font-semibold text-white truncate mt-0.5"
            >
              {video.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video player"
            className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/15 bg-white/[0.04] text-zinc-200 hover:text-white hover:border-[#D4AF37] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* 16:9 YouTube Embed or Channel Launch View */}
        <div className="relative aspect-video bg-[#050505]">
          {hasEmbedId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeVideoId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <div className="relative w-full h-full">
              <ResilientImage
                src={video.thumbnail}
                alt={video.title}
                fallbackTitle={video.title}
                className="w-full h-full object-cover opacity-55"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <a
                  href={watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F2C94C] text-[#050505] font-semibold text-sm sm:text-base shadow-[0_0_32px_rgba(212,175,55,0.35)] hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C94C]"
                >
                  <Play className="w-4 h-4 fill-current" aria-hidden="true" />
                  <span>Watch on Shaikho Bhai YouTube</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <p className="text-xs sm:text-sm text-zinc-300 mt-4 max-w-md">
                  YouTube embed ready — add a 11-character <code className="font-mono text-[#F2C94C]">youtubeVideoId</code> in{' '}
                  <code className="font-mono text-zinc-200">creatorConfig.ts</code> to play directly inside this frame.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 bg-[#08080A]">
          <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl">
            {video.description}
          </p>
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#D4AF37]/35 text-xs font-semibold text-[#F2C94C] hover:bg-[#D4AF37] hover:text-[#050505] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <YouTubeIcon className="w-4 h-4" />
            <span>Open YouTube</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};
