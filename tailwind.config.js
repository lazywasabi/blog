const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './assets/**/*.js',
    './layouts/**/*.html',
    './content/**/*.md',
    './content/**/*.html',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
      },
      fontFamily: {
        display: ['"IBM Plex Sans Thai"', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        site: '56rem',
        content: '40rem',
      },
      width: {
        'wide-image': 'calc(100% + 16rem)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              fontWeight: 'inherit',
              textDecoration: 'none',
              '&:hover': {
                borderBottom: '1px solid currentColor',
              },
            },
            strong: {
              color: 'inherit',
              fontWeight: '700',
            },
            h2: {
              fontWeight: '500',
            },
            h3: {
              fontWeight: '500',
            },
            h4: {
              fontWeight: '500',
            },
            'a code': {
              color: theme('colors.green.500'),
              textDecoration: 'none',
            },
          },
        },

        dark: {
          css: {
            color: theme('colors.gray.100'),
            '[class~="lead"]': {
              color: theme('colors.gray.400'),
            },
            a: {
              color: theme('colors.green.400'),
            },
            strong: {
              color: theme('colors.gray.100'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.600'),
            },
            hr: {
              borderColor: theme('colors.gray.700'),
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
            h1: {
              color: theme('colors.gray.100'),
            },
            h2: {
              color: theme('colors.gray.100'),
            },
            h3: {
              color: theme('colors.gray.100'),
            },
            h4: {
              color: theme('colors.gray.100'),
            },
            'figure figcaption': {
              color: theme('colors.gray.400'),
            },
            code: {
              color: theme('colors.gray.100'),
            },
            'a code': {
              color: theme('colors.green.400'),
            },
            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.600'),
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
