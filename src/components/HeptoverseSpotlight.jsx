import React from 'react';
import { Box, Sparkles, Layers, ArrowUpRight, Flame } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SpotlightGlassCard from './SpotlightGlassCard';

export default function HeptoverseSpotlight({ onHoverStart, onHoverEnd }) {
  return (
    <section className="relative z-20 py-16 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
      <ScrollReveal animation="scale-up">
        <SpotlightGlassCard
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          className="p-8 sm:p-12 border border-white/20 relative overflow-hidden group shadow-2xl transition-all duration-300 hover:border-white/40"
        >
          {/* Ambient Glow Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none group-hover:bg-white/15 transition-all duration-700" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              {/* Header Glass Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white font-semibold text-xs tracking-wider uppercase shadow-lg">
                  <Flame className="w-3.5 h-3.5 text-orange-300 animate-pulse" />
                  Currently Building
                </span>
                <span className="text-xs text-white/70 font-medium px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                  Browser-Based 3D Metaverse
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-white tracking-wide mb-4">
                HEPTOVERSE
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg font-light text-white/90 leading-relaxed mb-6">
                A 3D social and dating metaverse built natively for the browser.
                Combining <strong className="font-semibold text-white">React, Three.js/WebGL, Vite, 3D environments, interactive avatars, GLB/GLTF assets, and VRM models</strong> into one immersive digital world.
              </p>

              <p className="text-sm text-white/80 font-light leading-relaxed mb-6 border-l-2 border-white/30 pl-4 italic">
                "Exploring how far a browser-based experience can go when web development, 3D design, real-time interaction, and AI-assisted development come together."
              </p>

              {/* Glassmorphic Topic Badges */}
              <div className="flex flex-wrap gap-2">
                {["React", "Three.js / WebGL", "Vite", "3D Environments", "VRM Avatars", "GLB / GLTF", "Real-Time 3D"].map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 hover:border-white/40 shadow-sm transition-all duration-200 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex flex-col items-start lg:items-end gap-4 min-w-[220px]">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-left lg:text-right w-full shadow-lg">
                <div className="text-xs text-white/70 uppercase tracking-widest font-semibold mb-1">
                  Project Status
                </div>
                <div className="flex items-center lg:justify-end gap-2 text-sm font-semibold text-white">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Currently in Development</span>
                </div>
              </div>
            </div>
          </div>
        </SpotlightGlassCard>
      </ScrollReveal>
    </section>
  );
}
