'use client';

import { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/data/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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

  return (
    <>
      <header
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-[1080px] flex items-center justify-between pointer-events-none transition-all duration-300 ${
          scrolled ? 'drop-shadow-md' : ''
        }`}
      >
        {/* Left Floating Logo Container (Outside Main Nav Pill) */}
        <div className="pointer-events-auto bg-white/90 backdrop-blur-md border border-[#E2E8F0] rounded-full px-4 py-2 md:px-5 md:py-2.5 flex items-center shadow-sm">
          <a href="#" className="flex items-center group">
            <img
              src="/brand/logo2.png"
              alt="NEOTRA"
              className="h-6 md:h-7.5 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>
        </div>

        {/* Right Floating Nav Pill Container */}
        <div className="pointer-events-auto bg-white/90 backdrop-blur-md border border-[#E2E8F0] rounded-full px-4 py-2 md:px-6 md:py-2.5 flex items-center gap-4 lg:gap-6 shadow-sm">
          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#64748B] hover:text-[#0A0F1A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mulai Konsultasi Button */}
          <button
            onClick={onOpenConsultation}
            className="btn-primary-blue px-4 py-2 rounded-full text-xs font-semibold hidden md:flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            Mulai Konsultasi
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenConsultation}
              className="btn-primary-blue px-3 py-1.5 rounded-full text-xs font-semibold"
            >
              Konsultasi
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#64748B] hover:text-[#0A0F1A] rounded-full bg-[#F5F7FA] border border-[#E2E8F0]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl flex flex-col justify-center px-8 py-12 md:hidden animate-fadeIn">
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
                className="text-2xl font-display font-bold text-[#0A0F1A] hover:text-[#006FFF] transition-colors"
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
                className="btn-primary-blue w-full max-w-xs py-3 rounded-full font-semibold flex items-center justify-center gap-2"
              >
                Mulai Konsultasi <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
