'use client';

import Image from 'next/image';
import { FOOTER_DATA, NAV_LINKS } from '@/data/content';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-void border-t border-slate-800/80 pt-20 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-studio-navy/40 border border-slate-700/60 p-1 flex items-center justify-center">
                  <Image
                    src="/brand/logo1_cropped.png"
                    alt="NEOTRA Logo"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <span className="font-heading font-bold text-2xl tracking-wider text-slate-100">
                  NEOTRA
                </span>
              </div>

              <p className="text-slate-400 text-sm max-w-sm mb-6 font-mono uppercase tracking-wider">
                {FOOTER_DATA.statement}
              </p>
            </div>

            <div className="text-xs font-mono text-slate-500">
              INTEGRATED DIGITAL ENGINEERING STUDIO
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono text-slate-200 uppercase tracking-widest mb-6">
              NAVIGATION
            </h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="hover:text-accent transition-colors font-semibold text-slate-300">
                  Contact & Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Actions */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono text-slate-200 uppercase tracking-widest mb-6">
                CONNECT
              </h4>
              <ul className="space-y-3 text-sm">
                {FOOTER_DATA.socials.map((soc) => (
                  <li key={soc.label}>
                    <a
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{soc.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-8 inline-flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider hover:text-sky-300 transition-colors self-start"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>{FOOTER_DATA.copyright}</div>
          <div>BUILT WITH NEXT.JS & GO FIBER REST API</div>
        </div>
      </div>
    </footer>
  );
}
