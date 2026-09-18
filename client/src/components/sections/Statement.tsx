'use client';

import { ANNOUNCEMENT_HIGHLIGHT } from '@/data/content';

export default function Statement() {
  return (
    <section className="py-20 md:py-28 border-b border-[#1E2C44] bg-[#0A0F1A]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-mono text-agency-electric uppercase tracking-widest block mb-4">
          OUR MISSION & PHILOSOPHY
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F8FAFC] max-w-4xl mx-auto leading-tight mb-6">
          "TECHNOLOGY SHOULD REMOVE COMPLEXITY, NOT ADD TO IT."
        </h2>
        <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl mx-auto font-sans">
          NEOTRA brings software architecture, connected systems, infrastructure, and strategic digital design into one practical workflow.
        </p>
      </div>
    </section>
  );
}
