import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Play, ArrowUpRight } from 'lucide-react';
import { CREATOR_CONFIG } from '../config/creatorConfig';
import { PlatformIcon } from './PlatformIcons';
import { ResilientImage } from './ResilientImage';

const MARQUEE_ITEMS = [
  'Shaikho Bhai Official',
  'Digital Content Creator',
  'YouTube',
  'Instagram',
  'TikTok',
  'Facebook',
  'Visual Storytelling',
  'Latest Releases',
];

export const HeroSection: React.FC = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#050505] border-b border-white/[0.08]"
    >
      {/* Subtle warm radial gold ambient glow — restrained, no garish neon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 w-[640px] h-[640px] rounded-full bg-[#D4AF37]/[0.06] blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 pb-14 sm:pt-14 sm:pb-18 lg:pt-16 lg:pb-20">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Typographic Anchor */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center py-2 lg:py-6"
          >
            <p className="text-sm sm:text-base font-medium text-[#D4AF37] tracking-wide mb-4">
              {CREATOR_CONFIG.heroSubtitle}
            </p>

            <h1 className="font-display text-[clamp(2.85rem,6vw,5rem)] font-bold tracking-tight leading-[1.03] text-white text-balance mb-6">
              SHAIKHO{' '}
              <span className="bg-gradient-to-r from-[#F5E6B3] via-[#D4AF37] to-[#B6891B] bg-clip-text text-transparent">
                BHAI
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl mb-8">
              {CREATOR_CONFIG.heroDescription}
            </p>

            {/* Primary & Secondary Animated Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href="#socials"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2.5 min-h-[48px] px-7 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F2C94C] text-[#050505] font-semibold text-sm sm:text-base shadow-[0_0_28px_rgba(212,175,55,0.28)] hover:shadow-[0_0_36px_rgba(242,201,76,0.42)] transition-shadow whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C94C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
              >
                <span>Explore Social Channels</span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </motion.a>

              <motion.a
                href="#videos"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2.5 min-h-[48px] px-6 py-3 rounded-xl border border-[#D4AF37]/35 bg-[#0C0C0F] text-white font-medium text-sm sm:text-base hover:border-[#D4AF37] hover:text-[#F5E6B3] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <Play className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                <span>Watch Latest Content</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Official Creator Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="relative w-full min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] rounded-2xl overflow-hidden border border-[#D4AF37]/25 bg-[#0C0C0F]">
              <ResilientImage
                src={CREATOR_CONFIG.portraitImage}
                alt="Shaikho Bhai official creator portrait"
                fallbackTitle="Shaikho Bhai Official"
                loading="eager"
                className="w-full h-full object-cover object-top"
              />
              {/* Measured Contrast Scrim */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between gap-4">
                <div>
                  <p className="font-display text-lg font-semibold text-white">
                    {CREATOR_CONFIG.brandName}
                  </p>
                  <p className="text-xs text-zinc-300 mt-0.5">
                    Official Creator Profile <span aria-hidden="true">·</span> Digital Media
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F2C94C] hover:text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
                >
                  <span>Collaborate</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Quick Social Directory Strip Below Split */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 lg:grid-cols-4 gap-4">
          {CREATOR_CONFIG.socials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl bg-[#0C0C0F] border border-white/[0.08] hover:border-[#D4AF37]/50 hover:shadow-[0_0_24px_rgba(212,175,55,0.12)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-zinc-300 group-hover:text-[#F2C94C] transition-colors shrink-0">
                  <PlatformIcon platform={social.id} className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-sm font-semibold text-white truncate">
                    {social.name}
                  </p>
                  <p className="font-mono text-xs text-zinc-400 truncate">
                    {social.handle}
                  </p>
                </div>
              </div>
              <ArrowUpRight
                className="w-4 h-4 text-zinc-500 group-hover:text-[#F2C94C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Subtle Editorial Marquee Divider */}
      <div
        aria-hidden="true"
        className="border-t border-white/[0.06] bg-[#08080A] py-3 overflow-hidden"
      >
        <div className="animate-marquee text-xs font-medium tracking-[0.14em] uppercase text-zinc-400">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <span key={idx} className="inline-flex items-center">
              <span className="px-5">{item}</span>
              <span className="text-[#D4AF37]">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
