import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Copy, Check, ArrowUpRight, MessageCircle } from 'lucide-react';
import { CREATOR_CONFIG } from '../config/creatorConfig';
import { PlatformIcon, WhatsAppIcon } from './PlatformIcons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [name, setName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [topic, setTopic] = useState('Brand Collaboration');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [statusNote, setStatusNote] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CREATOR_CONFIG.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Clipboard blocked in restricted browser contexts — ignore gracefully
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(CREATOR_CONFIG.whatsappRawDisplay);
      setCopiedPhone(true);
      window.setTimeout(() => setCopiedPhone(false), 2200);
    } catch {
      // Clipboard blocked in restricted browser contexts — ignore gracefully
    }
  };

  const buildWhatsAppMessageUrl = () => {
    const trimmedName = name.trim() || 'Visitor';
    const trimmedPhone = senderPhone.trim();
    const trimmedMessage = message.trim();

    const lines = [
      `Hello Shaikho Bhai!`,
      ``,
      `*Name:* ${trimmedName}`,
      ...(trimmedPhone ? [`*Phone:* ${trimmedPhone}`] : []),
      `*Topic:* ${topic}`,
      `*Message:* ${trimmedMessage}`,
    ];

    return `https://wa.me/${CREATOR_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      lines.join('\n')
    )}`;
  };

  const buildMailtoUrl = () => {
    const trimmedName = name.trim() || 'Website Visitor';
    const trimmedMessage = message.trim();
    const subject = encodeURIComponent(`[${topic}] Inquiry from ${trimmedName}`);
    const body = encodeURIComponent(
      `Hi Shaikho Bhai,\n\n${trimmedMessage}${
        senderPhone.trim() ? `\n\nPhone: ${senderPhone.trim()}` : ''
      }\n\nBest regards,\n${trimmedName}`
    );
    return `mailto:${CREATOR_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppAction = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!name.trim() || !message.trim()) {
      e.preventDefault();
      setStatusNote(null);
      setFormError('Please enter your name and message first so it can be sent to WhatsApp.');
      return;
    }
    setFormError(null);
    setStatusNote(
      `Opening WhatsApp chat to ${CREATOR_CONFIG.whatsappDisplay} with your message ready to send.`
    );
    window.setTimeout(() => setStatusNote(null), 5000);
  };

  const handleEmailAction = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!name.trim() || !message.trim()) {
      e.preventDefault();
      setStatusNote(null);
      setFormError('Please enter your name and message before sending.');
      return;
    }
    setFormError(null);
    setStatusNote(`Opening your email app addressed to ${CREATOR_CONFIG.email}.`);
    window.setTimeout(() => setStatusNote(null), 5000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setStatusNote(null);
      setFormError('Please enter your name and message first so it can be sent to WhatsApp.');
      return;
    }
    setFormError(null);
    // Programmatically trigger an anchor click rather than window.open
    const link = document.createElement('a');
    link.href = buildWhatsAppMessageUrl();
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
    setStatusNote(
      `Opening WhatsApp chat to ${CREATOR_CONFIG.whatsappDisplay} with your message ready to send.`
    );
    window.setTimeout(() => setStatusNote(null), 5000);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 lg:py-28 bg-[#070709] border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct WhatsApp, Email & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <p className="text-sm font-medium text-[#D4AF37] tracking-wide mb-3">
                Direct Inquiries
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-white text-balance mb-4">
                Connect With Shaikho Bhai
              </h2>
              <p className="text-base text-zinc-300 leading-relaxed max-w-md">
                Send a message straight to WhatsApp or reach out via email for brand partnerships, collaborations, and direct inquiries.
              </p>
            </div>

            {/* Direct WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-[#0C0C0F] border border-[#D4AF37]/30 shadow-[0_0_28px_rgba(212,175,55,0.08)]">
              <p className="text-xs font-medium text-[#D4AF37] mb-2">
                Official WhatsApp Number
              </p>
              <p className="font-mono text-lg sm:text-xl font-medium text-white tabular-nums mb-1">
                {CREATOR_CONFIG.whatsappDisplay}
              </p>
              <p className="font-mono text-xs text-zinc-400 tabular-nums mb-5">
                Dial / Save: {CREATOR_CONFIG.whatsappRawDisplay}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${CREATOR_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Shaikho Bhai! I visited your official website.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F2C94C] text-[#050505] text-sm font-semibold hover:brightness-110 transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C94C]"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl border border-white/15 bg-[#131318] text-sm font-medium text-zinc-200 hover:border-[#D4AF37]/60 hover:text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-4 h-4 text-[#F2C94C]" aria-hidden="true" />
                      <span className="text-[#F2C94C]">Number Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" aria-hidden="true" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Email Box */}
            <div className="p-6 rounded-2xl bg-[#0C0C0F] border border-white/10">
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
                  className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl border border-[#D4AF37]/35 bg-[#131318] text-white text-sm font-semibold hover:border-[#D4AF37] hover:text-[#F5E6B3] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <Mail className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                  <span>Send Email</span>
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

          {/* Right Column: Send Message Directly to WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleFormSubmit}
              noValidate
              className="p-6 sm:p-8 rounded-2xl bg-[#0C0C0F] border border-white/10 space-y-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-white">
                    Send Message Directly to WhatsApp
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1.5">
                    Write your details below — clicking Send opens WhatsApp directly to{' '}
                    <span className="font-mono text-[#F2C94C]">
                      {CREATOR_CONFIG.whatsappDisplay}
                    </span>{' '}
                    with your message pre-filled.
                  </p>
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#F2C94C] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                </div>
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
                    placeholder="Enter your full name"
                    className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050505] border border-white/15 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-medium text-zinc-300 mb-2"
                  >
                    Your Phone / WhatsApp (Optional)
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={senderPhone}
                    onChange={(e) => setSenderPhone(e.target.value)}
                    placeholder="+971 / +92 ..."
                    className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050505] border border-white/15 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                  />
                </div>
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
                  placeholder="Write your message here — it will go straight to Shaikho Bhai's WhatsApp..."
                  className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/15 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors resize-y"
                />
              </div>

              {formError && (
                <p role="alert" className="text-sm text-amber-300">
                  {formError}
                </p>
              )}

              {statusNote && (
                <p role="status" className="text-sm text-[#F2C94C]">
                  {statusNote}
                </p>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/[0.06]">
                <a
                  href={buildMailtoUrl()}
                  onClick={handleEmailAction}
                  className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl border border-white/15 bg-[#131318] text-xs sm:text-sm font-medium text-zinc-200 hover:border-[#D4AF37]/60 hover:text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <Mail className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                  <span>Send via Email Instead</span>
                </a>

                <a
                  href={buildWhatsAppMessageUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppAction}
                  className="inline-flex items-center gap-2.5 min-h-[48px] px-7 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F2C94C] text-[#050505] text-sm sm:text-base font-semibold hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_24px_rgba(212,175,55,0.28)] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C94C]"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
