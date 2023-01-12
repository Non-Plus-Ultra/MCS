/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto'],
      },
    },
  },
  plugins: [],
}
