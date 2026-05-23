import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect first so the DNS + TLS handshake starts immediately */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/**
         * Performance: load the font stylesheet non-blocking via media="print" trick.
         * The browser fetches it at low priority, then onload switches to all media.
         * display=swap already prevents FOIT; this removes render-blocking entirely.
         */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap"
          media="print"
          // @ts-ignore — onLoad is valid on link elements in the browser
          onLoad="this.media='all'"
        />
        {/* Noscript fallback for users without JS */}
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap"
          />
        </noscript>

        {/* Favicon hints */}
        <meta name="theme-color" content="#020204" />
      </Head>
      <body className="antialiased font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
