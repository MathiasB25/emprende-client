/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'main-color': 'rgb(101,163,13)',
        'main-colordark': 'rgb(86, 137, 12)',
        'main-text': 'rgb(99, 115, 129)', 
      }
    },
  },
  plugins: [],
}
