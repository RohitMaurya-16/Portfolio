/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Off-white / off-black base (not pure white or #000)
        navy: {
          darkest: '#020c1b',
          dark:    '#0a192f',
          DEFAULT: '#112240',
          light:   '#233554',
          lighter: '#304a74',
        },
        slate: {
          DEFAULT:  '#8892b0',
          light:    '#a8b2d8',
          lightest: '#ccd6f6',
        },
        white: '#e6f1ff',
        green: {
          DEFAULT: '#64ffda',
          tint:    'rgba(100,255,218,0.1)',
        },
      },
      // Keep standard Tailwind colors accessible too
    },
  },
  plugins: [],
}
