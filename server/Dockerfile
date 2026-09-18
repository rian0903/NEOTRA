# Multi-stage Dockerfile for NEOTRA Go Fiber REST API

# --- Stage 1: Builder ---
FROM golang:1.22-alpine AS builder

WORKDIR /app

# Install ca-certificates and git if needed
RUN apk add --no-cache ca-certificates git

# Download dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy source code
COPY . .

# Build lightweight statically linked binary
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -ldflags="-w -s" -o neotra-api ./cmd/api

# --- Stage 2: Runner ---
FROM alpine:3.19 AS runner

WORKDIR /app

RUN apk add --no-cache ca-certificates tzdata

# Copy binary from builder stage
COPY --from=builder /app/neotra-api .

EXPOSE 8080

ENV PORT=8080
ENV ALLOWED_ORIGINS=*
ENV ENVIRONMENT=production

CMD ["./neotra-api"]
