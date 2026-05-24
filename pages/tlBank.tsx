import dynamic from 'next/dynamic'

/**
 * Web3-onboard hooks cannot run during SSR (init() is client-only).
 * Load tlBank only in the browser.
 */
const TlBankPage = dynamic(() => import('../components/TlBankPage'), {
  ssr: false,
})

export default TlBankPage
