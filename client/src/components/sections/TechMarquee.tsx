'use client';

import { LOGO_CLOUD } from '@/data/content';

export default function TechMarquee() {
  const marqueeItems = [...LOGO_CLOUD, ...LOGO_CLOUD, ...LOGO_CLOUD];

  return (
    <section className="py-12 border-b border-[#E2E8F0] bg-white overflow-hidden relative">
      {/* Gradient Mask Side Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="max-w-[1080px] mx-auto px-4 mb-4 text-center">
        <p className="text-xs font-mono text-[#64748B] tracking-widest uppercase">
          TRUSTED BY LEADING BRANDS & ENTERPRISES
        </p>
      </div>

      <div className="flex overflow-hidden select-none">
        <div className="flex shrink-0 gap-12 md:gap-20 animate-marquee items-center">
          {marqueeItems.map((brand, idx) => (
            <div
              key={idx}
              className="text-lg md:text-xl font-display font-black tracking-widest text-[#64748B] hover:text-[#0A0F1A] transition-colors cursor-default uppercase"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
