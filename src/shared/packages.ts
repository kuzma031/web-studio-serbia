import { prices } from "./prices";

export type PackageType = "basic" | "standard" | "cms";

export interface Package {
  id: PackageType;
  name: string;
  price: string;
  regularPrice?: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  popular: boolean;
  timeline: string;
}

export const packages: Package[] = [
    {
      id: "basic",
      name: "Basic",
      price: `${prices.basic.discountedPrice}€`,
      regularPrice: `${prices.basic.price}€`,
      description: "Idealno za mali biznis koji želi online prisustvo bez komplikacija",
      features: [
        "Jednostranični sajt (landing page)",
        "Responzivan dizajn za sve uređaje",
        "Kontakt forma",
        "Osnovna SEO podešavanja",
        "Brzo učitavanje",
        "Besplatan domen",
        "Besplatan hosting",
        "Osnovno održavanje",
      ],
      notIncluded: [
        "Više stranica",
        "Google mapa",
        "Galerija slika",
        "Napredno SEO",
        "CMS / blog",
      ],
      popular: false,
      timeline: "2–5 dana",
    },
    {
      id: "standard",
      name: "Standard",
      price: `${prices.standard.discountedPrice}€`,
      regularPrice: `${prices.standard.price}€`,
      description: "Najpopularniji izbor za lokalne biznise",
      features: [
        "Do 6 stranica",
        "Responzivan dizajn za sve uređaje",
        "Kontakt forma",
        "Google mapa lokacije",
        "Galerija slika",
        "SEO optimizacija",
        "Besplatan domen",
        "Besplatan hosting",
        "Redovno održavanje",
      ],
      notIncluded: [
        "CMS / blog",
        "E-commerce",
      ],
      popular: true,
      timeline: "7–14 dana",
    },
    {
      id: "cms",
      name: "CMS",
      price: `${prices.cms.discountedPrice}€`,
      regularPrice: `${prices.cms.price}€`,
      description: "Za biznise kojima je potreban blog ili samostalno uređivanje sadržaja",
      features: [
        "WordPress",
        // "Do 10 stranica",
        "Blog / novosti",
        "Responzivan dizajn",
        "SEO optimizacija",
        "Kontakt forma",
        "Google mapa",
        "Besplatan domen",
        "Besplatan hosting",
        "Redovno održavanje",
        "Osnovna sigurnost i backup",
      ],
    //   notIncluded: [
    //     "Webshop",
    //     "Custom aplikacije",
    //   ],
      popular: false,
      timeline: "10–20 dana",
    },
  ];
  
