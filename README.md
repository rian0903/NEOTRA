# NEOTRA V2 — Integrated Digital Engineering Studio

Digital flagship website and REST API backend for **NEOTRA V2**.

---

## Technical Stack

- **Frontend (`client/`)**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide Icons.
- **Backend (`server/`)**: Go 1.22+, Fiber v2 REST API framework.
- **Containerization**: Docker, Docker Compose (Multi-stage builds).

---

## Docker Quick Start

Run both the Go API backend and Next.js frontend with a single command:

```bash
docker compose up --build -d
```

### Endpoints:
- **Frontend Client**: `http://localhost:5173`
- **Go REST API**: `http://localhost:8080/api/v1/health`
- **Inquiry Endpoint**: `POST http://localhost:8080/api/v1/inquiry`

To stop containers:

```bash
docker compose down
```

---

## Local Development Setup

### 1. Run Backend Server (Go)

```bash
cd server
go run ./cmd/api
```
Backend will start on `http://localhost:8080`.

### 2. Run Frontend Client (Next.js)

```bash
cd client
npm install
npm run dev
```
Frontend will start on `http://localhost:5173`.

---

## Documentation Links

- [`docs/PRD.md`](docs/PRD.md)
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- [`docs/CONTENT_MATRIX.md`](docs/CONTENT_MATRIX.md)
- [`docs/DESIGN.md`](docs/DESIGN.md)
- [`docs/TASKS.md`](docs/TASKS.md)
