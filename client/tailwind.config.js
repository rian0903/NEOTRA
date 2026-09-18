/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        agency: {
          electric: '#006FFF',
          navy: '#0F2D56',
          dark: '#0A0F1A',
          surface: '#111927',
          hover: '#1A2538',
          border: '#1E2C44',
          light: '#F5F7FA',
          white: '#FFFFFF',
          textPrimary: '#F8FAFC',
          textSecondary: '#94A3B8',
          textMuted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter Display', 'Space Grotesk', 'Switzer', 'sans-serif'],
        mono: ['Fragment Mono', 'JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        container: '1080px',
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.95)' },
        },
      },
      boxShadow: {
        'electric-glow': '0 0 25px -5px rgba(0, 111, 255, 0.45)',
        'electric-glow-lg': '0 0 40px 0px rgba(0, 111, 255, 0.6)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
