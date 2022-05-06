import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from 'config/theme'

import '../styles/index.css'
import PageContainer from 'components/common/page-container'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </ChakraProvider>
  )
}

export default MyApp
