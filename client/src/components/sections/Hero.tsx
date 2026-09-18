'use client';

import { HERO_DATA } from '@/data/content';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenConsultation?: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 border-b border-[#1E2C44] bg-[#0A0F1A] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0F2D56]/30 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Monospace Tag Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111927] border border-[#1E2C44] mb-8">
          <span className="w-2 h-2 rounded-full bg-agency-electric animate-pulse" />
          <span className="text-xs md:text-sm font-mono text-[#94A3B8] tracking-wider uppercase">
            {HERO_DATA.topBadge}
          </span>
        </div>

        {/* H1 Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
          Jakarta Web Agency<span className="text-agency-electric">®</span> Trusted by 100+ Brands<span className="text-agency-electric">®</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed mb-10 font-sans">
          {HERO_DATA.supporting}
        </p>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Primary CTA Button */}
          <button
            onClick={onOpenConsultation}
            className="btn-primary-electric w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 group cursor-pointer"
          >
            {HERO_DATA.primaryCta}
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Social Proof Badge */}
          <div className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#111927] border border-[#1E2C44] text-[#F8FAFC] text-sm font-medium">
            <ShieldCheck className="w-4 h-4 text-agency-electric" />
            <span>{HERO_DATA.secondaryProof}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
