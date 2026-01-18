import { Html, Head, Main, NextScript } from "next/document";
import { prices } from "@/shared/prices";

const SITE_URL = "https://webino.rs"; // Update this to your actual domain

export default function Document() {
  return (
    <Html lang="sr" className="dark">
      <Head>
        <meta
          name="description"
          content="Izrađujemo moderne, brze i responzivne web sajtove za frizerske salone, restorane, ordinacije i druge male biznise u Srbiji. Cene već od 119€."
        />
        <meta name="author" content="Webino" />
        <meta
          name="keywords"
          content="web dizajn, izrada sajta, web sajt, Srbija, Beograd, pristupačno, mali biznis, frizerski salon, restoran, ordinacija"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Webino - Pristupačni web sajtovi za lokalne biznise"
        />
        <meta
          property="og:description"
          content={`Moderni web sajtovi za male biznise u Srbiji. Cene već od ${prices.basic.discountedPrice}€.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="sr_RS" />
        <meta property="og:site_name" content="Webino" />
        <meta property="og:image" content={`${SITE_URL}/webino-og.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Webino - Profesionalni web sajtovi za lokalne biznise" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Webino" />
        <meta
          name="twitter:title"
          content="Webino - Pristupačni web sajtovi za lokalne biznise"
        />
        <meta
          name="twitter:description"
          content={`Moderni web sajtovi za male biznise u Srbiji. Cene već od ${prices.basic.discountedPrice}€.`}
        />
        <meta name="twitter:image" content={`${SITE_URL}/webino-og.png`} />
        <meta name="twitter:image:alt" content="Webino - Profesionalni web sajtovi za lokalne biznise" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
