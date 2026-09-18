'use client';

import { PROCESS_STEPS } from '@/data/content';
import { GitCommit, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-36 bg-void relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>METHODOLOGY & EXECUTION</span>
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-100 tracking-tight">
              HOW WE WORK.
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md font-normal leading-relaxed">
            A practical 5-step engineering process focused on clarity, milestone delivery, and maintainable systems.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-6 rounded-2xl bg-slate-950/90 border border-slate-800/90 hover:border-accent/60 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xl font-bold text-accent">
                    {step.number}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-900 text-slate-400 group-hover:text-accent transition-colors">
                    <GitCommit className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-xl text-slate-100 group-hover:text-white transition-colors mb-3">
                  {step.name}
                </h3>

                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                  {step.summary}
                </p>
              </div>

              {/* Step details checklist */}
              <div className="pt-4 border-t border-slate-900 text-[11px] font-mono text-slate-500 space-y-1.5">
                {step.details.map((detail) => (
                  <div key={detail} className="flex items-start gap-1.5">
                    <span className="text-accent">•</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
