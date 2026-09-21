'use client';

import { useState, useEffect } from 'react';
import AdminAuthModal from '@/components/admin/AdminAuthModal';
import AdminLayout from '@/components/admin/AdminLayout';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authSession = localStorage.getItem('neotra_admin_auth');
    if (authSession === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleAuthenticate = () => {
    setIsAuthenticated(true);
    localStorage.setItem('neotra_admin_auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('neotra_admin_auth');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0A0F1A] flex items-center justify-center text-white font-mono text-sm">
        Memeriksa Autentikasi Admin...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminAuthModal onAuthenticate={handleAuthenticate} />;
  }

  return <AdminLayout onLogout={handleLogout} />;
}
