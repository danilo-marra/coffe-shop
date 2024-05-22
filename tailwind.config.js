/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        baloo2: ["'Baloo 2'", 'cursive'],
      },
      colors: {
        purpleDark: '#4b2995',
        purple: '#8047f8',
        purpleLight: '#ebe5f9',

        yellowDark: '#c47f17',
        yellow: '#dbac2c',
        yellowLight: '#f1e9c9',

        title: '#272221',
        subtitle: '#403937',
        text: '#574f4d',
        label: '#8d8686',
        hover: '#d7d5d5',
        button: '#e6e5e5',
        input: '#ededed',
        card: '#f3f2f2',
        background: '#fafafa',
        white: '#ffffff',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-number-controls': {
          '-webkit-appearance': 'none',
          '-moz-appearance': 'textfield',
        },
        '.hide-number-controls::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          margin: '0',
        },
        '.hide-number-controls::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          margin: '0',
        },
        // eslint-disable-next-line prettier/prettier
      });
    },
  ],
  // eslint-disable-next-line prettier/prettier
};
