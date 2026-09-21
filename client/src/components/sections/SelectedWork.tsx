'use client';

import { useState } from 'react';
import { WORK_ITEMS } from '@/data/content';
import { WorkItem } from '@/types';
import WorkModal from '@/components/common/WorkModal';
import ScrollReveal from '@/components/common/ScrollReveal';
import { ArrowUpRight } from 'lucide-react';

export default function SelectedWork() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[#E2E8F0] bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
            <div>
              <span className="text-xs md:text-sm font-mono text-[#006FFF] tracking-wider uppercase block mb-2">
                01 / SELECTED WORK
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#0A0F1A]">
                Latest Works
              </h2>
            </div>
            <p className="text-[#475569] text-sm md:text-base max-w-md mt-4 md:mt-0 font-sans">
              A showcase of digital products, web systems, and connected platforms engineered for precision and reliability.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WORK_ITEMS.map((work, idx) => (
            <ScrollReveal key={work.slug} direction="up" delay={0.15 * (idx + 1)}>
              <div
                role="button"
                tabIndex={0}
                aria-label={`View project details for ${work.title}`}
                onClick={() => setSelectedWork(work)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedWork(work);
                  }
                }}
                className="card-agency-light rounded-2xl overflow-hidden cursor-pointer group flex flex-col h-full focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
              >
                {/* Media Container (16:10 aspect ratio) */}
                <div className="relative aspect-[16/10] bg-[#F5F7FA] overflow-hidden border-b border-[#E2E8F0] flex items-center justify-center">
                  {work.image ? (
                    <img
                      src={work.image}
                      alt={work.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0F2D56]/10 via-[#F5F7FA] to-[#E2E8F0] group-hover:scale-105 transition-transform duration-500 ease-out" />
                  )}

                  {/* Category Badge Overlay */}
                  <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 bg-white/95 backdrop-blur-md border border-[#E2E8F0] rounded-lg shadow-xs">
                    <span className="text-xs font-mono font-semibold text-[#006FFF]">
                      {work.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-[#E2E8F0] flex items-center justify-center text-[#0A0F1A] group-hover:bg-[#006FFF] group-hover:text-white transition-colors shadow-xs">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Work Details */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-[#475569]">
                        {work.number} · {work.year}
                      </span>
                      <span className="text-xs font-mono text-[#0A0F1A] bg-white px-2.5 py-1 rounded-md border border-[#E2E8F0]">
                        {work.client}
                      </span>
                    </div>
                    <h4 className="text-xl font-display font-bold text-[#0A0F1A] mb-2 group-hover:text-[#006FFF] transition-colors">
                      {work.title}
                    </h4>
                    <p className="text-sm text-[#475569] line-clamp-2 mb-4 font-sans">
                      {work.summary}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E2E8F0]">
                    {work.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-[#475569] bg-white px-2.5 py-1 rounded-md border border-[#E2E8F0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedWork && (
        <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />
      )}
    </section>
  );
}
