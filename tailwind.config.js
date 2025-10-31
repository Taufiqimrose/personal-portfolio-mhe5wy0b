/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'dark-green': '#004838',
          'light-green': '#E2FB6C',
          'deep-green': '#073127',
          'dark-gray': '#333F3C',
          'light-gray': '#EBEDE8',
        }
      },
      fontFamily: {
        'aspekta': ['Aspekta', 'sans-serif'],
      },
    },
  },
  plugins: [],
}