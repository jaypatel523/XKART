/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'b11': '1200px',
        'b5': '500px'
      },
      colors: {
        'whatsapp': "#164e63"
      }
    },
  },
  plugins: [],
}