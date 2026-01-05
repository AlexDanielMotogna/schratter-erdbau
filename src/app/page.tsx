import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  MapPin,
  Truck,
} from "lucide-react";
import Button from "@/components/Button";
import Section, { SectionHeader } from "@/components/Section";
import Card, { CardHeader } from "@/components/Card";
import ServiceCard from "@/components/ServiceCard";
import FacebookReels from "@/components/FacebookReels";
import { services } from "@/content/services";
import { fleetItems } from "@/content/fleet";
import { trustBadges, company } from "@/content/company";
import { galleryImages } from "@/content/gallery";

export default function Home() {
  // Get first 6 services for homepage
  const featuredServices = services.slice(0, 6);
  // Get 3 fleet items for preview
  const featuredFleet = fleetItems.filter((item) => item.category === "lkw").slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-bg">
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/Schratter-images/hero-baustelle.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/60" />

        <div className="relative max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="font-heading text-h1-mobile lg:text-h1 text-white mb-6">
              Transport & Erdbau aus Kapfenberg
            </h1>
            <p className="text-body-lg text-footer-text mb-8">
              Baustellen- und Tieflader-Transporte, Kran- und Baggerarbeiten.
              Ihr verlässlicher Partner in der Obersteiermark.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kontakt" variant="primary">
                Angebot anfordern
                <ArrowRight className="w-5 h-5" />
              </Button>
              <a
                href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 px-[18px] py-[14px] rounded-button font-body font-semibold text-[16px] bg-white/10 text-white hover:bg-white/20 transition-all duration-200 min-h-[44px] border border-white/20"
              >
                <Phone className="w-5 h-5" />
                Jetzt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-b border-border">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.id} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-soft flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <p className="font-heading font-bold text-small text-text">
                    {badge.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section background="soft">
        <SectionHeader
          title="Unsere Leistungen"
          subtitle="Professionelle Transport- und Erdbauarbeiten aus einer Hand."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/leistungen" variant="secondary">
            Alle Leistungen ansehen
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </Section>

      {/* Fleet Preview */}
      <Section>
        <SectionHeader
          title="Unser Fuhrpark"
          subtitle="Moderne Maschinen für jeden Einsatz."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredFleet.map((item) => (
            <Card key={item.id}>
              <div className="h-40 bg-bg-soft rounded-image mb-4 overflow-hidden relative">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Truck className="w-12 h-12 text-muted" />
                  </div>
                )}
              </div>
              <CardHeader>{item.name}</CardHeader>
              {item.capacity && (
                <p className="text-brand font-semibold text-small mt-1">
                  {item.capacity}
                </p>
              )}
              <ul className="mt-3 space-y-1">
                {item.features.map((feature, index) => (
                  <li key={index} className="text-small text-muted">
                    • {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/fuhrpark" variant="secondary">
            Fuhrpark ansehen
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </Section>

      {/* Gallery Preview */}
      <Section background="soft">
        <SectionHeader
          title="Einblicke in unsere Arbeit"
          subtitle="Projekte und Einsätze aus der Region."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.slice(0, 6).map((image) => (
            <div
              key={image.id}
              className="aspect-[4/3] bg-border rounded-image overflow-hidden relative"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/galerie" variant="secondary">
            Galerie ansehen
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </Section>

{/* Facebook Reels Section - temporarily disabled
      <Section>
        <SectionHeader
          title="Videos & Reels"
          subtitle="Folgen Sie uns auf Facebook für aktuelle Einblicke."
        />
        <FacebookReels />
        <div className="mt-8 text-center">
          <Button
            href="https://www.facebook.com/Schratter.Erdbau/reels/"
            variant="secondary"
            target="_blank"
          >
            Mehr auf Facebook
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </Section>
      */}

      {/* CTA Band */}
      <section className="bg-bg py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-heading text-h2-mobile lg:text-h2 text-white mb-2">
                Schnell ein Angebot?
              </h2>
              <p className="text-body-lg text-footer-text">
                Rufen Sie uns an oder senden Sie eine Anfrage.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kontakt" variant="primary">
                Angebot anfordern
                <ArrowRight className="w-5 h-5" />
              </Button>
              <a
                href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 px-[18px] py-[14px] rounded-button font-body font-semibold text-[16px] bg-white/10 text-white hover:bg-white/20 transition-all duration-200 min-h-[44px] border border-white/20"
              >
                <Phone className="w-5 h-5" />
                {company.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Summary */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader
              title="Kontakt"
              subtitle="Wir freuen uns auf Ihre Anfrage."
            />
            <div className="space-y-6">
              <a
                href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-brand-soft flex items-center justify-center group-hover:bg-brand transition-colors">
                  <Phone className="w-5 h-5 text-brand group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-small text-muted">Telefon</p>
                  <p className="font-heading font-bold text-h4 text-text group-hover:text-brand transition-colors">
                    {company.contact.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${company.contact.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-brand-soft flex items-center justify-center group-hover:bg-brand transition-colors">
                  <ArrowRight className="w-5 h-5 text-brand group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-small text-muted">E-Mail</p>
                  <p className="font-heading font-bold text-h4 text-text group-hover:text-brand transition-colors">
                    {company.contact.email}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-soft flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <p className="text-small text-muted">Adresse</p>
                  <p className="font-heading font-bold text-h4 text-text">
                    {company.address.street}
                  </p>
                  <p className="text-body text-muted">
                    {company.address.zip} {company.address.city}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="h-[300px] lg:h-auto min-h-[300px] bg-bg-soft rounded-card overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=P%C3%B6tschenweg+1,+8605+Kapfenberg,+Austria&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Schratter Erdbau GmbH Standort"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
