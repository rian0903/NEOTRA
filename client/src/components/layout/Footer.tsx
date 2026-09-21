'use client';

import { useState, useEffect } from 'react';
import { FOOTER_DATA, NAV_LINKS } from '@/data/content';
import { ArrowUpRight, X } from 'lucide-react';

export default function Footer() {
  const [legalModal, setLegalModal] = useState<'terms' | 'privacy' | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && legalModal) {
        setLegalModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [legalModal]);

  return (
    <footer className="bg-[#0F2D56] text-[#CBD5E1] pt-16 pb-12 border-t border-[#1E2C44]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Watermark */}
        <div className="border-b border-[#1E2C44] pb-12 mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white tracking-tight uppercase opacity-95 select-none">
            Integrated Digital Engineering Studio
          </h2>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-1">
            <img
              src="/brand/logo2.png"
              alt="NEOTRA"
              className="h-8 w-auto object-contain mb-4 brightness-200"
            />
            <p className="text-xs text-[#CBD5E1] leading-relaxed mb-4 font-sans">
              PT NEOTRA Strategic Group. Integrated Digital Engineering Studio.
            </p>
            <span className="inline-block px-3 py-1 rounded-full bg-[#0A0F1A] border border-[#1E2C44] text-[11px] font-mono text-[#38BDF8]">
              Jakarta South · Indonesia
            </span>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <span className="text-xs font-mono text-[#CBD5E1] uppercase tracking-wider block mb-4 font-semibold">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#CBD5E1] hover:text-white transition-colors rounded-sm focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:outline-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <span className="text-xs font-mono text-[#CBD5E1] uppercase tracking-wider block mb-4 font-semibold">
              DIRECT CONTACT
            </span>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <a
                  href="mailto:contact@neotra.id"
                  className="text-white hover:text-[#38BDF8] transition-colors font-medium rounded-sm focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:outline-none"
                >
                  contact@neotra.id
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281380870105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CBD5E1] hover:text-white transition-colors rounded-sm focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:outline-none"
                >
                  +62 813 8087 0105
                </a>
              </li>
              <li className="text-xs text-[#CBD5E1] pt-2">
                Mon - Fri · 09:00 - 18:00 WIB
              </li>
            </ul>
          </div>

          {/* Col 4: Social Links */}
          <div>
            <span className="text-xs font-mono text-[#CBD5E1] uppercase tracking-wider block mb-4 font-semibold">
              CONNECT
            </span>
            <div className="flex flex-col space-y-2.5 text-sm">
              {FOOTER_DATA.socials.map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CBD5E1] hover:text-white transition-colors inline-flex items-center gap-1 group rounded-sm focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:outline-none"
                >
                  <span>{soc.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-[#1E2C44] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#CBD5E1] gap-4">
          <p>{FOOTER_DATA.copyright}</p>
          <div className="flex gap-6">
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-white text-xs font-mono text-[#CBD5E1] transition-colors cursor-pointer rounded-sm focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:outline-none"
            >
              Terms of Service
            </button>
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white text-xs font-mono text-[#CBD5E1] transition-colors cursor-pointer rounded-sm focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:outline-none"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Legal Policy Modal */}
      {legalModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          onClick={() => setLegalModal(null)}
          className="fixed inset-0 z-50 bg-[#0A0F1A]/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-[#0A0F1A] border border-[#E2E8F0] rounded-3xl w-full max-w-2xl p-6 sm:p-10 relative shadow-2xl animate-fadeIn"
          >
            <button
              onClick={() => setLegalModal(null)}
              aria-label="Close Legal Modal"
              className="absolute top-6 right-6 min-w-[44px] min-h-[44px] p-2.5 text-[#475569] hover:text-[#0A0F1A] rounded-full bg-[#F5F7FA] border border-[#E2E8F0] flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-[#006FFF] uppercase tracking-wider block mb-2">
              LEGAL & GOVERNANCE
            </span>
            <h3 id="legal-modal-title" className="text-2xl sm:text-3xl font-display font-extrabold text-[#0A0F1A] mb-4">
              {legalModal === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
            </h3>

            <div className="text-sm text-[#475569] space-y-4 font-sans leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {legalModal === 'terms' ? (
                <>
                  <p>
                    <strong>1. Engineering Scope:</strong> NEOTRA delivers bespoke digital engineering services encompassing web systems, connected hardware protocols, network architecture, and technical consulting. Specific deliverables, intellectual property transfer, and milestones are governed by each project statement of work.
                  </p>
                  <p>
                    <strong>2. Full Code Handover:</strong> Upon milestone completion and final settlement, complete ownership of project source code, configuration files, and documentation is transferred directly to the client without proprietary lock-in.
                  </p>
                  <p>
                    <strong>3. Service Warranties:</strong> All engineering systems undergo validation before handover. Bug fixes related to contracted requirements are supported during the standard warranty window specified in the engagement contract.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Data Confidentiality:</strong> NEOTRA treats all client technical architectures, business metrics, and inquiry details with strict confidentiality. Non-disclosure agreements (NDAs) are honored for all corporate engagements.
                  </p>
                  <p>
                    <strong>2. Inquiry Information:</strong> Contact details submitted through our consultation form (name, email, phone number, and project brief) are used solely to evaluate technical feasibility and respond to your inquiry. We do not sell or distribute personal data to third parties.
                  </p>
                  <p>
                    <strong>3. Security Standards:</strong> Communication channels and API submissions utilize TLS encryption to safeguard data in transit.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="btn-primary-blue min-h-[44px] px-6 py-2.5 rounded-full text-xs font-semibold cursor-pointer focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
              >
                Tutup (Esc)
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
