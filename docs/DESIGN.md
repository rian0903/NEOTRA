# DESIGN SYSTEM — NEOTRA V2

## 1. Visual Language & Positioning

NEOTRA is an **Integrated Digital Engineering Studio**.
The visual language must communicate precision, engineering capability, modern aesthetics, and practical utility.

### Principles:
1. **Editorial & Typography-Driven**: Generous whitespace, asymmetric layouts, bold headlines (`Space Grotesk`), clean body text (`Inter` / `Plus Jakarta Sans`), numbered section labels (`01 — WEB ENGINEERING`).
2. **Portfolio-First**: Highlighting real work with large visuals, metadata tags, and technology pills.
3. **Subtle Motion**: Purposeful Framer Motion reveals, hover transformations, scroll animations, responsive to `prefers-reduced-motion`.
4. **No Generic SaaS UI**: Avoid neon futuristic cyberpunk, heavy glassmorphism overlays, uniform cards, or fake rating badges.

---

## 2. Color System

- **Background Void**: `#07090E` (Deep obsidian black)
- **Surface Dark**: `#0B0F19` (Elevated card background)
- **Surface Border**: `#1E293B` (Subtle 1px border line)
- **Primary Brand**: `#021E44` (Deep studio navy blue)
- **Accent Highlight**: `#38BDF8` (Sky blue highlight)
- **Text Primary**: `#F8FAFC` (Pure white text)
- **Text Secondary**: `#94A3B8` (Muted silver text)
- **Text Muted**: `#64748B` (Subtle metadata)

---

## 3. Typography

- **Display / Headings**: `Space Grotesk`, sans-serif (Font weight 600/700, tight tracking)
- **Body / Interface**: `Plus Jakarta Sans` or `Inter`, sans-serif (Font weight 400/500/600)
- **Mono / Metadata**: `JetBrains Mono` or `Fira Code`, monospace

---

## 4. Spacing & Grid System

- Container max-width: `1280px` (`max-w-7xl`)
- Section padding: `py-20 md:py-32`
- Grid columns: 12-column dynamic grid layout (Asymmetric splits: 5/7, 4/8, 8/4)

---

## 5. Animation & Motion Guidelines

- Page Entry: Fade in + Y-axis slide (0.4s ease-out)
- Section Scroll Reveal: Framer Motion `whileInView` opacity + translateY (20px)
- Hover States: Scale 1.02 on project visual, glow border transition
- Marquee: Infinite horizontal translate
- Reduced Motion: Disable translate animations when `prefers-reduced-motion` is active.
