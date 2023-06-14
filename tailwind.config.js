/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  plugins: [],
}

