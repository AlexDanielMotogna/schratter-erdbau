import type { Metadata } from "next";
import Section from "@/components/Section";
import GalleryLightbox from "@/components/GalleryLightbox";
import { galleryImages, galleryCategories } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Einblicke in unsere Arbeit: Fotos von Transporten, Erdbauarbeiten, Kranarbeiten und unseren Maschinen im Einsatz.",
};

export default function GaleriePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-h1-mobile lg:text-h1 text-white mb-6">
              Galerie
            </h1>
            <p className="text-body-lg text-footer-text">
              Einblicke in unsere Projekte und Einsätze in der Obersteiermark.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Section>
        <GalleryLightbox images={galleryImages} categories={galleryCategories} />
      </Section>
    </>
  );
}
