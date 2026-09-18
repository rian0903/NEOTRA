'use client';

import { useState, useEffect } from 'react';
import { NAV_LINKS, HERO_DATA } from '@/data/content';
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
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-[1000px] transition-all duration-300 ${
          scrolled ? 'shadow-2xl shadow-black/60' : ''
        }`}
      >
        <div className="bg-[#0A0F1A]/85 backdrop-blur-md border border-[#1E2C44] rounded-full px-5 py-3 md:px-7 md:py-3.5 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-display font-extrabold text-lg md:text-xl tracking-tight text-white group-hover:text-agency-electric transition-colors">
              NEOTRA<span className="text-agency-electric font-mono text-xs ml-0.5">®</span>
            </span>
          </a>

          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Area: Availability Status & Action */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Availability Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111927] border border-[#1E2C44]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#21B30B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#21B30B]"></span>
              </span>
              <span className="text-xs font-mono text-[#94A3B8]">
                {HERO_DATA.availability}
              </span>
            </div>

            {/* Book Call Button */}
            <button
              onClick={onOpenConsultation}
              className="btn-primary-electric px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5"
            >
              Book Call
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onOpenConsultation}
              className="btn-primary-electric px-3 py-1.5 rounded-full text-xs font-semibold"
            >
              Book Call
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#94A3B8] hover:text-white rounded-full bg-[#111927] border border-[#1E2C44]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0F1A]/95 backdrop-blur-xl flex flex-col justify-center px-8 py-12 md:hidden animate-fadeIn">
          <div className="flex flex-col gap-6 text-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-bold text-[#F8FAFC] hover:text-agency-electric transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-6 border-t border-[#1E2C44] flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#111927] border border-[#1E2C44]">
                <span className="h-2 w-2 rounded-full bg-[#21B30B]"></span>
                <span className="text-xs font-mono text-[#94A3B8]">
                  {HERO_DATA.availability}
                </span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation?.();
                }}
                className="btn-primary-electric w-full max-w-xs py-3 rounded-full font-semibold flex items-center justify-center gap-2"
              >
                Book Free Discovery Call <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
