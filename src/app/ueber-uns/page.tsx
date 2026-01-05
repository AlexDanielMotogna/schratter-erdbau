import type { Metadata } from "next";
import { CheckCircle, Calendar, Users, Award, Truck } from "lucide-react";
import Section, { SectionHeader } from "@/components/Section";
import { company, aboutText } from "@/content/company";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Seit 1983 Ihr verlässlicher Partner für Transport und Erdbau in der Obersteiermark. Familienunternehmen in zweiter Generation.",
};

const milestones = [
  {
    year: "1983",
    title: "Gründung",
    description: "Hugo und Brigitte Schratter gründen das Unternehmen mit dem Ziel, qualitativ hochwertige Erdbau- und Transportdienstleistungen anzubieten.",
  },
  {
    year: "1990er",
    title: "Expansion",
    description: "Der Fuhrpark wächst, die Mitarbeiterzahl steigt und das Leistungsspektrum wird kontinuierlich erweitert.",
  },
  {
    year: "2010",
    title: "Neue Generation",
    description: "Petra Zerner und Manfred Zerner übernehmen die Geschäftsführung und führen das Familienunternehmen in die nächste Generation.",
  },
  {
    year: "Heute",
    title: "40+ Jahre Erfahrung",
    description: "Mit modernem Fuhrpark und eingespieltem Team sind wir Ihr verlässlicher Partner in der Obersteiermark.",
  },
];

const values = [
  {
    title: "Zuverlässigkeit",
    description: "Wir halten, was wir versprechen. Termintreue und Verlässlichkeit sind unser Markenzeichen.",
  },
  {
    title: "Präzision",
    description: "Jeder Auftrag wird mit höchster Sorgfalt und Genauigkeit ausgeführt.",
  },
  {
    title: "Handschlagqualität",
    description: "Bei uns gilt noch das Wort. Persönliche Betreuung und ehrliche Kommunikation.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-h1-mobile lg:text-h1 text-white mb-6">
              Über 40 Jahre Ihr Partner am Bau
            </h1>
            <p className="text-body-lg text-footer-text">
              {aboutText.short}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-border">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-brand-soft flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-7 h-7 text-brand" />
              </div>
              <p className="font-heading font-bold text-h2 text-brand">1983</p>
              <p className="text-small text-muted">Gegründet</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-brand-soft flex items-center justify-center mx-auto mb-3">
                <Users className="w-7 h-7 text-brand" />
              </div>
              <p className="font-heading font-bold text-h2 text-brand">2. Gen.</p>
              <p className="text-small text-muted">Familiengeführt</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-brand-soft flex items-center justify-center mx-auto mb-3">
                <Truck className="w-7 h-7 text-brand" />
              </div>
              <p className="font-heading font-bold text-h2 text-brand">15+</p>
              <p className="text-small text-muted">Fahrzeuge & Maschinen</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-brand-soft flex items-center justify-center mx-auto mb-3">
                <Award className="w-7 h-7 text-brand" />
              </div>
              <p className="font-heading font-bold text-h2 text-brand">40+</p>
              <p className="text-small text-muted">Jahre Erfahrung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Geschichte */}
      <Section>
        <SectionHeader
          title="Unsere Geschichte"
          subtitle="Von der Gründung bis heute – ein Familienunternehmen mit Tradition."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-card bg-brand text-white flex items-center justify-center font-heading font-bold text-small">
                    {milestone.year}
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-h4 text-text mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-body text-muted">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            {/* Placeholder for company/team image */}
            <div className="aspect-[4/3] bg-bg-soft rounded-card overflow-hidden mb-6">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-muted">Bild der Familie/Firma</span>
              </div>
            </div>
            <div className="bg-bg-soft rounded-card p-6">
              <p className="text-body text-text italic">
                „{aboutText.values}"
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Werte */}
      <Section background="soft">
        <SectionHeader
          title="Unsere Werte"
          subtitle="Was uns seit über 40 Jahren auszeichnet."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-card p-8 text-center shadow-card"
            >
              <div className="w-14 h-14 rounded-full bg-brand-soft flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-brand" />
              </div>
              <h3 className="font-heading font-bold text-h4 text-text mb-3">
                {value.title}
              </h3>
              <p className="text-body text-muted">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Geschäftsführung */}
      <Section>
        <SectionHeader
          title="Geschäftsführung"
          subtitle="Petra Zerner und Manfred Zerner führen das Unternehmen seit 2010."
        />
        <div className="max-w-2xl">
          <div className="bg-bg-soft rounded-card p-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Placeholder for photo */}
              <div className="w-24 h-24 rounded-full bg-border flex-shrink-0 flex items-center justify-center">
                <Users className="w-10 h-10 text-muted" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-h3 text-text mb-2">
                  {company.currentManagement.names}
                </h3>
                <p className="text-small text-brand font-semibold mb-3">
                  Geschäftsführung seit {company.currentManagement.since}
                </p>
                <p className="text-body text-muted">
                  Mit frischem Elan und unternehmerischem Weitblick führen sie das
                  Familienunternehmen in die nächste Generation – immer mit dem
                  Anspruch, die Werte der Gründer weiterzuleben.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Gründer */}
      <Section background="soft">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-h3 text-text mb-4">
            Gegründet von {company.founders}
          </h2>
          <p className="text-body text-muted">
            1983 mit der Vision, qualitativ hochwertige und zuverlässige Leistungen
            im Bereich Baggerarbeiten und Baustellenlogistik anzubieten. Diese Vision
            lebt bis heute in jedem Projekt weiter.
          </p>
        </div>
      </Section>
    </>
  );
}
