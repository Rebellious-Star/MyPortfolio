import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop({ onHoverStart, onHoverEnd }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-40 p-3.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white shadow-2xl hover:bg-white hover:text-[#be1710] transition-all duration-300 transform hover:scale-110 active:scale-95 animate-fade-in group"
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
    </button>
  );
}
