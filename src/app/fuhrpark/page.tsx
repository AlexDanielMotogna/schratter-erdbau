import type { Metadata } from "next";
import { ArrowRight, Phone } from "lucide-react";
import Section, { SectionHeader } from "@/components/Section";
import Button from "@/components/Button";
import FleetCard from "@/components/FleetCard";
import { fleetItems, fleetCategories } from "@/content/fleet";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Fuhrpark",
  description:
    "Unser moderner Fuhrpark: LKW, Kipper, Tieflader, Mini- und Mobilbagger, Kettenbagger und Zubehör für alle Anforderungen.",
};

export default function FuhrparkPage() {
  // Count items per category
  const lkwCount = fleetItems.filter((item) => item.category === "lkw").length;
  const baggerCount = fleetItems.filter(
    (item) => item.category === "bagger"
  ).length;
  const zubehoerCount = fleetItems.filter(
    (item) => item.category === "zubehoer"
  ).length;

  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-h1-mobile lg:text-h1 text-white mb-6">
              Unser Fuhrpark
            </h1>
            <p className="text-body-lg text-footer-text mb-8">
              Moderne Maschinen und Fahrzeuge für jeden Einsatz. Verlässlich und
              leistungsstark.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="font-heading text-h2 text-brand">{lkwCount}</p>
                <p className="text-footer-text">LKW & Kipper</p>
              </div>
              <div>
                <p className="font-heading text-h2 text-brand">{baggerCount}</p>
                <p className="text-footer-text">Bagger</p>
              </div>
              <div>
                <p className="font-heading text-h2 text-brand">
                  {zubehoerCount}
                </p>
                <p className="text-footer-text">Zubehör</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Categories */}
      {fleetCategories.map((category) => {
        const categoryItems = fleetItems.filter(
          (item) => item.category === category.id
        );
        return (
          <Section
            key={category.id}
            id={category.id}
            background={category.id === "bagger" ? "soft" : "white"}
          >
            <SectionHeader
              title={category.title}
              subtitle={category.description}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryItems.map((item) => (
                <FleetCard key={item.id} item={item} />
              ))}
            </div>
          </Section>
        );
      })}

      {/* CTA Section */}
      <section className="bg-bg py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-h2-mobile lg:text-h2 text-white mb-4">
            Maschinen anfragen
          </h2>
          <p className="text-body-lg text-footer-text mb-8 max-w-xl mx-auto">
            Sie benötigen eine bestimmte Maschine? Kontaktieren Sie uns.
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
