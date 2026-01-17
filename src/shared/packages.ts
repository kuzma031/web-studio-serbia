import { prices } from "./prices";

export type PackageType = "basic" | "standard" | "custom";

export interface Package {
  id: PackageType;
  name: string;
  price: { price: number; discountedPrice: number } | null;
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
    price: prices.basic,
    description: "Idealno za mali biznis koji tek kreće online",
    features: [
      "Jednostranični sajt (landing page)",
      "Responzivan dizajn za sve uređaje",
      "Kontakt forma",
      "Osnovna SEO podešavanja",
      "Brzo učitavanje",
    ],
    notIncluded: [
      "Više stranica",
      "Google mapa",
      "Galerija slika",
      "Napredno SEO",
    ],
    popular: false,
    timeline: "2-5 dana",
  },
  {
    id: "standard",
    name: "Standard",
    price: prices.standard,
    description: "Najpopularniji izbor za lokalne biznise",
    features: [
      "Do 6 stranica",
      "Responzivan dizajn za sve uređaje",
      "Kontakt forma",
      "Google mapa lokacije",
      "Galerija slika",
      "SEO optimizacija",
    ],
    notIncluded: [],
    popular: true,
    timeline: "7-14 dana",
  },
  {
    id: "custom",
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
