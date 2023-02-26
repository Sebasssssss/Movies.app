/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        search: '0 0 0 4px #EB454F50'
      },
      colors: {
        primary: '#EB454F'
      },
      fontFamily: {
        outfit: ["'Outfit'", 'sans-serif']
      }
    }
  },
  plugins: []
}
