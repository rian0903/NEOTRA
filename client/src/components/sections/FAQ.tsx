'use client';

import { useState } from 'react';
import { FAQ_ITEMS } from '@/data/content';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 md:py-36 bg-void relative border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-accent text-xs font-mono tracking-widest uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-100 tracking-tight">
            QUESTIONS & ANSWERS
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-4 font-normal">
            Everything you need to know about starting a engineering engagement with NEOTRA.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-xl bg-slate-950/80 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-semibold text-lg md:text-xl text-slate-100 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-xl"
                >
                  <span>{item.question}</span>
                  <div className={`p-2 rounded-full border transition-all ${
                    isOpen ? 'bg-accent text-slate-950 border-accent' : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-slate-300 text-sm md:text-base leading-relaxed border-t border-slate-900 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
