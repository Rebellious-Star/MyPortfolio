import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Marquee() {
  const items = [
    "UI/UX DESIGN",
    "AI & MACHINE LEARNING",
    "FULL-STACK DEVELOPMENT",
    "3D & METAVERSE",
    "IOT INTEGRATED SOFTWARES",
    "GAME DEVELOPMENT",
    "CREATIVE TECHNOLOGIST",
    "HEPTOVERSE 3D"
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black/20 border-y border-white/10 py-4 backdrop-blur-md z-20">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 text-xs sm:text-sm tracking-[0.25em] font-semibold text-white/80 uppercase">
            <span>{item}</span>
            <Sparkles className="w-3.5 h-3.5 text-white/40" />
          </div>
        ))}
      </div>
    </div>
  );
}
