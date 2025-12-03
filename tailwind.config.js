/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#c8102e',
          deepRed: '#8c1d1d',
          snow: '#fff5f5'
        }
      },
      boxShadow: {
        card: '0 18px 35px rgba(200, 16, 46, 0.15)'
      }
    },
  },
  plugins: [],
};
