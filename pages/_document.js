import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Quiz App for Interview assignment" />
        <link rel="icon" href="https://img.icons8.com/?size=100&id=60701&format=png&color=000000" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
