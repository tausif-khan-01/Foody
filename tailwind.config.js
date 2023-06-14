/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
        MyFont: ['"My Font"', "serif"], // Ensure fonts with spaces have " " surrounding it.
      },
      animation: {
        move: "move 3s infinite linear",
        rotate: "rotate 25s infinite linear",
      },
      keyframes: {
        move: {
          "0%": { transform: "rotate(0deg) translateX(40px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(40px) rotate(-360deg)",
          },
        },
        rotate: {
          "0%": {transform: "rotate(0deg)"},
          "100%": {transform: "rotate(360deg)"}
        }
      },
    },
  },
  plugins: [],
};
