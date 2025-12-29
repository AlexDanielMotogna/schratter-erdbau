import type { Metadata } from "next";
import Section from "@/components/Section";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Informationen der Schratter Erdbau GmbH.",
};

export default function ImpressumPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-heading text-h1-mobile lg:text-h1 text-white">
            Impressum
          </h1>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className="max-w-3xl">
          <div className="prose prose-lg">
            <h2 className="font-heading text-h3 text-text mb-4">
              Angaben gemäß § 5 ECG
            </h2>

            <div className="space-y-6 text-body text-text">
              <div>
                <p className="font-heading font-bold text-h4 mb-2">
                  {company.name}
                </p>
                <p>
                  {company.address.street}
                  <br />
                  {company.address.zip} {company.address.city}
                  <br />
                  {company.address.country}
                </p>
              </div>

              <div>
                <p className="font-heading font-bold text-h4 mb-2">Kontakt</p>
                <p>
                  Telefon:{" "}
                  <a
                    href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                    className="text-brand hover:underline"
                  >
                    {company.contact.phone}
                  </a>
                  <br />
                  E-Mail:{" "}
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="text-brand hover:underline"
                  >
                    {company.contact.email}
                  </a>
                </p>
              </div>

              <div>
                <p className="font-heading font-bold text-h4 mb-2">
                  Unternehmensgegenstand
                </p>
                <p>{company.legal.trade}</p>
              </div>

              <div>
                <p className="font-heading font-bold text-h4 mb-2">
                  UID-Nummer
                </p>
                <p>{company.legal.uid}</p>
              </div>

              <div>
                <p className="font-heading font-bold text-h4 mb-2">
                  Firmenbuchnummer
                </p>
                <p>
                  FN {company.legal.fn}
                  <br />
                  {company.legal.court}
                </p>
              </div>

              <div>
                <p className="font-heading font-bold text-h4 mb-2">
                  Gewerbeberechtigung
                </p>
                <p>
                  Gewerbeberechtigung laut WKO: {company.legal.trade}
                </p>
              </div>

              <div>
                <p className="font-heading font-bold text-h4 mb-2">
                  Aufsichtsbehörde
                </p>
                <p>Bezirkshauptmannschaft Bruck-Mürzzuschlag</p>
              </div>

              <div>
                <p className="font-heading font-bold text-h4 mb-2">
                  Berufsrecht
                </p>
                <p>
                  Gewerbeordnung:{" "}
                  <a
                    href="https://www.ris.bka.gv.at"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:underline"
                  >
                    www.ris.bka.gv.at
                  </a>
                </p>
              </div>

              <div>
                <p className="font-heading font-bold text-h4 mb-2">
                  Verbraucherstreitbeilegung
                </p>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <p className="font-heading font-bold text-h4 mb-2">
                  Haftung für Inhalte
                </p>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 ECG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich. Nach §§ 8 bis 10 ECG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                  gespeicherte fremde Informationen zu überwachen oder nach
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                  hinweisen.
                </p>
              </div>

              <div>
                <p className="font-heading font-bold text-h4 mb-2">
                  Haftung für Links
                </p>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                  für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                  die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>

              <div>
                <p className="font-heading font-bold text-h4 mb-2">
                  Urheberrecht
                </p>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem österreichischen Urheberrecht.
                  Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                  der Verwertung außerhalb der Grenzen des Urheberrechtes
                  bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                  bzw. Erstellers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
