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
        primary: 'Primary-Regular',
        'primary-medium': 'Primary-Medium',
        'primary-semi': 'Primary-Semi',
        'primary-bold': 'Primary-Bold',
      },
    },
  },
  plugins: [],
};
