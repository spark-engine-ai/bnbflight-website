import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FCFBF9',
        surface: '#FFFFFF',
        haze: '#F5F3F0',
        ink: {
          DEFAULT: '#13151B',
          soft: '#4A4F5C',
          faint: '#8A8F9C'
        },
        line: '#E8E5E0',
        coral: {
          DEFAULT: '#F84F5C',
          dark: '#DA3846',
          light: '#FFE5E6'
        },
        azure: {
          DEFAULT: '#2E6BEE',
          dark: '#1E4FC2',
          light: '#E7EEFF'
        },
        gold: {
          DEFAULT: '#E9A63C',
          light: '#FCF1DD'
        },
        moss: {
          DEFAULT: '#2E9E6E',
          light: '#E4F6ED'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace']
      },
      maxWidth: {
        content: '1180px'
      },
      boxShadow: {
        soft: '0 1px 2px rgba(19,21,27,0.04), 0 8px 24px -12px rgba(19,21,27,0.10)',
        lift: '0 24px 60px -20px rgba(19,21,27,0.28)',
        glow: '0 0 0 1px rgba(46,107,238,0.12), 0 20px 60px -18px rgba(46,107,238,0.35)'
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")"
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        marquee: 'marquee 32s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite'
      }
    }
  },
  plugins: []
}

export default config
