/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        gray: {
          800: '#1f2937',
          900: '#111827',
          950: '#030712'
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb'
        },
        green: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a'
        }
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  },
  plugins: []
} 