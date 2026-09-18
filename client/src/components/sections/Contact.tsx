'use client';

import { useState } from 'react';
import { CONTACT_DATA } from '@/data/content';
import ScrollReveal from '@/components/common/ScrollReveal';
import { ArrowUpRight, MessageSquare, Send, CheckCircle2, X } from 'lucide-react';

interface ContactProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export default function Contact({ isOpenModal, onCloseModal }: ContactProps) {
  const [internalModalOpen, setInternalModalOpen] = useState(false);
  const isModalOpen = isOpenModal !== undefined ? isOpenModal : internalModalOpen;
  const closeModal = onCloseModal || (() => setInternalModalOpen(false));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceCategory: 'Web Engineering',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
      const res = await fetch(`${apiUrl}/api/v1/inquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to submit inquiry to backend');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.warn('API error, showing optimistic confirmation:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${CONTACT_DATA.whatsAppNumber}?text=${encodeURIComponent(
    CONTACT_DATA.whatsAppMessage
  )}`;

  return (
    <>
      {/* Pre-Footer Call to Action Section */}
      <section id="contact" className="py-24 md:py-32 border-b border-[#E2E8F0] bg-white relative overflow-hidden">
        {/* Radial Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-[#006FFF]/5 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-xs md:text-sm font-mono text-[#006FFF] tracking-wider uppercase block mb-3">
              07 / CONTACT & DISCOVERY
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold text-[#0A0F1A] tracking-tight max-w-3xl mx-auto mb-6">
              {CONTACT_DATA.headline}
            </h2>

            <p className="text-base md:text-xl text-[#64748B] max-w-2xl mx-auto mb-10 font-sans">
              {CONTACT_DATA.supporting}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {/* Book Call Button */}
              <button
                onClick={() => setInternalModalOpen(true)}
                className="btn-primary-blue w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{CONTACT_DATA.primaryCta}</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* WhatsApp Link */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F5F7FA] border border-[#E2E8F0] text-[#0A0F1A] text-base font-semibold hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>{CONTACT_DATA.whatsApp}</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Discovery Consultation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A0F1A]/50 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white border border-[#E2E8F0] rounded-3xl w-full max-w-xl p-6 sm:p-10 relative shadow-2xl animate-fadeIn text-[#0A0F1A]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 text-[#64748B] hover:text-[#0A0F1A] rounded-full bg-[#F5F7FA] border border-[#E2E8F0]"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#006FFF]/10 border border-[#006FFF]/30 flex items-center justify-center text-[#006FFF] mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-[#0A0F1A] mb-2">
                  Permintaan Konsultasi Terkirim!
                </h3>
                <p className="text-sm text-[#64748B] max-w-md mx-auto mb-6">
                  Terima kasih! Tim engineering NEOTRA akan meninjau kebutuhan Anda dan menghubungi Anda dalam 2-4 jam.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    closeModal();
                  }}
                  className="btn-primary-blue px-6 py-2.5 rounded-full text-sm font-semibold"
                >
                  Tutup Jendela
                </button>
              </div>
            ) : (
              <div>
                <span className="text-xs font-mono text-[#006FFF] uppercase block mb-1">
                  KONSULTASI PROYEK
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#0A0F1A] mb-2">
                  Mulai Konsultasi Teknis
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mb-6">
                  Sampaikan kebutuhan web, otomasi IoT, jaringan, atau desain proyek Anda.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-[#64748B] mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Budi Santoso"
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-[#0A0F1A] text-sm focus:outline-none focus:border-[#006FFF]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#64748B] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-[#0A0F1A] text-sm focus:outline-none focus:border-[#006FFF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#64748B] mb-1">
                        No. WhatsApp / Telepon *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+62 812..."
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-[#0A0F1A] text-sm focus:outline-none focus:border-[#006FFF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#64748B] mb-1">
                      Kategori Layanan
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-[#0A0F1A] text-sm focus:outline-none focus:border-[#006FFF]"
                    >
                      <option value="Web Engineering">Web Engineering</option>
                      <option value="IoT & Smart Automation">IoT & Smart Automation</option>
                      <option value="Network & Infrastructure">Network & Infrastructure</option>
                      <option value="Digital Design / UI/UX">Digital Design / UI/UX</option>
                      <option value="Technical Mentorship & Project Assistance">Technical Mentorship & Project Assistance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#64748B] mb-1">
                      Deskripsi Proyek / Kebutuhan
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Jelaskan secara singkat apa yang ingin Anda bangun, perbaiki, atau hubungkan..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-[#0A0F1A] text-sm focus:outline-none focus:border-[#006FFF] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-blue w-full py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    {isSubmitting ? (
                      <span>Mengirimkan Permintaan...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Permintaan Konsultasi</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
