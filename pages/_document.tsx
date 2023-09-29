import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name='title' content='BanklessDAO Community' />
          <meta
            name='description'
            content='The BanklessDAO Community website'
          />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://www.bankless.community/' />
          <meta property='og:title' content='BanklessDAO' />
          <meta
            property='og:description'
            content='BanklessDAO is a decentralized community with one mission: Help the world gobankless.'
          />
          <meta property='og:image' content='/bankless-website/icons/bankless-logo-2.png' />
          <meta property='og:image:width' content='480' />
          <meta property='og:image:height' content='369' />
          <meta
            property='twitter:url'
            content='https://www.bankless.community/'
          />
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:title' content='BanklessDAO' />
          <meta
            property='twitter:description'
            content='BanklessDAO is a decentralized community with one mission: Help the world gobankless.'
          />
          <meta property='twitter:image' content='/bankless-website/icons/bankless-logo-2.png' />
          <link rel='shortcut icon' href='/bankless-website/favicon.ico' />
          <link rel='icon' type='image/png' sizes='32x32' href='/bankless-website/favicon.ico' />
          <link
            rel='apple-touch-icon'
            type='image/png'
            sizes='32x32'
            href='/bankless-website/favicon.ico'
          />
        </Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
