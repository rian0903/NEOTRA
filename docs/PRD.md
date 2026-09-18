# PRODUCT REQUIREMENTS DOCUMENT (PRD) — NEOTRA V2

## 1. Product Overview

**NEOTRA** adalah digital engineering studio yang menyediakan solusi teknologi terpadu untuk bisnis, organisasi, individu, dan kebutuhan proyek teknologi.

Website NEOTRA berfungsi sebagai:

1. digital flagship dan representasi brand;
2. katalog kemampuan dan layanan;
3. showcase pekerjaan/proyek;
4. pintu masuk konsultasi;
5. media untuk membangun kepercayaan;
6. kanal pengumpulan inquiry.

### Prinsip Produk

Website harus terasa seperti **studio teknologi yang benar-benar mengerjakan pekerjaan nyata**, bukan template SaaS, dashboard, atau landing page generatif.

Fokus pengalaman:

**Positioning → Work → Capability → Process → Proof → Contact**

---

## 2. Product Goals

### Primary Goals

- Menjelaskan apa yang NEOTRA kerjakan dalam beberapa detik pertama.
- Menampilkan pekerjaan nyata secara visual.
- Membantu pengunjung memahami layanan tanpa membaca blok teks panjang.
- Mendorong konsultasi melalui WhatsApp atau form inquiry.
- Membangun persepsi profesional, presisi, dan modern.

### Secondary Goals

- Menjelaskan proses kerja.
- Menampilkan teknologi yang digunakan sebagai supporting proof.
- Menyediakan FAQ yang membantu keputusan.
- Menjadi fondasi untuk portfolio dan case study yang dapat berkembang.

### Non-Goals

Website tidak ditujukan menjadi:

- admin dashboard;
- marketplace;
- customer portal;
- blog CMS besar;
- katalog harga otomatis;
- aplikasi penuh untuk manajemen proyek.

---

## 3. Target Audience

### A. UMKM & Business

Kebutuhan:
- website;
- sistem web;
- otomasi;
- jaringan;
- desain digital.

### B. Startup & Solopreneur

Kebutuhan:
- MVP;
- web application;
- product interface;
- technical implementation.

### C. Academic / Technical Audience

Kebutuhan:
- technical mentoring;
- debugging;
- project assistance;
- IoT / programming / networking support.

Framing publik harus **bimbingan dan asistensi teknis yang etis**, bukan promosi jasa joki atau penggantian tanggung jawab akademik.

### D. Modern Office / Smart Environment

Kebutuhan:
- networking;
- IoT;
- monitoring;
- automation.

---

## 4. Brand Positioning

### Position

**Integrated Digital Engineering Studio**

### Brand Promise

NEOTRA membantu mengubah kebutuhan teknologi menjadi sistem yang nyata, usable, dan terukur.

### Personality

- precise;
- modern;
- practical;
- intelligent;
- confident;
- approachable.

### What NEOTRA Is Not

NEOTRA bukan:
- perusahaan yang hanya menjual jargon teknologi;
- neon-futuristic cyberpunk brand;
- template SaaS;
- kumpulan layanan tanpa bukti pekerjaan.

---

## 5. Primary Conversion

Primary conversion:

**Start a Conversation**

Target action:
- WhatsApp;
- inquiry form.

Secondary conversion:
- view work;
- explore services;
- read process.

CTA hierarchy:

1. Primary: `Mulai Konsultasi`
2. Secondary: `Lihat Pekerjaan`
3. Supporting: `Pelajari Layanan`

---

## 6. Information Architecture

Homepage:

1. Navigation
2. Hero
3. Selected Work
4. Positioning Statement
5. Services
6. Capabilities / Technology
7. Process
8. Proof / Testimonials (only when real data exists)
9. FAQ
10. Contact / CTA
11. Footer

Optional sub-pages:

- `/work`
- `/work/[slug]`
- `/services`
- `/services/[slug]`
- `/contact`

Sub-page hanya dibuat ketika kontennya memang tersedia.

---

## 7. Hero Requirements

Hero harus menjawab tiga hal:

1. NEOTRA apa?
2. NEOTRA membantu siapa?
3. Apa tindakan berikutnya?

Hero tidak boleh menjadi katalog seluruh layanan.

### Recommended content

Overline:
`DIGITAL ENGINEERING STUDIO`

Headline:
`We build digital systems that make complex things feel simple.`

Supporting text:
`Web, automation, infrastructure, and digital product work — designed and engineered as one system.`

Primary CTA:
`Mulai Konsultasi`

Secondary CTA:
`Lihat Pekerjaan`

Supporting metadata:
`WEB / IOT / NETWORK / DESIGN`

Headline dan supporting copy harus tetap bisa disesuaikan dengan konten final tanpa mengubah struktur desain.

---

## 8. Selected Work Requirements

Selected Work merupakan salah satu bagian paling penting.

Setiap item minimal mempunyai:

- project title;
- category;
- year;
- short statement;
- primary visual;
- technology;
- destination/detail.

### Visual Rules

- satu project utama per visual block;
- hindari grid card identik;
- gunakan kombinasi full-width, split, offset, dan editorial layout;
- hanya tampilkan project yang benar-benar tersedia;
- placeholder harus jelas ditandai sebagai placeholder dan tidak tampil sebagai social proof palsu.

---

## 9. Services Requirements

Lima layanan utama tetap:

1. Web Engineering
2. IoT & Smart Automation
3. Network & Infrastructure
4. Digital Design / UI/UX
5. Technical Mentorship & Project Assistance

Services tidak wajib ditampilkan sebagai lima card.

Default presentation:

**interactive editorial list / rows**

Setiap service mempunyai:

- index;
- name;
- one-line value proposition;
- supporting capabilities;
- optional visual;
- CTA.

Detail lengkap dapat berada pada service detail page atau expanded panel.

---

## 10. Process

Process:

1. Discover
2. Define
3. Design / Architect
4. Build
5. Test & Handover

Deskripsi harus ringkas dan konkret.

Jangan menggunakan jargon metodologi yang tidak benar-benar dipakai.

---

## 11. Proof & Social Evidence

Proof hanya boleh menggunakan data nyata.

Dapat berupa:

- real project count;
- real client/project name;
- real testimonial;
- real technology implementation;
- real case study;
- real result.

### Forbidden

Jangan menampilkan:

- rating `5.0` jika belum ada sumber nyata;
- testimonial buatan;
- “trusted by” dengan logo tanpa izin;
- angka proyek palsu;
- klaim performa tanpa data.

---

## 12. FAQ

FAQ menjawab:

- layanan;
- proses;
- estimasi;
- teknologi;
- konsultasi;
- revisi;
- support;
- confidentiality.

Hindari FAQ yang hanya dibuat untuk memenuhi jumlah section.

---

## 13. Contact

Contact section harus sederhana.

Fields:

- name;
- email or WhatsApp;
- service;
- project description.

Optional:
- budget range;
- preferred timeline.

Contact menyediakan:
- form inquiry;
- direct WhatsApp;
- email.

---

## 14. Functional Requirements

### FR-01 Navigation

Navbar dapat berpindah ke:
- Work
- Services
- Process
- FAQ
- Contact

### FR-02 Work Showcase

Pengunjung dapat membuka detail pekerjaan yang tersedia.

### FR-03 Service Exploration

Pengunjung dapat melihat ringkasan dan capability tiap layanan.

### FR-04 Inquiry

Form dikirim ke backend API.

### FR-05 WhatsApp

CTA dapat membuka WhatsApp dengan pre-filled message.

### FR-06 FAQ

FAQ menggunakan accordion accessible.

### FR-07 Responsive

Website usable pada mobile, tablet, desktop.

### FR-08 Motion Reduction

Pengalaman menyediakan fallback untuk `prefers-reduced-motion`.

---

## 15. Non-Functional Requirements

### Performance

Target:
- cepat pada mobile;
- optimized images;
- lazy loading;
- code splitting;
- minimal client-side JavaScript.

### Accessibility

- semantic HTML;
- keyboard accessible;
- visible focus;
- sufficient contrast;
- no hover-only information.

### SEO

- metadata;
- Open Graph;
- semantic headings;
- descriptive URLs;
- sitemap;
- robots.

---

## 16. Content Rules

Konten harus:

- konkret;
- singkat;
- tidak berlebihan;
- dapat dibuktikan;
- tidak menggunakan jargon tanpa alasan.

Hindari copy seperti:

> Empowering the future through revolutionary innovation.

Prioritaskan:

> We design and build digital systems for real operational needs.

---

## 17. Asset Rules

Asset utama:
- brand.png
- logo1.png
- logo2.png

Asset portfolio/visual lain hanya digunakan bila tersedia.

Jangan membuat mock project seolah-olah proyek nyata.

---

## 18. Success Metrics

Website sukses apabila:

- pengunjung memahami positioning dengan cepat;
- selected work dapat dipahami tanpa banyak membaca;
- CTA konsultasi mudah ditemukan;
- mobile experience tetap kuat;
- page tidak terasa seperti template;
- inquiry dapat dikirim dengan benar;
- performance tetap baik.

KPI numerik seperti conversion rate digunakan setelah analytics tersedia, bukan dijadikan klaim visual sebelum ada data.

---
