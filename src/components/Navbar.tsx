'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  // Mobile menu state
  const [isOpen, setIsOpen] = useState(false);
  // Scroll detection state
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll position monitor karne ka hook
  useEffect(() => {
    const handleScrollState = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScrollState);
    return () => window.removeEventListener('scroll', handleScrollState);
  }, []);

  // Links matrix matching template items
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'About Us', href: '#about' },
    { name: 'Feedback', href: '#feedback' },
    { name: 'Contact Us', href: '#contact' },
  ];

  // Smooth click scroll mechanism
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-[#111827]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.3)] py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      {/* Upper Ambient Horizon Glow line when transparent */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFC71E]/20 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`} />

      <div className="max-w-7xl xl:max-w-[85rem] 2xl:max-w-[95rem] mx-auto px-6 w-full">
        <div className="flex items-center justify-between">
          
          {/* 🔥 BRAND LOGO BLOCK */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase font-sans flex items-center gap-1.5"
            >
              HRD <span className="text-blue-900">INSTITUTE</span>
            </a>
          </div>

          {/* 💎 DESKTOP NAVIGATION MATRIX */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="relative text-xs xl:text-sm font-bold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors duration-200 group py-2"
              >
                {link.name}
                {/* Underline Slide Animation Effect */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
              </a>
            ))}
          </div>

          {/* ⚡ PREMIUM CTA ACTION BUTTON */}
          <div className="hidden lg:block">
            <button className="group relative flex items-center justify-center font-black text-xs uppercase tracking-wider transition-all duration-300 rounded-xl  bg-blue-900 text-white overflow-hidden px-6 py-3  cursor-pointer  hover:-translate-y-0.5 active:translate-y-0">
              {/* Internal Background Sliding Accent Mask */}
              <span className="absolute inset-0 w-full h-full bg-neutral-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out z-0"></span>
              
              {/* Absolute Text Position Matrix */}
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                Get Started
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* 📱 MOBILE HAMBURGER TOGGLE BUTTON */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-zinc-300 hover:text-white focus:outline-none p-2.5 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md transition-all duration-200"
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 📱 MOBILE RESPONSIVE PANEL ACCORDION */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 ease-out overflow-hidden border-b border-white/5 bg-[#111827]/98 backdrop-blur-2xl ${
          isOpen ? 'max-h-screen opacity-100 py-6 px-6' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block text-sm font-black uppercase tracking-widest text-zinc-400 hover:text-white py-2 px-3 rounded-lg hover:bg-white/[0.02] transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/5">
            <button className="w-full bg-[#FFC71E] hover:bg-transparent border border-[#FFC71E] text-neutral-950 hover:text-[#FFC71E] font-black text-xs uppercase tracking-wider py-4 px-4 rounded-xl shadow-md transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}