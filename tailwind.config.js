/** @type {import('tailwindcss').Config} */

const colors = {
  bg: '#FFFDF9',
  beige: '#FDF6E0',
  gold: '#BF993E',
  green: { DEFAULT: '#24635C', 200: '#3E9F94' },
  orange: '#C97600',
  dark: '#0D2427',
  gray: '#717171',
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
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [require('@tailwindcss/container-queries')],
};
