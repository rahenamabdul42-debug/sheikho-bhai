import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, ArrowUpRight } from 'lucide-react';
import { CREATOR_CONFIG, type VideoItem } from '../config/creatorConfig';
import { ResilientImage } from './ResilientImage';
import { VideoModal } from './VideoModal';

type CategoryFilter = 'All' | VideoItem['category'];

const FILTER_OPTIONS: CategoryFilter[] = [
  'All',
  'Filmmaking',
  'Lifestyle',
  'Gear & Setup',
];

export const LatestContentSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const youtubeProfile = CREATOR_CONFIG.socials.find((s) => s.id === 'youtube');

  const visibleVideos =
    selectedCategory === 'All'
      ? CREATOR_CONFIG.videos
      : CREATOR_CONFIG.videos.filter((v) => v.category === selectedCategory);

  return (
    <section
      id="videos"
      className="py-20 sm:py-24 lg:py-28 bg-[#050505] border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header & Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium text-[#D4AF37] tracking-wide mb-3">
              Video Gallery
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-white text-balance">
              Latest Content
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div
              role="tablist"
              aria-label="Filter videos by category"
              className="inline-flex flex-wrap items-center gap-1 p-1 rounded-xl bg-[#0C0C0F] border border-white/10"
            >
              {FILTER_OPTIONS.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(category)}
                    className={`min-h-[38px] px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                      isActive
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#F2C94C] text-[#050505] font-semibold'
                        : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {youtubeProfile && (
              <a
                href={youtubeProfile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 min-h-[42px] px-4 py-2 rounded-xl border border-white/15 text-xs sm:text-sm font-medium text-zinc-200 hover:border-[#D4AF37] hover:text-[#F2C94C] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <span>YouTube Channel</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {visibleVideos.map((video, idx) => (
            <motion.article
              key={video.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col rounded-2xl bg-[#0C0C0F] border border-white/10 overflow-hidden hover:border-[#D4AF37]/50 hover:shadow-[0_0_32px_rgba(212,175,55,0.12)] transition-all duration-200"
            >
              {/* Thumbnail Button */}
              <button
                type="button"
                onClick={() => setActiveVideo(video)}
                aria-label={`Play video: ${video.title}`}
                className="relative aspect-video w-full overflow-hidden bg-[#050505] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4AF37]"
              >
                <ResilientImage
                  src={video.thumbnail}
                  alt={video.title}
                  fallbackTitle={video.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
                />

                {/* Center Play Affordance */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-14 h-14 rounded-full bg-[#050505]/85 border border-[#D4AF37]/60 text-[#F2C94C] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#050505] group-hover:scale-105 transition-all duration-200 shadow-lg">
                    <Play className="w-5 h-5 fill-current ml-0.5" aria-hidden="true" />
                  </span>
                </div>

                {/* Bottom Thumbnail Metadata Strip */}
                <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-xs text-zinc-200">
                  <span className="font-medium">{video.publishedLabel}</span>
                  <span className="font-mono tabular-nums text-[#F5E6B3]">
                    {video.duration}
                  </span>
                </div>
              </button>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                    <span>YouTube</span>
                    <span aria-hidden="true">·</span>
                    <span>{video.category}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white leading-snug group-hover:text-[#F5E6B3] transition-colors">
                    <button
                      type="button"
                      onClick={() => setActiveVideo(video)}
                      className="text-left focus-visible:outline-none focus-visible:underline"
                    >
                      {video.title}
                    </button>
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2.5 leading-relaxed">
                    {video.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveVideo(video)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] hover:text-[#F2C94C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                    <span>Watch Video</span>
                  </button>
                  <span className="font-mono text-xs text-zinc-500 tabular-nums">
                    HD 1080p
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Interactive YouTube Embed Modal */}
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
};
