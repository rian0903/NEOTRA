# Design System & Implementation Specification: NEOTRA
> **Studio:** NEOTRA (Integrated Digital Engineering Studio)  
> **Visual Direction:** Architectural, Precision Engineering & High-Contrast Digital Studio  
> **Dial:** ENERGY 2 / RHYTHM 2 / MOTION 1  
> **Standard:** WCAG 2.1 AA Compliant & Anti-Slop Clean  

---

## 1. Design Philosophy & Visual Character

NEOTRA is an **Integrated Digital Engineering Studio**.
The visual language communicates precision, engineering capability, modern aesthetics, and practical utility.

### Core Principles:
1. **High-Contrast Clarity & Architectural Frame:** Pure white canvas with `#0A0F1A` obsidian text, balanced with `#006FFF` electric blue accents and `#0F2D56` deep studio navy. Precision vertical and horizontal guide frames (`1px solid #E2E8F0`) keep the container structured (`max-w-[1080px]`).
2. **Typography-Driven Hierarchy:** Bold sans-serif display headings (`Space Grotesk` / `Inter Display`) paired with crisp interface text (`Inter` / `Plus Jakarta Sans`) and monospaced technical metadata (`JetBrains Mono` / `Fragment Mono`) for project numbers, dates, and technology tags.
3. **Restrained Micro-Interactions:** Subtle elevation on card hover, fluid accordion transitions, and keyboard-accessible modal overlays. No excessive float, no full-page blur stacking, and no generic template animations.
4. **Resilience & Accessibility:** Full WCAG AA contrast compliance across all surfaces, complete keyboard operability (Tab, Shift+Tab, Enter, Space, Escape), and touch targets of at least 44x44px.

---

## 2. Color Palette & Distribution

### Color Token Table

| Token Name | HEX | Role & Usage | Contrast vs Background |
| :--- | :--- | :--- | :--- |
| **Background** | `#FFFFFF` | Primary canvas for the entire application | Base (21:1 vs #0A0F1A) |
| **Surface** | `#F5F7FA` | Elevated cards, input fields, accordion rows | Neutral surface |
| **Primary Text** | `#0A0F1A` | Headings, primary titles, body text | 18.2:1 vs #FFFFFF (Pass AA/AAA) |
| **Secondary Text (White bg)** | `#475569` | Body descriptions on white canvas | 7.57:1 vs #FFFFFF (Pass AA/AAA) |
| **Secondary Text (Surface bg)** | `#475569` | Metadata and subtitles on #F5F7FA | 7.06:1 vs #F5F7FA (Pass AA/AAA) |
| **Border** | `#E2E8F0` | Precision divider lines, frame borders | Structural boundary |
| **Electric Blue** | `#006FFF` | Primary CTA, active focus, visual accent | 5.3:1 vs #FFFFFF (Pass AA) |
| **Deep Studio Navy** | `#0F2D56` | Footer canvas, high-emphasis anchors | Dark foundation |
| **Footer Text** | `#CBD5E1` | Footer links and copyright on #0F2D56 | 9.24:1 vs #0F2D56 (Pass AA/AAA) |

### Color Balance Formula

```
WHITE (#FFFFFF)          65%  Primary Canvas
LIGHT SURFACE (#F5F7FA)  15%  Card & Component Backgrounds
DARK TEXT (#0A0F1A)      10%  Headings & Core Content
ELECTRIC BLUE (#006FFF)   5%  Purposeful Action & Focus Accents
SECONDARY SLATE (#475569) 3%  Metadata & Supporting Copy
BORDER (#E2E8F0)          2%  Grid Dividers
```

---

## 3. Typography System

### Font Stack
- **Headings & Display:** `Space Grotesk`, `Inter Display`, sans-serif (Weights: 600, 700, 800)
- **Body & Interface:** `Inter`, `Plus Jakarta Sans`, sans-serif (Weights: 400, 500, 600)
- **Metadata & Code:** `Fragment Mono`, `JetBrains Mono`, monospace (Weight: 400, 500)

### Type Scale

| Element | Font Family | Size (Mobile -> Desktop) | Weight | Tracking | Line Height |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | Space Grotesk | `2.25rem (36px)` -> `4.5rem (72px)` | 800 | `-0.03em` | `1.08` |
| **Section H2** | Space Grotesk | `1.75rem (28px)` -> `2.75rem (44px)` | 700 | `-0.025em` | `1.15` |
| **Card H3** | Space Grotesk | `1.25rem (20px)` -> `1.5rem (24px)` | 600 | `-0.01em` | `1.25` |
| **Body Large** | Inter | `1.125rem (18px)` | 400/500 | `normal` | `1.6` |
| **Body Base** | Inter | `1.0rem (16px)` | 400 | `normal` | `1.5` |
| **Body Small** | Inter | `0.875rem (14px)` | 400 | `+0.01em` | `1.5` |
| **Mono Labels** | Fragment Mono | `0.75rem (12px)` -> `0.8125rem (13px)` | 500 | `+0.05em` | `1.4` |

---

## 4. Layout Grid & Structure

- **Container Max Width:** `1080px` (`max-w-[1080px]`) centered with precision vertical border lines (`border-x border-[#E2E8F0]`).
- **Horizontal Padding:** `px-4` (mobile: 16px), `px-6` (tablet: 24px), `px-8` (desktop: 32px).
- **Vertical Spacing:** `py-20` (80px) to `py-28` (112px) between major sections.
- **Responsive Stacking:** Desktop multi-column layouts gracefully collapse to 1-column on mobile viewports with no horizontal scroll leak.

---

## 5. Core Sections & Component Specifications

### 5.1. Floating Navbar
- **Position:** `fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50`
- **Container:** Two detached pill modules: Brand mark container on the left, navigation and action controls on the right.
- **Material:** `bg-white/95 backdrop-blur-md border border-[#E2E8F0] rounded-full shadow-sm`
- **Navigation Links:** Verified destinations (`#work`, `#services`, `#process`, `#proof`, `#faq`, `#contact`). No dead links.
- **Mobile Menu:** Full keyboard and touch accessible drawer with Escape key listener and minimum 44x44px button tap targets.

### 5.2. Hero Section
- **Headline:** Bold, uninflated statement: *"We build digital systems that make complex things feel simple."*
- **Action Buttons:**
  - Primary: `Mulai Konsultasi` (Electric Blue, opens interactive consultation modal).
  - Secondary: `Lihat Pekerjaan` (Clean neutral button, smooth scrolls to `#work`).

### 5.3. Selected Work (Portfolio)
- **Grid:** Responsive 2-column layout (`grid-cols-1 md:grid-cols-2 gap-8`).
- **Cards:** Keyboard accessible cards (`role="button" tabIndex={0}`) with project number, title, categorized discipline, and verified technology stack.
- **Modal:** Interactive project detail modal with Escape key support, backdrop click dismiss, and role="dialog".

### 5.4. 5 Core Disciplines (Services)
- **Format:** Editorial interactive accordion rows with clear number index (`01` through `05`), title, discipline summary, and checklist capabilities.
- **Disciplines:**
  1. Web Engineering (Full-stack architecture & Go REST API)
  2. IoT & Smart Automation (Connected microcontrollers & sensor telemetry)
  3. Network & Infrastructure (Structured enterprise LAN, VLAN & VPN hardening)
  4. Digital Design / UI/UX (Design systems & component tokenization)
  5. Technical Mentorship & Engineering Assistance (Code review, architecture guidance)

### 5.5. Process Workflow
- **Format:** 5 sequential stages: Discover, Define, Design & Architect, Build, Test & Handover.
- **Content:** Practical engineering milestones without marketing fluff.

### 5.6. Verified Engineering Standards (Proof)
- **Format:** High-density 4-metric grid highlighting real engineering standards:
  - 5 Core Engineering Disciplines
  - 100% Strict TypeScript Checking
  - Sub-Second Latency Architecture
  - Containerized Docker Environments

### 5.7. Practical FAQ
- **Format:** Single-expansion accessible accordion addressing genuine client questions regarding project timelines, existing system integration, technical mentorship, and intellectual property handover.

### 5.8. Contact & Discovery Form
- **Interaction:** Dual channel (interactive inquiry form + direct WhatsApp contact).
- **Resilience:** Full form validation, loading states, error handling, and optimistic recovery.

### 5.9. Footer
- **Canvas:** Deep Studio Navy (`#0F2D56`) with high-contrast text (`#CBD5E1` and white).
- **Legal Dialog:** Functional modal for Terms of Service and Privacy Policy to avoid dead links.
