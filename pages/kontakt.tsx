import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { contact, prices } from "@/shared/prices";
import { PackageType } from "@/shared/packages";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const router = useRouter();
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("xzdddqrv");
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  // Read package from URL query parameter
  useEffect(() => {
    if (router.isReady) {
      const paket = router.query.paket as PackageType | undefined;
      if (paket && ["basic", "standard", "custom"].includes(paket)) {
        setSelectedPackage(paket);
      }
    }
  }, [router.isReady, router.query.paket]);

  // Show toast when form submission succeeds
  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Poruka poslata!",
        description: "Hvala vam na interesovanju. Javićemo vam se uskoro.",
      });
    }
  }, [state.succeeded, toast]);

  return (
    <>
      <Head>
        <title>Kontakt | Webino - Zatražite besplatnu ponudu</title>
        <meta
          name="description"
          content="Kontaktirajte Webino tim za besplatnu konsultaciju. Pošaljite upit za izradu web sajta ili nas pozovite. Odgovaramo u najkraćem roku."
        />
        <link rel="canonical" href="https://webino.rs/kontakt" />
        <meta property="og:url" content="https://webino.rs/kontakt" />
        <meta property="og:title" content="Kontakt | Webino" />
        <meta
          property="og:description"
          content="Kontaktirajte nas za besplatnu konsultaciju. Javićemo vam se u najkraćem roku."
        />
      </Head>
      <Layout>
        {/* Hero */}
        <section className="hero-gradient-bg section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                Kontaktirajte nas
              </h1>
              <p className="text-lg text-muted-foreground">
                Imate pitanje ili želite da pokrenete projekat? Pošaljite nam
                poruku i javićemo vam se u najkraćem roku.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Pošaljite upit</h2>

                {state.succeeded ? (
                  <div className="card-elevated p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Hvala vam!</h3>
                    <p className="text-muted-foreground">
                      Vaša poruka je uspešno poslata. Javićemo vam se u
                      najkraćem roku.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                        >
                          Ime i prezime *
                        </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="Vaše ime"
                      />
                      <ValidationError
                        prefix="Ime"
                        field="name"
                        errors={state.errors}
                        className="text-sm text-red-500 mt-1"
                      />
                    </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium mb-2"
                        >
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="+381 64 ..."
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email adresa *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="vas@email.com"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-sm text-red-500 mt-1"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="business"
                        className="block text-sm font-medium mb-2"
                      >
                        Vrsta biznisa
                      </label>
                      <select
                        id="business"
                        name="business"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      >
                        <option value="">Izaberite...</option>
                        <option value="salon">
                          Frizerski/Kozmetički salon
                        </option>
                        <option value="restaurant">Restoran/Kafić</option>
                        <option value="dental">Stomatološka ordinacija</option>
                        <option value="fitness">Fitnes studio</option>
                        <option value="retail">Maloprodaja</option>
                        <option value="service">Usluge</option>
                        <option value="other">Drugo</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="package"
                        className="block text-sm font-medium mb-2"
                      >
                        Zainteresovani ste za
                      </label>
                      <select
                        id="package"
                        name="package"
                        value={selectedPackage}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      >
                        <option value="">Izaberite paket...</option>
                        <option value="basic">
                          Basic ({prices.basic.discountedPrice}€)
                        </option>
                        <option value="standard">
                          Standard ({prices.standard.discountedPrice}€)
                        </option>
                        <option value="custom">Custom (po dogovoru)</option>
                        <option value="unsure">Nisam siguran/na</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Vaša poruka *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                        placeholder="Opišite šta vam je potrebno..."
                      />
                      <ValidationError
                        prefix="Poruka"
                        field="message"
                        errors={state.errors}
                        className="text-sm text-red-500 mt-1"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="btn-accent w-full gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? (
                        "Slanje..."
                      ) : (
                        <>
                          Pošalji upit
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Kontakt informacije</h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefon</h3>
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Lokacija</h3>
                      <p className="text-muted-foreground">{contact.address}</p>
                    </div>
                  </div>
                </div>

                <div className="card-elevated p-6">
                  <h3 className="font-semibold mb-3">Radno vreme</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Ponedeljak - Petak</span>
                      <span className="font-medium text-foreground">
                        10:00 - 18:00
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Subota</span>
                      <span className="font-medium text-foreground">
                        10:00 - 14:00
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Nedelja</span>
                      <span className="font-medium text-foreground">
                        Zatvoreno
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Besplatna konsultacija:
                    </span>{" "}
                    Prvi razgovor je potpuno besplatan. Pozovite nas ili
                    pošaljite poruku i zajedno ćemo pronaći najbolje rešenje za
                    vaš biznis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
