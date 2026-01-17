import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="sr">
      <Head>
        <meta
          name="description"
          content="Izrađujemo moderne, brze i responzivne web sajtove za frizerske salone, restorane, ordinacije i druge male biznise u Srbiji. Cene već od 120€."
        />
        <meta name="author" content="Webino" />
        <meta
          name="keywords"
          content="web dizajn, izrada sajta, web sajt, Srbija, Beograd, pristupačno, mali biznis"
        />

        <meta
          property="og:title"
          content="Webino - Pristupačni web sajtovi za lokalne biznise"
        />
        <meta
          property="og:description"
          content="Moderni web sajtovi za male biznise u Srbiji. Cene već od 120€."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="sr_RS" />
        <meta
          property="og:image"
          content="https://lovable.dev/opengraph-image-p98pqg.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Webino" />
        <meta
          name="twitter:image"
          content="https://lovable.dev/opengraph-image-p98pqg.png"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
