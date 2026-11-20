import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CREATOR_CONFIG } from '../config/creatorConfig';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Socials', href: '#socials' },
  { label: 'Videos', href: '#videos' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-[#050505]/92 backdrop-blur-md border-b border-white/10'
          : 'bg-[#050505]/80 backdrop-blur-sm border-b border-white/[0.06]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-display text-lg sm:text-xl font-bold tracking-tight text-white hover:text-[#F2C94C] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
        >
          {CREATOR_CONFIG.brandName}
        </a>

        {/* Zone 2: 4 clean single-line text links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 hover:text-white transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-[#D4AF37] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile drawer button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#socials"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-[#050505] bg-gradient-to-r from-[#D4AF37] to-[#F2C94C] rounded-lg hover:brightness-110 active:scale-[0.98] transition-all duration-150 shadow-[0_0_20px_rgba(212,175,55,0.22)] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C94C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          >
            Follow Now
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/15 bg-white/[0.03] text-zinc-100 hover:border-[#D4AF37]/60 hover:text-[#F2C94C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-white/10 bg-[#08080A] px-5 py-4 space-y-1"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="flex items-center min-h-[44px] px-3 rounded-lg text-base font-medium text-zinc-200 hover:text-[#F2C94C] hover:bg-white/[0.04] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#socials"
              onClick={handleLinkClick}
              className="flex items-center justify-center min-h-[44px] w-full px-5 py-2.5 text-sm font-semibold text-[#050505] bg-gradient-to-r from-[#D4AF37] to-[#F2C94C] rounded-lg"
            >
              Follow Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
