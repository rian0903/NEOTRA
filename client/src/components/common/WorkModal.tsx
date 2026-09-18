'use client';

import { WorkItem } from '@/types';
import { X, ExternalLink, Cpu, Layers, Tag, Calendar, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type WorkModalProps = {
  item: WorkItem | null;
  onClose: () => void;
};

export default function WorkModal({ item, onClose }: WorkModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-void/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 md:p-10 my-8 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close Project Detail Modal"
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header info */}
          <div className="flex items-center gap-3 text-xs font-mono text-accent uppercase tracking-wider mb-3">
            <span>PROJECT {item.number}</span>
            <span>•</span>
            <span>{item.category}</span>
          </div>

          <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-100 mb-4">
            {item.title}
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6 text-base">
            {item.fullDescription}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800 mb-6">
            <div>
              <span className="text-[11px] font-mono text-slate-500 uppercase flex items-center gap-1 mb-1">
                <Calendar className="w-3 h-3" /> YEAR
              </span>
              <span className="text-sm font-semibold text-slate-200">{item.year}</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-500 uppercase flex items-center gap-1 mb-1">
                <UserCheck className="w-3 h-3" /> CLIENT
              </span>
              <span className="text-sm font-semibold text-slate-200">{item.client || 'Private Client'}</span>
            </div>
            <div className="col-span-2">
              <span className="text-[11px] font-mono text-slate-500 uppercase flex items-center gap-1 mb-1">
                <Layers className="w-3 h-3" /> ROLE
              </span>
              <span className="text-sm font-semibold text-slate-200">{item.role || 'Digital Engineering Studio'}</span>
            </div>
          </div>

          {/* Metrics */}
          {item.metrics && item.metrics.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                KEY METRICS & PERFORMANCE
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.metrics.map((metric) => (
                  <div key={metric.label} className="p-3.5 rounded-lg bg-studio-navy/40 border border-slate-800">
                    <div className="text-xs text-slate-400">{metric.label}</div>
                    <div className="text-lg font-heading font-bold text-accent mt-0.5">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech pills */}
          <div className="mb-8">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" /> STACK & TECHNOLOGIES
            </h3>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Action */}
          <div className="flex items-center justify-end gap-4 border-t border-slate-800 pt-6">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-slate-950 text-xs font-semibold uppercase tracking-wider hover:bg-sky-300 transition-colors"
            >
              <span>Diskusikan Proyek Serupa</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
