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
        <title>BanklessDAO Community</title>
        <meta name="title" content="BanklessDAO Community" />
        <meta name="description" content="The BanklessDAO Community website" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon.ico" />
        <link rel="apple-touch-icon" type="image/png" sizes="32x32" href="favicon.ico" />
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
