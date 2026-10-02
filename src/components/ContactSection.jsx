import React, { useState } from 'react';
import { Phone, Mail, Github, Linkedin, Copy, Check, ExternalLink, Sparkles, Heart, Share2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SpotlightGlassCard from './SpotlightGlassCard';

export default function ContactSection({ onHoverStart, onHoverEnd }) {
  const [copiedKey, setCopiedKey] = useState(null);

  // Environment variables with fallbacks
  const phoneVal = import.meta.env.VITE_CONTACT_PHONE || '9234154895';
  const emailVal = import.meta.env.VITE_CONTACT_EMAIL || 'dhruveloper2005@gmail.com';
  const githubVal = import.meta.env.VITE_GITHUB_URL || 'https://github.com/Rebellious-Star';
  const linkedinVal = import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/dhruv-pandey-91a333312';
  const ownerName = import.meta.env.VITE_PORTFOLIO_OWNER || 'Dhruv';

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const copyAllContact = () => {
    const fullCard = `${ownerName} Pandey | Creative Technologist & Full-Stack Developer
Phone: +91 ${phoneVal}
Email: ${emailVal}
GitHub: ${githubVal}
LinkedIn: ${linkedinVal}`;
    copyToClipboard(fullCard, 'all');
  };

  const contactItems = [
    {
      key: 'phone',
      label: 'Phone',
      value: phoneVal,
      href: `tel:${phoneVal}`,
      displayValue: `+91 ${phoneVal}`,
      icon: Phone,
      isExternal: false,
    },
    {
      key: 'email',
      label: 'Email',
      value: emailVal,
      href: `mailto:${emailVal}`,
      displayValue: emailVal,
      icon: Mail,
      isExternal: false,
    },
    {
      key: 'github',
      label: 'GitHub',
      value: githubVal,
      href: githubVal,
      displayValue: githubVal.replace('https://', ''),
      icon: Github,
      isExternal: true,
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      value: linkedinVal,
      href: linkedinVal,
      displayValue: linkedinVal.replace('https://', ''),
      icon: Linkedin,
      isExternal: true,
    },
  ];

  return (
    <section id="contact" className="relative z-20 py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
      {/* Editorial Glass Title Panel */}
      <ScrollReveal animation="fade-up">
        <SpotlightGlassCard
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          className="p-8 sm:p-12 mb-12 hover:border-white/40"
        >
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-white/40" />
              <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white shadow-lg">
                Get In Touch
              </span>
            </div>

            {/* Quick Copy All Contact Info Button */}
            <button
              onClick={copyAllContact}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-xs font-semibold text-white tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-md"
            >
              {copiedKey === 'all' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Contact Card Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>Copy Full Contact Card</span>
                </>
              )}
            </button>
          </div>

          <h2 className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white mb-6 relative z-10">
            Let's Create Something <br />
            <span className="italic font-normal text-glow">Memorable</span> Together.
          </h2>

          <p className="text-base sm:text-lg text-white/90 font-light max-w-2xl relative z-10 border-l-2 border-white/30 pl-4 py-1">
            Whether you have a project in mind, want to collaborate on 3D/AI experiences, or just want to connect, feel free to reach out.
          </p>
        </SpotlightGlassCard>
      </ScrollReveal>

      {/* Bento Grid Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {contactItems.map((item) => {
          const Icon = item.icon;
          const isCopied = copiedKey === item.key;

          return (
            <ScrollReveal key={item.key} animation="fade-up">
              <SpotlightGlassCard
                onMouseEnter={onHoverStart}
                onMouseLeave={onHoverEnd}
                className="p-8 flex flex-col justify-between group h-full hover:border-white/40"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold tracking-widest text-white/80 uppercase px-3 py-1 rounded-full bg-white/10 border border-white/15">
                      {item.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Copy Button */}
                    <button
                      onClick={() => copyToClipboard(item.value, item.key)}
                      title="Copy to clipboard"
                      className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all duration-200 border border-white/15 active:scale-95 shadow-sm"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>

                    {/* External Link */}
                    <a
                      href={item.href}
                      target={item.isExternal ? "_blank" : "_self"}
                      rel="noreferrer"
                      className="p-2.5 rounded-full bg-white/10 hover:bg-white text-white/80 hover:text-[#be1710] transition-all duration-200 border border-white/15 active:scale-95 shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div>
                  <a
                    href={item.href}
                    target={item.isExternal ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="font-serif-editorial text-xl sm:text-2xl font-semibold text-white hover:underline underline-offset-4 decoration-white/40 break-all"
                  >
                    {item.displayValue}
                  </a>

                  {isCopied && (
                    <div className="text-xs text-emerald-300 font-medium mt-2 animate-fade-in flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Copied to clipboard!
                    </div>
                  )}
                </div>
              </SpotlightGlassCard>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Short About & Thank You Editorial Card */}
      <ScrollReveal animation="scale-up">
        <SpotlightGlassCard
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          className="p-8 sm:p-12 text-center hover:border-white/40"
        >
          <div className="max-w-3xl mx-auto">
            <Sparkles className="w-8 h-8 text-white/80 mx-auto mb-4 animate-pulse" />
            
            <h3 className="font-serif-editorial text-3xl sm:text-4xl font-light text-white mb-6">
              Short Summary
            </h3>

            <p className="text-base sm:text-lg font-light text-white/90 leading-relaxed mb-8">
              I'm <strong className="font-semibold text-white">{ownerName}</strong>, a third-year CSE student and creative technologist exploring the intersection of <strong className="text-white">UI/UX, AI/ML, web development, and 3D experiences</strong>.
              I build interactive products, experiment with emerging technologies, and use AI-assisted workflows to turn ideas into working experiences. Currently building <strong className="text-white">HEPTOVERSE</strong>.
            </p>

            <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="font-cursive text-4xl text-white text-glow">
                {ownerName} Pandey
              </div>

              <div className="text-xs sm:text-sm font-semibold tracking-widest text-white/70 uppercase flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <span>Thank You for Visiting</span>
                <Heart className="w-4 h-4 text-white/90 fill-white" />
              </div>
            </div>
          </div>
        </SpotlightGlassCard>
      </ScrollReveal>
    </section>
  );
}
