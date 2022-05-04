import { extendTheme, withDefaultVariant } from '@chakra-ui/react'
import "@fontsource/clear-sans";

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

const theme = extendTheme(
  {
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
      black: '#101010',
      /* Color Scale generated using https://color-scheme-builder.vercel.app/ */
      red: {
        100: '#FF1013',
        200: '#EA0F11',
        300: '#D50E0F',
        400: '#C00D0E',
        500: '#AB0C0C',
        600: '#960B0B',
        700: '#810909',
        800: '#6C0808',
        900: '#560606',
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
            bg: 'red.100',
            color: 'white.100',
            fontSize: 14,
            _hover: {
              bg: 'red.500',
            },
          },
          'bankless-white': {
            bg: 'white.100',
            border: '1px solid #FF1A1A',
            color: '#FF1A1A',
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
            color: 'white.500'
          }
        }
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
    components: ['Button', 'Text', 'Input', 'Link','ListItem']
  })
)

export default theme
