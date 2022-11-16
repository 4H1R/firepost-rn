const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.gray,
        danger: colors.red,
        success: colors.green,
        warning: colors.yellow,
      },
      fontFamily: {
        primary: 'Poppins-Regular',
        'primary-semi': 'Poppins-Semi',
        'primary-bold': 'Poppins-Bold',
      },
    },
  },
  plugins: [],
};
