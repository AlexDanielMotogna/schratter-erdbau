import type { Metadata } from "next";
import { Phone, Mail, CheckCircle, Briefcase } from "lucide-react";
import Section, { SectionHeader } from "@/components/Section";
import Card, { CardHeader, CardDescription } from "@/components/Card";
import Button from "@/components/Button";
import { jobs, contactPerson } from "@/content/jobs";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Jobs",
  description:
    "Stellenangebote bei Schratter Erdbau GmbH: LKW-Fahrer/in, Bagger-Fahrer/in und mehr. Jetzt bewerben!",
};

export default function JobsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-h1-mobile lg:text-h1 text-white mb-6">
              Karriere bei Schratter Erdbau
            </h1>
            <p className="text-body-lg text-footer-text mb-8">
              Wir suchen Verstärkung für unser Team. Arbeiten Sie mit modernen
              Maschinen und werden Sie Teil eines verlässlichen Teams in der
              Obersteiermark.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 px-[18px] py-[14px] rounded-button font-body font-semibold text-[16px] bg-brand text-white hover:bg-brand-dark transition-all duration-200 min-h-[44px]"
              >
                <Phone className="w-5 h-5" />
                Jetzt anrufen
              </a>
              <a
                href={`mailto:${company.contact.email}?subject=Bewerbung`}
                className="inline-flex items-center gap-2 px-[18px] py-[14px] rounded-button font-body font-semibold text-[16px] bg-white/10 text-white hover:bg-white/20 transition-all duration-200 min-h-[44px] border border-white/20"
              >
                <Mail className="w-5 h-5" />
                E-Mail senden
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <Section background="soft">
        <SectionHeader
          title="Offene Stellen"
          subtitle="Zur Verstärkung suchen wir:"
        />
        <div className="space-y-8">
          {jobs.map((job) => (
            <Card key={job.id} hover={false} className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="w-14 h-14 rounded-card bg-brand-soft flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-7 h-7 text-brand" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <CardHeader className="text-h3">{job.title}</CardHeader>
                    <span className="px-3 py-1 bg-brand-soft text-brand text-micro font-semibold rounded-button">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-small text-muted mb-4">
                    {job.location}
                  </p>
                  <CardDescription className="text-body mb-6">
                    {job.description}
                  </CardDescription>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Requirements */}
                    <div>
                      <h4 className="font-heading font-bold text-h4 text-text mb-4">
                        Anforderungen
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-small text-text"
                          >
                            <span className="text-brand mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-heading font-bold text-h4 text-text mb-4">
                        Wir bieten
                      </h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-small text-text"
                          >
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-small text-muted mb-4">
                      Vorstellung nach telefonischer Vereinbarung bei{" "}
                      {contactPerson.name} unter{" "}
                      <a
                        href={`tel:${contactPerson.phone.replace(/\s/g, "")}`}
                        className="text-brand hover:underline font-semibold"
                      >
                        {contactPerson.phone}
                      </a>
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={`tel:${contactPerson.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-button font-body font-semibold text-small bg-brand text-white hover:bg-brand-dark transition-all"
                      >
                        <Phone className="w-4 h-4" />
                        Anrufen
                      </a>
                      <a
                        href={`mailto:${company.contact.email}?subject=Bewerbung: ${job.title}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-button font-body font-semibold text-small border border-border text-text hover:bg-bg-soft transition-all"
                      >
                        <Mail className="w-4 h-4" />
                        E-Mail senden
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Company Info */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-h2-mobile lg:text-h2 text-text mb-4">
            Über uns
          </h2>
          <p className="text-body-lg text-muted mb-8">
            Schratter Erdbau GmbH ist ein renommiertes Transportunternehmen in
            der Obersteiermark. Wir sind spezialisiert auf Baustellen- und
            Tieflader-Transporte, Kran- und Baggerarbeiten, Kelleraushub und
            Außenanlagen sowie Schotter- und Humuslieferungen.
          </p>
          <div className="bg-bg-soft rounded-card p-8">
            <p className="font-heading font-bold text-h4 text-text mb-2">
              {company.name}
            </p>
            <p className="text-body text-muted">
              {company.address.street}
              <br />
              {company.address.zip} {company.address.city}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
