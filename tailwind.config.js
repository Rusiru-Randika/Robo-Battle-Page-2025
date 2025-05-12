/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        transrobotics: ['SF TransRobotics Condensed', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
        bebasneue: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
