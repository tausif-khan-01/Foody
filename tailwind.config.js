/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'xs': '325px',
        
      },
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
        MyFont: ['"My Font"', "serif"], // Ensure fonts with spaces have " " surrounding it.
      },
      animation: {
        move: "move 80s infinite linear",
        movexup: "movexup 5s infinite alternate linear",
        moveyup: "moveyup 5s infinite alternate linear",
        movexdown: "movexdown 5s infinite alternate linear",
        rotate: "rotate 40s infinite linear",
      },
      keyframes: {
        move: {
          "0%": { transform: "rotate(0deg) translateX(40px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(40px) rotate(-360deg)",
          },
        },
        movexup: {
          "0%": { transform: " translateX(0px) " },
          "100%": {
            transform: " translate(25px,-25px)",
          },
        },
        moveyup: {
          "0%": { transform: " translateX(0px) " },
          "100%": {
            transform: " translate(-25px,25px)",
          },
        },
        movexdown: {
          "0%": { transform: " translateX(0px) " },
          "100%": {
            transform: " translate(-25px,-25px)",
          },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        
        'card': 'repeat(auto-fill, minmax( min(320px, 100%) , 1fr))',

        // Complex site-specific column configuration
    
      }
    },
  },
  plugins: [],
};
