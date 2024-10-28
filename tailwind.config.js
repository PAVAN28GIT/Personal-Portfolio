/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'], // Define the key as 'nunito'
        'Montserrat' : ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}