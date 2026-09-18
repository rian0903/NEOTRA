'use client';

import { HERO_DATA } from '@/data/content';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 md:pt-44 md:pb-32 flex flex-col justify-center overflow-hidden bg-grid-pattern">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-studio-navy/30 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Area */}
          <div className="lg:col-span-8 flex flex-col items-start">
            
            {/* Overline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-accent text-xs font-mono tracking-widest uppercase mb-8 shadow-inner"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>{HERO_DATA.overline}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] text-slate-100 mb-8 max-w-4xl"
            >
              We build digital systems that make complex things feel{' '}
              <span className="bg-gradient-to-r from-accent via-sky-200 to-indigo-400 bg-clip-text text-transparent">
                simple.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl mb-10"
            >
              {HERO_DATA.supporting}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-accent text-slate-950 font-semibold px-8 py-4 rounded-lg text-sm tracking-wide uppercase hover:bg-sky-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all duration-300 group"
              >
                <span>{HERO_DATA.primaryCta}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900/80 border border-slate-700/80 text-slate-200 font-medium px-7 py-4 rounded-lg text-sm hover:border-slate-500 hover:text-white transition-all duration-300 group"
              >
                <span>{HERO_DATA.secondaryCta}</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Supporting Visual / Live Capability Card (Editorial Interactive Element) */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative p-6 md:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-2xl backdrop-blur-md overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 text-accent">
                <Terminal className="w-16 h-16" />
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6 border-b border-slate-800 pb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-slate-300 font-semibold">STUDIO CAPABILITY MATRIX</span>
              </div>

              <div className="space-y-4">
                {HERO_DATA.metadata.map((item, idx) => (
                  <div
                    key={item}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-accent/40 transition-colors"
                  >
                    <span className="font-mono text-xs text-slate-300">0{idx + 1} // {item}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-studio-navy/60 text-accent border border-studio-navy">
                      READY
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>SYSTEM STATUS</span>
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> ONLINE
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
