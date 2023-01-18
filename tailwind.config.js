/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,css}",
    "./components/**/*.{js,ts,jsx,tsx,css}",
  ],
  important: '#__next',
  theme: {
    extend: {
      colors: {
        primary: '#0082a0',
        secondary: '#14323D',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
