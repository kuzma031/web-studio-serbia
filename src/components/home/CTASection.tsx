import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Spremni da pokrenete vaš online biznis?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Javite nam se danas i dobijte besplatnu konsultaciju. 
            Saznajte kako možemo pomoći vašem biznisu da raste online.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/kontakt" className="btn-white gap-2">
              Zatraži ponudu
              <ArrowRight size={18} />
            </Link>
            <Link to="/paketi" className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg transition-all duration-200 hover:bg-primary-foreground hover:text-primary">
              Pogledaj pakete
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
