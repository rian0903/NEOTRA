'use client';

import { PROCESS_STEPS } from '@/data/content';
import ScrollReveal from '@/components/common/ScrollReveal';
import { CheckCircle2 } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 border-b border-[#E2E8F0] bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs md:text-sm font-mono text-[#64748B] tracking-wider uppercase block mb-2">
                04 / PROCESS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#0A0F1A]">
                How We Work
              </h2>
            </div>
            <p className="text-[#64748B] text-base max-w-md mt-4 md:mt-0 font-sans">
              A transparent 5-stage engineering workflow designed for rapid speed and zero friction.
            </p>
          </div>
        </ScrollReveal>

        {/* Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <ScrollReveal key={step.number} direction="up" delay={0.12 * (idx + 1)}>
              <div className="card-agency-light p-8 md:p-10 rounded-2xl flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-mono font-bold text-[#006FFF]">
                      {step.number}
                    </span>
                    <span className="text-xs font-mono text-[#64748B] uppercase tracking-widest">
                      STAGE {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-display font-bold text-[#0A0F1A] mb-3">
                    {step.name}
                  </h3>

                  <p className="text-sm text-[#64748B] leading-relaxed mb-6 font-sans">
                    {step.summary}
                  </p>

                  <ul className="space-y-2.5 border-t border-[#E2E8F0] pt-4">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2.5 text-xs text-[#0A0F1A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#006FFF] shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
