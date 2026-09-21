'use client';

import { PROOF_DATA } from '@/data/content';
import ScrollReveal from '@/components/common/ScrollReveal';

export default function Proof() {
  return (
    <section id="proof" className="py-20 md:py-28 border-b border-[#E2E8F0] bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs md:text-sm font-mono text-[#006FFF] tracking-wider uppercase block mb-2">
              04 / ENGINEERING STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#0A0F1A] mb-4">
              {PROOF_DATA.title}
            </h2>
            <p className="text-[#475569] text-base md:text-lg font-sans">
              {PROOF_DATA.summary}
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PROOF_DATA.stats.map((stat, idx) => (
            <ScrollReveal key={idx} direction="up" delay={0.1 * (idx + 1)}>
              <div className="p-6 md:p-8 rounded-2xl bg-[#F5F7FA] border border-[#E2E8F0] text-center flex flex-col justify-center items-center h-full hover:border-[#006FFF]/30 transition-colors">
                <div className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-[#006FFF] mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-mono text-[#475569]">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
