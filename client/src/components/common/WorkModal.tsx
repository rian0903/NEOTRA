'use client';

import { WorkItem } from '@/types';
import { X, ArrowUpRight, Calendar, UserCheck, Layers, Tag } from 'lucide-react';

type WorkModalProps = {
  work?: WorkItem | null;
  item?: WorkItem | null;
  onClose: () => void;
};

export default function WorkModal({ work, item, onClose }: WorkModalProps) {
  const activeItem = work || item;
  if (!activeItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#0A0F1A]/60 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white border border-[#E2E8F0] rounded-3xl shadow-2xl p-6 md:p-10 my-8 overflow-hidden animate-fadeIn text-[#0A0F1A]">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close Project Detail Modal"
          className="absolute top-6 right-6 p-2 rounded-full bg-[#F5F7FA] text-[#64748B] hover:text-[#0A0F1A] hover:border-[#006FFF] border border-[#E2E8F0] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header info */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#006FFF] uppercase tracking-wider mb-3">
          <span>PROJECT {activeItem.number}</span>
          <span>•</span>
          <span>{activeItem.category}</span>
        </div>

        <h2 className="font-display font-bold text-2xl md:text-3xl text-[#0A0F1A] mb-4">
          {activeItem.title}
        </h2>

        <p className="text-[#64748B] leading-relaxed mb-6 text-sm md:text-base font-sans">
          {activeItem.fullDescription}
        </p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#F5F7FA] border border-[#E2E8F0] mb-6">
          <div>
            <span className="text-[11px] font-mono text-[#64748B] uppercase flex items-center gap-1 mb-1">
              <Calendar className="w-3 h-3" /> YEAR
            </span>
            <span className="text-sm font-semibold text-[#0A0F1A]">{activeItem.year}</span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-[#64748B] uppercase flex items-center gap-1 mb-1">
              <UserCheck className="w-3 h-3" /> CLIENT
            </span>
            <span className="text-sm font-semibold text-[#0A0F1A]">{activeItem.client || 'Private Client'}</span>
          </div>
          <div className="col-span-2">
            <span className="text-[11px] font-mono text-[#64748B] uppercase flex items-center gap-1 mb-1">
              <Layers className="w-3 h-3" /> ROLE
            </span>
            <span className="text-sm font-semibold text-[#0A0F1A]">{activeItem.role || 'Digital Engineering Studio'}</span>
          </div>
        </div>

        {/* Metrics */}
        {activeItem.metrics && activeItem.metrics.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xs font-mono text-[#64748B] uppercase tracking-wider mb-3">
              KEY METRICS & PERFORMANCE
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeItem.metrics.map((metric) => (
                <div key={metric.label} className="p-4 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0]">
                  <div className="text-xs text-[#64748B]">{metric.label}</div>
                  <div className="text-xl font-display font-extrabold text-[#006FFF] mt-1">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech pills */}
        <div className="mb-8">
          <h3 className="text-xs font-mono text-[#64748B] uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5" /> STACK & TECHNOLOGIES
          </h3>
          <div className="flex flex-wrap gap-2">
            {activeItem.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E2E8F0] text-xs font-mono text-[#64748B]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action */}
        <div className="flex items-center justify-end gap-4 border-t border-[#E2E8F0] pt-6">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs font-mono text-[#64748B] hover:text-[#0A0F1A] transition-colors"
          >
            Close
          </button>
          <a
            href="#contact"
            onClick={onClose}
            className="btn-primary-blue inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold"
          >
            <span>Discuss Similar Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
