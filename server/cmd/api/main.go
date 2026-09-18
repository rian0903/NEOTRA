package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"

	"neotra/server/internal/config"
	"neotra/server/internal/handler"
)

func main() {
	cfg := config.LoadConfig()

	app := fiber.New(fiber.Config{
		AppName:      "NEOTRA Engineering API v2",
		ServerHeader: "NEOTRA",
	})

	// Middlewares
	app.Use(recover.New())
	app.Use(logger.New(logger.Config{
		Format: "[${time}] ${status} - ${latency} ${method} ${path}\n",
	}))

	app.Use(cors.New(cors.Config{
		AllowOrigins: cfg.AllowedOrigins,
		AllowHeaders: "Origin, Content-Type, Accept, Authorization",
		AllowMethods: "GET, POST, OPTIONS",
	}))

	// API v1 Routing
	h := handler.NewHandler()
	v1 := app.Group("/api/v1")

	v1.Get("/health", h.HealthCheck)
	v1.Post("/inquiry", h.CreateInquiry)

	addr := fmt.Sprintf(":%s", cfg.Port)
	log.Printf("NEOTRA API server starting on %s...", addr)
	if err := app.Listen(addr); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
