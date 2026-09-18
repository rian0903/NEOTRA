# Design System & Implementation Specification: Digital-First Agency Website
> **Inspirasi & Arsitektur Referensi:** [RAF-Studio](https://raf-studio.id/)  
> **Tema:** Dark-Mode Luxury & High-Performance Creative Agency  
> **Target Output:** Spesifikasi Lengkap UI/UX, Komponen, Tipografi, Palet Warna & Kode Siap Pakai (`design.md`)

---

## 1. Filosofi Desain & Karakteristik Visual

NEOTRA is an **Integrated Digital Engineering Studio**.
The visual language must communicate precision, engineering capability, modern aesthetics, and practical utility.

### Karakteristik Inti:
1. **Dark Aesthetic & High-Contrast Hierarchy:** Latar belakang bernuansa *Dark Navy* pekat berpadu dengan aksen *Electric Blue* yang terukur, menciptakan impresi teknologi modern dan kredibilitas agensi kelas dunia.
2. **Precision Border Grid (Frame Line):** Menggunakan garis batas vertikal dan horizontal halus (*Border Dark* `1px`) dengan batas kontainer pusat (`max-w-[1080px]` hingga `max-w-[1200px]`), menghadirkan estetika arsitektural khas agensi modern.
3. **Typography-Driven Layout:** Perpaduan antara headline sans-serif yang tebal (*Inter Display* / *Switzer*) dan metadata teknis monospaced (*Fragment Mono* / *JetBrains Mono*) untuk nomor bab, status ketersediaan, dan kategori portofolio.
4. **Micro-Interactions & Glassmorphism:** Efek blur transparan pada floating navbar, animasi hover pembesaran halus (*scale-up*) pada kartu portofolio, dan transisi akordeon FAQ yang cair.

---

## 2. Palet Warna & Aturan Distribusi

Palet warna telah disesuaikan secara presisi dengan sistem nilai HEX dan RGB, disertai aturan rasio persentase untuk menjaga estetika tetap elegan dan tidak berlebihan.

### Tabel Token Warna

| Nama Token | HEX | RGB | Komposisi | Peran & Penggunaan |
| :--- | :--- | :--- | :--- | :--- |
| **Background** | `#FFFFFF` | `255, 255, 255` | **60–70%** | Background utama seluruh halaman |
| **Surface** | `#F5F7FA` | `245, 247, 250` | **10–15%** | Section alternatif, card, input, elevated area |
| **Primary Text** | `#0A0F1A` | `10, 15, 26` | **8–12%** | Heading, body text utama, navigasi |
| **Secondary Text** | `#64748B` | `100, 116, 139` | **3–6%** | Paragraph, subtitle, metadata |
| **Border** | `#E2E8F0` | `226, 232, 240` | **2–5%** | Divider, border, grid |
| **Blue** | `#006FFF` | `0, 111, 255` | **5–10%** | CTA, link, highlight, active state, visual accent |
| **Dark Blue** | `#0F2D56` | `15, 45, 86` | **1–3%** | Deep accent, footer, special section |
### Aturan Distribusi Warna (*Color Balance Formula*)

WHITE        ████████████████████████████████████████  60–70%
LIGHT GRAY   █████████                               10–15%
TEXT         ███████                                  8–12%
BLUE         █████                                    5–10%
SECONDARY    ███                                      3–6%
BORDER       ██                                       2–5%
DARK BLUE    █                                        1–3%


## 3. Sistem Tipografi

Tipografi menggunakan kombinasi 3 keluarga font yang mencerminkan presisi teknis dan ketegasan visual.

### Font Stack
- **Headline & Display:** `Switzer` atau `Inter Display` (`sans-serif`, weight `700`, `800`, `900`)
- **Body & Interface:** `Inter` (`sans-serif`, weight `400`, `500`, `600`)
- **Mono / Metadata / Labels:** `Fragment Mono` atau `JetBrains Mono` (`monospace`, weight `400`)

### Skala Tipografi (Type Scale)

| Elemen | Font Family | Size (Mobile -> Desktop) | Weight | Tracking (Letter Spacing) | Line Height |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | Inter Display / Switzer | `2.5rem (40px)` → `4.5rem (72px)` | `800` | `-0.03em` (tighter) | `1.05` |
| **Section H2** | Inter Display / Switzer | `1.75rem (28px)` → `2.75rem (44px)`| `700` | `-0.02em` | `1.15` |
| **Card H3** | Inter Display | `1.25rem (20px)` → `1.5rem (24px)` | `600` | `-0.01em` | `1.25` |
| **Body Large** | Inter | `1.125rem (18px)` | `400` / `500` | `normal` | `1.6` |
| **Body Base** | Inter | `1.0rem (16px)` | `400` | `normal` | `1.5` |
| **Body Small** | Inter | `0.875rem (14px)` | `400` | `+0.01em` | `1.5` |
| **Mono Badges** | Fragment Mono | `0.75rem (12px)` → `0.8125rem (13px)`| `400` | `+0.05em` (wide) | `1.4` |

---

## 4. Layout Grid & Struktur Halaman

Struktur layout terinspirasi dari arsitektur RAF-Studio dengan pembungkus terpusat dan garis pemisah samping.

### Parameter Layout
- **Max Width Kontainer:** `1080px` (maksimal `1200px` untuk viewport lebar)
- **Side Vertical Guides:** Garis batas vertikal `1px solid #1E2C44` di sisi kiri dan kanan sepanjang halaman
- **Padding Horizontal:** `px-4` (mobile: 16px), `px-8` (tablet: 32px), `px-12` (desktop: 48px)
- **Vertical Rhythm (Section Spacing):** `py-20` (80px) hingga `py-28` (112px) antar section

---

## 5. Spesifikasi Komponen & Anatomi Halaman

### 5.1. Floating Glassmorphism Navbar (Top Pill)
- **Posisi:** `fixed top-6 left-1/2 -translate-x-1/2 z-50`
- **Dimensi & Bentuk:** Pill rounded (`rounded-full`), height `48px – 52px`
- **Latar:** `bg-[#0A0F1A]/80 backdrop-blur-md border border-[#1E2C44]`
- **Elemen:**
  - **Logo:** `RAF-Studio®` / Brand Mark (`#F8FAFC`, font bold)
  - **Menu Links:** `Work`, `Services`, `Pricing`, `Contact`, `Referral` (`#94A3B8`, hover: `#F8FAFC`, transition `150ms`)
  - **Status Pill (Right):**
    - Teks: `Available for Q4'25` (Font: *Fragment Mono*, 11px, `#94A3B8`)
    - Status Pulse Dot: Lingkaran hijau/cyan (`#21B30B` atau `#006FFF`) dengan efek radar pulse
  - **Mobile Menu:** Tombol hamburger icon yang membuka slide-down sheet / modal dengan latar blur pekat.

---

### 5.2. Hero Section
- **Tag / Badge Atas:**
  - Bentuk: Badge pill kecil dengan outline `border-[#1E2C44]`, background `#111927`
  - Teks: `PT RAF Strategic Group · Digital-First Jakarta Web Agency®` (Monospace, 12px)
- **Headline Utama (H1):**
  - Teks: *"Jakarta Web Agency® Trusted by 100+ Brands"*
  - Warna: `#F8FAFC` dengan penekanan kata kunci tertentu
- **Paragraf Pengantar:**
  - Teks: *"We design, build, and optimize websites for 100+ brands, combining strategic design, built-in SEO, and full handover for scalable digital growth."*
  - Warna: `#94A3B8`, ukuran `18px`, `max-w-2xl`
- **Action Buttons (CTA Row):**
  1. **Primary Button:**
     - Teks: `Book Free Discovery Call` + Icon Arrow Up-Right (`↗`)
     - Warna: Background `#006FFF` (*Electric Blue*), teks `#FFFFFF`, hover: brightness `1.1` & shadow glow `rgba(0, 111, 255, 0.35)`
  2. **Secondary Button / Social Proof:**
     - Badge rating: `★ 4.6/5 on Trustpilot` / `Trusted by 100+ brands`
     - Background: `#111927`, border `#1E2C44`, teks `#F8FAFC`

---

### 5.3. Logo Cloud / Infinite Marquee
- **Fungsi:** Menampilkan logo-logo klien ternama secara berkesinambungan (*infinite marquee scroll*).
- **Styling Logo:** Warna monokrom `#64748B`, saat hover berubah menjadi `#F8FAFC`.
- **Masking:** Efek gradient fade di ujung kiri dan kanan (`from-[#0A0F1A] via-transparent to-[#0A0F1A]`).

---

### 5.4. Featured Works (Portofolio Showcase)
- **Heading Section:**
  - Label: `01 / SELECTED WORK` (Monospace, `#64748B`)
  - Judul: `Latest Works` (H2, `#F8FAFC`)
- **Struktur Kartu Portofolio:**
  - **Grid:** 2 Kolom responsif (`grid grid-cols-1 md:grid-cols-2 gap-8`)
  - **Kontainer Media:**
    - Aspect Ratio `16:10` atau `4:3`
    - Background: `#111927`, border `1px solid #1E2C44`, rounded `16px`
    - Gambar/Mockup: Menggunakan gambar beresolusi tinggi dengan efek *zoom-on-hover* (`scale-105 duration-500 ease-out`)
  - **Detail Proyek:**
    - Nama Proyek: e.g., `Garasi Drift`, `Motion Ime Festival`, `Jarte Beauty`, `HYPR Athletics`
    - Kategori / Tag: *Performance Brand*, *Skin Care & Fragrance*, *Event Website* (Monospace `#94A3B8`)
    - Tautan Interaktif: Teks `View Website ↗` dengan hover state warna `#006FFF`.
- **Bottom CTA:** Tombol outline `View all work` menuju halaman `/work`.

---

### 5.5. Strategic Highlight Banner (Advisor / Authority Card)
- **Komponen Spesial:** Banner editorial yang menegaskan kredibilitas (misal pengumuman Advisor Global / Penghargaan).
- **Styling:**
  - Background: Gradient halus dari `#0F2D56` ke `#111927`
  - Border: `1px solid #1E2C44`
  - Konten: Label Monospace `Announcements`, Kutipan visi, foto portrait dengan border bulat.

---

### 5.6. Layanan & Nilai Tambah ("Services built to create impact")
- **Heading Section:**
  - Label: `02 / SERVICES`
  - Judul: `Services built to create impact.`
  - Subtitle: `Designing experiences that solve problems.`
- **Grid Layanan (Bento-Grid Style):**
  1. **Website Development:**
     - Highlight: *Custom web design & layout, interactive responsive, Framer/WordPress/Next.js*
  2. **E-Commerce Enabler:**
     - Highlight: *Payment gateway internasional, kalkulator pengiriman otomatis, custom webshop*
  3. **SEO & AI Search Optimization:**
     - Highlight: *Peringkat #1 di Google & AI Engine (Perplexity/ChatGPT search), audit komprehensif*
  4. **CMS & Custom Web Apps:**
     - Highlight: *No-code/low-code CMS handover, fleksibel dikelola tanpa developer*
- **3 Pilar Layanan (Feature Strip):**
  - `Streamlined Process`: Alur terstruktur cepat tanpa birokrasi berbelit.
  - `Scalable Design`: Sistem desain modular yang siap tumbuh bersama brand.
  - `24/7 Dedicated Support`: Komunikasi langsung & asistensi responsif.

---

### 5.7. Tech Stack Badges
- **Daftar Alat:** `Figma`, `Framer`, `Next.js`, `WordPress`, `Elementor`, `Shopify`, `Tailwind CSS`, `Google Search Console`
- **Desain Badge:** Pill mini dengan background `#111927`, border `#1E2C44`, teks `#94A3B8`, icon brand kecil di kiri.

---

### 5.8. Struktur Paket & Harga ("Simple pricing. Invest in impact.")
- **Model Bisnis:** *One-Time Project Based* dengan opsi *Monthly Maintenance & SEO*.
- **Desain Kartu Harga (3 Kolom):**
  - **Card 1: One-Time Web Package**
    - Latar: `#111927`, border `#1E2C44`
    - Fitur: Desain kustom, responsive, integrasi CMS, basic SEO, full handover (1-2 minggu turnaround).
    - Tombol: Outline Button `#F8FAFC`
  - **Card 2: E-Commerce Enabler (Featured / Most Popular)**
    - Latar: `#111927` dengan highlight border gradient `#006FFF` & `#0F2D56`
    - Badge: `RECOMMENDED` (Background `#006FFF`, teks `#FFFFFF`, 10px bold)
    - Fitur: Semua fitur web, international gateway, integrasi kurir, inventory sync.
    - Tombol: Primary Solid `#006FFF`
  - **Card 3: Growth & SEO Retainer**
    - Latar: `#111927`, border `#1E2C44`
    - Fitur: Audit teknis berkala, optimasi AI Search, monthly maintenance.
    - Tombol: Outline Button `#F8FAFC`
- **Fitur Checklist:** Ikon centang berwarna `#006FFF` dengan teks `#F8FAFC`.

---

### 5.9. Testimoni Klien ("Words from our clients")
- **Layout:** Masonry grid atau 3-column card grid.
- **Isi Kartu Testimoni:**
  - Bintang / Rating: 5 Bintang berwarna emas / Electric Blue.
  - Kutipan Ulasan: Teks kutipan autentik (misal dari tokoh seperti Windah Basudara, Ziko Harnadi, dll.).
  - Profil Klien: Avatar lingkaran, Nama Klien (`#F8FAFC`, font bold), Jabatan & Nama Perusahaan (`#64748B`, monospace).
  - Background Kartu: `#111927`, hover background `#1A2538`.

---

### 5.10. Akordeon FAQ ("Your questions answered")
- **Struktur Interaktif:**
  - Pembagi atas & bawah: Garis `1px solid #1E2C44`.
  - Nomor Urut: Format `01`, `02`, `03` (Font *Fragment Mono*, warna `#64748B`).
  - Pertanyaan (H3): Font *Inter Display*, `#F8FAFC`, ukuran `18px – 20px`.
  - Icon Toggle: Tanda panah atau ikon plus `+` yang berputar 45° menjadi `✕` saat dibuka.
  - Jawaban: Teks `#94A3B8`, line-height `1.6`, animasi expand mulus menggunakan *Framer Motion* atau CSS Grid `grid-template-rows: 0fr` ke `1fr`.
- **Daftar Pertanyaan Kunci:**
  1. *Berapa lama proyek web selesai dikerjakan?* (Rata-rata 1–2 minggu untuk landing page, 2–4 minggu untuk situs kustom penuh).
  2. *Apakah bisa menggunakan aset brand yang sudah ada?*
  3. *Apa yang membedakan proses desain kami?*
  4. *Apakah ada dukungan setelah website selesai dibuat?*
  5. *Bagaimana kepemilikan kode dan hak cipta?* (100% full handover menjadi milik klien).

---

### 5.11. Pre-Footer Call to Action Banner
- **Judul Besar:** *"Got questions? Book a free discovery call."*
- **Aksen Background:** Gradient radial lembut di tengah `#0F2D56` dengan opacity `25%` di atas canvas `#0A0F1A`.
- **Opsi Kontak Langsung:**
  - Tombol 1: `Book a Call` (Background: `#006FFF`, teks `#FFFFFF`, rounded pill).
  - Tombol 2: `WhatsApp Us` (Background: `#111927`, border `#1E2C44`, teks `#F8FAFC`, hover `#1A2538`).

---

### 5.12. Footer Kolofon
- **Elemen Display Brand:** Headline besar berulang di latar: *"Digital-First Jakarta Web Agency®"* dengan opasitas rendah atau tipografi outline.
- **Kolom Tautan:**
  - **Menu:** `Work`, `Services`, `Pricing`, `Contact`, `Referral`
  - **Legal:** `Terms of Service`, `Privacy Policy`
  - **Kontak:** `info@raf-studio.id` / `+62 813 8087 0105`
  - **Socials:** Instagram, LinkedIn, Twitter/X, GitHub
- **Copyright:** `© 2026 PT RAF Strategic Group. All rights reserved.`

---

## 6. Efek Visual, Transisi & Animasi

1. **Glow Accent Hover:**
   ```css
   .btn-primary-electric {
     background-color: #006FFF;
     color: #FFFFFF;
     box-shadow: 0 0 20px -5px rgba(0, 111, 255, 0.4);
     transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
   }
   .btn-primary-electric:hover {
     transform: translateY(-2px);
     box-shadow: 0 0 30px 0px rgba(0, 111, 255, 0.6);
   }
   ```
2. **Card Elevate & Border Reveal:**
   ```css
   .card-agency {
     background-color: #111927;
     border: 1px solid #1E2C44;
     transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
   }
   .card-agency:hover {
     background-color: #1A2538;
     border-color: rgba(0, 111, 255, 0.4);
     transform: translateY(-3px);
   }
   ```
3. **Smooth Accordion Transition:**
   Menggunakan CSS grid transition untuk transisi tinggi dinamis tanpa lag.

---

## 7. Konfigurasi Kode Siap Pakai

### 7.1. CSS Variables (`globals.css`)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Color Tokens */
  --color-electric-blue: #006fff;
  --color-navy-blue: #0f2d56;
  --color-dark-navy: #0a0f1a;
  --color-surface-dark: #111927;
  --color-surface-hover: #1a2538;
  --color-border-dark: #1e2c44;
  --color-light-gray: #f5f7fa;
  --color-pure-white: #ffffff;
  --color-text-primary: #f8fafc;
  --color-text-secondary: #94a3b8;
  --color-text-muted: #64748b;

  /* Layout */
  --container-max-width: 1080px;
}

body {
  background-color: var(--color-dark-navy);
  color: var(--color-text-primary);
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  selection-background-color: var(--color-electric-blue);
  selection-color: #ffffff;
}

::selection {
  background: #006fff;
  color: #ffffff;
}
```

### 7.2. Tailwind CSS Configuration (`tailwind.config.js`)
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        agency: {
          electric: '#006FFF',
          navy: '#0F2D56',
          dark: '#0A0F1A',
          surface: '#111927',
          hover: '#1A2538',
          border: '#1E2C44',
          light: '#F5F7FA',
          white: '#FFFFFF',
          textPrimary: '#F8FAFC',
          textSecondary: '#94A3B8',
          textMuted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter Display', 'Switzer', 'sans-serif'],
        mono: ['Fragment Mono', 'JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        container: '1080px',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
```

---

## 8. Checklist Verifikasi Implementasi
- [ ] Latar dasar halaman konsisten menggunakan Dark Navy (`#0A0F1A`).
- [ ] Penggunaan Electric Blue (`#006FFF`) dibatasi ketat antara 2% – 5% untuk focal points dan CTA utama.
- [ ] Kontainer memiliki garis frame vertikal halus (`#1E2C44`) dengan batas maksimal 1080px.
- [ ] Floating navbar tetap berada di posisi atas dengan backdrop-blur dan border gelap.
- [ ] Semua kartu layanan dan portofolio menggunakan Surface Dark (`#111927`) dan beralih ke Surface Hover (`#1A2538`) saat disentuh kursor.
- [ ] Metadata, nomor urut FAQ, dan status ketersediaan menggunakan font monospaced.
- [ ] Transisi interaktif memiliki efek ease-out halus berdurasi 150ms – 250ms.
