import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    'dark-1': '#1A1C20',
    'dark-2': '#2B2D33',
    'dark-3': '#33363D',
  },
  fonts: {
    body: "'Inter', sans-serif",
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
  styles: {
    global: {},
  },
})

export default theme
