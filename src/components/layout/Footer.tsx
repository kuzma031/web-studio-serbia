import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { contact } from "@/shared/prices";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border text-foreground">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">
                  W
                </span>
              </div>
              <span className="text-xl font-bold">Webino</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Izrađujemo moderne i pristupačne sajtove za male lokalne biznise u
              Srbiji. Vaš uspeh online počinje ovde.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Brzi linkovi</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/o-nama"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  O nama
                </Link>
              </li>
              <li>
                <Link
                  href="/paketi"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Paketi
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/portfolio"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Portfolio
                </Link>
              </li> */}
              <li>
                <Link
                  href="/kontakt"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Usluge</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground text-sm">Web dizajn</li>
              <li className="text-muted-foreground text-sm">
                Responzivni sajtovi
              </li>
              <li className="text-muted-foreground text-sm">SEO optimizacija</li>
              <li className="text-muted-foreground text-sm">Web aplikacije</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail size={16} />
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone size={16} />
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:text-foreground transition-colors"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin size={16} />
                <span>{contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Webino. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
