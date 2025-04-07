/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#03462e',
          dark: '#b1740b',
        },
        background: {
          light: '#FFFFFF',
          dark: '#000000',
        },
        text: {
          light: '#37352F',
          dark: '#F9FAFB',
        }
      },
    },
  },
  plugins: [],
};