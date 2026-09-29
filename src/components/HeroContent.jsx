import React from 'react';
import { Download, Sparkles, ChevronDown } from 'lucide-react';

export default function HeroContent({ onHoverStart, onHoverEnd }) {
  return (
    <div className="absolute bottom-10 sm:bottom-16 left-6 sm:left-14 z-30 pointer-events-none max-w-xl">
      <div className="pointer-events-auto flex flex-col items-start">
        {/* Subtitle */}
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-white/80 animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-white/80 uppercase">
            Hi, I'm
          </span>
        </div>

        {/* Elegant Cursive Name */}
        <h1 className="font-cursive text-7xl sm:text-9xl text-white text-glow leading-none drop-shadow-2xl mb-4 selection:bg-white select-none">
          Dhruv
        </h1>

        {/* Updated Bio */}
        <p className="max-w-[420px] text-white/90 text-xs sm:text-sm leading-relaxed font-normal mb-6 text-shadow-sm">
          Full-Stack developer also focusing on Machine Learning, UI/UX Designing, Game Development, IOT integrated softwares and various innovation
        </p>

        {/* Action Buttons & Scroll Indicator */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Resume Download Button */}
          <a
            href="/resume.png"
            download="resume.png"
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#be1710] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 transform hover:scale-105 hover:bg-white/90 shadow-[0_8px_25px_rgba(0,0,0,0.25)] active:scale-95"
          >
            <span>Resume</span>
            <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>

          {/* Let's Talk Button */}
          <a
            href="#contact"
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/40 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white/20 hover:border-white shadow-[0_8px_25px_rgba(0,0,0,0.15)] transform hover:scale-105 active:scale-95"
          >
            <span>Let's Talk</span>
          </a>

          {/* Explore Button */}
          <a
            href="#about"
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/40 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white/20 hover:border-white shadow-[0_8px_25px_rgba(0,0,0,0.15)] transform hover:scale-105 active:scale-95"
          >
            <span>Explore</span>
            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5 animate-bounce" />
          </a>
        </div>
      </div>
    </div>
  );
}
