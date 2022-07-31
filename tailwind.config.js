/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Inter' : ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'lightGray' : '#555759',
        'moreLightGray' : '#7D7F80',
        'darkGray' : '#2D3032',
        'diffWhite' : '#D2D3D3',
        'diffGray' : '#2d2e2e',
      },
    },
  },
  plugins: [],
}
