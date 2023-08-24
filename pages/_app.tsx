import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import theme from 'config/theme'
import 'tailwindcss/tailwind.css'
import '../styles/index.css'
import PageContainer from 'components/_common/page-container'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-PK78Y6EQDB'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PK78Y6EQDB');
        `}
      </Script>
      <ChakraProvider theme={theme}>
        <Head>
          <title>BanklessDAO Community</title>
        </Head>
        <PageContainer>
          <Component {...pageProps} />
        </PageContainer>
      </ChakraProvider>
    </>
  )
}

export default MyApp
