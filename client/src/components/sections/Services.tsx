'use client';

import { SERVICES, SERVICE_PILLARS, TECH_STACK } from '@/data/content';
import { Code, ShoppingBag, Search, Layers, CheckCircle2, ArrowUpRight } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Code: Code,
  ShoppingBag: ShoppingBag,
  Search: Search,
  Layers: Layers,
};

interface ServicesProps {
  onOpenConsultation?: () => void;
}

export default function Services({ onOpenConsultation }: ServicesProps) {
  return (
    <section id="services" className="py-20 md:py-28 border-b border-[#1E2C44] bg-[#0A0F1A]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs md:text-sm font-mono text-[#64748B] tracking-wider uppercase block mb-2">
            02 / SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F8FAFC] mb-4">
            Services built to create impact.
          </h2>
          <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl font-sans">
            Designing experiences and engineering scalable digital systems that solve real business problems.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SERVICES.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || Code;

            return (
              <div
                key={service.id}
                className="card-agency p-8 md:p-10 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0A0F1A] border border-[#1E2C44] flex items-center justify-center text-agency-electric group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#64748B]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-display font-bold text-[#F8FAFC] mb-3 group-hover:text-agency-electric transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 font-sans">
                    {service.summary}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {service.capabilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#F8FAFC]">
                        <CheckCircle2 className="w-4 h-4 text-agency-electric shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 px-4 rounded-xl bg-[#0A0F1A] border border-[#1E2C44] text-xs font-mono text-[#F8FAFC] hover:border-agency-electric hover:text-agency-electric transition-colors flex items-center justify-center gap-2 group/btn"
                >
                  <span>{service.cta}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* 3 Pillar Feature Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-2xl bg-[#111927] border border-[#1E2C44] mb-16">
          {SERVICE_PILLARS.map((pillar, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="text-xs font-mono text-agency-electric mb-1">
                0{idx + 1} / FEATURE
              </div>
              <h4 className="text-base font-bold text-[#F8FAFC] mb-1">
                {pillar.title}
              </h4>
              <p className="text-xs text-[#94A3B8] font-sans">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className="text-center">
          <p className="text-xs font-mono text-[#64748B] uppercase tracking-widest mb-6">
            TECHNOLOGY STACK & TOOLS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="px-4 py-2 rounded-full bg-[#111927] border border-[#1E2C44] text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] hover:border-agency-electric transition-colors"
              >
                <span className="text-agency-electric mr-1.5">•</span>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
