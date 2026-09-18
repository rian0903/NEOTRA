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
    <section id="faq" className="py-20 md:py-28 border-b border-[#E2E8F0] bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-mono text-[#64748B] tracking-wider uppercase block mb-2">
            06 / FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#0A0F1A]">
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
                className="rounded-2xl bg-[#F5F7FA] border border-[#E2E8F0] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="text-sm md:text-base font-mono font-bold text-[#64748B] group-hover:text-[#006FFF] transition-colors">
                      {indexNumber}
                    </span>
                    <h3 className="text-base md:text-lg font-display font-bold text-[#0A0F1A] group-hover:text-[#006FFF] transition-colors">
                      {item.question}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0A0F1A] shrink-0 group-hover:border-[#006FFF] transition-colors shadow-xs">
                    {isOpen ? (
                      <X className="w-4 h-4 text-[#006FFF]" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#64748B]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-sm md:text-base text-[#64748B] leading-relaxed border-t border-[#E2E8F0] font-sans">
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
