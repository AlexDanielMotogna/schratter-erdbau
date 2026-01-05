import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import Section from "@/components/Section";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Schratter Erdbau GmbH für ein unverbindliches Angebot. Telefon, E-Mail oder Kontaktformular.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-h1-mobile lg:text-h1 text-white mb-6">
              Kontakt
            </h1>
            <p className="text-body-lg text-footer-text">
              Wir freuen uns auf Ihre Anfrage. Rufen Sie uns an oder senden Sie
              uns eine Nachricht.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-h2-mobile lg:text-h2 text-text mb-8">
              So erreichen Sie uns
            </h2>

            <div className="space-y-8">
              {/* Phone */}
              <a
                href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-14 h-14 rounded-full bg-brand-soft flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors">
                  <Phone className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-small text-muted mb-1">Telefon</p>
                  <p className="font-heading font-bold text-h3 text-text group-hover:text-brand transition-colors">
                    {company.contact.phone}
                  </p>
                  <p className="text-small text-muted mt-1">
                    Ansprechpartnerin: {company.contact.contactPerson}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${company.contact.email}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-14 h-14 rounded-full bg-brand-soft flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors">
                  <Mail className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-small text-muted mb-1">E-Mail</p>
                  <p className="font-heading font-bold text-h3 text-text group-hover:text-brand transition-colors">
                    {company.contact.email}
                  </p>
                </div>
              </a>

              {/* Address */}
              <a
                href={`https://maps.google.com/?q=${company.address.street},+${company.address.zip}+${company.address.city}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-14 h-14 rounded-full bg-brand-soft flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors">
                  <MapPin className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-small text-muted mb-1">Adresse</p>
                  <p className="font-heading font-bold text-h4 text-text group-hover:text-brand transition-colors">
                    {company.name}
                  </p>
                  <p className="text-body text-text">
                    {company.address.street}
                    <br />
                    {company.address.zip} {company.address.city}
                    <br />
                    {company.address.country}
                  </p>
                </div>
              </a>
            </div>

            {/* Map */}
            <div className="mt-10 h-[300px] bg-bg-soft rounded-card overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=P%C3%B6tschenweg+1,+8605+Kapfenberg,+Austria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Schratter Erdbau GmbH"
              />
            </div>
          </div>

        </div>
      </Section>
    </>
  );
}
