/** @type {import('tailwindcss').Config} */

const colors = {
  bg: '#FFFDF9',
  beige: '#FDF6E0',
  gold: '#BF993E',
  green: '#24635C',
  orange: '#C97600',
  dark: '#0D2427',
  gray: '#717171',
};

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
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
        text: 'url(/cursor-text.svg), text',
      },
      fontFamily: {
        base: ['Aleo', 'serif'],
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [require('@tailwindcss/container-queries')],
};
