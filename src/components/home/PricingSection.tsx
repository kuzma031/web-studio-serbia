import { packages } from "@/shared/packages";
import { PricingCard } from "@/components/pricing/PricingCard";

const PricingSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pristupačni paketi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparentne cene bez skrivenih troškova. Izaberite paket koji
            odgovara vašim potrebama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
