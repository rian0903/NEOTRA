'use client';

import { useState } from 'react';
import { WORK_ITEMS } from '@/data/content';
import { WorkItem } from '@/types';
import WorkModal from '../common/WorkModal';
import { ArrowUpRight, Code2, Layers, Cpu, Radio, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SelectedWork() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  const getCategoryIcon = (category: string) => {
    if (category.includes('IOT')) return <Cpu className="w-5 h-5 text-accent" />;
    if (category.includes('WEB')) return <Code2 className="w-5 h-5 text-accent" />;
    if (category.includes('NETWORK')) return <Radio className="w-5 h-5 text-accent" />;
    return <Layers className="w-5 h-5 text-accent" />;
  };

  return (
    <section id="work" className="py-24 md:py-36 bg-void relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>SELECTED WORK</span>
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-100 tracking-tight">
              A FEW THINGS WE'VE BUILT.
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md font-normal leading-relaxed">
            Selected projects across digital products, web systems, automation, infrastructure, and visual design.
          </p>
        </div>

        {/* Editorial Asymmetric Work Showcase */}
        <div className="space-y-12">
          {WORK_ITEMS.map((item, index) => {
            const isFullWidth = index === 0;
            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedWork(item)}
                className={`group cursor-pointer relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-accent/60 p-8 md:p-12 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(2,30,68,0.3)] overflow-hidden ${
                  isFullWidth ? 'w-full' : ''
                }`}
              >
                {/* Background Ambient Glow on Hover */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-studio-navy/20 blur-[90px] rounded-full group-hover:bg-accent/15 transition-all duration-500 pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  
                  {/* Left Column: Number & Metadata */}
                  <div className="lg:col-span-8 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-3xl md:text-4xl font-bold text-slate-600 group-hover:text-accent transition-colors">
                          {item.number}
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-slate-300 uppercase">
                          {getCategoryIcon(item.category)}
                          {item.category}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-2xl md:text-3xl text-slate-100 group-hover:text-white transition-colors mb-4">
                        {item.title}
                      </h3>

                      <p className="text-slate-400 text-base leading-relaxed mb-6">
                        {item.summary}
                      </p>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/60">
                      {item.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Visual Indicator Card */}
                  <div className="lg:col-span-4 flex flex-col justify-between items-end bg-slate-950/70 p-6 rounded-xl border border-slate-800/80 group-hover:border-slate-700 transition-colors w-full h-full min-h-[160px]">
                    <div className="flex items-center justify-between w-full text-xs font-mono text-slate-500">
                      <span>YEAR {item.year}</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> VERIFIED WORK
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider group-hover:translate-x-1 transition-transform mt-8">
                      <span>Explore Case Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      <WorkModal item={selectedWork} onClose={() => setSelectedWork(null)} />
    </section>
  );
}
