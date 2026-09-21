'use client';

import { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/data/content';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key press (R-32)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-[1080px] flex items-center justify-between pointer-events-none transition-all duration-300 ${
          scrolled ? 'drop-shadow-md' : ''
        }`}
      >
        {/* Left Floating Logo Container */}
        <div className="pointer-events-auto bg-white/95 backdrop-blur-md border border-[#E2E8F0] rounded-full px-4 py-2 md:px-5 md:py-2.5 flex items-center shadow-sm">
          <a
            href="/"
            aria-label="NEOTRA Home"
            className="flex items-center group rounded-full focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
          >
            <img
              src="/brand/logo2.png"
              alt="NEOTRA"
              className="h-6 md:h-7.5 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>
        </div>

        {/* Right Floating Nav Pill Container */}
        <div className="pointer-events-auto bg-white/95 backdrop-blur-md border border-[#E2E8F0] rounded-full px-4 py-2 md:px-6 md:py-2.5 flex items-center gap-4 lg:gap-6 shadow-sm">
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#475569] hover:text-[#0A0F1A] transition-colors rounded-sm focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mulai Konsultasi Button */}
          <button
            onClick={onOpenConsultation}
            className="btn-primary-blue px-4 py-2 rounded-full text-xs font-semibold hidden md:flex items-center justify-center cursor-pointer shrink-0 focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
          >
            Mulai Konsultasi
          </button>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenConsultation}
              className="btn-primary-blue min-h-[44px] px-3.5 py-2 rounded-full text-xs font-semibold flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
            >
              Konsultasi
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] p-2.5 text-[#475569] hover:text-[#0A0F1A] rounded-full bg-[#F5F7FA] border border-[#E2E8F0] flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl flex flex-col justify-center px-8 py-12 md:hidden animate-fadeIn"
        >
          <div className="flex flex-col gap-6 text-center items-center">
            <img
              src="/brand/logo2.png"
              alt="NEOTRA"
              className="h-9 w-auto object-contain mb-4"
            />
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-bold text-[#0A0F1A] hover:text-[#006FFF] transition-colors rounded-sm focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-6 border-t border-[#E2E8F0] flex flex-col items-center gap-4 w-full">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation?.();
                }}
                className="btn-primary-blue w-full max-w-xs min-h-[44px] py-3.5 rounded-full font-semibold flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
              >
                Mulai Konsultasi
              </button>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono text-[#475569] hover:text-[#0A0F1A] min-h-[44px] px-4 flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
              >
                Tutup Menu (Esc)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
