import Layout from "@/components/layout/Layout";
import { Users, Target, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Fokus na rezultate",
    description: "Svaki sajt koji napravimo ima jasan cilj - da pomogne vašem biznisu da raste.",
  },
  {
    icon: Heart,
    title: "Posvećenost klijentima",
    description: "Vaš uspeh je naš uspeh. Radimo zajedno sa vama da postignemo najbolje rezultate.",
  },
  {
    icon: Users,
    title: "Pristupačnost",
    description: "Verujemo da svaki biznis zaslužuje profesionalan online nastup, bez obzira na budžet.",
  },
  {
    icon: Award,
    title: "Kvalitet bez kompromisa",
    description: "Koristimo najnovije tehnologije i najbolje prakse u izradi svakog projekta.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient-bg section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              O nama
            </h1>
            <p className="text-lg text-muted-foreground">
              Webino je tim entuzijasta koji veruje da svaki lokalni biznis 
              u Srbiji zaslužuje profesionalan i moderan web sajt.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Naša priča</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Webino je nastao iz jednostavne ideje: pomoći malim lokalnim biznisima 
                da se predstave online na profesionalan način, bez velikih troškova.
              </p>
              <p>
                Primetili smo da mnogi frizerski saloni, restorani, ordinacije i drugi 
                mali biznisi nemaju sajt jer smatraju da je to preskupo ili komplikovano. 
                Želeli smo to da promenimo.
              </p>
              <p>
                Danas pomažemo vlasnicima malih biznisa širom Srbije da naprave 
                svoj prvi korak u digitalni svet. Naši sajtovi su brzi, moderni, 
                i prilagođeni potrebama lokalnog tržišta.
              </p>
              <p>
                <span className="text-foreground font-semibold">
                  Naša misija je jednostavna: 
                </span>{" "}
                učiniti profesionalni web dizajn dostupnim svima.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Naše vrednosti
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ovo su principi kojima se vodimo u svakodnevnom radu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="card-elevated p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Želite da saznate više?
            </h2>
            <p className="text-muted-foreground mb-8">
              Kontaktirajte nas i razgovarajmo o vašem projektu. 
              Konsultacija je potpuno besplatna.
            </p>
            <a href="/kontakt" className="btn-accent">
              Kontaktiraj nas
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
