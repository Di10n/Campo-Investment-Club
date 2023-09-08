/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 1s infinite',
      }
    },
    fontFamily: {
      'title': ["Montserrat"],
      'body': ["Open Sans"]
    }
  },
  plugins: [],
};
