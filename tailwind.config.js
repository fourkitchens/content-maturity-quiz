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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'burst-top': "url('/emphasis.svg')",
        'question-marks': "url('/question-marks.svg')",
        'content-underline': "url('/content-underline.svg')",
      },
      backgroundSize: {
        300: '300%',
      },
      colors: {
        ...colors,
      },
      fontFamily: {
        base: ['Aleo', 'serif'],
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [],
};
