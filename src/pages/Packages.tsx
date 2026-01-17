import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Check, Star, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Basic",
    price: "120",
    description: "Idealno za mali biznis koji tek kreće online",
    features: [
      "Jednostranični sajt (landing page)",
      "Responzivan dizajn za sve uređaje",
      "Kontakt forma",
      "SSL sertifikat (https)",
      "Osnovna SEO podešavanja",
      "Brzo učitavanje",
      "1 godina besplatnog hostovanja",
    ],
    notIncluded: [
      "Više stranica",
      "Google mapa",
      "Galerija slika",
      "Napredno SEO",
    ],
    popular: false,
    timeline: "5-7 dana",
  },
  {
    name: "Standard",
    price: "200",
    description: "Najpopularniji izbor za lokalne biznise",
    features: [
      "Do 6 stranica",
      "Responzivan dizajn za sve uređaje",
      "Kontakt forma",
      "Google mapa lokacije",
      "Galerija slika",
      "SEO optimizacija",
      "Integracija društvenih mreža",
      "SSL sertifikat (https)",
      "1 godina besplatnog hostovanja",
      "Analitika poseta (Google Analytics)",
    ],
    notIncluded: [],
    popular: true,
    timeline: "7-14 dana",
  },
  {
    name: "Custom",
    price: null,
    description: "Za kompleksnije projekte i posebne zahteve",
    features: [
      "Neograničen broj stranica",
      "Prilagođene funkcionalnosti",
      "Web aplikacije",
      "E-commerce / Webshop",
      "CMS (sistem za upravljanje sadržajem)",
      "Integracije sa spoljnim sistemima",
      "API integracije",
      "Napredno SEO",
      "Prioritetna podrška",
      "Mesečno održavanje",
    ],
    notIncluded: [],
    popular: false,
    timeline: "Po dogovoru",
  },
];

const faqs = [
  {
    question: "Šta je uključeno u cenu?",
    answer: "Cena uključuje kompletnu izradu sajta, dizajn, responzivnost, SSL sertifikat i 1 godinu besplatnog hostovanja. Nema skrivenih troškova.",
  },
  {
    question: "Koliko traje izrada sajta?",
    answer: "Basic paket završavamo za 5-7 dana, Standard za 7-14 dana. Za Custom projekte vreme izrade zavisi od kompleksnosti.",
  },
  {
    question: "Mogu li kasnije da dodam nove funkcionalnosti?",
    answer: "Naravno! Možete započeti sa Basic paketom i kasnije nadograditi sajt dodatnim funkcionalnostima.",
  },
  {
    question: "Šta ako nisam zadovoljan dizajnom?",
    answer: "Uključene su dve runde revizija dizajna. Radimo dok ne budete potpuno zadovoljni izgledom sajta.",
  },
];

const Packages = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient-bg section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Naši paketi
            </h1>
            <p className="text-lg text-muted-foreground">
              Izaberite paket koji odgovara vašim potrebama i budžetu. 
              Sve cene su transparentne i konačne.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`card-elevated p-8 relative flex flex-col ${
                  pkg.popular ? "border-2 border-primary lg:scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                      <Star size={14} />
                      Najpopularnije
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="mb-3">
                    {pkg.price ? (
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-5xl font-extrabold">{pkg.price}</span>
                        <span className="text-xl text-muted-foreground">€</span>
                      </div>
                    ) : (
                      <span className="text-3xl font-bold text-primary">Po dogovoru</span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{pkg.description}</p>
                  <p className="text-sm text-primary font-medium mt-2">
                    Rok izrade: {pkg.timeline}
                  </p>
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground mb-3">Uključeno:</p>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {pkg.notIncluded.length > 0 && (
                    <>
                      <p className="text-sm font-semibold text-muted-foreground mb-3">Nije uključeno:</p>
                      <ul className="space-y-2 mb-6">
                        {pkg.notIncluded.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                            <span className="text-sm">• {feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <Link
                  to="/kontakt"
                  className={`w-full text-center ${
                    pkg.popular ? "btn-accent" : "btn-outline"
                  }`}
                >
                  {pkg.price ? "Izaberi paket" : "Kontaktiraj nas"}
                </Link>
              </div>
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
              Javite nam se i pomoći ćemo vam da izaberete najbolje rešenje za vaš biznis.
            </p>
            <Link to="/kontakt" className="btn-accent gap-2">
              Pošalji upit
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;
