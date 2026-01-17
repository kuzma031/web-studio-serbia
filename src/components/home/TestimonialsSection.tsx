import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marija Petrović",
    role: "Vlasnica frizerskog salona",
    content: "Odlična saradnja od početka do kraja. Sajt je završen za samo 5 dana i izgleda fantastično. Mušterije sada lako nalaze informacije i zakazuju termine online.",
    avatar: "M",
  },
  {
    name: "Stefan Nikolić",
    role: "Vlasnik restorana",
    content: "Profesionalan pristup i razumevanje naših potreba. Sajt nam je doneo nove goste koji nas pronalaze preko Google-a. Toplo preporučujem!",
    avatar: "S",
  },
  {
    name: "Dr Ana Jovanović",
    role: "Stomatolog",
    content: "Konačno imamo moderan sajt koji predstavlja našu ordinaciju na pravi način. Komunikacija je bila odlična, a cena više nego fer.",
    avatar: "A",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Šta kažu naši klijenti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ponosni smo na povratne informacije od naših zadovoljnih klijenata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="card-elevated p-6">
              <Quote size={32} className="text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
