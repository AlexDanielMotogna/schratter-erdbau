import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { company } from "@/content/company";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/fuhrpark", label: "Fuhrpark" },
  { href: "/galerie", label: "Galerie" },
  { href: "/jobs", label: "Jobs" },
  { href: "/kontakt", label: "Kontakt" },
];

const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutzerklärung" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg text-footer-text">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-6">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+436642050460"
                  className="flex items-start gap-3 text-footer-link hover:text-brand transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>+43 664 20 50 460</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:office@schratter-erdbau.at"
                  className="flex items-start gap-3 text-footer-link hover:text-brand transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>office@schratter-erdbau.at</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Pötschenweg+1,+8605+Kapfenberg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-footer-link hover:text-brand transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>
                    Pötschenweg 1<br />
                    8605 Kapfenberg
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-footer-link hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-6">
              Rechtliches
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-footer-link hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Info */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-6">
              Social
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={company.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-footer-link hover:text-brand transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={company.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-footer-link hover:text-brand transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-surface">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-small text-footer-text">
              © Schratter Erdbau GmbH {currentYear}
            </p>
            <a
              href="https://motogna.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-small text-footer-text hover:text-brand transition-colors"
            >
              Website by MOTOGNA Tech Studio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
