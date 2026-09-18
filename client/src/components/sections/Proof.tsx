'use client';

import { TESTIMONIALS } from '@/data/content';
import { Star, Quote } from 'lucide-react';

export default function Proof() {
  return (
    <section className="py-20 md:py-28 border-b border-[#E2E8F0] bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-mono text-[#64748B] tracking-wider uppercase block mb-2">
            05 / PROOF & REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#0A0F1A]">
            Words from our clients
          </h2>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="card-agency-light p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#006FFF]/20 mb-4" />

                <p className="text-sm text-[#0A0F1A] leading-relaxed mb-6 italic font-sans">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#006FFF]/10 border border-[#006FFF]/30 flex items-center justify-center font-mono font-bold text-[#006FFF] text-sm">
                  {t.client.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0A0F1A]">
                    {t.client}
                  </h4>
                  <p className="text-xs font-mono text-[#64748B]">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
