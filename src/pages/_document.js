import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600" rel="stylesheet" />
          <title>Atlas</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <body className="bg-atlas-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument