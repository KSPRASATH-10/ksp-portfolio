/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0F0F1A',
        bg2: '#121226',
        accent: '#6C63FF',
        purple: '#8B5CF6',
        cyan: '#00D4FF',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backdropBlur: { glass: '14px' },
      animation: {
        'fade-up': 'fadeUp 0.7s ease both',
        'blob': 'blob1 14s ease-in-out infinite',
        'pulse-glow': 'pulse 2s infinite',
      },
      keyframes: {
        fadeUp: { from:{ opacity:0,transform:'translateY(40px)' }, to:{ opacity:1,transform:'translateY(0)' } },
        blob1: { '0%,100%':{ borderRadius:'60% 40% 70% 30% / 50% 60% 40% 50%' },'50%':{ borderRadius:'40% 60% 30% 70% / 60% 40% 60% 40%' } },
        pulse: { '0%,100%':{ opacity:0.6,transform:'scale(1)' },'50%':{ opacity:1,transform:'scale(1.05)' } },
      },
    },
  },
  plugins: [],
}
