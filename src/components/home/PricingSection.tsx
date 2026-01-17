import { Link } from "react-router-dom";
import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Basic",
    price: "120",
    description: "Idealno za mali biznis koji tek kreće online",
    features: [
      "Jednostranični sajt",
      "Responzivan dizajn",
      "Kontakt forma",
      "SSL sertifikat",
      "Osnovna SEO podešavanja",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "200",
    description: "Najpopularniji izbor za lokalne biznise",
    features: [
      "Do 6 stranica",
      "Responzivan dizajn",
      "Kontakt forma",
      "Google mapa",
      "Galerija slika",
      "SEO optimizacija",
      "Društvene mreže",
    ],
    popular: true,
  },
  {
    name: "Custom",
    price: null,
    description: "Za kompleksnije projekte i posebne zahteve",
    features: [
      "Neograničen broj stranica",
      "Web aplikacije",
      "E-commerce / Webshop",
      "Prilagođene funkcionalnosti",
      "Integracije sa sistemima",
      "Prioritetna podrška",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pristupačni paketi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparentne cene bez skrivenih troškova. Izaberite paket koji odgovara vašim potrebama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`card-elevated p-8 relative ${
                pkg.popular ? "border-2 border-primary" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    <Star size={14} />
                    Najpopularnije
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-2">
                  {pkg.price ? (
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-extrabold">{pkg.price}</span>
                      <span className="text-muted-foreground">€</span>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold text-primary">Po dogovoru</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

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
  );
};

export default PricingSection;
