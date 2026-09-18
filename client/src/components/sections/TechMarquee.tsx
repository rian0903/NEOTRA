'use client';

import { TECH_STACK } from '@/data/content';
import { Wrench } from 'lucide-react';

export default function TechMarquee() {
  return (
    <section className="py-20 bg-slate-950/90 border-y border-slate-800/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-accent text-xs font-mono tracking-widest uppercase mb-3">
          <Wrench className="w-3.5 h-3.5 text-accent" />
          <span>TOOLS & TECHNOLOGIES</span>
        </div>
        <p className="text-slate-400 text-sm font-mono uppercase tracking-wider">
          The stack changes with the problem. The engineering standard does not.
        </p>
      </div>

      {/* Infinite Marquee Track */}
      <div className="relative flex overflow-x-hidden group">
        <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] py-2">
          {TECH_STACK.concat(TECH_STACK).map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-4 mx-6 px-6 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 font-mono text-sm md:text-base font-semibold tracking-wider hover:border-accent hover:text-accent transition-all shadow-md"
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
