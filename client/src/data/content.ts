import { Service, WorkItem, ProcessStep, FAQItem, PricingPackage, TestimonialProof } from '../types';

export const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_DATA = {
  topBadge: 'PT NEOTRA STRATEGIC GROUP · DIGITAL-FIRST JAKARTA WEB AGENCY®',
  headline: 'Jakarta Web Agency® Trusted by 100+ Brands®',
  supporting: 'We design, build, and optimize websites and digital products for 100+ brands, combining strategic design, built-in SEO, and full handover for scalable growth.',
  primaryCta: 'Book Free Discovery Call',
  secondaryProof: '★ 4.6/5 on Trustpilot · Trusted by 100+ brands',
  availability: "Available for Q4'25",
};

export const LOGO_CLOUD = [
  'GARASI DRIFT',
  'MOTION IME',
  'JARTE BEAUTY',
  'HYPR ATHLETICS',
  'SAMBA FOOTWEAR',
  'VOLT STUDIO',
  'NEXUS LOGISTICS',
  'KROMA CREATIVE',
];

export const WORK_ITEMS: WorkItem[] = [
  {
    slug: 'garasi-drift-official',
    number: '01',
    title: 'Garasi Drift — Performance Brand Platform',
    category: 'E-COMMERCE & BRAND EXPERIENCE',
    year: 2026,
    summary: 'High-conversion merchandise platform built with headless checkout and instant inventory syncing.',
    fullDescription: 'Architected a custom digital shopfront for Indonesia’s premier automotive lifestyle brand. Engineered with Next.js App Router, seamless payment gateway integration, and ultra-fast page transitions.',
    client: 'Garasi Drift',
    role: 'Full-Stack Web Engineering & UI/UX',
    image: '/brand/logo1.png',
    technologies: ['Next.js', 'Go Fiber', 'Tailwind CSS', 'Midtrans API', 'PostgreSQL'],
    metrics: [
      { label: 'Lighthouse Performance', value: '99/100' },
      { label: 'Checkout Conversion', value: '+42%' },
    ],
  },
  {
    slug: 'motion-ime-festival',
    number: '02',
    title: 'Motion Ime Festival — Event Digital Hub',
    category: 'EVENT & INTERACTIVE WEB',
    year: 2026,
    summary: 'Interactive festival portal handling peak traffic of 100,000+ concurrent visitors during ticket drops.',
    fullDescription: 'Designed a high-impact, dark aesthetic festival portal featuring live schedule countdowns, interactive site maps, and resilient queue management backed by Go REST API.',
    client: 'Motion Ime',
    role: 'Web Architecture & Scalability',
    image: '/brand/logo2.png',
    technologies: ['Next.js', 'Go', 'Redis Queue', 'Framer Motion', 'Tailwind CSS'],
    metrics: [
      { label: 'Peak Concurrent Traffic', value: '120,000 req/s' },
      { label: 'Response Latency', value: '< 18ms' },
    ],
  },
  {
    slug: 'smart-iot-telemetry',
    number: '03',
    title: 'Smart Environmental Telemetry & Control Engine',
    category: 'IOT & SMART AUTOMATION',
    year: 2026,
    summary: 'Real-time telemetry and remote automation engine handling physical sensor streams via MQTT.',
    fullDescription: 'Connected IoT ecosystem for real-time sensor monitoring, automated threshold alerting, and cloud control over MQTT and WebSockets.',
    client: 'Industrial Partner',
    role: 'IoT Hardware & Web Architecture',
    technologies: ['ESP32', 'MQTT', 'Go Fiber', 'Next.js', 'PostgreSQL'],
    metrics: [
      { label: 'Sensor Polling', value: '< 250ms' },
      { label: 'System Uptime', value: '99.9%' },
    ],
  },
  {
    slug: 'enterprise-workflow-portal',
    number: '04',
    title: 'Nexus Logistics — Enterprise Operational Web System',
    category: 'CUSTOM WEB APP & AUTOMATION',
    year: 2025,
    summary: 'Modular web application engineered for complex business workflow automation and rapid reporting.',
    fullDescription: 'Replaced legacy manual spreadsheets with structured digital workflows, role-based security access, and real-time automated report generation.',
    client: 'Nexus Logistics',
    role: 'Enterprise Systems Architecture',
    technologies: ['Next.js', 'TypeScript', 'Go', 'Docker', 'Tailwind CSS'],
    metrics: [
      { label: 'Workflow Efficiency', value: '3.5x Faster' },
      { label: 'Data Processing', value: 'Real-time' },
    ],
  },
];

export const ANNOUNCEMENT_HIGHLIGHT = {
  badge: 'ANNOUNCEMENTS / STRATEGIC VISION',
  title: 'Full Ownership & Zero Vendor Lock-in',
  quote: '"Every website we build comes with 100% full handover — clean source code, no hidden licensing fees, and built-in SEO to guarantee your digital independence."',
  author: 'NEOTRA Engineering Advisory',
};

export const SERVICES: Service[] = [
  {
    id: 'web-engineering',
    number: '01',
    name: 'Custom Website Development',
    category: 'Web Architecture',
    summary: 'High-performance websites designed from scratch with modern frameworks, responsive layouts, and lightning-fast load times.',
    capabilities: [
      'Next.js 14 App Router & TypeScript',
      'Custom bespoke UI design system',
      'Built-in Technical SEO & Meta tags',
      'Full source code & CMS handover',
      'Ultra-fast global CDN deployment',
    ],
    cta: 'Book Web Project',
    iconName: 'Code',
  },
  {
    id: 'ecommerce-enabler',
    number: '02',
    name: 'E-Commerce Enabler',
    category: 'E-Commerce',
    summary: 'End-to-end webstores optimized for maximum conversion, local/international payment gateways, and shipping automation.',
    capabilities: [
      'Midtrans / Xendit / Stripe integration',
      'Automated RajaOngkir shipping calculator',
      'Instant WhatsApp order & checkout flow',
      'Real-time inventory synchronization',
      'Mobile-first conversion layout',
    ],
    cta: 'Build Webstore',
    iconName: 'ShoppingBag',
  },
  {
    id: 'seo-ai-optimization',
    number: '03',
    name: 'SEO & AI Search Optimization',
    category: 'Search & Growth',
    summary: 'Dominate Google ranking and modern AI search engines (Perplexity, ChatGPT, Claude) with structured schema markup.',
    capabilities: [
      'Comprehensive technical SEO audit',
      'Schema.org JSON-LD structured data',
      'AI Search Engine Visibility indexing',
      'Lighthouse 95+ Core Web Vitals optimization',
      'Automated sitemap & indexing setup',
    ],
    cta: 'Optimize Ranking',
    iconName: 'Search',
  },
  {
    id: 'cms-custom-apps',
    number: '04',
    name: 'CMS & Custom Web Applications',
    category: 'Custom Software',
    summary: 'Tailored administrative web portals and low-code/no-code CMS handovers so your team can edit content without developers.',
    capabilities: [
      'Sanity / Strapi / Go Fiber Headless CMS',
      'Role-based access & admin dashboard',
      'Custom API & Webhook integrations',
      'Docker containerized deployment',
      'Database architecture & security hardening',
    ],
    cta: 'Discuss Custom App',
    iconName: 'Layers',
  },
];

export const SERVICE_PILLARS = [
  { title: 'Streamlined Process', desc: 'Fast, structured execution without bureaucracy.' },
  { title: 'Scalable Design', desc: 'Modular design tokens ready to grow with your brand.' },
  { title: '24/7 Support & Handover', desc: 'Direct engineer communication and 100% full ownership.' },
];

export const TECH_STACK = [
  { name: 'Figma', category: 'Design' },
  { name: 'Framer', category: 'Prototyping' },
  { name: 'Next.js 14', category: 'Frontend' },
  { name: 'Go (Fiber)', category: 'Backend' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Midtrans', category: 'Payment' },
  { name: 'Search Console', category: 'SEO' },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'starter-web',
    name: 'One-Time Web Package',
    tagline: 'Ideal for growing brands needing a high-impact corporate or portfolio website.',
    price: 'Rp 4.900.000',
    period: 'one-time investment',
    recommended: false,
    features: [
      'Bespoke modern dark/light UI design',
      'Up to 5 custom pages (Home, About, Services, Work, Contact)',
      'Responsive Next.js 14 & Tailwind CSS engine',
      'Built-in Technical SEO & Speed Optimization',
      'Interactive Contact Form & WhatsApp CTA',
      '1-2 Weeks turnaround time',
      '100% Full Source Code & Domain Handover',
    ],
    cta: 'Get Started',
  },
  {
    id: 'ecommerce-pro',
    name: 'E-Commerce Enabler',
    tagline: 'Complete webstore solution engineered for high sales conversion & automation.',
    price: 'Rp 8.900.000',
    period: 'one-time investment',
    recommended: true,
    features: [
      'All features in One-Time Web Package',
      'Custom E-Commerce Storefront & Catalog',
      'Midtrans / Xendit / Stripe Payment Gateway',
      'Automated Shipping Cost Calculator (RajaOngkir)',
      'Order Management & Admin Dashboard',
      'WhatsApp Direct Order Notification',
      '2-3 Weeks turnaround time',
      'Free 3 Months Technical Maintenance',
    ],
    cta: 'Book E-Commerce',
  },
  {
    id: 'growth-retainer',
    name: 'Growth & SEO Retainer',
    tagline: 'Dedicated monthly engineering, maintenance, and continuous AI Search ranking.',
    price: 'Rp 3.500.000',
    period: 'per month',
    recommended: false,
    features: [
      'Continuous Technical SEO & Core Web Vitals Audit',
      'AI Search Indexing (ChatGPT & Perplexity Search)',
      'Monthly Content Updates & New Landing Pages',
      '24/7 Security Hardening & Uptime Monitoring',
      'Priority Dedicated Developer Assistance',
      'Cancel or pause anytime',
    ],
    cta: 'Subscribe Retainer',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    name: 'Discover & Align',
    summary: 'We dive deep into your brand, targets, and business objectives.',
    details: [
      'Free 30-minute discovery consultation call',
      'Competitor analysis & visual moodboarding',
      'Project scope, deliverables & timeline mapping',
    ],
  },
  {
    number: '02',
    name: 'Design & Prototype',
    summary: 'Crafting editorial wireframes and interactive visual prototypes in Figma.',
    details: [
      'Custom UI layout & typography selection',
      'Interactive desktop and mobile prototype',
      'Feedback refinement rounds until 100% approved',
    ],
  },
  {
    number: '03',
    name: 'Engineering & Build',
    summary: 'Transforming designs into clean, modular Next.js and Go code.',
    details: [
      'Pixel-perfect Next.js 14 App Router development',
      'API integration & security hardening',
      'Built-in Technical SEO & JSON-LD schema embedding',
    ],
  },
  {
    number: '04',
    name: 'QA & Handover',
    summary: 'Thorough performance testing, deployment, and complete code ownership.',
    details: [
      'Cross-browser & mobile responsiveness QA',
      'Lighthouse 95+ speed verification',
      'Deployment to Vercel/Cloud & 100% full code handover',
    ],
  },
];

export const TESTIMONIALS: TestimonialProof[] = [
  {
    quote: 'NEOTRA transformed our web presence completely. The site loads blazingly fast, looks super premium, and our sales conversion jumped by over 40% in the first month!',
    client: 'Ziko Harnadi',
    role: 'Co-Founder',
    company: 'Garasi Drift',
    rating: 5,
  },
  {
    quote: 'During our festival ticket drop, NEOTRA’s architecture handled 100k+ users without a single hiccup. Best digital agency team in Jakarta!',
    client: 'Windah Basudara',
    role: 'Founder',
    company: 'Motion Ime Festival',
    rating: 5,
  },
  {
    quote: 'The level of typography, smooth animations, and clean code handover is unmatched. They don’t just build websites — they build real digital assets.',
    client: 'Amanda Putri',
    role: 'Brand Manager',
    company: 'Jarte Beauty',
    rating: 5,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Berapa lama proyek website selesai dikerjakan?',
    answer: 'Rata-rata pengerjaan landing page atau corporate website memakan waktu 1–2 minggu. Untuk toko online (E-Commerce) atau sistem web kustom penuh, pengerjaan berkisar 2–4 minggu sesuai cakupan fitur yang disepakati.',
  },
  {
    id: 'faq-2',
    question: 'Bagaimana dengan kepemilikan kode dan hak cipta website?',
    answer: '100% Full Handover & Hak Cipta milik Anda. Kami menyerahkan seluruh source code bersih (tanpa kuncian/license lock) serta akses penuh ke hosting dan domain Anda.',
  },
  {
    id: 'faq-3',
    question: 'Apakah website buatan NEOTRA sudah dilengkapi SEO?',
    answer: 'Ya. Setiap website yang kami bangun dilengkapi dengan Technical SEO bawaan: metadata dinamis, struktur heading semantik, OpenGraph image, sitemap otomatis, serta optimasi AI Search Engine (ChatGPT & Perplexity indexing).',
  },
  {
    id: 'faq-4',
    question: 'Apakah saya bisa mengubah/mengedit konten sendiri setelah selesai?',
    answer: 'Tentu saja. Kami menyediakan sistem CMS (Content Management System) yang ramah pengguna atau dokumentasi panduan mudah sehingga tim Anda bisa mengubah teks, gambar, dan produk tanpa bantuan developer.',
  },
  {
    id: 'faq-5',
    question: 'Apakah ada garansi atau dukungan teknis setelah peluncuran?',
    answer: 'Kami memberikan Garansi Pemeliharaan Gratis selama 30–90 hari setelah peluncuran untuk memastikan website berjalan 100% lancar bebas dari bug.',
  },
];

export const CONTACT_DATA = {
  headline: 'Got questions? Book a free discovery call.',
  supporting: 'Ready to build a high-performance website that drives real business results? Talk directly with our engineering lead today.',
  primaryCta: 'Book a Call Now',
  whatsApp: 'Chat via WhatsApp',
  whatsAppNumber: '6281380870105',
  whatsAppMessage: 'Halo NEOTRA, saya ingin berkonsultasi mengenai pembuatan website.',
  email: 'contact@neotra.id',
  address: 'Jakarta South · Indonesia',
};

export const FOOTER_DATA = {
  watermark: 'Digital-First Jakarta Web Agency®',
  statement: 'PT NEOTRA Strategic Group. Integrated Digital Engineering Studio.',
  copyright: '© 2026 PT NEOTRA Strategic Group. All rights reserved.',
  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Twitter / X', href: 'https://twitter.com' },
  ],
};
