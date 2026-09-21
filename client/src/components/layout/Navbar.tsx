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
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-[1080px] flex items-center justify-between gap-3 sm:gap-4 md:gap-6 pointer-events-none transition-all duration-300 ${
          scrolled ? 'drop-shadow-md' : ''
        }`}
      >
        {/* Standalone Logo (No card/container, prominent & responsive across devices) */}
        <div className="pointer-events-auto flex items-center shrink-0">
          <a
            href="/"
            aria-label="NEOTRA Home"
            className="flex items-center group rounded-md focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none py-1 transition-opacity hover:opacity-90"
          >
            <img
              src="/brand/logo2.png"
              alt="NEOTRA"
              className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>
        </div>

        {/* Floating Navbar Pill Container - Extends neatly up to the side of logo */}
        <div className="pointer-events-auto bg-white/95 backdrop-blur-md border border-[#E2E8F0] rounded-full px-4 sm:px-5 md:px-6 py-2 md:py-2.5 flex items-center justify-between gap-3 md:gap-6 shadow-sm flex-1 min-w-0">
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-7" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-[#475569] hover:text-[#006FFF] transition-colors rounded-sm focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Mulai Konsultasi Button */}
          <button
            onClick={onOpenConsultation}
            className="btn-primary-blue px-4 lg:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold hidden md:flex items-center justify-center cursor-pointer shrink-0 focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none ml-auto"
          >
            Mulai Konsultasi
          </button>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 md:hidden w-full justify-between sm:justify-end">
            <button
              onClick={onOpenConsultation}
              className="btn-primary-blue min-h-[40px] px-3.5 py-2 rounded-full text-xs font-semibold flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none shrink-0"
            >
              Konsultasi
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[40px] min-h-[40px] p-2 text-[#475569] hover:text-[#0A0F1A] rounded-full bg-[#F5F7FA] border border-[#E2E8F0] flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
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
              className="h-10 w-auto object-contain mb-4"
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
