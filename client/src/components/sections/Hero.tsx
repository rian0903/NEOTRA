'use client';

import { HERO_DATA } from '@/data/content';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';

interface HeroProps {
  onOpenConsultation?: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 border-b border-[#E2E8F0] bg-white overflow-hidden">
      {/* Background Soft Blue Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#006FFF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* H1 Headline */}
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0A0F1A] tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
            {HERO_DATA.headline}
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-base sm:text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed mb-10 font-sans">
            {HERO_DATA.supporting}
          </p>
        </ScrollReveal>

        {/* CTA Row */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Primary CTA Button */}
            <button
              onClick={onOpenConsultation}
              className="btn-primary-blue w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{HERO_DATA.primaryCta}</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Secondary CTA Button */}
            <a
              href="#work"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F5F7FA] border border-[#E2E8F0] text-[#0A0F1A] text-base font-semibold hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <span>{HERO_DATA.secondaryCta}</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
