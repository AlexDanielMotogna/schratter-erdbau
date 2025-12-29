import type { Metadata } from "next";
import { ArrowRight, Phone } from "lucide-react";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import { services } from "@/content/services";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Transport, Erdbau, Kranarbeiten und mehr. Unsere Leistungen im Überblick: Baustellen-Transporte, Tieflader, Baggerarbeiten, Kelleraushub, Schotter- und Humuslieferung.",
};

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-h1-mobile lg:text-h1 text-white mb-6">
              Unsere Leistungen
            </h1>
            <p className="text-body-lg text-footer-text">
              Von Baustellen-Transporten über Baggerarbeiten bis hin zu
              Schotter- und Humuslieferungen – alles aus einer Hand.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Section background="soft">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-bg py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-h2-mobile lg:text-h2 text-white mb-4">
            Interesse an unseren Leistungen?
          </h2>
          <p className="text-body-lg text-footer-text mb-8 max-w-xl mx-auto">
            Kontaktieren Sie uns für ein unverbindliches Angebot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="primary">
              Angebot anfordern
              <ArrowRight className="w-5 h-5" />
            </Button>
            <a
              href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-[18px] py-[14px] rounded-button font-body font-semibold text-[16px] bg-white/10 text-white hover:bg-white/20 transition-all duration-200 min-h-[44px] border border-white/20"
            >
              <Phone className="w-5 h-5" />
              {company.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
