/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      itim: ["Itim", "cursive"],
    },
    extend: {
      boxShadow: {
        "c-shadow": "inset 0px 4px 4px rgba(255, 255, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
