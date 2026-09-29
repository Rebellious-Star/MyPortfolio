import React, { useState, useCallback } from 'react';
import CharacterCanvas from './components/CharacterCanvas';
import Navbar from './components/Navbar';
import HeroContent from './components/HeroContent';
import Marquee from './components/Marquee';
import AboutSection from './components/AboutSection';
import BentoWhatIDo from './components/BentoWhatIDo';
import HeptoverseSpotlight from './components/HeptoverseSpotlight';
import MyApproach from './components/MyApproach';
import ContactSection from './components/ContactSection';
import Cursor from './components/Cursor';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

export default function App() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = useCallback(() => setIsHovered(true), []);
  const handleHoverEnd = useCallback(() => setIsHovered(false), []);

  return (
    <main className="relative min-h-screen w-full bg-[#be1710] selection:bg-white selection:text-[#be1710] text-white">
      {/* Top Glowing Scroll Progress Bar */}
      <ScrollProgress />

      {/* Floating Ambient Light Particle Canvas */}
      <ParticleBackground />

      {/* 60 FPS Character Canvas Renderer (Fixed Background) */}
      <CharacterCanvas />

      {/* Top Floating Navbar Pill */}
      <Navbar onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} />

      {/* Hero Section Container (100vh height to showcase character tracking) */}
      <section className="relative w-full h-screen">
        <HeroContent onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} />
      </section>

      {/* Editorial Marquee Ticker */}
      <Marquee />

      {/* Editorial About Narrative Section */}
      <AboutSection onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} />

      {/* Bento Grid: What I Do */}
      <BentoWhatIDo onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} />

      {/* 3D Metaverse Spotlight: HEPTOVERSE */}
      <HeptoverseSpotlight onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} />

      {/* Philosophy & Approach */}
      <MyApproach onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} />

      {/* Bento Grid Contact Section */}
      <ContactSection onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} />

      {/* Floating Back to Top Button */}
      <BackToTop onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} />

      {/* Custom Magnetic Trailing Cursor */}
      <Cursor isHovered={isHovered} />
    </main>
  );
}
