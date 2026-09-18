package handler

import (
	"fmt"
	"math/rand"
	"net/mail"
	"strings"
	"time"

	"github.com/gofiber/fiber/v2"
	"neotra/server/internal/model"
)

type Handler struct{}

func NewHandler() *Handler {
	return &Handler{}
}

func (h *Handler) HealthCheck(c *fiber.Ctx) error {
	return c.Status(fiber.StatusOK).JSON(model.HealthResponse{
		Status:    "online",
		Brand:     "NEOTRA",
		Version:   "v2.0.0",
		Timestamp: time.Now(),
	})
}

func (h *Handler) CreateInquiry(c *fiber.Ctx) error {
	var req model.InquiryRequest

	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(model.InquiryResponse{
			Success:   false,
			Message:   "Invalid JSON payload",
			Timestamp: time.Now(),
			Errors:    []string{"Failed to parse request body"},
		})
	}

	// Trim whitespace
	req.FullName = strings.TrimSpace(req.FullName)
	req.Contact = strings.TrimSpace(req.Contact)
	req.Email = strings.TrimSpace(req.Email)
	req.Service = strings.TrimSpace(req.Service)
	req.Message = strings.TrimSpace(req.Message)

	// Validation
	var validationErrors []string

	if req.FullName == "" {
		validationErrors = append(validationErrors, "Full name is required")
	}

	if req.Contact == "" && req.Email == "" {
		validationErrors = append(validationErrors, "Either contact number or email is required")
	}

	if req.Email != "" {
		_, err := mail.ParseAddress(req.Email)
		if err != nil {
			validationErrors = append(validationErrors, "Invalid email address format")
		}
	}

	if req.Message == "" {
		validationErrors = append(validationErrors, "Project description or message is required")
	}

	if len(validationErrors) > 0 {
		return c.Status(fiber.StatusUnprocessableEntity).JSON(model.InquiryResponse{
			Success:   false,
			Message:   "Validation failed",
			Timestamp: time.Now(),
			Errors:    validationErrors,
		})
	}

	// Generate Ticket ID: NEO-YYYYMMDD-XXXX
	ticketID := generateTicketID()

	// In a production system, this saves to DB or notifies Telegram/Email.
	fmt.Printf("[INQUIRY RECEIVED] Ticket: %s | Name: %s | Contact: %s | Email: %s | Service: %s\n",
		ticketID, req.FullName, req.Contact, req.Email, req.Service)

	return c.Status(fiber.StatusCreated).JSON(model.InquiryResponse{
		Success:   true,
		Message:   "Inquiry received successfully. NEOTRA engineering team will respond shortly.",
		TicketID:  ticketID,
		Timestamp: time.Now(),
	})
}

func generateTicketID() string {
	const charset = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
	rand.Seed(time.Now().UnixNano())
	b := make([]byte, 6)
	for i := range b {
		b[i] = charset[rand.Intn(len(charset))]
	}
	return fmt.Sprintf("NEO-%s-%s", time.Now().Format("060102"), string(b))
}
