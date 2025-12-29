import type { Metadata } from "next";
import Section from "@/components/Section";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Schratter Erdbau GmbH.",
};

export default function DatenschutzPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-heading text-h1-mobile lg:text-h1 text-white">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className="max-w-3xl">
          <div className="space-y-8 text-body text-text">
            {/* Intro */}
            <div>
              <h2 className="font-heading text-h3 text-text mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="font-heading text-h4 text-text mb-2">
                Allgemeine Hinweise
              </h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>
            </div>

            {/* Responsible Party */}
            <div>
              <h2 className="font-heading text-h3 text-text mb-4">
                2. Verantwortliche Stelle
              </h2>
              <p className="mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </p>
              <p className="mb-4">
                <strong>{company.name}</strong>
                <br />
                {company.address.street}
                <br />
                {company.address.zip} {company.address.city}
                <br />
                {company.address.country}
              </p>
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

            {/* Data Collection */}
            <div>
              <h2 className="font-heading text-h3 text-text mb-4">
                3. Datenerfassung auf dieser Website
              </h2>

              <h3 className="font-heading text-h4 text-text mb-2">
                Wer ist verantwortlich für die Datenerfassung?
              </h3>
              <p className="mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
                „Verantwortliche Stelle" entnehmen.
              </p>

              <h3 className="font-heading text-h4 text-text mb-2">
                Wie erfassen wir Ihre Daten?
              </h3>
              <p className="mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie
                in ein Kontaktformular eingeben. Andere Daten werden automatisch
                oder nach Ihrer Einwilligung beim Besuch der Website durch
                unsere IT-Systeme erfasst. Das sind vor allem technische Daten
                (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des
                Seitenaufrufs).
              </p>

              <h3 className="font-heading text-h4 text-text mb-2">
                Wofür nutzen wir Ihre Daten?
              </h3>
              <p className="mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie
                Bereitstellung der Website zu gewährleisten. Andere Daten können
                zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <h3 className="font-heading text-h4 text-text mb-2">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </h3>
              <p className="mb-4">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                können Sie diese Einwilligung jederzeit für die Zukunft
                widerrufen.
              </p>
            </div>

            {/* Hosting */}
            <div>
              <h2 className="font-heading text-h3 text-text mb-4">
                4. Hosting
              </h2>
              <p className="mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                Die Server des Hosters befinden sich in der EU. Die Erfassung
                dieser Daten erfolgt automatisch. Die Rechtsgrundlage für die
                Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-h3 text-text mb-4">
                5. Kontaktformular
              </h2>
              <p className="mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
                weiter.
              </p>
              <p className="mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
                Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                Maßnahmen erforderlich ist.
              </p>
              <p className="mb-4">
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
                bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung
                zur Speicherung widerrufen oder der Zweck für die
                Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung
                Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
                insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </div>

            {/* Storage Duration */}
            <div>
              <h2 className="font-heading text-h3 text-text mb-4">
                6. Wie lange speichern wir Ihre Daten?
              </h2>
              <p className="mb-4">
                Sofern innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                Wenn Sie ein berechtigtes Löschverlangen geltend machen oder
                eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre
                Daten gelöscht, sofern wir keine anderen rechtlich zulässigen
                Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
              </p>
            </div>

            {/* Rights */}
            <div>
              <h2 className="font-heading text-h3 text-text mb-4">
                7. Ihre Rechte
              </h2>
              <p className="mb-4">Sie haben das Recht:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                  Auskunft über Ihre bei uns gespeicherten personenbezogenen
                  Daten zu erhalten
                </li>
                <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
                <li>Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
                <li>
                  Einschränkung der Datenverarbeitung zu verlangen
                </li>
                <li>
                  Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen
                </li>
                <li>
                  Ihre Daten in einem strukturierten, gängigen und
                  maschinenlesbaren Format zu erhalten
                </li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="font-heading text-h3 text-text mb-4">
                8. Cookies
              </h2>
              <p className="mb-4">
                Unsere Website verwendet keine Cookies zu Tracking- oder
                Werbezwecken. Es werden lediglich technisch notwendige Cookies
                verwendet, die für den Betrieb der Website erforderlich sind.
              </p>
            </div>

            {/* Analytics */}
            <div>
              <h2 className="font-heading text-h3 text-text mb-4">
                9. Analyse-Tools
              </h2>
              <p className="mb-4">
                Auf dieser Website werden derzeit keine Analyse-Tools oder
                Tracking-Dienste verwendet.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="font-heading text-h3 text-text mb-4">
                10. Social Media
              </h2>
              <p className="mb-4">
                Auf unserer Website sind Links zu unseren Social-Media-Profilen
                vorhanden. Diese Links führen zu externen Websites, für deren
                Inhalte wir nicht verantwortlich sind. Bitte beachten Sie die
                Datenschutzerklärungen der jeweiligen Plattformen.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="font-heading text-h3 text-text mb-4">
                11. Änderungen dieser Datenschutzerklärung
              </h2>
              <p className="mb-4">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
                damit sie stets den aktuellen rechtlichen Anforderungen
                entspricht oder um Änderungen unserer Leistungen in der
                Datenschutzerklärung umzusetzen.
              </p>
              <p>Stand: Dezember 2024</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
