import React from 'react';
import { Compass, Code2, Cpu, Sparkles, Layers } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AboutSection({ onHoverStart, onHoverEnd }) {
  return (
    <section id="about" className="relative z-20 py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
      {/* Editorial Glass Header Badge */}
      <ScrollReveal animation="fade-down">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] w-12 bg-white/40" />
          <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white shadow-lg">
            Editorial / Story
          </span>
        </div>
      </ScrollReveal>

      {/* Main High-Impact Intro Headline Panel with Glassmorphism */}
      <ScrollReveal animation="fade-up" delay={100}>
        <div 
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          className="glass-card rounded-3xl p-8 sm:p-12 border border-white/20 backdrop-blur-2xl shadow-2xl mb-16 relative overflow-hidden group transition-all duration-300 hover:border-white/40"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-colors duration-500" />
          
          <h2 className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-6 relative z-10">
            Hi, I'm <span className="font-cursive text-5xl sm:text-7xl lg:text-8xl text-white text-glow px-2">Dhruv</span>. <br />
            <span className="italic text-white/90">I design.</span> <span className="font-semibold text-white">I build.</span> <span className="underline decoration-white/30 underline-offset-8">I experiment.</span>
          </h2>
          
          <p className="text-lg sm:text-xl font-light text-white/90 leading-relaxed max-w-4xl border-l-2 border-white/40 pl-6 my-6 py-2 relative z-10">
            I'm a <strong className="font-semibold text-white">third-year Computer Science & Engineering student at GIET University, Gunupur</strong>, exploring the space where <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white font-semibold shadow-sm inline-block my-1">UI/UX, AI/ML, web development, and 3D experiences</span> come together.
            I enjoy turning ideas into interactive digital products—from intelligent systems and full-stack applications to immersive 3D environments.
          </p>
        </div>
      </ScrollReveal>

      {/* Grid Layout: About Me & A Little About Me */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Card 1: About Me */}
        <ScrollReveal animation="slide-left" delay={200}>
          <div 
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className="glass-card rounded-3xl p-8 sm:p-10 transition-all duration-300 relative overflow-hidden group border border-white/20 hover:-translate-y-2 hover:scale-[1.01]"
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-md group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl font-semibold text-white">
                About Me
              </h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-white/85 font-light leading-relaxed">
              <p>
                I'm <strong className="font-semibold text-white">Dhruv Pandey</strong>, a 3rd-year Computer Science & Engineering student at GIET University, Gunupur. I am deeply interested in creating experiences that live at the <span className="px-2.5 py-0.5 rounded-md bg-white/10 backdrop-blur-md border border-white/20 font-medium text-white">intersection of technology, design, and creativity</span>.
              </p>
              <p>
                My passions include <strong className="px-2 py-0.5 rounded-md bg-white/10 border border-white/15 text-white">UI/UX design, AI/ML, web development, and 3D/game development</strong>. I don't like to stick to one field. Instead, I enjoy seeing how different technologies can come together to make something that's both <span className="font-semibold text-white">technically impressive and actually useful for people</span>.
              </p>
              <p>
                I've worked on diverse projects—ranging from <strong className="text-white">AI-powered surveillance systems</strong> and healthcare platforms to expense-management applications and interactive web experiences. I've also taken part in hackathons, including finishing in top ranks at a <strong>GDG Hackathon</strong> building a web-based file compression tool.
              </p>
              <p>
                I'm especially excited about <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 font-semibold text-white">AI-assisted development</span>. I use AI tools during research, architecture design, prototyping, and testing ideas. For me, AI isn't there to replace understanding—it's there to help me explore faster, think differently, and craft unforgettable user experiences.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Card 2: A Little About Me */}
        <ScrollReveal animation="slide-right" delay={300}>
          <div 
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className="glass-card rounded-3xl p-8 sm:p-10 transition-all duration-300 relative overflow-hidden group border border-white/20 hover:-translate-y-2 hover:scale-[1.01]"
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500" />

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-md group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl font-semibold text-white">
                A Little About Me
              </h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-white/85 font-light leading-relaxed">
              <p className="italic text-white font-serif-editorial text-lg p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                "I've never been particularly interested in staying inside one box."
              </p>
              <p>
                I started with computer science, but over time I became fascinated by everything around it—how interfaces feel, how products communicate, how AI can change the way we build, how 3D environments can feel alive, and how a simple idea can become something people can actually interact with.
              </p>
              <p>
                That's what led me toward combining <strong className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white font-semibold">UI/UX, AI/ML, web development, and 3D development</strong>.
              </p>
              <p>
                I like moving between disciplines. One day I might be designing an interface in Figma, another day I'm debugging a backend, training an ML model, building a Three.js environment, or using an AI coding agent to explore an entirely different implementation.
              </p>
              <p className="font-medium text-white pt-2 border-t border-white/10">
                I'm here to make technology feel a little more human, a little more creative, and a lot more interesting.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
