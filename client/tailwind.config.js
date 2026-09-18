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
          bg: '#FFFFFF',
          surface: '#F5F7FA',
          textPrimary: '#0A0F1A',
          textSecondary: '#64748B',
          border: '#E2E8F0',
          blue: '#006FFF',
          darkBlue: '#0F2D56',
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
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'blue-glow': '0 4px 20px -2px rgba(0, 111, 255, 0.35)',
        'card-light': '0 4px 20px -2px rgba(10, 15, 26, 0.05)',
        'card-hover': '0 12px 30px -4px rgba(10, 15, 26, 0.08)',
      },
    },
  },
  plugins: [],
};
