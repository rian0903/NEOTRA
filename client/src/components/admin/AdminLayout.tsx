'use client';

import { useState } from 'react';
import { useSiteData } from '@/hooks/useSiteData';
import { WorkItem, Service } from '@/types';
import {
  LayoutDashboard,
  Type,
  Briefcase,
  Layers,
  Menu as MenuIcon,
  MessageSquare,
  PhoneCall,
  RotateCcw,
  LogOut,
  ExternalLink,
  Plus,
  Trash2,
  Edit,
  Save,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface AdminLayoutProps {
  onLogout: () => void;
}

export default function AdminLayout({ onLogout }: AdminLayoutProps) {
  const {
    isLoaded,
    heroData,
    positioningData,
    navLinks,
    workItems,
    services,
    contactData,
    inquiries,
    saveHero,
    savePositioning,
    saveNavLinks,
    saveWorkItems,
    saveServices,
    saveContact,
    deleteInquiry,
    resetToDefaults,
  } = useSiteData();

  const [activeTab, setActiveTab] = useState<
    'overview' | 'hero' | 'work' | 'services' | 'navigation' | 'inquiries' | 'contact'
  >('overview');

  const [savedNotice, setSavedNotice] = useState(false);

  // Form states
  const [heroForm, setHeroForm] = useState(heroData);
  const [positioningForm, setPositioningForm] = useState(positioningData);
  const [contactForm, setContactForm] = useState(contactData);
  const [navForm, setNavForm] = useState(navLinks);
  const [workForm, setWorkForm] = useState<WorkItem[]>(workItems);
  const [servicesForm, setServicesForm] = useState<Service[]>(services);

  // Sync internal forms when site data loads
  const triggerSaveNotice = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#0A0F1A] flex items-center justify-center text-white font-mono text-sm">
        Memuat Dashboard Admin...
      </div>
    );
  }

  // Save Hero & Positioning
  const handleSaveHero = (e: React.FormEvent) => {
    e.preventDefault();
    saveHero(heroForm);
    savePositioning(positioningForm);
    triggerSaveNotice();
  };

  // Save Contact
  const handleSaveContact = (e: React.FormEvent) => {
    e.preventDefault();
    saveContact(contactForm);
    triggerSaveNotice();
  };

  // Nav Links Management
  const handleSaveNav = (e: React.FormEvent) => {
    e.preventDefault();
    saveNavLinks(navForm);
    triggerSaveNotice();
  };

  const addNavLinkItem = () => {
    setNavForm([...navForm, { label: 'Menu Baru', href: '#section' }]);
  };

  const removeNavLinkItem = (index: number) => {
    setNavForm(navForm.filter((_, i) => i !== index));
  };

  // Work Items Management
  const handleSaveWork = (e: React.FormEvent) => {
    e.preventDefault();
    saveWorkItems(workForm);
    triggerSaveNotice();
  };

  const addWorkItemNew = () => {
    const newWork: WorkItem = {
      slug: `project-${Date.now()}`,
      number: `0${workForm.length + 1}`,
      title: 'Fitur Aplikasi / Proyek Baru',
      category: 'DESAIN & ENGINERING',
      year: 2026,
      summary: 'Ringkasan singkat fitur aplikasi atau proyek baru.',
      fullDescription: 'Deskripsi lengkap arsitektur dan kapabilitas sistem proyek ini.',
      client: 'Klien Partner',
      role: 'Lead Architect',
      image: '/work/work-chat-app.jpg',
      technologies: ['Next.js', 'Go', 'Tailwind CSS'],
      metrics: [{ label: 'Performance Metric', value: '100%' }],
    };
    setWorkForm([...workForm, newWork]);
  };

  const removeWorkItem = (slug: string) => {
    setWorkForm(workForm.filter((w) => w.slug !== slug));
  };

  // Services Management
  const handleSaveServices = (e: React.FormEvent) => {
    e.preventDefault();
    saveServices(servicesForm);
    triggerSaveNotice();
  };

  const addServiceNew = () => {
    const newService: Service = {
      id: `service-${Date.now()}`,
      number: `0${servicesForm.length + 1}`,
      name: 'Layanan Baru',
      category: 'Kategori Layanan',
      summary: 'Ringkasan kapabilitas layanan.',
      capabilities: ['Poin kapabilitas 1', 'Poin kapabilitas 2'],
      cta: 'Konsultasi Layanan',
      iconName: 'Code',
    };
    setServicesForm([...servicesForm, newService]);
  };

  const removeServiceItem = (id: string) => {
    setServicesForm(servicesForm.filter((s) => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#0A0F1A] flex flex-col md:flex-row selection:bg-[#006FFF] selection:text-white">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-[#E2E8F0] p-6 flex flex-col justify-between shrink-0">
        <div>
          {/* Admin Header Logo */}
          <div className="flex items-center gap-3 mb-8">
            <img src="/brand/logo2.png" alt="NEOTRA" className="h-8 w-auto object-contain" />
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#006FFF]/10 text-[#006FFF] font-bold border border-[#006FFF]/30">
              ADMIN v2.0
            </span>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-[#006FFF] text-white shadow-xs'
                  : 'text-[#475569] hover:bg-[#F5F7FA] hover:text-[#0A0F1A]'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Overview & Stats</span>
            </button>

            <button
              onClick={() => setActiveTab('hero')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'hero'
                  ? 'bg-[#006FFF] text-white shadow-xs'
                  : 'text-[#475569] hover:bg-[#F5F7FA] hover:text-[#0A0F1A]'
              }`}
            >
              <Type className="w-4 h-4" />
              <span>Hero & Teks Utama</span>
            </button>

            <button
              onClick={() => setActiveTab('work')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'work'
                  ? 'bg-[#006FFF] text-white shadow-xs'
                  : 'text-[#475569] hover:bg-[#F5F7FA] hover:text-[#0A0F1A]'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Portofolio Pekerjaan</span>
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'services'
                  ? 'bg-[#006FFF] text-white shadow-xs'
                  : 'text-[#475569] hover:bg-[#F5F7FA] hover:text-[#0A0F1A]'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Layanan & Fitur</span>
            </button>

            <button
              onClick={() => setActiveTab('navigation')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'navigation'
                  ? 'bg-[#006FFF] text-white shadow-xs'
                  : 'text-[#475569] hover:bg-[#F5F7FA] hover:text-[#0A0F1A]'
              }`}
            >
              <MenuIcon className="w-4 h-4" />
              <span>Menu & Navigasi</span>
            </button>

            <button
              onClick={() => setActiveTab('inquiries')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'inquiries'
                  ? 'bg-[#006FFF] text-white shadow-xs'
                  : 'text-[#475569] hover:bg-[#F5F7FA] hover:text-[#0A0F1A]'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquiry Konsultasi</span>
              {inquiries.length > 0 && (
                <span className="ml-auto bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {inquiries.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('contact')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'contact'
                  ? 'bg-[#006FFF] text-white shadow-xs'
                  : 'text-[#475569] hover:bg-[#F5F7FA] hover:text-[#0A0F1A]'
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              <span>Kontak & WhatsApp</span>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer Controls */}
        <div className="pt-6 border-t border-[#E2E8F0] space-y-2">
          <a
            href="/"
            target="_blank"
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-mono text-[#475569] hover:bg-[#F5F7FA] hover:text-[#0A0F1A] transition-colors"
          >
            <span>Preview Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Keluar Admin</span>
          </button>
        </div>
      </aside>

      {/* Main Content View Container */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* Top Floating Notification Banner */}
        {savedNotice && (
          <div className="fixed top-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-fadeIn">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-xs font-semibold">Perubahan berhasil disimpan & aktif secara live!</span>
          </div>
        )}

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <span className="text-xs font-mono text-[#006FFF] uppercase tracking-wider block mb-1">
                DASHBOARD OVERVIEW
              </span>
              <h1 className="text-2xl md:text-3xl font-display font-extrabold text-[#0A0F1A]">
                Ringkasan Sistem & Performa Site
              </h1>
            </div>

            {/* Quick Stat Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
                <span className="text-xs font-mono text-[#475569] block mb-1">INQUIRY MASUK</span>
                <span className="text-3xl font-display font-bold text-[#006FFF]">{inquiries.length}</span>
                <p className="text-xs text-[#475569] mt-2">Permintaan konsultasi proyek</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
                <span className="text-xs font-mono text-[#475569] block mb-1">PORTOFOLIO PEKERJAAN</span>
                <span className="text-3xl font-display font-bold text-[#0A0F1A]">{workForm.length}</span>
                <p className="text-xs text-[#475569] mt-2">Item pekerjaan aktif</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
                <span className="text-xs font-mono text-[#475569] block mb-1">KATEGORI LAYANAN</span>
                <span className="text-3xl font-display font-bold text-[#0A0F1A]">{servicesForm.length}</span>
                <p className="text-xs text-[#475569] mt-2">Disiplin layanan aktif</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
                <span className="text-xs font-mono text-[#475569] block mb-1">TAUTAN NAVIGASI</span>
                <span className="text-3xl font-display font-bold text-[#0A0F1A]">{navForm.length}</span>
                <p className="text-xs text-[#475569] mt-2">Menu di navbar utama</p>
              </div>
            </div>

            {/* Status & Actions Box */}
            <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-emerald-600 font-bold uppercase">System Operational</span>
                </div>
                <h3 className="text-xl font-display font-bold text-[#0A0F1A]">
                  NEOTRA Dynamic CMS Engine Active
                </h3>
                <p className="text-sm text-[#475569] max-w-xl mt-1">
                  Semua pengaturan tampilan situs dapat disesuaikan langsung dari dashboard ini. Perubahan akan disimpan dan disinkronkan secara otomatis.
                </p>
              </div>

              <button
                onClick={() => {
                  if (confirm('Apakah Anda yakin ingin mengembalikan semua data ke pengaturan awal (default)?')) {
                    resetToDefaults();
                    window.location.reload();
                  }
                }}
                className="px-5 py-3 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold hover:bg-rose-100 transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset ke Default Content</span>
              </button>
            </div>
          </div>
        )}

        {/* Hero & Teks Utama Tab */}
        {activeTab === 'hero' && (
          <form onSubmit={handleSaveHero} className="space-y-8 animate-fadeIn max-w-3xl">
            <div>
              <span className="text-xs font-mono text-[#006FFF] uppercase tracking-wider block mb-1">
                KONTEN HERO & POSITIONING
              </span>
              <h1 className="text-2xl md:text-3xl font-display font-extrabold text-[#0A0F1A]">
                Edit Hero Section & Positioning Statement
              </h1>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs space-y-6">
              <div>
                <label className="block text-xs font-mono text-[#475569] mb-1">
                  Hero Overline Tag
                </label>
                <input
                  type="text"
                  value={heroForm.overline}
                  onChange={(e) => setHeroForm({ ...heroForm, overline: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#475569] mb-1">
                  Headline Utama (H1)
                </label>
                <textarea
                  rows={2}
                  value={heroForm.headline}
                  onChange={(e) => setHeroForm({ ...heroForm, headline: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF] resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#475569] mb-1">
                  Deskripsi Pendukung (Supporting Paragraph)
                </label>
                <textarea
                  rows={3}
                  value={heroForm.supporting}
                  onChange={(e) => setHeroForm({ ...heroForm, supporting: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF] resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#475569] mb-1">
                    Label Tombol Utama (Primary CTA)
                  </label>
                  <input
                    type="text"
                    value={heroForm.primaryCta}
                    onChange={(e) => setHeroForm({ ...heroForm, primaryCta: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#475569] mb-1">
                    Label Tombol Sekunder (Secondary CTA)
                  </label>
                  <input
                    type="text"
                    value={heroForm.secondaryCta}
                    onChange={(e) => setHeroForm({ ...heroForm, secondaryCta: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF]"
                  />
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs space-y-6">
              <h3 className="text-lg font-display font-bold text-[#0A0F1A]">
                Positioning Statement Section
              </h3>

              <div>
                <label className="block text-xs font-mono text-[#475569] mb-1">
                  Statement Tag Label
                </label>
                <input
                  type="text"
                  value={positioningForm.label}
                  onChange={(e) => setPositioningForm({ ...positioningForm, label: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#475569] mb-1">
                  Main Statement (Huruf Besar)
                </label>
                <textarea
                  rows={2}
                  value={positioningForm.statement}
                  onChange={(e) => setPositioningForm({ ...positioningForm, statement: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF] resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#475569] mb-1">
                  Supporting Statement Description
                </label>
                <textarea
                  rows={2}
                  value={positioningForm.supporting}
                  onChange={(e) => setPositioningForm({ ...positioningForm, supporting: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF] resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary-blue px-8 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Perubahan Hero & Positioning</span>
            </button>
          </form>
        )}

        {/* Portofolio Pekerjaan Tab */}
        {activeTab === 'work' && (
          <form onSubmit={handleSaveWork} className="space-y-8 animate-fadeIn max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#006FFF] uppercase tracking-wider block mb-1">
                  PORTOFOLIO PEKERJAAN
                </span>
                <h1 className="text-2xl md:text-3xl font-display font-extrabold text-[#0A0F1A]">
                  Kelola Item Selected Work & Proyek
                </h1>
              </div>

              <button
                type="button"
                onClick={addWorkItemNew}
                className="px-5 py-2.5 rounded-full bg-[#006FFF]/10 text-[#006FFF] border border-[#006FFF]/30 text-xs font-semibold hover:bg-[#006FFF] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Proyek Baru</span>
              </button>
            </div>

            <div className="space-y-6">
              {workForm.map((work, idx) => (
                <div key={work.slug || idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                    <span className="text-xs font-mono text-[#006FFF] font-bold">
                      PROYEK #{work.number || idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeWorkItem(work.slug)}
                      className="text-xs font-mono text-rose-600 hover:text-rose-800 flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Hapus Proyek</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#475569] mb-1">
                        Judul Proyek
                      </label>
                      <input
                        type="text"
                        value={work.title}
                        onChange={(e) => {
                          const updated = [...workForm];
                          updated[idx].title = e.target.value;
                          setWorkForm(updated);
                        }}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#475569] mb-1">
                        Kategori / Label
                      </label>
                      <input
                        type="text"
                        value={work.category}
                        onChange={(e) => {
                          const updated = [...workForm];
                          updated[idx].category = e.target.value;
                          setWorkForm(updated);
                        }}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#475569] mb-1">
                      URL Gambar Mockup Preview
                    </label>
                    <input
                      type="text"
                      value={work.image || ''}
                      onChange={(e) => {
                        const updated = [...workForm];
                        updated[idx].image = e.target.value;
                        setWorkForm(updated);
                      }}
                      placeholder="/work/work-chat-app.jpg"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#475569] mb-1">
                      Ringkasan Singkat (Summary)
                    </label>
                    <textarea
                      rows={2}
                      value={work.summary}
                      onChange={(e) => {
                        const updated = [...workForm];
                        updated[idx].summary = e.target.value;
                        setWorkForm(updated);
                      }}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF] resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#475569] mb-1">
                      Deskripsi Lengkap Modal
                    </label>
                    <textarea
                      rows={3}
                      value={work.fullDescription}
                      onChange={(e) => {
                        const updated = [...workForm];
                        updated[idx].fullDescription = e.target.value;
                        setWorkForm(updated);
                      }}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF] resize-none"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="btn-primary-blue px-8 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Perubahan Portofolio</span>
            </button>
          </form>
        )}

        {/* Layanan Tab */}
        {activeTab === 'services' && (
          <form onSubmit={handleSaveServices} className="space-y-8 animate-fadeIn max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#006FFF] uppercase tracking-wider block mb-1">
                  KATEGORI LAYANAN
                </span>
                <h1 className="text-2xl md:text-3xl font-display font-extrabold text-[#0A0F1A]">
                  Kelola Layanan & Fitur Utama
                </h1>
              </div>

              <button
                type="button"
                onClick={addServiceNew}
                className="px-5 py-2.5 rounded-full bg-[#006FFF]/10 text-[#006FFF] border border-[#006FFF]/30 text-xs font-semibold hover:bg-[#006FFF] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Layanan Baru</span>
              </button>
            </div>

            <div className="space-y-6">
              {servicesForm.map((service, idx) => (
                <div key={service.id || idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                    <span className="text-xs font-mono text-[#006FFF] font-bold">
                      LAYANAN #{service.number || idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeServiceItem(service.id)}
                      className="text-xs font-mono text-rose-600 hover:text-rose-800 flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Hapus Layanan</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#475569] mb-1">
                        Nama Layanan
                      </label>
                      <input
                        type="text"
                        value={service.name}
                        onChange={(e) => {
                          const updated = [...servicesForm];
                          updated[idx].name = e.target.value;
                          setServicesForm(updated);
                        }}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#475569] mb-1">
                        Kategori Subjudul
                      </label>
                      <input
                        type="text"
                        value={service.category}
                        onChange={(e) => {
                          const updated = [...servicesForm];
                          updated[idx].category = e.target.value;
                          setServicesForm(updated);
                        }}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#475569] mb-1">
                      Ringkasan Layanan (Summary)
                    </label>
                    <textarea
                      rows={2}
                      value={service.summary}
                      onChange={(e) => {
                        const updated = [...servicesForm];
                        updated[idx].summary = e.target.value;
                        setServicesForm(updated);
                      }}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF] resize-none"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="btn-primary-blue px-8 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Perubahan Layanan</span>
            </button>
          </form>
        )}

        {/* Menu & Navigasi Tab */}
        {activeTab === 'navigation' && (
          <form onSubmit={handleSaveNav} className="space-y-8 animate-fadeIn max-w-3xl">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#006FFF] uppercase tracking-wider block mb-1">
                  NAVBAR NAVIGATION LINKS
                </span>
                <h1 className="text-2xl md:text-3xl font-display font-extrabold text-[#0A0F1A]">
                  Kelola Menu Navigasi Header
                </h1>
              </div>

              <button
                type="button"
                onClick={addNavLinkItem}
                className="px-5 py-2.5 rounded-full bg-[#006FFF]/10 text-[#006FFF] border border-[#006FFF]/30 text-xs font-semibold hover:bg-[#006FFF] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Tautan Menu</span>
              </button>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs space-y-4">
              {navForm.map((nav, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 rounded-2xl bg-[#F5F7FA] border border-[#E2E8F0]">
                  <span className="text-xs font-mono text-[#006FFF] font-bold shrink-0">#{idx + 1}</span>
                  <input
                    type="text"
                    value={nav.label}
                    onChange={(e) => {
                      const updated = [...navForm];
                      updated[idx].label = e.target.value;
                      setNavForm(updated);
                    }}
                    placeholder="Nama Menu (Label)"
                    className="w-1/2 px-4 py-2 rounded-xl bg-white border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF]"
                  />
                  <input
                    type="text"
                    value={nav.href}
                    onChange={(e) => {
                      const updated = [...navForm];
                      updated[idx].href = e.target.value;
                      setNavForm(updated);
                    }}
                    placeholder="Target Href (#section)"
                    className="w-1/2 px-4 py-2 rounded-xl bg-white border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF]"
                  />
                  <button
                    type="button"
                    onClick={() => removeNavLinkItem(idx)}
                    className="p-2 text-rose-600 hover:text-rose-800 rounded-lg hover:bg-rose-50 transition-colors shrink-0 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="btn-primary-blue px-8 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Perubahan Navigasi Header</span>
            </button>
          </form>
        )}

        {/* Inquiry Konsultasi Tab */}
        {activeTab === 'inquiries' && (
          <div className="space-y-8 animate-fadeIn max-w-4xl">
            <div>
              <span className="text-xs font-mono text-[#006FFF] uppercase tracking-wider block mb-1">
                KOTAK MASUK INQUIRY
              </span>
              <h1 className="text-2xl md:text-3xl font-display font-extrabold text-[#0A0F1A]">
                Permintaan Konsultasi Masuk ({inquiries.length})
              </h1>
            </div>

            {inquiries.length === 0 ? (
              <div className="p-12 text-center bg-white border border-[#E2E8F0] rounded-3xl">
                <MessageSquare className="w-12 h-12 text-[#475569] mx-auto mb-3 opacity-40" />
                <h3 className="text-lg font-display font-bold text-[#0A0F1A]">Belum Ada Inquiry Masuk</h3>
                <p className="text-xs text-[#475569] mt-1">Permintaan yang dikirim pengguna dari modal konsultasi akan muncul di sini secara otomatis.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3">
                      <div>
                        <span className="text-xs font-mono text-[#006FFF] font-bold block">{inq.service}</span>
                        <h3 className="text-lg font-display font-bold text-[#0A0F1A]">{inq.full_name}</h3>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-mono text-[#475569]">{inq.timestamp}</span>
                        <button
                          onClick={() => deleteInquiry(inq.id)}
                          className="p-2 text-rose-600 hover:text-rose-800 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#475569]">
                      <div>Email: <strong className="text-[#0A0F1A]">{inq.email}</strong></div>
                      <div>No. WA/Telp: <strong className="text-[#0A0F1A]">{inq.contact}</strong></div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] font-sans">
                      {inq.message || 'Tidak ada deskripsi tambahan.'}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Kontak & WhatsApp Tab */}
        {activeTab === 'contact' && (
          <form onSubmit={handleSaveContact} className="space-y-8 animate-fadeIn max-w-3xl">
            <div>
              <span className="text-xs font-mono text-[#006FFF] uppercase tracking-wider block mb-1">
                PENGATURAN KONTAK
              </span>
              <h1 className="text-2xl md:text-3xl font-display font-extrabold text-[#0A0F1A]">
                Kelola Informasi Kontak & WhatsApp
              </h1>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs space-y-6">
              <div>
                <label className="block text-xs font-mono text-[#475569] mb-1">
                  Nomor WhatsApp (Format Internasional tanpa +)
                </label>
                <input
                  type="text"
                  value={contactForm.whatsAppNumber}
                  onChange={(e) => setContactForm({ ...contactForm, whatsAppNumber: e.target.value })}
                  placeholder="6281380870105"
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#475569] mb-1">
                  Pesan Default WhatsApp Chat
                </label>
                <input
                  type="text"
                  value={contactForm.whatsAppMessage}
                  onChange={(e) => setContactForm({ ...contactForm, whatsAppMessage: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#475569] mb-1">
                  Email Resmi Studio
                </label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#475569] mb-1">
                  Lokasi / Alamat Studio
                </label>
                <input
                  type="text"
                  value={contactForm.address}
                  onChange={(e) => setContactForm({ ...contactForm, address: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-[#E2E8F0] text-sm text-[#0A0F1A] focus:outline-none focus:border-[#006FFF]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary-blue px-8 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Simpan Perubahan Kontak</span>
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
