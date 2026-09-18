'use client';

import { FOOTER_DATA, NAV_LINKS } from '@/data/content';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F2D56] text-[#94A3B8] pt-16 pb-12 border-t border-[#1E2C44]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Watermark / Display Text */}
        <div className="border-b border-[#1E2C44] pb-12 mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white tracking-tight uppercase opacity-95 select-none">
            Digital-First Jakarta Web Agency<span className="text-[#006FFF]">®</span>
          </h2>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-1">
            <span className="font-display font-extrabold text-xl text-white block mb-3">
              NEOTRA<span className="text-[#006FFF] font-mono text-xs ml-0.5">®</span>
            </span>
            <p className="text-xs text-[#94A3B8] leading-relaxed mb-4 font-sans">
              PT NEOTRA Strategic Group. Integrated Digital Engineering Studio.
            </p>
            <span className="inline-block px-3 py-1 rounded-full bg-[#0A0F1A] border border-[#1E2C44] text-[11px] font-mono text-[#006FFF]">
              Jakarta South · Indonesia
            </span>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block mb-4">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#94A3B8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block mb-4">
              DIRECT CONTACT
            </span>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <a
                  href="mailto:contact@neotra.id"
                  className="text-white hover:text-[#006FFF] transition-colors font-medium"
                >
                  contact@neotra.id
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281380870105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-white transition-colors"
                >
                  +62 813 8087 0105
                </a>
              </li>
              <li className="text-xs text-[#64748B] pt-2">
                Mon - Fri · 09:00 - 18:00 WIB
              </li>
            </ul>
          </div>

          {/* Col 4: Social Links */}
          <div>
            <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider block mb-4">
              CONNECT
            </span>
            <div className="flex flex-col space-y-2.5 text-sm">
              {FOOTER_DATA.socials.map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  <span>{soc.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-[#1E2C44] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#64748B] gap-4">
          <p>{FOOTER_DATA.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#94A3B8]">Terms of Service</a>
            <a href="#" className="hover:text-[#94A3B8]">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
