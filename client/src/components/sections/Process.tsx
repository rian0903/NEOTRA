'use client';

import { PROCESS_STEPS } from '@/data/content';
import { CheckCircle2 } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 border-b border-[#1E2C44] bg-[#0A0F1A]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs md:text-sm font-mono text-[#64748B] tracking-wider uppercase block mb-2">
              04 / PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F8FAFC]">
              How We Work
            </h2>
          </div>
          <p className="text-[#94A3B8] text-base max-w-md mt-4 md:mt-0 font-sans">
            A transparent 4-stage engineering workflow designed for rapid speed and zero friction.
          </p>
        </div>

        {/* Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="card-agency p-8 md:p-10 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-mono font-bold text-agency-electric">
                    {step.number}
                  </span>
                  <span className="text-xs font-mono text-[#64748B] uppercase tracking-widest">
                    STAGE {step.number}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-display font-bold text-[#F8FAFC] mb-3">
                  {step.name}
                </h3>

                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 font-sans">
                  {step.summary}
                </p>

                <ul className="space-y-2.5 border-t border-[#1E2C44] pt-4">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-[#F8FAFC]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-agency-electric shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
