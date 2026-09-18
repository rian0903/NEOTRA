'use client';

import { useState } from 'react';
import { CONTACT_DATA, SERVICES } from '@/data/content';
import { MessageSquare, Mail, Send, CheckCircle2, AlertCircle, Loader2, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '',
    email: '',
    service: SERVICES[0].name,
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message?: string;
    ticketId?: string;
  }>({ type: 'idle' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: 'idle' });

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8080';
      const response = await fetch(`${apiUrl}/api/v1/inquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.fullName,
          contact: formData.contact,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: data.message,
          ticketId: data.ticket_id,
        });
        setFormData({
          fullName: '',
          contact: '',
          email: '',
          service: SERVICES[0].name,
          message: '',
        });
      } else {
        setStatus({
          type: 'error',
          message: data.message || (data.errors ? data.errors.join(', ') : 'Failed to submit inquiry.'),
        });
      }
    } catch (err) {
      console.error('Inquiry submission error:', err);
      setStatus({
        type: 'error',
        message: 'Unable to connect to NEOTRA API server. Please try direct WhatsApp below.',
      });
    } finally {
      setLoading(false);
    }
  };

  const whatsAppUrl = `https://wa.me/${CONTACT_DATA.whatsAppNumber}?text=${encodeURIComponent(
    CONTACT_DATA.whatsAppMessage
  )}`;

  return (
    <section id="contact" className="py-24 md:py-36 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Action & Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-accent text-xs font-mono tracking-widest uppercase mb-4">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>START A CONVERSATION</span>
              </div>

              <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-100 leading-tight mb-6">
                {CONTACT_DATA.headline}
              </h2>

              <p className="text-slate-400 text-base leading-relaxed mb-8">
                {CONTACT_DATA.supporting}
              </p>

              {/* Direct WhatsApp CTA Button */}
              <div className="space-y-4 mb-8">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-4 px-6 rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/40 hover:shadow-emerald-600/30 transition-all duration-300 group"
                >
                  <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>{CONTACT_DATA.whatsApp}</span>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 text-sm">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-slate-500 block uppercase">DIRECT EMAIL</span>
                    <a href={`mailto:${CONTACT_DATA.email}`} className="font-semibold hover:text-accent transition-colors">
                      {CONTACT_DATA.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 text-xs font-mono text-slate-500">
              RESPONSE TIME STANDARD: WITHIN 2-4 BUSINESS HOURS
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl relative"
            >
              <h3 className="font-heading font-bold text-xl md:text-2xl text-slate-100 mb-6">
                Send Project Inquiry
              </h3>

              {status.type === 'success' && (
                <div className="p-6 mb-6 rounded-xl bg-emerald-950/80 border border-emerald-700/80 text-emerald-200">
                  <div className="flex items-center gap-3 font-semibold text-base mb-2">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    <span>Inquiry Submitted Successfully!</span>
                  </div>
                  <p className="text-xs text-emerald-300 mb-3">{status.message}</p>
                  {status.ticketId && (
                    <div className="inline-block px-3 py-1 rounded bg-emerald-900/90 text-xs font-mono font-bold text-white border border-emerald-600">
                      TICKET ID: {status.ticketId}
                    </div>
                  )}
                </div>
              )}

              {status.type === 'error' && (
                <div className="p-4 mb-6 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-200 text-sm flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Budi Santoso"
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="text"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="081234567890"
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="budi@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                    Service Module Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-accent transition-colors cursor-pointer"
                  >
                    {SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.name}>
                        {srv.name} ({srv.category})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                    Project Description / Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe what system, web application, IoT automation, or infrastructure you need built..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-3 bg-accent text-slate-950 font-semibold py-4 px-6 rounded-xl text-sm uppercase tracking-wider hover:bg-sky-300 transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry to Engineering</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
