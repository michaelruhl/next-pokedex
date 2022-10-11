import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const stylePic = {
    backgroundImage: `url(${"https://www.transparenttextures.com/patterns/graphy.png"})`,
  };
  return (
    <Html>
      <Head>
      <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
  integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
  crossOrigin="anonymous"
  referrerPolicy="no-referrer"
/>
<link rel="stylesheet" href="../styles/globals.css" />

      </Head>
      <body className="bg-danger" style={{backgroundImage: `url(${"https://www.transparenttextures.com/patterns/graphy.png"})`}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}