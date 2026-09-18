'use client';

import { PROOF_DATA } from '@/data/content';
import { ShieldCheck, Cpu, Code2, Server, CheckCircle2 } from 'lucide-react';

export default function Proof() {
  return (
    <section className="py-20 md:py-28 border-b border-[#E2E8F0] bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-mono text-[#64748B] tracking-wider uppercase block mb-2">
            05 / ENGINEERING PROOF
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#0A0F1A] mb-4">
            {PROOF_DATA.title}
          </h2>
          <p className="text-[#64748B] text-base md:text-lg font-sans">
            {PROOF_DATA.summary}
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PROOF_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-2xl bg-[#F5F7FA] border border-[#E2E8F0] text-center flex flex-col justify-center items-center"
            >
              <div className="text-3xl md:text-4xl font-display font-extrabold text-[#006FFF] mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-mono text-[#64748B]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
