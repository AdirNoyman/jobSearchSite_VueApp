/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  // content = tell tailwind what files are relevant for it
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      // Adding my own fonts to Tailwind
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      // Adding my own colors to Tailwind
      colors: {
        'brand-gray-1': '#dadce0',
        'brand-blue-1': '#1967d2',
        'brand-green-1': '#137333'
      }
    }
  },
  plugins: []
}
