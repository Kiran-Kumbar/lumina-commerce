import type { Config } from "tailwindcss"

const config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F6F2EC',
        surface: '#FFFCF8',
        'text-primary': '#2D2926',
        'text-secondary': '#6B645D',
        'text-muted': '#9E958C',
        'rose-gold': '#B76E79',
        'rose-gold-hover': '#A15D68',
        'champagne': '#C9A47E',
        border: '#E5DDD3',
        'border-muted': '#EDE7DF',
        dark: '#2D2926',
        whatsapp: '#25D366'
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif']
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '0px',
        lg: '0px',
        xl: '2px'
      },
      boxShadow: {
        card: '0 1px 2px rgba(45,41,38,0.06)',
        'card-hover': '0 1px 4px rgba(45,41,38,0.08)',
        none: 'none'
      }
    },
  },
  plugins: [],
} satisfies Config

export default config
