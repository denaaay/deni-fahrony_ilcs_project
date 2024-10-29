/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2e86de'
      }
    },
      fontFamily: {
        poppins: ['Poppins']
      }
  },
  plugins: [],
}

