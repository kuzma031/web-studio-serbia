import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { packages } from "@/shared/packages";
import { PricingCard } from "@/components/pricing/PricingCard";
import { prices } from "@/shared/prices";

const faqs = [
  {
    question: "Šta je uključeno u cenu?",
    answer:
      "Cena uključuje kompletnu izradu sajta, dizajn, responzivnost kao i domen i hosting. Nema skrivenih troškova.",
  },
  {
    question: "Koliko traje izrada sajta?",
    answer:
      "Basic paket završavamo za 2-7 dana, Standard za 7-14 dana. Za CMS paket vreme izrade zavisi od kompleksnosti.",
  },
  {
    question: "Mogu li kasnije da dodam nove funkcionalnosti?",
    answer:
      "Naravno! Možete započeti sa Basic paketom i kasnije nadograditi sajt dodatnim funkcionalnostima.",
  },
//   {
//     question: "Šta ako nisam zadovoljan dizajnom?",
//     answer:
//       "Uključene su dve runde revizija dizajna. Radimo dok ne budete potpuno zadovoljni izgledom sajta.",
//   },
];

export default function Packages() {
  return (
    <>
      <Head>
        <title>Paketi i cene | Webino - Web dizajn Srbija</title>
        <meta
          name="description"
          content={`Pogledajte naše pakete za izradu web sajtova. Basic od ${prices.basic.discountedPrice}€, Standard od ${prices.standard.discountedPrice}€ i Custom paketi. Domen, hosting i SSL uključeni u cenu. Bez skrivenih troškova.`}
        />
        <link rel="canonical" href="https://webino.rs/paketi" />
        <meta property="og:url" content="https://webino.rs/paketi" />
        <meta property="og:title" content="Paketi i cene | Webino" />
        <meta
          property="og:description"
          content={`Izaberite paket koji odgovara vašim potrebama. Basic od ${prices.basic.discountedPrice}€, Standard od ${prices.standard.discountedPrice}€. Domen i hosting uključeni.`}
        />
      </Head>
      <Layout>
        {/* Hero */}
        <section className="hero-gradient-bg section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                Naši paketi
              </h1>
              <p className="text-lg text-muted-foreground">
                Izaberite paket koji odgovara vašim potrebama i budžetu. Sve
                cene su transparentne i konačne.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg) => (
                <PricingCard key={pkg.id} pkg={pkg} variant="full" />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-secondary/50">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Česta pitanja
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question} className="card-elevated p-6">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Niste sigurni koji paket vam odgovara?
              </h2>
              <p className="text-muted-foreground mb-8">
                Javite nam se i pomoći ćemo vam da izaberete najbolje rešenje za
                vaš biznis.
              </p>
              <Link href="/kontakt" className="btn-accent gap-2">
                Pošalji upit
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
