/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Inter' : ['Inter', 'sans-serifś],
      '' : [],
      '' : [],
    },
    extend: {
      colors: {
        'lightGray' : '#555759',
        'moreLightGray' : '#7D7F80',
        'darkGray' : '#2D3032',
        'diffWhite' : '#D2D3D3',
      },
    },
  },
  plugins: [],
}
