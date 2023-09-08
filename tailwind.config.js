/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    },
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
