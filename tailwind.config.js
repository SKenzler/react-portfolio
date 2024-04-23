/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logoFont: ['"The Girl Next Door"', "cursive"],
      },
    },
  },
  plugins: [],
};
