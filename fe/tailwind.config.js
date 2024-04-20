/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    mytheme: {
      primary: '#2c00ff',

      secondary: '#558900',

      accent: '#f00000',

      neutral: '#bbf7d0',

      'base-100': '#f3f4f6',

      info: '#009cbd',

      success: '#00f6c2',

      warning: '#ff9000',

      error: '#ff6575',
    },

    colors: {
      platinium: '#F1F1F1',
    },
  },
  plugins: [require('daisyui')],
};
