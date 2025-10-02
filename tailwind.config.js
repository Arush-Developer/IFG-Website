/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#052a4a',      // hero/nav background
          primary: '#0b75ff',   // bright blue accent
          secondary: '#7b3cff', // optional secondary accent
          highlight: '#ffd166', // yellow highlight
          light: '#f6f7fb',     // soft section background
          text: '#0b2036',      // dark text
          white: '#ffffff',      // pure white
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 30px rgba(3, 12, 40, 0.06)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};
