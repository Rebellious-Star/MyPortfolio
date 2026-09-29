import React from 'react';

export default function Navbar({ onHoverStart, onHoverEnd }) {
  const navItems = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-40 flex justify-center items-center pointer-events-none px-4">
      <nav 
        className="pointer-events-auto flex items-center gap-2 sm:gap-4 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 box-glow shadow-2xl transition-all duration-300 hover:bg-white/15 hover:border-white/30"
      >
        {navItems.map((item, index) => (
          <React.Fragment key={item.label}>
            <a
              href={item.href}
              onMouseEnter={onHoverStart}
              onMouseLeave={onHoverEnd}
              className="text-xs sm:text-sm font-semibold tracking-widest text-white/90 hover:text-white transition-colors duration-200 px-3 py-1.5 rounded-full hover:bg-white/10"
            >
              [{item.label}]
            </a>
            {index < navItems.length - 1 && (
              <span className="text-white/30 text-xs select-none">•</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </header>
  );
}
