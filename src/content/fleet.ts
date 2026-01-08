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
    name: "Rampenwagen",
    capacity: "14to Nutzlast",
    features: ["Maschinentransport", "Schwertransport"],
    category: "lkw",
    image: "/images/Schratter-images/Rampenwagen 14to nutzlast.jpeg",
  },
  {
    id: "kipper-kran-1",
    name: "Kranwagen",
    features: ["Ladekran", "Versetzarbeiten", "Materiallieferung"],
    category: "lkw",
    image: "/images/Schratter-images/Kranwagen.jpeg",
  },
  {
    id: "kipper-4achs",
    name: "4-Achs Kipper",
    features: ["Große Ladekapazität", "Schüttguttransport"],
    category: "lkw",
    image: "/images/Schratter-images/4Achs kipper.jpeg",
  },
  {
    id: "tieflader",
    name: "Tieflader",
    capacity: "23to Nutzlast",
    features: ["Maschinentransport", "Niedrige Ladehöhe"],
    category: "lkw",
    image: "/images/Schratter-images/Tieflader nutzlast 23to.jpeg",
  },
  {
    id: "klein-transporte",
    name: "Klein Transporte",
    capacity: "bis 2,8to",
    features: ["Kleine Transporte", "Flexibel"],
    category: "lkw",
    image: "/images/Schratter-images/Klein Transporte bis 2,8to.jpeg",
  },
  {
    id: "lkw-1",
    name: "Kipper mit Kran",
    features: ["Ladekran", "Maschinentransport"],
    category: "lkw",
    image: "/images/Schratter-images/Lkw1.jpeg",
  },
  {
    id: "lkw-2",
    name: "Kipper mit Kran",
    features: ["Ladekran", "Wintereinsatz"],
    category: "lkw",
    image: "/images/Schratter-images/Lkw2.jpeg",
  },
  {
    id: "lkw-3",
    name: "Tieflader",
    features: ["Maschinentransport", "Schwertransport"],
    category: "lkw",
    image: "/images/Schratter-images/Lkw3.jpeg",
  },

  // Bagger
  {
    id: "minibagger-18",
    name: "Minibagger",
    capacity: "1,8to",
    features: ["Kleine Baustellen", "Enge Zugänge"],
    category: "bagger",
    image: "/images/Schratter-images/Minibagger 1,8to.jpeg",
  },
  {
    id: "minibagger-6",
    name: "Bagger",
    capacity: "6to",
    features: ["Mittlere Arbeiten", "Vielseitig"],
    category: "bagger",
    image: "/images/Schratter-images/6to Bagger.jpeg",
  },
  {
    id: "radbagger",
    name: "Radbagger",
    capacity: "8,5to",
    features: ["Straßentauglich", "Flexibel"],
    category: "bagger",
    image: "/images/Schratter-images/8,5to Radbagger.jpeg",
  },
  {
    id: "radbagger-2",
    name: "Radbagger",
    features: ["Straßentauglich", "Flexibel"],
    category: "bagger",
    image: "/images/Schratter-images/RadBagger.jpeg",
  },
  {
    id: "kettenbagger",
    name: "Kettenbagger",
    capacity: "23to",
    features: ["Schwere Arbeiten", "Hohe Leistung"],
    category: "bagger",
    image: "/images/Schratter-images/23to Kettenbagger.jpeg",
  },

  // Zubehör
  {
    id: "walze",
    name: "Walze",
    features: ["Verdichtung", "Asphaltarbeiten"],
    category: "zubehoer",
    image: "/images/Schratter-images/Walze.jpeg",
  },
  {
    id: "dumper",
    name: "Dumper",
    features: ["Materialtransport", "Geländegängig"],
    category: "zubehoer",
    image: "/images/Schratter-images/Dumper.jpeg",
  },
  {
    id: "ruettelplatte",
    name: "Rüttelplatte",
    capacity: "100kg inkl. Gummimatte",
    features: ["Verdichtung", "Pflasterarbeiten"],
    category: "zubehoer",
    image: "/images/Schratter-images/Rüttelplatte 100kg inkl Gummimatte.jpeg",
  },
  {
    id: "stampfer",
    name: "Dieselstampfer",
    features: ["Verdichtung", "Enge Bereiche"],
    category: "zubehoer",
    image: "/images/Schratter-images/Dieselstampfer.jpeg",
  },
];
