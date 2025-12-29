export interface FleetItem {
  id: string;
  name: string;
  capacity?: string;
  features: string[];
  category: "lkw" | "bagger" | "zubehoer";
  image?: string;
}

export interface FleetCategory {
  id: string;
  title: string;
  description: string;
}

export const fleetCategories: FleetCategory[] = [
  {
    id: "lkw",
    title: "LKW",
    description: "Kipper, Tieflader und Rampenwagen für jeden Transport.",
  },
  {
    id: "bagger",
    title: "Bagger",
    description: "Mini-, Mobil- und Kettenbagger für alle Einsätze.",
  },
  {
    id: "zubehoer",
    title: "Zubehör",
    description: "Walzen, Dumper und weiteres Equipment.",
  },
];

export const fleetItems: FleetItem[] = [
  // LKW
  {
    id: "rampenwagen",
    name: "3-Achs Rampenwagen",
    capacity: "14to Nutzlast",
    features: ["Maschinentransport", "Schwertransport"],
    category: "lkw",
    image: "/images/Schratter-images/IMG-20240117-WA0001-768x672.jpg",
  },
  {
    id: "kipper-kran-1",
    name: "3-Achs-Kipper mit Ladekran",
    capacity: "18to Nutzlast",
    features: ["Ladekran", "Versetzarbeiten", "Materiallieferung"],
    category: "lkw",
    image: "/images/Schratter-images/WhatsApp-Bild-2024-01-17-um-09.04.32_a0cb4574.jpg",
  },
  {
    id: "kipper-kran-2",
    name: "3-Achs-Kipper",
    capacity: "16to Nutzlast",
    features: ["Schüttguttransport", "Baustellen-Logistik"],
    category: "lkw",
    image: "/images/Schratter-images/IMG-20240117-WA0004-768x576.jpg",
  },
  {
    id: "kipper-4achs-1",
    name: "4-Achs-Kipper",
    features: ["Große Ladekapazität", "Schüttguttransport"],
    category: "lkw",
  },
  {
    id: "kipper-4achs-2",
    name: "4-Achs-Kipper",
    features: ["Große Ladekapazität", "Schüttguttransport"],
    category: "lkw",
  },
  {
    id: "kipper-4achs-3",
    name: "4-Achs-Kipper",
    features: ["Große Ladekapazität", "Schüttguttransport"],
    category: "lkw",
  },
  {
    id: "kipper-4achs-4",
    name: "4-Achs-Kipper",
    features: ["Große Ladekapazität", "Schüttguttransport"],
    category: "lkw",
  },
  {
    id: "kipper-4achs-5",
    name: "4-Achs-Kipper",
    features: ["Große Ladekapazität", "Schüttguttransport"],
    category: "lkw",
  },
  {
    id: "tieflader",
    name: "3-Achs Tieflader",
    features: ["Maschinentransport", "Niedrige Ladehöhe"],
    category: "lkw",
  },

  // Bagger
  {
    id: "minibagger-18",
    name: "Mini Bagger",
    capacity: "1,8 to",
    features: ["Kleine Baustellen", "Enge Zugänge"],
    category: "bagger",
  },
  {
    id: "minibagger-6",
    name: "Mini Bagger",
    capacity: "6 to",
    features: ["Mittlere Arbeiten", "Vielseitig"],
    category: "bagger",
  },
  {
    id: "mobilbagger-1",
    name: "Mobilbagger",
    capacity: "8,5 to",
    features: ["Straßentauglich", "Flexibel"],
    category: "bagger",
  },
  {
    id: "mobilbagger-2",
    name: "Mobilbagger",
    capacity: "8,5 to",
    features: ["Straßentauglich", "Flexibel"],
    category: "bagger",
  },
  {
    id: "kettenbagger",
    name: "Kettenbagger Kurzheck",
    capacity: "23 to",
    features: ["Schwere Arbeiten", "Hohe Leistung"],
    category: "bagger",
  },

  // Zubehör
  {
    id: "walze",
    name: "Walze",
    capacity: "1,5 to",
    features: ["Verdichtung", "Asphaltarbeiten"],
    category: "zubehoer",
  },
  {
    id: "dumper",
    name: "Dumper",
    capacity: "3 to",
    features: ["Materialtransport", "Geländegängig"],
    category: "zubehoer",
  },
  {
    id: "ruettelplatte",
    name: "Rüttelplatte",
    capacity: "100 kg",
    features: ["Verdichtung", "Pflasterarbeiten"],
    category: "zubehoer",
  },
  {
    id: "stampfer",
    name: "Diesel Stampfer",
    features: ["Verdichtung", "Enge Bereiche"],
    category: "zubehoer",
  },
  {
    id: "transport-anhaenger",
    name: "Transport Anhänger",
    capacity: "3,5 to",
    features: ["Maschinentransport"],
    category: "zubehoer",
  },
  {
    id: "koffer-anhaenger",
    name: "Kofferanhänger",
    capacity: "1,2 to",
    features: ["Werkzeugtransport", "Geschlossen"],
    category: "zubehoer",
  },
];
