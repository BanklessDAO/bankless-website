import { extendTheme, withDefaultVariant } from '@chakra-ui/react'
import '@fontsource/clear-sans'

const variantOutlined = () => ({
  field: {
    _focus: {
      boxShadow: 'none',
    },
  },
})

const variantFilled = () => ({
  field: {
    _focus: {
      boxShadow: 'none',
    },
  },
})

const variantFlushed = () => ({
  field: {
    _focus: {
      boxShadow: 'none',
    },
  },
})

const breakpoints = {
  sm: '320px',
  md: '720px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const theme = extendTheme(
  {
    fonts: {
      heading: 'clear-sans, sans-serif',
      body: 'clear-sans, sans-serif',
    },
    colors: {
      /* Bankless styles */
      white: {
        100: '#FFFFFF',
        200: '#EAEAEA',
        300: '#D5D5D5',
        400: '#C0C0C0',
        500: '#ABABAB',
        600: '#969696',
        700: '#818181',
        800: '#6C6C6C',
        900: '#565656',
      },
      black: '#000000',
      /* Color Scale generated using https://color-scheme-builder.vercel.app/ */
      red: {
        100: '#d02128',
        200: '#d02128',
        300: '#d02128',
        400: '#d02128',
        500: '#d02128',
        600: '#d02128',
        700: '#d02128',
        800: '#d02128',
        900: '#d02128',
      },
    },
    fontSizes: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '3.75rem', // 60px
    },
    components: {
      Button: {
        variants: {
          // Make a variant, we'll call it `base` here and leave it empty
          base: {},
          bankless: {
            bg: '#D02128',
            color: 'white.100',
            fontSize: 14,
            _hover: {
              bg: '#d02128',
            },
          },
          'bankless-white': {
            bg: 'white.100',
            border: '1px solid #D02128',
            color: '#D02128',
            _hover: {
              bg: 'white.500',
            },
          },
        },
      },
      Text: {
        baseStyle: {
          color: 'white',
          fontSize: 21,
        },
      },
      ListItem: {
        variants: {
          bankless: {
            color: 'white.500',
          },
        },
      },
      Input: {
        variants: {
          bankless: {
            bg: 'white.100',
          },
        },
      },
      Link: {
        variants: {
          bankless: {
            color: 'white.500',
          },
          inactive: {
            color: 'grey.400',
          },
        },
      },
      Tab: {
        outline: () => variantOutlined().field,
        filled: () => variantFilled().field,
        flushed: () => variantFlushed().field,
      },
    },
  },
  withDefaultVariant({
    variant: 'bankless',
    components: ['Button', 'Text', 'Input', 'Link', 'ListItem'],
  })
)

export default theme
