'use client';

import { useState } from 'react';
import { WORK_ITEMS } from '@/data/content';
import { WorkItem } from '@/types';
import WorkModal from '@/components/common/WorkModal';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export default function SelectedWork() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[#1E2C44] bg-[#0A0F1A]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div>
            <span className="text-xs md:text-sm font-mono text-[#64748B] tracking-wider uppercase block mb-2">
              01 / SELECTED WORK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F8FAFC]">
              Latest Works
            </h2>
          </div>
          <p className="text-[#94A3B8] text-sm md:text-base max-w-md mt-4 md:mt-0 font-sans">
            A showcase of digital products, web systems, and brand platforms built for impact and performance.
          </p>
        </div>

        {/* 2-Column Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WORK_ITEMS.map((work) => (
            <div
              key={work.slug}
              onClick={() => setSelectedWork(work)}
              className="card-agency rounded-2xl overflow-hidden cursor-pointer group flex flex-col"
            >
              {/* Media Container (16:10 aspect ratio) */}
              <div className="relative aspect-[16/10] bg-[#0A0F1A] overflow-hidden border-b border-[#1E2C44] flex items-center justify-center p-8">
                {/* Visual Placeholder / Mockup Graphic */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F2D56]/40 via-[#111927] to-[#1E2C44]/40 group-hover:scale-105 transition-transform duration-500 ease-out" />
                
                <div className="relative z-10 text-center p-6 bg-[#111927]/80 backdrop-blur-sm border border-[#1E2C44] rounded-xl group-hover:border-agency-electric/50 transition-colors">
                  <span className="text-xs font-mono text-agency-electric block mb-1">
                    {work.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-display font-bold text-[#F8FAFC]">
                    {work.title}
                  </h3>
                </div>

                <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0A0F1A]/80 backdrop-blur-md border border-[#1E2C44] flex items-center justify-center text-[#F8FAFC] group-hover:bg-agency-electric group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Work Details Footer */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-[#64748B]">
                      {work.number} — {work.year}
                    </span>
                    <span className="text-xs font-mono text-[#94A3B8] bg-[#0A0F1A] px-2.5 py-1 rounded-md border border-[#1E2C44]">
                      {work.client}
                    </span>
                  </div>
                  <h4 className="text-xl font-display font-bold text-[#F8FAFC] mb-2 group-hover:text-agency-electric transition-colors">
                    {work.title}
                  </h4>
                  <p className="text-sm text-[#94A3B8] line-clamp-2 mb-4 font-sans">
                    {work.summary}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#1E2C44]">
                  {work.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-[#64748B] bg-[#0A0F1A] px-2 py-0.5 rounded border border-[#1E2C44]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal detail */}
      {selectedWork && (
        <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />
      )}
    </section>
  );
}
