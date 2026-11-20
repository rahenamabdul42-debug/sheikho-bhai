import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { CREATOR_CONFIG, type SocialProfile } from '../config/creatorConfig';
import { PlatformIcon } from './PlatformIcons';

export const SocialMediaSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyUrl = async (profile: SocialProfile) => {
    try {
      await navigator.clipboard.writeText(profile.url);
      setCopiedId(profile.id);
      window.setTimeout(() => {
        setCopiedId((current) => (current === profile.id ? null : current));
      }, 2000);
    } catch {
      // Clipboard blocked in restricted browser contexts — ignore gracefully
    }
  };

  return (
    <section
      id="socials"
      className="py-20 sm:py-24 lg:py-28 bg-[#070709] border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#D4AF37] tracking-wide mb-3">
              Verified Profiles
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-white text-balance">
              Follow Shaikho Bhai Across All Platforms
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 max-w-md leading-relaxed">
            Every official channel in one place. Choose your favorite platform to watch, subscribe, and connect directly.
          </p>
        </div>

        {/* 4 Large Clickable Social Media Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CREATOR_CONFIG.socials.map((social, idx) => {
            const isCopied = copiedId === social.id;
            return (
              <motion.article
                key={social.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#0C0C0F] border border-white/10 hover:border-[#D4AF37]/60 hover:shadow-[0_0_38px_rgba(212,175,55,0.16)] transition-all duration-200"
              >
                <div>
                  {/* Icon + Copy Profile Link Utility */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#131318] border border-[#D4AF37]/25 flex items-center justify-center text-[#F2C94C] group-hover:bg-[#D4AF37] group-hover:text-[#050505] group-hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] transition-all duration-200">
                      <PlatformIcon platform={social.id} className="w-7 h-7" />
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopyUrl(social)}
                      aria-label={`Copy ${social.name} profile URL`}
                      title={`Copy ${social.name} link`}
                      className="inline-flex items-center gap-1.5 min-h-[36px] px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#F2C94C]" aria-hidden="true" />
                          <span className="text-[#F2C94C]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Platform Title & Unboxed Metadata */}
                  <p className="text-xs text-zinc-400 mb-1.5">
                    {social.contentFocus}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                    {social.name}
                  </h3>
                  <p className="font-mono text-xs text-[#D4AF37] mt-1 truncate">
                    {social.handle}
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed mt-3 mb-7">
                    {social.tagline}
                  </p>
                </div>

                {/* Working Glowing Follow Button */}
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-2 w-full min-h-[46px] px-5 py-3 rounded-xl bg-[#131318] border border-[#D4AF37]/30 text-sm font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:to-[#F2C94C] group-hover:text-[#050505] group-hover:border-transparent group-hover:shadow-[0_0_24px_rgba(212,175,55,0.3)] transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C94C]"
                >
                  <span>{social.buttonLabel}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
