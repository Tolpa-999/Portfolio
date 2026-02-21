import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary background: deep navy
        primary: '#0B1120',
        // Secondary surface / cards: dark slate
        surface: '#111827',
        // Primary accent: electric cyan
        accent: '#22D3EE',
        // CTA accent: soft gold
        cta: '#FBBF24',
        // Primary text: light gray
        text: '#E5E7EB',
        // Muted / secondary text: cool gray
        muted: '#9CA3AF',
      },
      fontFamily: {
        // Space Grotesk - Headings
        sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        // Inter - Body
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        // JetBrains Mono - Code/technical
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      letterSpacing: {
        'tight': '-0.02em',
        'tighter': '-0.04em',
      },
      spacing: {
        '128': '512px',
      },
      animation: {
        'slow-grid': 'grid 60s linear infinite',
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        grid: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, 10px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
