import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Frizerski salon Bella",
    category: "Frizerski salon",
    description: "Moderan jednostranični sajt za frizerski salon u Beogradu. Sajt uključuje galeriju radova, cenovnik i online zakazivanje.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
    tags: ["Standard paket", "Galerija", "Kontakt forma"],
  },
  {
    title: "Restoran Stara Kuća",
    category: "Restoran",
    description: "Sajt za tradicionalni restoran sa jelovnikom, galerijom enterijera i integracijom sa Google mapom za lakšu navigaciju.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    tags: ["Standard paket", "Meni", "Google mapa"],
  },
  {
    title: "Dr. Jovanović - Stomatolog",
    category: "Stomatološka ordinacija",
    description: "Profesionalan sajt za stomatološku ordinaciju sa prikazom usluga, timom lekara i mogućnošću online zakazivanja.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
    tags: ["Standard paket", "SEO", "Zakazivanje"],
  },
  {
    title: "FitZone Gym",
    category: "Fitnes studio",
    description: "Dinamičan sajt za fitnes studio sa rasporedom treninga, cenama članarina i kontakt formom za upis.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    tags: ["Standard paket", "Raspored", "Cenovnik"],
  },
  {
    title: "Auto servis Mika",
    category: "Auto servis",
    description: "Jednostavan i pregledan sajt za auto servis sa listom usluga, kontakt informacijama i radnim vremenom.",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&h=400&fit=crop",
    tags: ["Basic paket", "Usluge", "Kontakt"],
  },
  {
    title: "Cvetni raj",
    category: "Cvećara",
    description: "Sajt za cvećaru sa galerijom aranžmana, mogućnošću naručivanja i informacijama o dostavi.",
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=400&fit=crop",
    tags: ["Standard paket", "Galerija", "Naručivanje"],
  },
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient-bg section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Naši projekti
            </h1>
            <p className="text-lg text-muted-foreground">
              Pogledajte primere sajtova koje smo napravili za naše klijente. 
              Svaki projekat je jedinstven i prilagođen potrebama biznisa.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="card-elevated overflow-hidden group">
                <div className="aspect-[3/2] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center">
                    <ExternalLink 
                      size={32} 
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity" 
                    />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary font-medium mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/50">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Želite sličan sajt za vaš biznis?
            </h2>
            <p className="text-muted-foreground mb-8">
              Kontaktirajte nas i razgovarajmo o vašem projektu. 
              Rado ćemo vam pomoći da napravite sajt koji će predstaviti vaš biznis na najbolji način.
            </p>
            <Link to="/kontakt" className="btn-accent gap-2">
              Zatraži ponudu
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
