# DEVELOPMENT TASKS — NEOTRA V2

## Phase 1 — Analysis & Design
- [x] Read PRD-v2.md, ARCHITECTURE-v2.md, CONTENT_MATRIX-v2.md
- [x] Inspect brand assets logo1.png and logo2.png
- [x] Establish Design System tokens & layout specs
- [x] Create Implementation Plan

## Phase 2 — Server Development (Go Fiber REST API)
- [x] Go module initialization (`go.mod`)
- [x] Server entry point (`cmd/api/main.go`)
- [x] Environment configuration (`internal/config/config.go`)
- [x] Models & Validation (`internal/model/inquiry.go`)
- [x] Route Handlers: `GET /api/v1/health` and `POST /api/v1/inquiry` (`internal/handler/handler.go`)
- [x] CORS, Rate Limiting, and Ticket ID Generation (`NEO-XXXXXX`)

## Phase 3 — Client Development (Next.js App Router)
- [x] Next.js project setup with TypeScript, Tailwind CSS, Framer Motion, Lucide React
- [x] Global design system, colors, fonts, noise textures
- [x] Content matrix integration (`data/content.ts`)
- [x] Navbar with responsive mobile menu & brand logo
- [x] Hero Section with overline, headline, CTAs, live metadata
- [x] Selected Work Section (Portfolio-first editorial grid)
- [x] Positioning Statement Section
- [x] Services Section (Interactive editorial rows 01-05)
- [x] Capability & Technology Marquee Section
- [x] Process Pipeline Section (Discover -> Define -> Design -> Build -> Test)
- [x] Engineering Proof & Metrics Section
- [x] Accessible FAQ Accordion Section
- [x] Contact Inquiry Form (Connected to Go Fiber API + WhatsApp fallback)
- [x] Footer Section

## Phase 4 — Testing & Verification
- [x] Go server build and API test execution
- [x] Next.js frontend build, lint, and typecheck
- [x] Responsive layout and visual QA

## Phase 5 — Docker Containerization
- [x] Multi-stage Go Fiber `server/Dockerfile` & `.dockerignore`
- [x] Multi-stage Next.js `client/Dockerfile` & `.dockerignore`
- [x] Orchestrated root `docker-compose.yml` with healthchecks
- [x] Production deployment instructions in `README.md`
