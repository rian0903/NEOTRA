'use client';

import { useState } from 'react';
import { Lock, ArrowRight, ShieldAlert } from 'lucide-react';

interface AdminAuthModalProps {
  onAuthenticate: () => void;
}

export default function AdminAuthModal({ onAuthenticate }: AdminAuthModalProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default admin PIN: admin123 or 1234
    if (password === 'admin123' || password === '1234' || password === 'neotra2026') {
      onAuthenticate();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0F1A] flex items-center justify-center p-4 selection:bg-[#006FFF] selection:text-white">
      <div className="w-full max-w-md bg-white border border-[#E2E8F0] rounded-3xl p-8 shadow-2xl animate-fadeIn text-[#0A0F1A]">
        <div className="w-12 h-12 rounded-2xl bg-[#006FFF]/10 border border-[#006FFF]/30 flex items-center justify-center text-[#006FFF] mb-6">
          <Lock className="w-6 h-6" />
        </div>

        <span className="text-xs font-mono text-[#006FFF] uppercase tracking-wider block mb-1">
          NEOTRA STUDIO ADMIN
        </span>
        <h1 className="text-2xl font-display font-extrabold text-[#0A0F1A] mb-2">
          Dashboard Authentication
        </h1>
        <p className="text-xs sm:text-sm text-[#475569] mb-6 font-sans">
          Masukkan Password atau PIN Admin untuk mengakses pengaturan situs dinamis.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="admin-pass" className="block text-xs font-mono text-[#475569] mb-1">
              Admin Access Password / PIN
            </label>
            <input
              id="admin-pass"
              type="password"
              required
              autoFocus
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Masukkan password admin (Default: admin123)"
              className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-[#0A0F1A] text-sm focus:outline-none focus:border-[#006FFF] focus-visible:ring-2 focus-visible:ring-[#006FFF]"
            />
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>Password salah. Gunakan password default: <strong>admin123</strong></span>
            </div>
          )}

          <button
            type="submit"
            className="btn-primary-blue w-full min-h-[48px] py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:outline-none"
          >
            <span>Masuk Dashboard Admin</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-[#E2E8F0] text-center">
          <a
            href="/"
            className="text-xs font-mono text-[#475569] hover:text-[#006FFF] transition-colors inline-flex items-center gap-1"
          >
            ← Kembali ke Halaman Utama
          </a>
        </div>
      </div>
    </div>
  );
}
