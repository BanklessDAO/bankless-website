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
        <title>Bankess Community</title>
        <meta name="title" content="Bankess Community" />
        <meta name="description" content="Add Website description here" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="icon" type="image/png" sizes="33x33" href="favicon.png" />
        <link rel="apple-touch-icon" type="image/png" sizes="33x33" href="favicon.png" />
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
