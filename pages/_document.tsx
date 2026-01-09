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
        <link rel="apple-touch-icon" href="/icons/Fixmypresence-logomark-32×32.png" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FixMyPresence",
              "url": "https://fixmypresence.com",
              "logo": "https://fixmypresence.com/icons/Fixmypresence-logomark.svg",
              "description": "Specialized digital design studio building high-trust digital assets for capital allocators, advisory firms, and elite consultancies.",
              "email": "tony@fixmypresence.com",
              "sameAs": [],
              "areaServed": [
                { "@type": "Country", "name": "United Kingdom" },
                { "@type": "Country", "name": "Switzerland" },
                { "@type": "Country", "name": "Luxembourg" },
                { "@type": "Country", "name": "Ireland" },
                { "@type": "Country", "name": "Germany" }
              ],
              "knowsAbout": [
                "Website Design",
                "Brand Identity",
                "Document Design",
                "Pitch Decks",
                "Investment Materials"
              ]
            }),
          }}
        />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "FixMyPresence",
              "url": "https://fixmypresence.com",
              "description": "Strategic design for consultants and businesses that want to look the part.",
              "publisher": {
                "@type": "Organization",
                "name": "FixMyPresence"
              }
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
