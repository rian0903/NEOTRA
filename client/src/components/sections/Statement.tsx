'use client';

import { POSITIONING_DATA } from '@/data/content';
import ScrollReveal from '@/components/common/ScrollReveal';

export default function Statement() {
  return (
    <section className="py-20 md:py-28 border-b border-[#E2E8F0] bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="up" delay={0.1}>
          <span className="text-xs font-mono text-[#006FFF] uppercase tracking-widest block mb-4">
            {POSITIONING_DATA.label}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#0A0F1A] max-w-4xl mx-auto leading-tight mb-6">
            "{POSITIONING_DATA.statement}"
          </h2>
          <p className="text-[#64748B] text-base md:text-lg max-w-2xl mx-auto font-sans">
            {POSITIONING_DATA.supporting}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
