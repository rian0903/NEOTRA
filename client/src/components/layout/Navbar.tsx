'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { NAV_LINKS, HERO_DATA } from '@/data/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-void/85 backdrop-blur-md border-b border-slate-800/80 py-4 shadow-xl shadow-black/40'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-accent rounded-sm">
          <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-studio-navy/40 border border-slate-700/60 p-1 flex items-center justify-center group-hover:border-accent transition-colors">
            <Image
              src="/brand/logo1_cropped.png"
              alt="NEOTRA Logo"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-heading font-bold text-xl tracking-wider text-slate-100 group-hover:text-accent transition-colors">
            NEOTRA
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-accent transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-studio-navy to-slate-800 border border-slate-700 hover:border-accent hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] text-slate-100 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 group"
          >
            <span>{HERO_DATA.primaryCta}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileOpen}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-accent focus:outline-none"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 p-6 shadow-2xl flex flex-col gap-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-slate-200">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="hover:text-accent transition-colors py-2 border-b border-slate-800/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-accent text-void font-semibold py-3 rounded-lg text-sm uppercase tracking-wider hover:bg-sky-300 transition-colors"
          >
            <span>{HERO_DATA.primaryCta}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
