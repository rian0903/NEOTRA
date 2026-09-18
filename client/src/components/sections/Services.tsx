'use client';

import { useState } from 'react';
import { SERVICES } from '@/data/content';
import { Service } from '@/types';
import { ChevronDown, Code2, Cpu, Network, LayoutGrid, GraduationCap, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>('web-engineering');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code2 className="w-6 h-6 text-accent" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-accent" />;
      case 'Network': return <Network className="w-6 h-6 text-accent" />;
      case 'LayoutGrid': return <LayoutGrid className="w-6 h-6 text-accent" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-accent" />;
      default: return <Code2 className="w-6 h-6 text-accent" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 md:py-36 bg-void relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-100 tracking-tight">
              STUDIO SERVICES & ENGINEERING
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md font-normal leading-relaxed">
            Integrated engineering capabilities across web applications, IoT devices, network infrastructure, UI/UX systems, and mentorship.
          </p>
        </div>

        {/* Editorial Rows List */}
        <div className="border-t border-slate-800 divide-y divide-slate-800/80">
          {SERVICES.map((service, index) => {
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="py-8 group transition-colors"
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(service.id)}
                  className="flex items-center justify-between cursor-pointer select-none gap-6"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="font-mono text-2xl md:text-3xl font-bold text-slate-600 group-hover:text-accent transition-colors">
                      {service.number}
                    </span>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-accent/40 transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl md:text-2xl text-slate-100 group-hover:text-white transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-slate-400 text-sm md:text-base hidden sm:block mt-1">
                        {service.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      aria-label={`Toggle details for ${service.name}`}
                      className={`p-2.5 rounded-full border transition-all ${
                        isExpanded
                          ? 'bg-accent text-slate-950 border-accent rotate-180'
                          : 'bg-slate-900 text-slate-400 border-slate-800 group-hover:text-white'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Mobile Summary */}
                <p className="text-slate-400 text-sm sm:hidden mt-3 pl-16">
                  {service.summary}
                </p>

                {/* Expanded Drawer Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pl-0 md:pl-24 pt-6"
                    >
                      <div className="p-6 md:p-8 rounded-xl bg-slate-950/80 border border-slate-800/80 mt-4">
                        <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-4">
                          CAPABILITY SCOPE
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                          {service.capabilities.map((cap) => (
                            <div key={cap} className="flex items-center gap-3 text-slate-300 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-slate-800/80">
                          <span className="text-xs font-mono text-slate-500">
                            {service.category} SERVICE MODULE
                          </span>
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-studio-navy hover:bg-slate-800 border border-slate-700 hover:border-accent text-slate-100 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 group/btn"
                          >
                            <span>{service.cta}</span>
                            <ArrowUpRight className="w-4 h-4 text-accent group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
