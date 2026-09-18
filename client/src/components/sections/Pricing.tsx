'use client';

import { PRICING_PACKAGES } from '@/data/content';
import { Check, ArrowUpRight, Zap } from 'lucide-react';

interface PricingProps {
  onOpenConsultation?: () => void;
}

export default function Pricing({ onOpenConsultation }: PricingProps) {
  return (
    <section id="pricing" className="py-20 md:py-28 border-b border-[#1E2C44] bg-[#0A0F1A]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-mono text-[#64748B] tracking-wider uppercase block mb-2">
            03 / PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F8FAFC] mb-4">
            Simple pricing. Invest in impact.
          </h2>
          <p className="text-[#94A3B8] text-base md:text-lg font-sans">
            Transparent investments tailored for ambitious brands. No hidden fees, 100% full handover included.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-8 md:p-10 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.recommended
                  ? 'bg-[#111927] border-2 border-agency-electric shadow-electric-glow scale-102 z-10'
                  : 'bg-[#111927] border border-[#1E2C44] hover:border-agency-electric/40'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-agency-electric text-white text-[10px] font-mono font-bold tracking-widest uppercase shadow-md flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-current" /> RECOMMENDED
                </div>
              )}

              <div>
                <h3 className="text-xl font-display font-bold text-[#F8FAFC] mb-2">
                  {pkg.name}
                </h3>
                <p className="text-xs text-[#94A3B8] min-h-[36px] mb-6 font-sans">
                  {pkg.tagline}
                </p>

                <div className="mb-8 pb-6 border-b border-[#1E2C44]">
                  <span className="text-3xl md:text-4xl font-display font-extrabold text-[#F8FAFC]">
                    {pkg.price}
                  </span>
                  <span className="text-xs font-mono text-[#64748B] block mt-1">
                    / {pkg.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#F8FAFC]">
                      <Check className="w-4 h-4 text-agency-electric shrink-0 mt-0.5" />
                      <span className="font-sans">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenConsultation}
                className={`w-full py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  pkg.recommended
                    ? 'btn-primary-electric'
                    : 'bg-[#0A0F1A] border border-[#1E2C44] text-[#F8FAFC] hover:border-agency-electric hover:text-agency-electric'
                }`}
              >
                <span>{pkg.cta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
