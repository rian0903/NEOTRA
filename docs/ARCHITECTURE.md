# SYSTEM ARCHITECTURE — NEOTRA V2

## 1. Architecture Decision

Stack dikunci agar tidak menimbulkan interpretasi ganda.

### Frontend

- Next.js
- TypeScript
- App Router
- Tailwind CSS
- Framer Motion
- native Fetch / server actions bila relevan

### Backend

- Go
- Fiber
- REST API

### Deployment

Frontend:
- Vercel / Cloudflare Pages

Backend:
- VPS / container

Reverse proxy:
- Nginx atau Caddy

---

## 2. System Boundary

```text
Browser
   |
   v
Next.js Frontend
   |
   | HTTPS
   v
Go Fiber API
   |
   +--> Inquiry Service
   |
   +--> Notification Adapter
            |
            +--> Email
            +--> Telegram / configured channel
```

Direct WhatsApp CTA:

```text
Browser --> WhatsApp
```

Tidak semua interaksi harus masuk backend.

---

## 3. Repository Structure

```text
neotra/
├── docs/
│   ├── PRD.md
│   ├── DESIGN.md
│   ├── CONTENT_MATRIX.md
│   ├── ARCHITECTURE.md
│   └── TASKS.md
│
├── client/
│   ├── public/
│   │   ├── brand/
│   │   ├── work/
│   │   └── services/
│   │
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── layout/
│   │   │   └── sections/
│   │   ├── content/
│   │   ├── data/
│   │   ├── lib/
│   │   ├── styles/
│   │   └── types/
│   │
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── package.json
│
├── server/
│   ├── cmd/
│   │   └── api/
│   ├── internal/
│   │   ├── config/
│   │   ├── handler/
│   │   ├── middleware/
│   │   ├── model/
│   │   ├── service/
│   │   └── notifier/
│   ├── go.mod
│   └── .env.example
│
├── docker-compose.yml
└── README.md
```

---

## 4. Frontend Responsibilities

Frontend bertanggung jawab terhadap:

- presentation;
- responsive layout;
- navigation;
- work showcase;
- service exploration;
- motion;
- FAQ;
- contact form UX;
- WhatsApp deep links;
- SEO metadata.

Tidak menyimpan secret di client.

---

## 5. Component Architecture

Components dibuat berdasarkan behavior.

```text
Navigation
Hero
SelectedWork
WorkItem
Statement
ServiceList
ServiceRow
TechStrip
Process
Proof
FAQ
Contact
Footer
```

Jangan membuat:
- Card01
- Card02
- Card03

jika semuanya memiliki behavior sama.

---

## 6. Content Architecture

Content dipisahkan dari presentation.

Contoh:

```ts
type Service = {
  id: string
  name: string
  category: string
  summary: string
  capabilities: string[]
  cta: string
}
```

Dengan begitu visual dapat diubah tanpa mengubah konten.

---

## 7. Work Model

```ts
type WorkItem = {
  slug: string
  title: string
  category: string
  year?: number
  summary: string
  image?: string
  technologies: string[]
  href?: string
}
```

`image` optional karena project dapat ditambahkan bertahap.

---

## 8. API

Base:

```text
/api/v1
```

### GET /health

```json
{
  "status": "online",
  "brand": "NEOTRA"
}
```

### POST /inquiry

Request:

```json
{
  "full_name": "Budi Santoso",
  "contact": "081234567890",
  "email": "budi@example.com",
  "service": "Web Engineering",
  "message": "..."
}
```

Success:

```json
{
  "success": true,
  "ticket_id": "NEO-..."
}
```

---

## 9. Validation

Backend melakukan:

- required field validation;
- email validation;
- contact normalization;
- length constraints;
- sanitization;
- rate limiting.

Frontend melakukan:
- immediate field feedback;
- accessible error messages;
- loading state;
- success state;
- retry state.

---

## 10. Security

Minimal:

- CORS allowlist;
- rate limit inquiry endpoint;
- request body size limit;
- input sanitization;
- secure headers;
- structured logging;
- no secret in frontend;
- environment variables for credentials.

---

## 11. Motion Architecture

Motion menggunakan Framer Motion hanya pada element yang membutuhkan animation.

Prefer:

- opacity;
- transform;
- clip-path bila perlu.

Hindari layout-heavy animation.

Global reduced motion:

```ts
useReducedMotion()
```

Semua motion memiliki fallback.

---

## 12. Image Strategy

Gunakan:

- AVIF/WebP;
- Next Image;
- responsive sizes;
- lazy loading;
- priority hanya untuk hero asset.

Jangan mengirim image resolusi besar untuk mobile.

---

## 13. Responsive Strategy

Breakpoints:

```text
sm  640
md  768
lg  1024
xl  1280
2xl 1536
```

Mobile bukan desktop yang diperkecil.

Layout harus dapat berubah:
- grid;
- typography;
- navigation;
- spacing;
- project composition;
- motion intensity.

---

## 14. Deployment

### Frontend

```text
Vercel / Cloudflare Pages
```

### Backend

```text
Linux VPS
Docker
Nginx / Caddy
```

### Environment

Frontend:
- `NEXT_PUBLIC_API_URL`

Backend:
- `PORT`
- `ALLOWED_ORIGINS`
- notification credentials

---

## 15. Engineering Rules

- TypeScript strict mode.
- No unnecessary dependency.
- No duplicated data source.
- No dead component.
- No hardcoded secret.
- No magic number tanpa alasan.
- No fake content shipped as real proof.
- Build must pass before completion.
