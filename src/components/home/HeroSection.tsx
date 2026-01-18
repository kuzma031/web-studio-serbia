import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { prices } from "@/shared/prices";

const benefits = ["Pristupačne cene", "Brza izrada", "Bez skrivenih troškova"];

const HeroSection = () => {
  return (
    <section className="hero-gradient-bg section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Profesionalni web sajtovi za lokalne biznise
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-slide-up">
            Vaš biznis zaslužuje
            <span className="gradient-text block">moderan sajt</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Izrađujemo moderne, brze i responzivne sajtove za restorane, ordinacije, frizerske salone,
            fitnes studije i druge male biznise u Srbiji. Domen i hosting uključeni u cenu.
            <span className="font-semibold text-foreground">
              {" "}
              Cene već od{" "}
              <span className="text-accent font-bold">
                {prices.basic.discountedPrice}€
              </span>
              .
            </span>
          </p>

          <div
            className="flex flex-wrap justify-center gap-4 mb-10 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link href="/kontakt" className="btn-accent gap-2">
              Zatraži ponudu
              <ArrowRight size={18} />
            </Link>
            <Link href="/paketi" className="btn-outline">
              Pogledaj pakete
            </Link>
          </div>

          <div
            className="flex flex-wrap justify-center gap-6 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <CheckCircle size={18} className="text-primary" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
