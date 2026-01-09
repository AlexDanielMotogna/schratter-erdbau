export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export const jobs: Job[] = [
  {
    id: "lkw-fahrer-ladekran",
    title: "LKW-Fahrer/in mit Ladekran",
    location: "Bezirk Bruck an der Mur",
    type: "Vollzeit",
    description:
      "Wir sind ein renommiertes Transportunternehmen, welches auf Baustellen- und Tieflader-Transporte, Kran- und Baggerarbeiten, Kelleraushub und Außenanlagen, Schotter- und Humuslieferungen spezialisiert ist.",
    requirements: [
      "Führerschein C & E erforderlich",
      "C 95 erforderlich",
      "Autokranführerschein erforderlich",
      "Ausreichende Deutschkenntnisse zur Verständigung",
      "Bereitschaft zu Überstunden",
      "Praxiserfahrung am Bau von Vorteil",
    ],
    benefits: [
      "Saisonelle Vollzeit",
      "Entlohnung nach KV Überbezahlung bei ausreichender Qualifikation möglich",
      "Arbeitszeiten nach Vereinbarung",
    ],
  },
  {
    id: "bagger-fahrer",
    title: "Bagger-Fahrer/in",
    location: "Bezirk Bruck an der Mur",
    type: "Vollzeit",
    description:
      "Wir sind ein renommiertes Transportunternehmen, welches auf Baustellen- und Tieflader-Transporte, Kran- und Baggerarbeiten, Kelleraushub und Außenanlagen, Schotter- und Humuslieferungen spezialisiert ist.",
    requirements: [
      "Führerschein B auf F erforderlich (E von Vorteil)",
      "Ausreichende Deutschkenntnisse zur Verständigung",
      "Bereitschaft zu Überstunden",
      "Praxiserfahrung im Bereich Aushubarbeiten und Radbagger",
    ],
    benefits: [
      "Saisonelle Vollzeit",
      "Entlohnung nach KV Überbezahlung bei ausreichender Qualifikation möglich",
      "Arbeitszeiten nach Vereinbarung",
    ],
  },
  {
    id: "lkw-fahrer",
    title: "LKW-Fahrer/in",
    location: "Bezirk Bruck an der Mur",
    type: "Vollzeit",
    description:
      "Wir sind ein renommiertes Transportunternehmen, welches auf Baustellen- und Tieflader-Transporte, Kran- und Baggerarbeiten, Kelleraushub und Außenanlagen, Schotter- und Humuslieferungen spezialisiert ist.",
    requirements: [
      "Führerschein C erforderlich (E von Vorteil)",
      "C 95 erforderlich",
      "Ausreichende Deutschkenntnisse zur Verständigung",
      "Bereitschaft zu Überstunden",
      "Praxiserfahrung am Bau von Vorteil",
    ],
    benefits: [
      "Saisonelle Vollzeit",
      "Entlohnung nach KV Überbezahlung bei ausreichender Qualifikation möglich",
      "Arbeitszeiten nach Vereinbarung",
    ],
  },
];

export const contactPerson = {
  name: "Frau Zerner",
  phone: "+43 664 20 50 460",
};
