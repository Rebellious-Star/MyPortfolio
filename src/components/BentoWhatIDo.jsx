import React from 'react';
import { Palette, Brain, Code, Box, Bot, Sparkles, Award, GraduationCap, Zap, Globe } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SpotlightGlassCard from './SpotlightGlassCard';

export default function BentoWhatIDo({ onHoverStart, onHoverEnd }) {
  const cards = [
    {
      title: "UI/UX Design",
      icon: Palette,
      span: "col-span-1 md:col-span-2 lg:col-span-2",
      description: "Designing interfaces that balance visual identity with usability. Exploring layouts, interaction patterns, visual systems, and product experiences.",
      tags: ["Figma", "Photoshop", "Illustrator", "Adobe XD", "Visual Systems", "User Research"]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      span: "col-span-1 md:col-span-1 lg:col-span-1",
      description: "Experimenting with machine learning, computer vision, intelligent systems, and data-driven applications.",
      tags: ["Python", "PyTorch", "OpenCV", "Scikit-learn", "NumPy", "Pandas"]
    },
    {
      title: "Web Development",
      icon: Code,
      span: "col-span-1 md:col-span-1 lg:col-span-1",
      description: "Building full-stack, scalable, and responsive interactive web applications.",
      tags: ["React", "TypeScript", "Node.js", "Express", "Flask", "Spring Boot", "Tailwind CSS", "MySQL", "MongoDB"]
    },
    {
      title: "Creative & 3D Development",
      icon: Box,
      span: "col-span-1 md:col-span-2 lg:col-span-2",
      description: "Bridging the code and immersive 3D world. Crafting web-based 3D environments, custom avatars, and WebGL experiences.",
      tags: ["Three.js", "WebGL", "Unity", "Unreal Engine", "Blender", "GLB / GLTF", "VRM Avatars"]
    },
    {
      title: "AI-Assisted Development",
      icon: Bot,
      span: "col-span-1 md:col-span-2 lg:col-span-2",
      description: "Using AI for more than generating code—integrating it across research, rapid prototyping, debugging, architecture exploration, and creative iteration.",
      tags: ["ChatGPT", "Claude", "Gemini", "Cursor", "Antigravity", "GitHub Copilot", "OpenAI API", "LangChain", "Bolt", "Lovable", "v0"]
    }
  ];

  const stats = [
    { label: "Degree", value: "3rd Year CSE", sub: "GIET University" },
    { label: "Core Stack", value: "5+ Domains", sub: "Full-Stack • AI • 3D" },
    { label: "Hackathons", value: "Top Rank", sub: "GDG Hackathon Winner" },
    { label: "Featured", value: "HEPTOVERSE", sub: "Browser 3D Metaverse" },
  ];

  return (
    <section id="work" className="relative z-20 py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
      {/* Editorial Glass Header Panel */}
      <ScrollReveal animation="fade-up">
        <SpotlightGlassCard className="p-8 mb-12 backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-white/40">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[1px] w-8 bg-white/40" />
              <span className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-[0.25em] uppercase text-white shadow-md">
                Disciplines & Expertise
              </span>
            </div>

            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-light text-white">
              What I <span className="italic font-normal underline decoration-white/30 underline-offset-8">Do</span>
            </h2>
          </div>

          <p className="text-sm font-light text-white/80 max-w-md border-l border-white/20 pl-4 sm:pl-6 py-1">
            A multi-disciplinary stack across full-stack engineering, AI/ML, UI/UX systems, and browser-based 3D graphics.
          </p>
        </SpotlightGlassCard>
      </ScrollReveal>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 100} className={card.span}>
              <SpotlightGlassCard
                onMouseEnter={onHoverStart}
                onMouseLeave={onHoverEnd}
                className="p-8 flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Sparkles className="w-4 h-4 text-white/30 group-hover:text-white/80 transition-colors" />
                  </div>

                  <h3 className="font-serif-editorial text-2xl font-semibold text-white mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm font-light text-white/80 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Glassmorphic Topic Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {card.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 hover:border-white/40 shadow-sm transition-all duration-200 hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </SpotlightGlassCard>
            </ScrollReveal>
          );
        })}

        {/* Stats & Highlights Bento Card */}
        <ScrollReveal animation="fade-up" delay={500} className="col-span-1 md:col-span-1 lg:col-span-1">
          <SpotlightGlassCard
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className="p-8 flex flex-col justify-between group h-full bg-gradient-to-br from-white/10 to-white/5"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-white shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <Zap className="w-4 h-4 text-yellow-300 animate-pulse" />
              </div>

              <h3 className="font-serif-editorial text-2xl font-semibold text-white mb-4">
                Highlights
              </h3>

              <div className="grid grid-cols-2 gap-3 mb-2">
                {stats.map((stat, sIdx) => (
                  <div key={sIdx} className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                    <div className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-0.5">
                      {stat.label}
                    </div>
                    <div className="text-base font-bold text-white font-serif-editorial">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-white/70">
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightGlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
