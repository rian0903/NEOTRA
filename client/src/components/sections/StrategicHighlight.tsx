'use client';

import { ANNOUNCEMENT_HIGHLIGHT } from '@/data/content';
import { ShieldCheck, Code2 } from 'lucide-react';

export default function StrategicHighlight() {
  return (
    <section className="py-16 border-b border-[#E2E8F0] bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-[#E2E8F0] bg-gradient-to-r from-[#F5F7FA] via-white to-[#F5F7FA] p-8 md:p-12 shadow-xs">
          {/* Subtle Glow Circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#006FFF]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-mono text-[#006FFF] mb-6 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{ANNOUNCEMENT_HIGHLIGHT.badge}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-[#0A0F1A] mb-4">
              {ANNOUNCEMENT_HIGHLIGHT.title}
            </h3>

            <p className="text-base md:text-lg text-[#64748B] italic leading-relaxed font-sans mb-6">
              {ANNOUNCEMENT_HIGHLIGHT.quote}
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#006FFF]/10 border border-[#006FFF]/30 flex items-center justify-center text-[#006FFF] font-bold text-sm">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0A0F1A]">
                  {ANNOUNCEMENT_HIGHLIGHT.author}
                </p>
                <p className="text-xs font-mono text-[#64748B]">
                  Jakarta · Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
