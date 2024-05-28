// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        custom: ["40px", { lineHeight: "48px" }],
      },
      colors: {
        darkblue: "#00102F",
      },
    },
  },
  plugins: [],
};
