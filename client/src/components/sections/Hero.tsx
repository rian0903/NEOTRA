'use client';

import { HERO_DATA as fallbackHero } from '@/data/content';
import { useSiteData } from '@/hooks/useSiteData';
import ScrollReveal from '@/components/common/ScrollReveal';

interface HeroProps {
  onOpenConsultation?: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const { heroData } = useSiteData();
  const currentHero = heroData || fallbackHero;

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 border-b border-[#E2E8F0] bg-white overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#006FFF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Overline Metadata */}
        <ScrollReveal direction="up" delay={0.05}>
          <span className="text-xs md:text-sm font-mono text-[#006FFF] uppercase tracking-widest block mb-4">
            {currentHero.overline}
          </span>
        </ScrollReveal>

        {/* H1 Headline */}
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0A0F1A] tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
            {currentHero.headline}
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-base sm:text-lg md:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed mb-10 font-sans">
            {currentHero.supporting}
          </p>
        </ScrollReveal>

        {/* CTA Row */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Primary CTA Button */}
            <button
              onClick={onOpenConsultation}
              className="btn-primary-blue w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full text-base font-semibold flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
            >
              <span>{currentHero.primaryCta}</span>
            </button>

            {/* Secondary CTA Button */}
            <a
              href="#work"
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-[#F5F7FA] border border-[#E2E8F0] text-[#0A0F1A] text-base font-semibold hover:bg-white transition-colors flex items-center justify-center shadow-xs focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
            >
              <span>{currentHero.secondaryCta}</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
