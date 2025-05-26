//tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
   theme: {
    extend: {
      colors: {
        primary: '#2B6D6D',
        tealMedium: '#4C9494',
        tealLight: '#8BC5C5',
        textGray: '#999999',
      },
    },
  },
  plugins: [],
}
