/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './**/*.html' 
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3774F9',
          600: '#353945',
          700: '#000000', 
        },
        neutral: {
          300: '#ffffff',
          400: '#A0A0A0',
        },
        'custom-hover-blue': 'rgb(26, 76, 183)',
        'custom-hover-gray': '#2b2b2b',   
      },
      fontFamily: {
        primary: ['Roboto', 'sans-serif'], 
        accent: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
