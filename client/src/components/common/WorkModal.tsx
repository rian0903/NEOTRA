'use client';

import { useEffect } from 'react';
import { WorkItem } from '@/types';
import { X, Calendar, UserCheck, Layers, Tag } from 'lucide-react';

type WorkModalProps = {
  work?: WorkItem | null;
  item?: WorkItem | null;
  onClose: () => void;
};

export default function WorkModal({ work, item, onClose }: WorkModalProps) {
  const activeItem = work || item;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!activeItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="work-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#0A0F1A]/60 backdrop-blur-md overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-white border border-[#E2E8F0] rounded-3xl shadow-2xl p-6 md:p-10 my-8 overflow-hidden animate-fadeIn text-[#0A0F1A]"
      >
        {/* Close button with minimum 44px tap target */}
        <button
          onClick={onClose}
          aria-label="Close Project Detail Modal"
          className="absolute top-6 right-6 min-w-[44px] min-h-[44px] p-2.5 rounded-full bg-[#F5F7FA] text-[#475569] hover:text-[#0A0F1A] hover:border-[#006FFF] border border-[#E2E8F0] transition-colors flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header info */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#006FFF] uppercase tracking-wider mb-3">
          <span>PROJECT {activeItem.number}</span>
          <span>•</span>
          <span>{activeItem.category}</span>
        </div>

        <h2 id="work-modal-title" className="font-display font-bold text-2xl md:text-3xl text-[#0A0F1A] mb-4">
          {activeItem.title}
        </h2>

        <p className="text-[#475569] leading-relaxed mb-6 text-sm md:text-base font-sans">
          {activeItem.fullDescription}
        </p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#F5F7FA] border border-[#E2E8F0] mb-6">
          <div>
            <span className="text-[11px] font-mono text-[#475569] uppercase flex items-center gap-1 mb-1">
              <Calendar className="w-3 h-3" /> YEAR
            </span>
            <span className="text-sm font-semibold text-[#0A0F1A]">{activeItem.year}</span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-[#475569] uppercase flex items-center gap-1 mb-1">
              <UserCheck className="w-3 h-3" /> CLIENT
            </span>
            <span className="text-sm font-semibold text-[#0A0F1A]">{activeItem.client || 'Private Partner'}</span>
          </div>
          <div className="col-span-2">
            <span className="text-[11px] font-mono text-[#475569] uppercase flex items-center gap-1 mb-1">
              <Layers className="w-3 h-3" /> ROLE
            </span>
            <span className="text-sm font-semibold text-[#0A0F1A]">{activeItem.role || 'Digital Engineering Studio'}</span>
          </div>
        </div>

        {/* Verified Technical Metrics */}
        {activeItem.metrics && activeItem.metrics.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xs font-mono text-[#475569] uppercase tracking-wider mb-3">
              TECHNICAL SPECIFICATIONS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeItem.metrics.map((metric) => (
                <div key={metric.label} className="p-4 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0]">
                  <div className="text-xs text-[#475569]">{metric.label}</div>
                  <div className="text-lg md:text-xl font-display font-extrabold text-[#006FFF] mt-1">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="mb-8">
          <h3 className="text-xs font-mono text-[#475569] uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5" /> STACK & TECHNOLOGIES
          </h3>
          <div className="flex flex-wrap gap-2">
            {activeItem.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E2E8F0] text-xs font-mono text-[#475569]"
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
            className="min-h-[44px] px-5 py-2.5 rounded-full text-xs font-mono text-[#475569] hover:text-[#0A0F1A] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
          >
            Tutup (Esc)
          </button>
          <a
            href="#contact"
            onClick={onClose}
            className="btn-primary-blue inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-full text-xs font-semibold cursor-pointer focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
          >
            <span>Konsultasi Proyek Terkait</span>
          </a>
        </div>
      </div>
    </div>
  );
}
