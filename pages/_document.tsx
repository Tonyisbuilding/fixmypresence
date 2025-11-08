import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/Fixmypresence-logomark-32×32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/Fixmypresence-logomark-16×16.png"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/icons/Fixmypresence-logomark.svg"
        />
        <link rel="shortcut icon" href="/icons/Fixmypresence-logomark-32×32.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
