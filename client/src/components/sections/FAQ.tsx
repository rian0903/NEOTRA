'use client';

import { useState } from 'react';
import { FAQ_ITEMS } from '@/data/content';
import { Plus, X } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 border-b border-[#1E2C44] bg-[#0A0F1A]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-mono text-[#64748B] tracking-wider uppercase block mb-2">
            06 / FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F8FAFC]">
            Your questions answered
          </h2>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            const indexNumber = (idx + 1).toString().padStart(2, '0');

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#111927] border border-[#1E2C44] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="text-sm md:text-base font-mono font-bold text-[#64748B] group-hover:text-agency-electric transition-colors">
                      {indexNumber}
                    </span>
                    <h3 className="text-base md:text-lg font-display font-bold text-[#F8FAFC] group-hover:text-agency-electric transition-colors">
                      {item.question}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#0A0F1A] border border-[#1E2C44] flex items-center justify-center text-[#F8FAFC] shrink-0 group-hover:border-agency-electric transition-colors">
                    {isOpen ? (
                      <X className="w-4 h-4 text-agency-electric" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#94A3B8]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-sm md:text-base text-[#94A3B8] leading-relaxed border-t border-[#1E2C44]/50 font-sans">
                    <p className="mt-4">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
