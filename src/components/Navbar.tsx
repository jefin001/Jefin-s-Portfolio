import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, ArrowUp } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#161316]/75 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg md:text-xl font-bold tracking-tight text-white hover:text-[#FF6D29] transition-colors whitespace-nowrap shrink-0 font-['Manrope'] flex items-center gap-2"
        >
          <span>Jefin K.</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6D29] shadow-[0_0_8px_#FF6D29]" />
        </a>

        {/* Zone 2: 5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#BABABA]">
          <a
            href="#what-i-do"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#FF6D29]"
          >
            Capabilities
          </a>
          <a
            href="#case-studies"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#FF6D29]"
          >
            Case Studies
          </a>
          <a
            href="#clients"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#FF6D29]"
          >
            Clients
          </a>
          <a
            href="#process"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#FF6D29]"
          >
            Process
          </a>
          <a
            href="#experience"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#FF6D29]"
          >
            Experience
          </a>
        </nav>

        {/* Zone 3: Glass button pairing matching the Wojciech Zielinski reference image */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Glass Circle Button */}
          <button
            onClick={onContactClick}
            className="hidden sm:inline-flex w-9 h-9 glass-circle text-[#BABABA] hover:text-white cursor-pointer"
            aria-label="Direct contact"
            title="Let's talk"
          >
            <ArrowUpRight className="w-4 h-4 text-[#FF6D29]" />
          </button>

          {/* Glass Main Pill Button */}
          <button
            onClick={onContactClick}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-wide text-white glass-btn hover:text-white rounded-full transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Let's Talk</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6D29]" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#BABABA] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161316]/95 backdrop-blur-2xl border-b border-white/15 px-6 py-6 mt-3 space-y-4 shadow-2xl">
          <a
            href="#what-i-do"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#BABABA] hover:text-white"
          >
            Capabilities
          </a>
          <a
            href="#case-studies"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#BABABA] hover:text-white"
          >
            Case Studies
          </a>
          <a
            href="#clients"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#BABABA] hover:text-white"
          >
            Clients
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#BABABA] hover:text-white"
          >
            Process
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#BABABA] hover:text-white"
          >
            Experience
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onContactClick();
            }}
            className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-white glass-btn-accent rounded-full transition-all cursor-pointer"
          >
            <span>Initiate Collaboration</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
