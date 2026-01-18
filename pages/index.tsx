import Head from "next/head";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import PricingSection from "@/components/home/PricingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Webino",
  description:
    "Izrađujemo moderne, brze i responzivne web sajtove za frizerske salone, restorane, ordinacije i druge male biznise u Srbiji.",
  url: "https://webino.rs",
  logo: "https://webino.rs/webino-og.png",
  image: "https://webino.rs/webino-og.png",
  telephone: "+381641076461",
  email: "webinoagency@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beograd",
    addressCountry: "RS",
  },
//   geo: {
//     "@type": "GeoCoordinates",
//     latitude: "44.7866",
//     longitude: "20.4489",
//   },
  areaServed: {
    "@type": "Country",
    name: "Serbia",
  },
  priceRange: "€€",
  serviceType: ["Web Design", "Web Development"],
  sameAs: [],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Webino - Pristupačni web sajtovi za lokalne biznise u Srbiji
        </title>
        <meta
          name="description"
          content="Izrađujemo moderne, brze i responzivne web sajtove za frizerske salone, restorane, ordinacije i druge male biznise u Srbiji. Domen i hosting uključeni. Cene već od 119€."
        />
        <link rel="canonical" href="https://webino.rs/" />
        <meta property="og:url" content="https://webino.rs/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Layout>
        <HeroSection />
        <BenefitsSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
      </Layout>
    </>
  );
}
