/** @type {import('tailwindcss').Config} */

const colors = {
  bg: '#FFFDF9',
  gold: '#BF993E',
  green: '#24635C',
  orange: '#C97600',
  dark: '#0D2427',
};

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ...colors,
      },
      fontFamily: {
        base: ['Aleo"', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: colors.green,
            },
            h2: {
              color: colors.dark,
            },
            h3: {
              color: colors.dark,
            },
            p: {
              color: colors.dark,
            },
            '[class~="lead"]': {
              color: colors.dark,
            },
          },
        },
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [require('@tailwindcss/typography')],
};
