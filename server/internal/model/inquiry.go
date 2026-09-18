package model

import "time"

type InquiryRequest struct {
	FullName string `json:"full_name"`
	Contact  string `json:"contact"`
	Email    string `json:"email"`
	Service  string `json:"service"`
	Message  string `json:"message"`
}

type InquiryResponse struct {
	Success   bool      `json:"success"`
	Message   string    `json:"message"`
	TicketID  string    `json:"ticket_id,omitempty"`
	Timestamp time.Time `json:"timestamp"`
	Errors    []string  `json:"errors,omitempty"`
}

type HealthResponse struct {
	Status    string    `json:"status"`
	Brand     string    `json:"brand"`
	Version   string    `json:"version"`
	Timestamp time.Time `json:"timestamp"`
}
