/** @type {import('tailwindcss').Config} */

const colors = {
  beige: '#FDF6E0',
  bg: '#FFFDF9',
  dark: '#0D2427',
  gold: { DEFAULT: '#BF993E', 500: '#F9E3B8' },
  gray: { DEFAULT: '#717171', 400: '#242424', 300: '#333' },
  green: {
    DEFAULT: '#24635C',
    100: '#64D2C5',
    200: '#3E9F94',
    300: '#0C7C6F',
    400: '#24635C',
  },
  orange: '#C97600',
  yellow: '#EFBF4D',
};

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      animation: {
        'checkbox-checked': 'checkbox-checked 300ms ease-out forwards',
      },
      keyframes: {
        'checkbox-checked': {
          '0%': { strokeDashoffset: 1 },
          '100%': { strokeDashoffset: 0 },
        },
      },
      backgroundImage: {
        'burst-top': "url('/emphasis.svg')",
        'question-marks': "url('/question-marks.svg')",
        oval: "url('/oval.svg')",
        'content-underline': "url('/content-underline.svg')",
      },
      backgroundSize: {
        300: '300%',
      },
      colors: {
        ...colors,
      },
      cursor: {
        arrow: 'url(/cursor-arrow.svg), auto',
        hand: 'url(/cursor-hand.svg), pointer',
        text: 'text',
      },
      fontFamily: {
        base: ['Aleo', 'serif'],
      },
      gridTemplateColumns: {
        question: '1fr minmax(1fr, 28rem)',
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [require('@tailwindcss/container-queries')],
};
