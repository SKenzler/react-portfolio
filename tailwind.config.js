/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        blob: "url('../src/assets/bgd-blob.png')",
      },
      animation: {
        "scale-blob": "scale-bg 12000ms linear forwards",
      },
      // Define keyframe1
      keyframes: {
        "scale-bg": {
          from: { scale: "0" },
          to: { scale: "10" },
        },
      },
    },
  },
  plugins: [],
};
