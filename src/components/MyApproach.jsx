import React from 'react';
import { Target, Sparkles, RefreshCw, Cpu, Lightbulb } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SpotlightGlassCard from './SpotlightGlassCard';

export default function MyApproach({ onHoverStart, onHoverEnd }) {
  const approaches = [
    {
      step: "01",
      title: "Start with the experience",
      icon: Target,
      desc: "Before thinking about the technology, I like to understand what the user should actually experience."
    },
    {
      step: "02",
      title: "Design with intention",
      icon: Sparkles,
      desc: "I care about visual hierarchy, interaction, motion, usability, and the small details that make an interface feel considered."
    },
    {
      step: "03",
      title: "Build, break, rebuild",
      icon: RefreshCw,
      desc: "I learn by making things. I prototype quickly, test ideas, run into problems, debug them, and keep iterating until the result feels right."
    },
    {
      step: "04",
      title: "Use AI intelligently",
      icon: Cpu,
      desc: "AI gives me another way to explore problems. I use it to accelerate research, development, debugging, experimentation, and creative exploration while keeping technical decisions in my hands."
    },
    {
      step: "05",
      title: "Keep experimenting",
      icon: Lightbulb,
      desc: "Some of my best ideas come from combining things that don't normally belong together—design with code, AI with creativity, or web development with 3D."
    }
  ];

  return (
    <section className="relative z-20 py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
      {/* Header Panel with Glassmorphism */}
      <ScrollReveal animation="fade-up">
        <SpotlightGlassCard
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          className="p-8 mb-12 backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-white/40"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[1px] w-8 bg-white/40" />
              <span className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-[0.25em] uppercase text-white shadow-md">
                Philosophy & Workflow
              </span>
            </div>

            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-light text-white">
              My <span className="italic font-normal underline decoration-white/30 underline-offset-8">Approach</span>
            </h2>
          </div>

          <p className="text-sm font-light text-white/80 max-w-md border-l border-white/20 pl-4 sm:pl-6 py-1">
            A disciplined, user-centric mindset focused on intention, rapid experimentation, and AI-assisted innovation.
          </p>
        </SpotlightGlassCard>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {approaches.map((item, idx) => {
          const Icon = item.icon;
          return (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
              <SpotlightGlassCard
                onMouseEnter={onHoverStart}
                onMouseLeave={onHoverEnd}
                className="p-8 flex flex-col justify-between group h-full hover:border-white/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-white px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 shadow-sm">
                      {item.step}
                    </span>
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif-editorial text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm font-light text-white/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </SpotlightGlassCard>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
