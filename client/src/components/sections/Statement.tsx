'use client';

import { POSITIONING_DATA } from '@/data/content';
import { motion } from 'framer-motion';

export default function Statement() {
  return (
    <section className="py-28 md:py-40 bg-slate-950/60 relative overflow-hidden border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-accent text-xs font-mono tracking-widest uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>{POSITIONING_DATA.label}</span>
        </motion.div>

        {/* Large Statement Quote */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-extrabold text-3xl sm:text-4xl md:text-6xl text-slate-100 max-w-5xl mx-auto leading-[1.15] tracking-tight mb-8"
        >
          "{POSITIONING_DATA.statement}"
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed"
        >
          {POSITIONING_DATA.supporting}
        </motion.p>

      </div>
    </section>
  );
}
