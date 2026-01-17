import Head from "next/head";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import PricingSection from "@/components/home/PricingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Webino - Pristupačni web sajtovi za lokalne biznise u Srbiji
        </title>
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
