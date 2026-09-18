'use client';

import { PROOF_DATA } from '@/data/content';
import { ShieldCheck, Server, Activity, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Proof() {
  const getStatIcon = (idx: number) => {
    switch (idx) {
      case 0: return <ShieldCheck className="w-5 h-5 text-accent" />;
      case 1: return <Activity className="w-5 h-5 text-accent" />;
      case 2: return <Server className="w-5 h-5 text-accent" />;
      case 3: return <FileCheck className="w-5 h-5 text-accent" />;
      default: return <ShieldCheck className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="about" className="py-24 md:py-36 bg-slate-950/80 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{PROOF_DATA.label}</span>
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-100 tracking-tight">
              {PROOF_DATA.title}
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md font-normal leading-relaxed">
            {PROOF_DATA.summary}
          </p>
        </div>

        {/* Real Engineering Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROOF_DATA.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800/90 hover:border-accent/50 transition-colors flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-slate-500">METRIC 0{idx + 1}</span>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  {getStatIcon(idx)}
                </div>
              </div>

              <div>
                <div className="font-heading font-extrabold text-3xl md:text-4xl text-slate-100 mb-2">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
