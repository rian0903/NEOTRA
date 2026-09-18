package config

import (
	"os"
)

type Config struct {
	Port           string
	AllowedOrigins string
	Environment    string
}

func LoadConfig() *Config {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	origins := os.Getenv("ALLOWED_ORIGINS")
	if origins == "" {
		origins = "*"
	}

	env := os.Getenv("ENVIRONMENT")
	if env == "" {
		env = "development"
	}

	return &Config{
		Port:           port,
		AllowedOrigins: origins,
		Environment:    env,
	}
}
