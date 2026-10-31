import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8FAFC]/90 backdrop-blur-md border-b border-[#E2E8F0] py-3.5 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg md:text-xl font-bold tracking-tight text-[#0F172A] hover:text-[#047857] transition-colors whitespace-nowrap shrink-0 font-['Manrope']"
        >
          Jefin K.
        </a>

        {/* Zone 2: 5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#64748B]">
          <a
            href="#what-i-do"
            className="hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#047857]"
          >
            Capabilities
          </a>
          <a
            href="#case-studies"
            className="hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#047857]"
          >
            Case Studies
          </a>
          <a
            href="#clients"
            className="hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#047857]"
          >
            Clients
          </a>
          <a
            href="#process"
            className="hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#047857]"
          >
            Process
          </a>
          <a
            href="#experience"
            className="hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#047857]"
          >
            Experience
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onContactClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#0F172A] hover:bg-[#047857] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#64748B] hover:text-[#0F172A] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E2E8F0] px-6 py-6 mt-3 space-y-4 shadow-lg">
          <a
            href="#what-i-do"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#64748B] hover:text-[#0F172A]"
          >
            Capabilities
          </a>
          <a
            href="#case-studies"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#64748B] hover:text-[#0F172A]"
          >
            Case Studies
          </a>
          <a
            href="#clients"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#64748B] hover:text-[#0F172A]"
          >
            Clients
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#64748B] hover:text-[#0F172A]"
          >
            Process
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#64748B] hover:text-[#0F172A]"
          >
            Experience
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onContactClick();
            }}
            className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#0F172A] hover:bg-[#047857] rounded-lg transition-colors cursor-pointer"
          >
            <span>Initiate Collaboration</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </header>
  );
};
