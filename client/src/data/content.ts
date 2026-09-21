import { Service, WorkItem, ProcessStep, FAQItem } from '../types';

export const NAV_LINKS = [
  { label: 'Pekerjaan', href: '#work' },
  { label: 'Layanan', href: '#services' },
  { label: 'Proses', href: '#process' },
  { label: 'Standar', href: '#proof' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Konsultasi', href: '#contact' },
];

export const HERO_DATA = {
  overline: 'DIGITAL ENGINEERING STUDIO',
  headline: 'We build digital systems that make complex things feel simple.',
  supporting: 'Web, automation, infrastructure, and digital product work, designed and engineered as one unified system.',
  primaryCta: 'Mulai Konsultasi',
  secondaryCta: 'Lihat Pekerjaan',
  metadata: ['WEB', 'IOT', 'NETWORK', 'DESIGN', 'MENTORSHIP'],
};

export const POSITIONING_DATA = {
  label: 'WHAT WE DO',
  statement: 'TECHNOLOGY SHOULD REMOVE COMPLEXITY, NOT ADD TO IT.',
  supporting: 'NEOTRA brings software, connected systems, infrastructure, and digital design into one practical workflow.',
};

export const WORK_ITEMS: WorkItem[] = [
  {
    slug: 'smart-iot-telemetry-system',
    number: '01',
    title: 'Real-Time Instant Messaging & Group Chat Engine',
    category: 'CHAT & MESSAGING PLATFORM',
    year: 2026,
    summary: 'High-throughput real-time chat infrastructure supporting 1-on-1 direct messaging, group channels, WebSockets, and end-to-end encryption.',
    fullDescription: 'Architected and built an enterprise-grade real-time messaging application capable of sub-100ms message delivery across mobile and web clients. Engineered with Go Fiber backend microservices, Redis pub/sub message brokers, WebSocket connection pooling, and Next.js responsive chat UI.',
    client: 'Social Network Partner',
    role: 'Lead Messaging Architect',
    image: '/work/work-chat-app.jpg',
    technologies: ['Next.js', 'Go (Fiber)', 'WebSockets', 'Redis', 'PostgreSQL', 'Tailwind CSS'],
    metrics: [
      { label: 'Message Delivery Latency', value: '< 80ms' },
      { label: 'Concurrent WebSocket Connections', value: '100K+ Active' },
    ],
  },
  {
    slug: 'high-performance-enterprise-portal',
    number: '02',
    title: 'Interactive Social Media Feed & Timeline Platform',
    category: 'SOCIAL MEDIA PLATFORM',
    year: 2026,
    summary: 'Dynamic media timeline featuring real-time photo/video feeds, ephemeral stories, user engagements, and algorithmic content discovery.',
    fullDescription: 'Engineered a modern social networking platform equipped with rich multimedia sharing, user profiles, interactive comments/reactions, ephemeral stories, and push notification triggers. Optimized with server-side rendering, CDN caching, and high-performance database indexing.',
    client: 'Media & Social Enterprise',
    role: 'Full-Stack Social Architecture',
    image: '/work/work-social-feed.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Go', 'Fiber', 'Docker'],
    metrics: [
      { label: 'Feed Rendering Speed', value: 'Instant SSR' },
      { label: 'Media CDN Optimization', value: 'WebP / HLS Stream' },
    ],
  },
  {
    slug: 'enterprise-network-infrastructure',
    number: '03',
    title: 'High-Availability Server & Real-Time Messaging Cluster',
    category: 'INFRASTRUCTURE & SCALING',
    year: 2025,
    summary: 'Distributed server cluster topology, WebSocket load balancing, and hardened infrastructure for high-traffic social systems.',
    fullDescription: 'Designed and deployed multi-region cloud server infrastructure, reverse proxies, and database replication clusters supporting heavy concurrent messaging and video calling workloads with 99.99% operational uptime.',
    client: 'Global Communications Corp',
    role: 'DevOps & Infrastructure Architect',
    image: '/work/work-network-infra.jpg',
    technologies: ['MikroTik', 'Docker', 'Kubernetes', 'Nginx', 'WireGuard', 'Redis Cluster'],
    metrics: [
      { label: 'Cluster Availability', value: '99.99% Uptime' },
      { label: 'Load Balancer Throughput', value: '10 Gbps Pool' },
    ],
  },
  {
    slug: 'digital-product-ui-ux-system',
    number: '04',
    title: 'Social & Chat Application Design System (UI/UX)',
    category: 'DIGITAL DESIGN / UI/UX',
    year: 2025,
    summary: 'Comprehensive design tokens, dark/light theme components, and accessible mobile/web interface kit for chat applications.',
    fullDescription: 'Crafted a scalable, typography-driven Figma design system with full component tokenization, accessible color contrast ratios, light/dark mode variants, and smooth micro-animations for Web and Mobile messaging platforms.',
    client: 'Mobile App Studio',
    role: 'Lead UI/UX & System Design',
    image: '/work/work-ui-design.jpg',
    technologies: ['Figma', 'UI Systems', 'UX Flow', 'Design Tokens', 'Prototyping'],
    metrics: [
      { label: 'Component Tokenization', value: 'Design Tokens Studio' },
      { label: 'Accessibility Standard', value: 'WCAG 2.1 AA Compliant' },
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: 'web-engineering',
    number: '01',
    name: 'Web Engineering',
    category: 'Web Systems & Architecture',
    summary: 'Websites and applications engineered around real product and business needs.',
    capabilities: [
      'Next.js 14 & modern JavaScript architecture',
      'High-throughput REST API & Microservices (Go/Fiber)',
      'Responsive, accessible product interfaces',
      'Core Web Vitals & Technical SEO optimization',
      'Automated deployment, Docker & Cloud hosting',
    ],
    cta: 'Konsultasi Web',
    iconName: 'Code',
  },
  {
    id: 'iot-automation',
    number: '02',
    name: 'IoT & Smart Automation',
    category: 'Connected Hardware & Systems',
    summary: 'Connected systems that turn physical signals into useful digital information and action.',
    capabilities: [
      'ESP32 / Arduino / Raspberry Pi development',
      'MQTT, REST & WebSocket communication protocols',
      'Real-time sensor telemetry & monitoring dashboards',
      'Remote device control & relay automation engines',
      'Instant notification & automated threshold triggers',
    ],
    cta: 'Diskusikan IoT',
    iconName: 'Cpu',
  },
  {
    id: 'network-infrastructure',
    number: '03',
    name: 'Network & Infrastructure',
    category: 'Connectivity & Hardening',
    summary: 'Structured connectivity for homes, offices, organizations, and connected environments.',
    capabilities: [
      'MikroTik / Cisco router & switch deployment',
      'Structured LAN & Wi-Fi environment architecture',
      'VLAN segmentation & traffic prioritization',
      'Secure WireGuard & IPsec VPN setup',
      'Network hardening & firewall configuration',
    ],
    cta: 'Optimalkan Jaringan',
    iconName: 'Network',
  },
  {
    id: 'digital-design',
    number: '04',
    name: 'Digital Design / UI/UX',
    category: 'Interface & Visual Systems',
    summary: 'Interfaces and visual systems designed to make products clearer, more useful, and recognizable.',
    capabilities: [
      'User experience flow & information architecture',
      'High-fidelity UI components & design systems',
      'Figma interactive prototyping & user testing',
      'Visual brand identity refinement',
      'Design tokenization & clean developer handoff',
    ],
    cta: 'Konsultasi Desain',
    iconName: 'LayoutGrid',
  },
  {
    id: 'technical-mentorship',
    number: '05',
    name: 'Technical Mentorship & Project Assistance',
    category: 'Mentorship & Engineering Support',
    summary: 'Practical guidance for debugging, learning, prototyping, and solving technical project problems.',
    capabilities: [
      'Structured programming & software architecture guidance',
      'IoT hardware prototyping assistance & troubleshooting',
      'Network configuration & router debugging',
      'Database schema, SQL & API design support',
      'Technical documentation & code review sessions',
    ],
    cta: 'Diskusikan Kebutuhan',
    iconName: 'GraduationCap',
  },
];

export const TECH_STACK = [
  'NEXT.JS 14',
  'TYPESCRIPT',
  'GO (FIBER)',
  'POSTGRESQL',
  'DOCKER',
  'FIGMA',
  'ESP32',
  'MIKROTIK',
  'CISCO',
  'TAILWIND CSS',
  'FRAMER MOTION',
  'MQTT',
  'REST API',
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    name: 'Discover',
    summary: 'Understand the problem, constraints, and desired outcome.',
    details: [
      'Initial consultation & requirement capture',
      'Technical feasibility assessment',
      'Project scope & objective alignment',
    ],
  },
  {
    number: '02',
    name: 'Define',
    summary: 'Turn requirements into a practical direction and scope.',
    details: [
      'Architecture & data flow mapping',
      'Milestone breakdown & delivery timeline',
      'Resource & technology stack specification',
    ],
  },
  {
    number: '03',
    name: 'Design & Architect',
    summary: 'Shape the interface, system, or infrastructure before implementation.',
    details: [
      'UI/UX wireframes & design system tokens',
      'Database schema & API contract definition',
      'Hardware / Network topology blueprinting',
    ],
  },
  {
    number: '04',
    name: 'Build',
    summary: 'Implement with clear milestones and visible progress.',
    details: [
      'Modular engineering across frontend, backend, and hardware',
      'Iterative milestone updates & staging previews',
      'Version control & continuous quality verification',
    ],
  },
  {
    number: '05',
    name: 'Test & Handover',
    summary: 'Validate the result, document what matters, and prepare the next step.',
    details: [
      'System validation & performance testing',
      'Deployment to production environment',
      'Comprehensive documentation & handover session',
    ],
  },
];

export const PROOF_DATA = {
  label: 'PROOF',
  title: 'ENGINEERING STANDARDS & VERIFIED RESULTS',
  summary: 'We measure success by real execution, clean code standards, and reliable operational delivery.',
  stats: [
    { label: 'Engineering Disciplines', value: '5 Core Areas' },
    { label: 'TypeScript Strictness', value: '100% Strict' },
    { label: 'Concurrency Engine', value: 'Go Fiber REST' },
    { label: 'Deployment Topology', value: 'Docker Multi-Stage' },
  ],
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Project seperti apa yang dikerjakan oleh NEOTRA?',
    answer: 'NEOTRA mengerjakan proyek di 5 area utama: Web Engineering (website & aplikasi web), IoT & Smart Automation (sistem sensor & telemetri), Network & Infrastructure (jaringan kantor & hardening VPN), Digital Design / UI/UX (design system & interface), serta Technical Mentorship & Project Assistance.',
  },
  {
    id: 'faq-2',
    question: 'Bagaimana alur memulai konsultasi proyek?',
    answer: 'Konsultasi dimulai dengan diskusi kebutuhan awal untuk memahami masalah, cakupan, kendala teknis, dan target hasil. Anda dapat mengirimkan inquiry melalui formulir kontak atau berkonsultasi langsung via WhatsApp.',
  },
  {
    id: 'faq-3',
    question: 'Apakah NEOTRA bisa bekerja dengan sistem atau jaringan yang sudah ada?',
    answer: 'Bisa. Sistem, API, infrastruktur jaringan, atau desain yang sudah ada akan dievaluasi pada tahap awal. Kami dapat melakukan audit, refactoring, integrasi API, maupun pengembangan fitur di atas infrastruktur yang sudah berjalan.',
  },
  {
    id: 'faq-4',
    question: 'Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek?',
    answer: 'Waktu pengerjaan bergantung pada cakupan dan kompleksitas. Prototype atau modul web sederhana dapat diselesaikan dalam 1-2 minggu, sementara sistem enterprise atau infrastruktur terpadu dieksekusi bertahap dengan milestone mingguan.',
  },
  {
    id: 'faq-5',
    question: 'Apa yang dimaksud dengan Technical Mentorship & Project Assistance?',
    answer: 'Layanan asistensi teknis mencakup bimbingan pemrograman terstruktur, penanganan masalah (debugging), pendampingan prototyping hardware IoT, desain skema database, serta review kode secara etis dan profesional.',
  },
];

export const CONTACT_DATA = {
  headline: 'HAVE A PROBLEM WORTH BUILDING AROUND?',
  supporting: "Tell us what you're trying to build, improve, connect, or fix.",
  primaryCta: 'Mulai Konsultasi',
  whatsApp: 'Chat via WhatsApp',
  whatsAppNumber: '6281380870105',
  whatsAppMessage: 'Halo NEOTRA, saya ingin berkonsultasi mengenai proyek teknologi.',
  email: 'contact@neotra.id',
  address: 'Jakarta South · Indonesia',
};

export const FOOTER_DATA = {
  watermark: 'Integrated Digital Engineering Studio',
  statement: 'NEOTRA: Integrated Digital Engineering Studio.',
  copyright: '© 2026 NEOTRA. All rights reserved.',
  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
  ],
};
