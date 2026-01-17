import { Globe, Smartphone, Clock, TrendingUp, Shield, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Vidljivost 24/7",
    description: "Vaši klijenti vas mogu pronaći u bilo koje vreme, bilo gde. Sajt radi za vas dok vi spavate.",
  },
  {
    icon: Smartphone,
    title: "Mobilno prilagođeno",
    description: "Preko 70% korisnika pretražuje internet sa telefona. Vaš sajt će izgledati savršeno na svim uređajima.",
  },
  {
    icon: Clock,
    title: "Brza izrada",
    description: "Jednostavan sajt možete dobiti za samo 7 dana. Bez čekanja, bez komplikacija.",
  },
  {
    icon: TrendingUp,
    title: "Više klijenata",
    description: "Profesionalan online nastup povećava poverenje. Klijenti biraju biznise koje mogu da istraže online.",
  },
  {
    icon: Shield,
    title: "Pouzdano i sigurno",
    description: "SSL sertifikat i sigurno hostovanje dolaze uz svaki paket. Vaši podaci su zaštićeni.",
  },
  {
    icon: Headphones,
    title: "Podrška na srpskom",
    description: "Komunikacija na srpskom jeziku, bez jezičkih barijera. Tu smo za svako pitanje.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Zašto vam je potreban sajt?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            U digitalnom dobu, sajt nije luksuz – to je neophodni alat za svaki ozbiljan biznis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="card-elevated p-6 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
