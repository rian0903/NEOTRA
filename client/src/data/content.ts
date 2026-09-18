import { Service, WorkItem, ProcessStep, FAQItem } from '../types';

export const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

export const HERO_DATA = {
  overline: 'DIGITAL ENGINEERING STUDIO',
  headline: 'We build digital systems that make complex things feel simple.',
  supporting: 'Web, automation, infrastructure, and digital product work — designed and engineered as one system.',
  primaryCta: 'Mulai Konsultasi',
  secondaryCta: 'Lihat Pekerjaan',
  metadata: ['WEB', 'IOT', 'NETWORK', 'DESIGN'],
};

export const WORK_ITEMS: WorkItem[] = [
  {
    slug: 'smart-iot-telemetry-system',
    number: '01',
    title: 'Smart Environmental Telemetry & Control Platform',
    category: 'IOT & SMART AUTOMATION',
    year: 2026,
    summary: 'Real-time telemetry and remote automation engine handling physical sensor streams via MQTT and WebSockets.',
    fullDescription: 'Designed and engineered an end-to-end connected IoT ecosystem for real-time sensor monitoring, automated threshold alerting, and cloud control. Utilized ESP32 microcontrollers communicating over secure MQTT protocol to a Go Fiber microservice with a responsive Next.js monitoring dashboard.',
    client: 'Industrial Client',
    role: 'IoT Hardware & Web Engineering',
    technologies: ['ESP32', 'MQTT', 'Go', 'Fiber', 'Next.js', 'PostgreSQL'],
    metrics: [
      { label: 'Sensor Polling Frequency', value: '< 250ms' },
      { label: 'System Uptime Standard', value: '99.9%' },
    ],
  },
  {
    slug: 'high-performance-enterprise-portal',
    number: '02',
    title: 'Enterprise Operational Web System',
    category: 'WEB ENGINEERING',
    year: 2026,
    summary: 'Modular web application engineered for complex business workflow automation and rapid data visualization.',
    fullDescription: 'Architected a modern server-rendered Next.js web application coupled with a high-throughput Go REST API backend. Replaced legacy manual spreadsheets with structured digital workflows, role-based security access, and real-time report generation.',
    client: 'Logistics Enterprise',
    role: 'Full-Stack Web Architecture',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Go', 'Fiber', 'Docker'],
    metrics: [
      { label: 'Lighthouse Performance Score', value: '98/100' },
      { label: 'Page Load Speed', value: '0.4s' },
    ],
  },
  {
    slug: 'enterprise-network-infrastructure',
    number: '03',
    title: 'Structured Office Network & Hardening Infrastructure',
    category: 'NETWORK & INFRASTRUCTURE',
    year: 2025,
    summary: 'Enterprise LAN/Wi-Fi deployment, VLAN segmentation, and VPN security hardening for multi-floor facility.',
    fullDescription: 'Engineered physical and logical network architecture featuring MikroTik router routing, Cisco managed switches, VLAN isolation for office staff vs. guest devices, WireGuard VPN tunnels, and automated bandwidth prioritization.',
    client: 'Corporate Headquarters',
    role: 'Network Infrastructure Architecture',
    technologies: ['MikroTik', 'Cisco', 'VLAN', 'WireGuard', 'Structured Cabling'],
    metrics: [
      { label: 'Network Throughput', value: '10 Gbps Backbone' },
      { label: 'Security Hardening Score', value: 'Grade A' },
    ],
  },
  {
    slug: 'digital-product-ui-ux-system',
    number: '04',
    title: 'Design System & Digital Product Interface',
    category: 'DIGITAL DESIGN / UI/UX',
    year: 2025,
    summary: 'Comprehensive design system, UI kit, and interactive user experience workflow for digital product suite.',
    fullDescription: 'Crafted a scalable, typography-driven Figma design system with full component tokenization, accessible color contrast ratios, dark mode variants, and smooth micro-animations for Web and Mobile platforms.',
    client: 'SaaS Startup',
    role: 'Lead UI/UX & System Design',
    technologies: ['Figma', 'UI Systems', 'UX Flow', 'Design Tokens', 'Prototyping'],
    metrics: [
      { label: 'Design Tokens Created', value: '240+' },
      { label: 'User Accessibility Rating', value: 'WCAG AAA' },
    ],
  },
];

export const POSITIONING_DATA = {
  label: 'WHAT WE DO',
  statement: 'TECHNOLOGY SHOULD REMOVE COMPLEXITY, NOT ADD TO IT.',
  supporting: 'NEOTRA brings software, connected systems, infrastructure, and digital design into one practical workflow.',
};

export const SERVICES: Service[] = [
  {
    id: 'web-engineering',
    number: '01',
    name: 'Modern Web & Application Development',
    category: 'Web Engineering',
    summary: 'Websites and applications engineered around real product and business needs.',
    capabilities: [
      'Next.js / modern JavaScript',
      'API integration & REST architecture',
      'Responsive product interfaces',
      'Performance and SEO optimization',
      'Automated deployment & hosting',
    ],
    cta: 'Konsultasi Web',
    iconName: 'Code',
  },
  {
    id: 'iot-automation',
    number: '02',
    name: 'IoT & Smart Automation',
    category: 'IoT & Automation',
    summary: 'Connected systems that turn physical signals into useful digital information and action.',
    capabilities: [
      'ESP32 / Arduino / Raspberry Pi development',
      'MQTT / REST / WebSocket communication',
      'Real-time sensor telemetry & monitoring',
      'Remote device control & relay automation',
      'Instant notification & alert triggers',
    ],
    cta: 'Diskusikan IoT',
    iconName: 'Cpu',
  },
  {
    id: 'network-infrastructure',
    number: '03',
    name: 'Network & Infrastructure',
    category: 'Network & Infrastructure',
    summary: 'Structured connectivity for homes, offices, organizations, and connected environments.',
    capabilities: [
      'MikroTik / Cisco router & switch deployment',
      'Structured LAN & Wi-Fi environment setup',
      'VLAN segmentation & traffic management',
      'Secure WireGuard & IPsec VPN setup',
      'Network hardening & firewall configuration',
    ],
    cta: 'Optimalkan Jaringan',
    iconName: 'Network',
  },
  {
    id: 'digital-design',
    number: '04',
    name: 'UI/UX & Visual Design',
    category: 'Digital Design',
    summary: 'Interfaces and visual systems designed to make products clearer, more useful, and more recognizable.',
    capabilities: [
      'User experience flow & information architecture',
      'High-fidelity UI components & design systems',
      'Figma interactive prototyping',
      'Visual brand identity refinement',
      'Design tokenization & developer handoff',
    ],
    cta: 'Konsultasi Desain',
    iconName: 'LayoutGrid',
  },
  {
    id: 'technical-mentorship',
    number: '05',
    name: 'Technical Mentorship & Project Assistance',
    category: 'Technical Mentorship',
    summary: 'Practical guidance for debugging, learning, prototyping, and solving technical project problems.',
    capabilities: [
      'Structured programming & architecture guidance',
      'IoT hardware prototyping assistance',
      'Network configuration troubleshooting',
      'Database schema & API design support',
      'Technical documentation & code review',
    ],
    cta: 'Diskusikan Kebutuhan',
    iconName: 'GraduationCap',
  },
];

export const TECH_STACK = [
  'NEXT.JS',
  'TYPESCRIPT',
  'GO',
  'FIBER',
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
      'Clean modular engineering (Frontend/Backend/Hardware)',
      'Iterative milestone updates & staging previews',
      'Version control & continuous quality assurance',
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
  summary: 'We measure success by real execution, clean code standards, and reliable operational uptime.',
  stats: [
    { label: 'Engineering Disciplines', value: '5 Core Areas' },
    { label: 'Backend API Response Time', value: '< 20ms' },
    { label: 'Production Uptime Goal', value: '99.9%' },
    { label: 'TypeScript Strict Coverage', value: '100%' },
  ],
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What kind of projects does NEOTRA handle?',
    answer: 'NEOTRA works across web systems, connected devices, networking, digital design, and technical project assistance. We build custom web apps, IoT sensor platforms, office network infrastructure, and UI/UX design systems.',
  },
  {
    id: 'faq-2',
    question: 'How does a project start?',
    answer: 'Start with a short consultation so we can understand the problem, scope, constraints, and expected outcome. You can submit an inquiry via our contact form or chat directly with our engineering team on WhatsApp.',
  },
  {
    id: 'faq-3',
    question: 'Can you work with an existing system or design?',
    answer: 'Yes. Existing systems, APIs, designs, infrastructure, and technical constraints can be part of the discovery process. We can audit, refactor, integrate, or build on top of your current setup.',
  },
  {
    id: 'faq-4',
    question: 'How long does a project take?',
    answer: 'Timeline depends on the scope and complexity. Small prototypes or web applications may take 1-2 weeks, while full enterprise systems or complex IoT deployments are executed over clear multi-week milestones.',
  },
  {
    id: 'faq-5',
    question: 'Can technical assistance include learning and debugging?',
    answer: 'Yes. Technical mentorship and project assistance cover hands-on debugging, architecture guidance, hardware prototyping, database optimization, code reviews, and structured learning assistance.',
  },
];

export const CONTACT_DATA = {
  headline: 'HAVE A PROBLEM WORTH BUILDING AROUND?',
  supporting: 'Tell us what you\'re trying to build, improve, connect, or fix.',
  primaryCta: 'Mulai Konsultasi',
  whatsApp: 'Chat via WhatsApp',
  whatsAppNumber: '6281234567890',
  whatsAppMessage: 'Halo NEOTRA, saya ingin berkonsultasi mengenai proyek teknologi.',
  email: 'contact@neotra.id',
};

export const FOOTER_DATA = {
  statement: 'Digital systems. Interfaces. Technology.',
  copyright: '© 2026 NEOTRA. All rights reserved.',
  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
  ],
};
