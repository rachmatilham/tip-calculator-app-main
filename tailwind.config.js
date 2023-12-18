/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        strongCyan: "hsl(var(--strong-cyan))", //reset-bg
        veryDarkCyan: "hsl(var(--very-dark-cyan))", //button-bg
        darkGrayishCyan: "hsl(var(--dark-grayish-cyan))", //bill-color
        grayishCyan: "hsl(var(--grayish-cyan))", //person-color
        lightGrayishCyan: "hsl(var(--light-grayish-cyan))", //main-bg
        veryLightGrayishCyan: "hsl(var(--very-light-grayish-cyan))", //custom-btn-bg
        white: "hsl(var(--white))",
      },
      fontFamily: {
        spaceMono: "Space Mono, monospace",
      },
    },
  },
  plugins: [],
};
