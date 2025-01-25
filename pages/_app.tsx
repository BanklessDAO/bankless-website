import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import theme from 'config/theme'
import 'tailwindcss/tailwind.css'
import '../styles/index.css'
import PageContainer from 'components/_common/page-container'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [isRouteValid, setIsRouteValid] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleRouting = async () => {
      try {
        // Don't redirect if already on /tlBank or if it's a 404 page
        if (
          !router.pathname.startsWith('/tlBank') &&
          router.pathname !== '/_error'
        ) {
          await router.replace('/tlBank')
        }
        setIsRouteValid(true)
      } catch (error) {
        console.error('Routing error:', error)
      } finally {
        setIsLoading(false)
      }
    }

    handleRouting()
  }, [router.pathname])

  if (isLoading || !isRouteValid) {
    return null // Return empty while loading or redirecting
  }

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
