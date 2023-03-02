const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik']
      },
    },
    fontFamily: {

    },
    colors: {
      primary: "#0F1224",
      secondary: '#3C468F',
      lightGray: '#EDEEF8',
      backgroundDefault: "#F8F8F8",

      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,

    }
  },

  plugins: [
    require('@tailwindcss/forms'),
  ],

}