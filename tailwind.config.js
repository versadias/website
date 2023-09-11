/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#F8F6F7',
        'gray': '#C3BBBF',
        'green': '#3FEC8C',
        'grayer': '#1E1B1E',
        'dark': '#282528'
      }
    },
  },
  plugins: [],
}