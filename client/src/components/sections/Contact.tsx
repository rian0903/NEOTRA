'use client';

import { useState, useEffect } from 'react';
import { CONTACT_DATA as fallbackContact } from '@/data/content';
import { useSiteData } from '@/hooks/useSiteData';
import ScrollReveal from '@/components/common/ScrollReveal';
import { MessageSquare, Send, CheckCircle2, X } from 'lucide-react';

interface ContactProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export default function Contact({ isOpenModal, onCloseModal }: ContactProps) {
  const [internalModalOpen, setInternalModalOpen] = useState(false);
  const isModalOpen = isOpenModal !== undefined ? isOpenModal : internalModalOpen;
  const closeModal = onCloseModal || (() => setInternalModalOpen(false));
  const { contactData, addInquiry } = useSiteData();
  const currentContact = contactData || fallbackContact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceCategory: 'Real-Time Direct Messaging (Chat 1-on-1 & Grup)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Close modal on Escape key press (R-32)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, closeModal]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save inquiry to local state / storage for Admin view
    addInquiry({
      full_name: formData.name,
      contact: formData.phone,
      email: formData.email,
      service: formData.serviceCategory,
      message: formData.message,
    });

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
      // Align payload with Go backend InquiryRequest model
      await fetch(`${apiUrl}/api/v1/inquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.name,
          contact: formData.phone,
          email: formData.email,
          service: formData.serviceCategory,
          message: formData.message,
        }),
      });

      setSubmitted(true);
    } catch (err: any) {
      // Optimistic fallback for frontend UX when backend is offline
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${currentContact.whatsAppNumber}?text=${encodeURIComponent(
    currentContact.whatsAppMessage
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
              06 / CONTACT & DISCOVERY
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold text-[#0A0F1A] tracking-tight max-w-3xl mx-auto mb-6">
              {currentContact.headline}
            </h2>

            <p className="text-base md:text-xl text-[#475569] max-w-2xl mx-auto mb-10 font-sans">
              {currentContact.supporting}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {/* Primary Consultation Button */}
              <button
                onClick={() => setInternalModalOpen(true)}
                className="btn-primary-blue w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full text-base font-semibold flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
              >
                <span>{currentContact.primaryCta}</span>
              </button>

              {/* WhatsApp Link */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-[#F5F7FA] border border-[#E2E8F0] text-[#0A0F1A] text-base font-semibold hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-xs focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>{currentContact.whatsApp}</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Discovery Consultation Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          onClick={closeModal}
          className="fixed inset-0 z-50 bg-[#0A0F1A]/50 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-[#E2E8F0] rounded-3xl w-full max-w-xl p-6 sm:p-10 relative shadow-2xl animate-fadeIn text-[#0A0F1A]"
          >
            {/* Close Button with minimum 44px touch target */}
            <button
              onClick={closeModal}
              aria-label="Close Consultation Modal"
              className="absolute top-6 right-6 min-w-[44px] min-h-[44px] p-2.5 text-[#475569] hover:text-[#0A0F1A] rounded-full bg-[#F5F7FA] border border-[#E2E8F0] flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
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
                <p className="text-sm text-[#475569] max-w-md mx-auto mb-6">
                  Terima kasih. Tim engineering NEOTRA akan meninjau kebutuhan teknis Anda dan menghubungi Anda dalam 2-4 jam.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    closeModal();
                  }}
                  className="btn-primary-blue min-h-[44px] px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
                >
                  Tutup Jendela (Esc)
                </button>
              </div>
            ) : (
              <div>
                <span className="text-xs font-mono text-[#006FFF] uppercase block mb-1">
                  KONSULTASI PROYEK
                </span>
                <h3 id="contact-modal-title" className="text-2xl sm:text-3xl font-display font-extrabold text-[#0A0F1A] mb-2">
                  Mulai Konsultasi Teknis
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mb-6">
                  Sampaikan kebutuhan pengembangan fitur sosial media, obrolan real-time (chatting), atau platform komunikasi interaktif Anda.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-[#475569] mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Budi Santoso"
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-[#0A0F1A] text-sm focus:outline-none focus:border-[#006FFF] focus-visible:ring-2 focus-visible:ring-[#006FFF]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-[#475569] mb-1">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-[#0A0F1A] text-sm focus:outline-none focus:border-[#006FFF] focus-visible:ring-2 focus-visible:ring-[#006FFF]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-mono text-[#475569] mb-1">
                        No. WhatsApp / Telepon *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+62 812..."
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-[#0A0F1A] text-sm focus:outline-none focus:border-[#006FFF] focus-visible:ring-2 focus-visible:ring-[#006FFF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-mono text-[#475569] mb-1">
                      Kategori Fitur / Layanan
                    </label>
                    <select
                      id="contact-service"
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-[#0A0F1A] text-sm focus:outline-none focus:border-[#006FFF] focus-visible:ring-2 focus-visible:ring-[#006FFF]"
                    >
                      <option value="Real-Time Direct Messaging (Chat 1-on-1 & Grup)">Real-Time Direct Messaging (Chat 1-on-1 & Grup)</option>
                      <option value="Social Media Feed, Timeline & Story System">Social Media Feed, Timeline & Story System</option>
                      <option value="Voice & Video Call Integration (WebRTC)">Voice & Video Call Integration (WebRTC)</option>
                      <option value="Push Notifications & Real-Time Activity Alerts">Push Notifications & Real-Time Activity Alerts</option>
                      <option value="User Profiles, Follow/Friendship & Discovery">User Profiles, Follow/Friendship & Discovery</option>
                      <option value="End-to-End Encryption & Security Chat">End-to-End Encryption & Security Chat</option>
                      <option value="Custom Social Platform Development">Custom Social Platform Development</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-[#475569] mb-1">
                      Deskripsi Proyek / Kebutuhan Fitur
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Jelaskan secara singkat fitur sosial media atau aplikasi chatting yang ingin Anda bangun (contoh: Chat 1-on-1, Group Chat, Feed Foto/Video, Push Notification)..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-[#0A0F1A] text-sm focus:outline-none focus:border-[#006FFF] focus-visible:ring-2 focus-visible:ring-[#006FFF] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-blue w-full min-h-[48px] py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer mt-2 focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
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
