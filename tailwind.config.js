/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode via class strategy
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          DEFAULT: '#06B6D4', // cyan-500
        },
        accent: {
          DEFAULT: '#94A3B8', // slate-400
        },
        background: {
          DEFAULT: '#F8FAFC', // gray-50
        },
        text: {
          DEFAULT: '#0F172A', // slate-900
        },
        card: {
          DEFAULT: '#FFFFFF', // white
        },
        surface: {
          light: '#FFFFFF',
          dark: '#23272F',
        },
        muted: {
          DEFAULT: '#6B7280', // gray-500
        },
        success: {
          DEFAULT: '#22C55E', // green-500
        },
        error: {
          DEFAULT: '#EF4444', // red-500
        },
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      boxShadow: {
        neumorph: '8px 8px 16px #e0e3e7, -8px -8px 16px #ffffff',
        'frosted-glass': '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
      },
      backdropBlur: {
        glass: '8px',
      },
    },
  },
  plugins: [],
}
