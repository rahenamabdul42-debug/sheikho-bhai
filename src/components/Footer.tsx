import React from 'react';
import { ArrowUp } from 'lucide-react';
import { CREATOR_CONFIG } from '../config/creatorConfig';
import { PlatformIcon, WhatsAppIcon } from './PlatformIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-zinc-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Official Identity */}
          <div>
            <p className="font-display text-2xl font-bold text-white tracking-tight">
              {CREATOR_CONFIG.officialBrandLabel}
            </p>
            <p className="text-sm text-zinc-400 mt-1.5 max-w-md">
              Verified social media hub and official personal brand home for Shaikho Bhai.
            </p>
          </div>

          {/* All Social Media & WhatsApp Links */}
          <div className="flex flex-wrap items-center gap-3">
            {CREATOR_CONFIG.socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Shaikho Bhai on ${social.name}`}
                className="inline-flex items-center gap-2 min-h-[42px] px-4 py-2 rounded-xl bg-[#0C0C0F] border border-white/10 text-sm font-medium text-zinc-200 hover:border-[#D4AF37]/60 hover:text-[#F2C94C] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <PlatformIcon platform={social.id} className="w-4 h-4" />
                <span>{social.name}</span>
              </a>
            ))}
            <a
              href={`https://wa.me/${CREATOR_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Shaikho Bhai on WhatsApp"
              className="inline-flex items-center gap-2 min-h-[42px] px-4 py-2 rounded-xl bg-[#0C0C0F] border border-[#D4AF37]/30 text-sm font-medium text-[#F5E6B3] hover:border-[#D4AF37] hover:text-[#F2C94C] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#D4AF37]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-400">
          <p>
            &copy; {currentYear} {CREATOR_CONFIG.officialBrandLabel}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={handleBackToTop}
            className="inline-flex items-center gap-2 min-h-[40px] px-4 py-2 rounded-lg border border-white/10 bg-[#0C0C0F] text-zinc-200 hover:border-[#D4AF37]/60 hover:text-[#F2C94C] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
