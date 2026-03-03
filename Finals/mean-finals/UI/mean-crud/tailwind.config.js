/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'body': ['"Inter"', 'sans-serif'],
      },
      colors: {
        'museum-grey': '#e2e1df', // Warm grayish style
        'library-green': '#2c5e4f',
        'library-gold': '#b8926a',
      }
    },
  },
  plugins: [],
}
