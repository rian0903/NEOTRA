'use client';

import { useState } from 'react';
import { SERVICES, TECH_STACK } from '@/data/content';
import { Code, Cpu, Network, LayoutGrid, GraduationCap, ArrowUpRight, CheckCircle2, ChevronDown } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Code: Code,
  Cpu: Cpu,
  Network: Network,
  LayoutGrid: LayoutGrid,
  GraduationCap: GraduationCap,
};

interface ServicesProps {
  onOpenConsultation?: () => void;
}

export default function Services({ onOpenConsultation }: ServicesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(SERVICES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-20 md:py-28 border-b border-[#E2E8F0] bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs md:text-sm font-mono text-[#64748B] tracking-wider uppercase block mb-2">
            02 / SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#0A0F1A] mb-4">
            Core Engineering Services
          </h2>
          <p className="text-[#64748B] text-base md:text-lg max-w-2xl font-sans">
            Practical digital engineering disciplines designed to solve complex business, software, and hardware challenges.
          </p>
        </div>

        {/* 5 Core Services — Interactive Editorial List Rows */}
        <div className="space-y-4 mb-16">
          {SERVICES.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || Code;
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className="rounded-2xl bg-[#F5F7FA] border border-[#E2E8F0] overflow-hidden transition-all duration-300 hover:border-[#006FFF]/40"
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(service.id)}
                  className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group"
                >
                  <div className="flex items-start md:items-center gap-4 md:gap-6">
                    <span className="text-base font-mono font-bold text-[#006FFF]">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#006FFF] shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#64748B] uppercase block mb-1">
                        {service.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-[#0A0F1A] group-hover:text-[#006FFF] transition-colors">
                        {service.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="hidden lg:block text-sm text-[#64748B] max-w-xs text-right font-sans">
                      {service.summary}
                    </p>
                    <div className="w-8 h-8 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0A0F1A] shrink-0 group-hover:border-[#006FFF] transition-colors shadow-xs">
                      <ChevronDown
                        className={`w-4 h-4 text-[#006FFF] transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Expanded Capabilities Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-[#E2E8F0] font-sans animate-fadeIn">
                    <p className="text-sm text-[#64748B] mb-6 pt-4 lg:hidden">
                      {service.summary}
                    </p>
                    <div className="pt-4">
                      <h4 className="text-xs font-mono text-[#64748B] uppercase tracking-wider mb-4">
                        SUPPORTING CAPABILITIES & DISCIPLINES
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {service.capabilities.map((cap, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-[#0A0F1A]">
                            <CheckCircle2 className="w-4 h-4 text-[#006FFF] shrink-0" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={onOpenConsultation}
                        className="btn-primary-blue px-6 py-2.5 rounded-full text-xs font-semibold inline-flex items-center gap-2 cursor-pointer"
                      >
                        <span>{service.cta}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tech Stack Badges */}
        <div className="text-center pt-8 border-t border-[#E2E8F0]">
          <p className="text-xs font-mono text-[#64748B] uppercase tracking-widest mb-6">
            SUPPORTING TECHNOLOGIES & TOOLS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {TECH_STACK.map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 rounded-full bg-[#F5F7FA] border border-[#E2E8F0] text-xs font-mono text-[#64748B] hover:text-[#0A0F1A] hover:border-[#006FFF] transition-colors"
              >
                <span className="text-[#006FFF] mr-1.5">•</span>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
