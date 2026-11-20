import React from 'react';
import { motion } from 'motion/react';
import { CREATOR_CONFIG } from '../config/creatorConfig';
import { ResilientImage } from './ResilientImage';

export const AboutSection: React.FC = () => {
  const { about } = CREATOR_CONFIG;

  return (
    <section
      id="about"
      className="py-20 sm:py-24 lg:py-28 bg-[#050505] border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* Left Column: Studio Atmosphere */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="relative w-full min-h-[300px] sm:min-h-[380px] rounded-2xl overflow-hidden border border-white/10 bg-[#0C0C0F]">
              <ResilientImage
                src={CREATOR_CONFIG.studioImage}
                alt="Shaikho Bhai content production studio"
                fallbackTitle="Creator Production Studio"
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#050505]/85 via-transparent to-transparent"
              />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="text-xs font-medium text-[#D4AF37] tracking-wide mb-1">
                  Creator Studio
                </p>
                <p className="text-sm text-zinc-200">
                  Where every video, reel, and story begins.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Personal Story & Numbered Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p className="text-sm font-medium text-[#D4AF37] tracking-wide mb-3">
              Creator Profile
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-white text-balance mb-5">
              {about.heading}
            </h2>
            <p className="text-lg sm:text-xl text-zinc-100 font-medium leading-snug mb-5 max-w-2xl">
              {about.lead}
            </p>

            <div className="space-y-4 text-base text-zinc-300 leading-relaxed max-w-[65ch] mb-10">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Clean Hairline-Separated Editorial Pillars */}
            <div className="border-t border-white/10 divide-y divide-white/[0.08]">
              {about.pillars.map((pillar) => (
                <div
                  key={pillar.index}
                  className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
                >
                  <span className="font-mono text-sm font-medium text-[#D4AF37] shrink-0 tabular-nums">
                    {pillar.index}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-semibold text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                      {pillar.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
