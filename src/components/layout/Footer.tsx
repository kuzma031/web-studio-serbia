import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { contact } from "@/shared/prices";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
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
            <p className="text-background/70 text-sm leading-relaxed">
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
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  O nama
                </Link>
              </li>
              <li>
                <Link
                  href="/paketi"
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  Paketi
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/portfolio"
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  Portfolio
                </Link>
              </li> */}
              <li>
                <Link
                  href="/kontakt"
                  className="text-background/70 hover:text-background text-sm transition-colors"
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
              <li className="text-background/70 text-sm">Web dizajn</li>
              <li className="text-background/70 text-sm">
                Responzivni sajtovi
              </li>
              <li className="text-background/70 text-sm">SEO optimizacija</li>
              <li className="text-background/70 text-sm">Web aplikacije</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail size={16} />
                <span>{contact.email}</span>
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone size={16} />
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <MapPin size={16} />
                <span>{contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Webino. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
