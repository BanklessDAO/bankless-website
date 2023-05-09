import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useRouter } from 'next/router';
import { useEffect } from "react";
import * as gtag from "../lib/gtag"
import theme from 'config/theme'
import 'tailwindcss/tailwind.css'
import '../styles/index.css'
import PageContainer from 'components/_common/page-container'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
 
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
 
    router.events.on("routeChangeComplete", handleRouteChange);
 
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
        <PageContainer>
          <Component {...pageProps} />
        </PageContainer>
      </ChakraProvider>
    </>
  )
}

export default MyApp
