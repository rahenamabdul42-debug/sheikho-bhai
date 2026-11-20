import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { CREATOR_CONFIG } from '../config/creatorConfig';
import { PlatformIcon } from './PlatformIcons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('Brand Collaboration');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [draftOpened, setDraftOpened] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CREATOR_CONFIG.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Clipboard fallback ignored if blocked
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedMessage) {
      setFormError('Please enter your name and a short message before sending.');
      return;
    }

    setFormError(null);
    const subject = encodeURIComponent(`[${topic}] Inquiry from ${trimmedName}`);
    const body = encodeURIComponent(
      `Hi Shaikho Bhai,\n\n${trimmedMessage}\n\nBest regards,\n${trimmedName}`
    );
    window.location.href = `mailto:${CREATOR_CONFIG.email}?subject=${subject}&body=${body}`;
    setDraftOpened(true);
    window.setTimeout(() => setDraftOpened(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 lg:py-28 bg-[#070709] border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct Contact & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-sm font-medium text-[#D4AF37] tracking-wide mb-3">
              Direct Inquiries
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-white text-balance mb-5">
              Connect With Shaikho Bhai
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed max-w-md mb-8">
              Open for brand partnerships, media features, creative collaborations, and community messages.
            </p>

            {/* Email Box */}
            <div className="p-6 rounded-2xl bg-[#0C0C0F] border border-white/10 mb-8">
              <p className="text-xs font-medium text-zinc-400 mb-2">
                Official Contact Email
              </p>
              <p className="font-mono text-base sm:text-lg text-white break-all mb-5">
                {CREATOR_CONFIG.email}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${CREATOR_CONFIG.email}?subject=${encodeURIComponent(
                    'Hello Shaikho Bhai'
                  )}`}
                  className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F2C94C] text-[#050505] text-sm font-semibold hover:brightness-110 transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C94C]"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Contact Me</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl border border-white/15 bg-[#131318] text-sm font-medium text-zinc-200 hover:border-[#D4AF37]/60 hover:text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-[#F2C94C]" aria-hidden="true" />
                      <span className="text-[#F2C94C]">Email Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" aria-hidden="true" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Media Contact Links */}
            <div>
              <p className="text-xs font-medium text-zinc-400 mb-3">
                Message on Social Media
              </p>
              <div className="grid grid-cols-2 gap-3">
                {CREATOR_CONFIG.socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-[#0C0C0F] border border-white/10 text-sm font-medium text-zinc-200 hover:border-[#D4AF37]/50 hover:text-[#F5E6B3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    <span className="flex items-center gap-2.5 min-w-0">
                      <PlatformIcon
                        platform={social.id}
                        className="w-4 h-4 text-[#D4AF37] shrink-0"
                      />
                      <span className="truncate">{social.name}</span>
                    </span>
                    <ArrowUpRight
                      className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#F2C94C] shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Email Draft Composer */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-6 sm:p-8 rounded-2xl bg-[#0C0C0F] border border-white/10 space-y-5"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-sm text-zinc-400 mt-1">
                  Fill in the details below to launch a pre-addressed message in your email app.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-zinc-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050505] border border-white/15 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-topic"
                    className="block text-xs font-medium text-zinc-300 mb-2"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="contact-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050505] border border-white/15 text-sm text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                  >
                    <option value="Brand Collaboration">Brand Collaboration</option>
                    <option value="Sponsorship Inquiry">Sponsorship Inquiry</option>
                    <option value="Media & Press">Media &amp; Press</option>
                    <option value="General Message">General Message</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-zinc-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details about your collaboration, event, or message..."
                  className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/15 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors resize-y"
                />
              </div>

              {formError && (
                <p role="alert" className="text-sm text-amber-300">
                  {formError}
                </p>
              )}

              {draftOpened && (
                <p role="status" className="text-sm text-[#F2C94C]">
                  Your email client was opened with your message addressed to{' '}
                  {CREATOR_CONFIG.email}.
                </p>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <span className="text-xs text-zinc-400">
                  Direct to <span className="text-zinc-200">{CREATOR_CONFIG.email}</span>
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 min-h-[46px] px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F2C94C] text-[#050505] text-sm font-semibold hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_24px_rgba(212,175,55,0.24)] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C94C]"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
