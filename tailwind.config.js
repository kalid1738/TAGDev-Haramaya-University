/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        'primary-dark': '#1e3a8a',
        'primary-light': '#3b82f6',
        secondary: '#059669',
        'secondary-dark': '#047857',
        'secondary-light': '#10b981',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}