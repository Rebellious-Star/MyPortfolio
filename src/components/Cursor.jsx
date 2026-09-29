import React, { useEffect, useState, useRef } from 'react';

export default function Cursor({ isHovered }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth lerp loop for outer aura ring
  useEffect(() => {
    let animId;
    const updateRing = () => {
      const rx = ringPosRef.current.x;
      const ry = ringPosRef.current.y;
      const tx = pos.x;
      const ty = pos.y;

      // Lerp factor ~0.2 for smooth trailing effect
      const nx = rx + (tx - rx) * 0.22;
      const ny = ry + (ty - ry) * 0.22;

      ringPosRef.current = { x: nx, y: ny };
      setRingPos({ x: nx, y: ny });

      animId = requestAnimationFrame(updateRing);
    };

    animId = requestAnimationFrame(updateRing);
    return () => cancelAnimationFrame(animId);
  }, [pos]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Trailing Aura Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-white/60 transition-transform duration-200 ease-out flex items-center justify-center ${
          isHovered ? 'w-16 h-16 bg-white/10 border-white shadow-[0_0_20px_rgba(255,255,255,0.5)] scale-110' : 'w-10 h-10 shadow-[0_0_10px_rgba(255,255,255,0.2)]'
        }`}
        style={{
          transform: `translate3d(${ringPos.x - (isHovered ? 32 : 20)}px, ${ringPos.y - (isHovered ? 32 : 20)}px, 0)`,
        }}
      />

      {/* Inner Crisp White Dot */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-white transition-all duration-150 ${
          isHovered ? 'w-2 h-2 opacity-0' : 'w-2.5 h-2.5 shadow-[0_0_8px_#ffffff] opacity-100'
        }`}
        style={{
          transform: `translate3d(${pos.x - (isHovered ? 4 : 5)}px, ${pos.y - (isHovered ? 4 : 5)}px, 0)`,
        }}
      />
    </>
  );
}
