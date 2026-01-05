import { Truck, Container, Construction, Shovel, Home, TreePine, Mountain } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: typeof Truck;
  features: string[];
  image?: string;
}

export const services: Service[] = [
  {
    id: "baustellen-transporte",
    title: "Baustellen-Transporte",
    description: "Zuverlässige Transporte für Ihre Baustelle mit modernem Fuhrpark.",
    icon: Truck,
    features: [
      "Kipper-Transporte",
      "Materiallieferung",
      "Termingerechte Zustellung",
    ],
    image: "/images/Schratter-images/kipper-transport.jpg",
  },
  {
    id: "tieflader-transporte",
    title: "Tieflader-Transporte",
    description: "Transport von schweren Maschinen und Baugeräten.",
    icon: Container,
    features: [
      "Bis zu 14to Nutzlast",
      "3-Achs Rampenwagen",
      "Überbreite möglich",
    ],
    image: "/images/Schratter-images/tieflader-transport.jpg",
  },
  {
    id: "kranarbeiten",
    title: "Kran- & Ladekranarbeiten",
    description: "Präzise Kranarbeiten für schwere Lasten.",
    icon: Construction,
    features: [
      "Ladekran-Arbeiten",
      "Versetzarbeiten",
      "Montagearbeiten",
    ],
    image: "/images/Schratter-images/kran-arbeiten.jpg",
  },
  {
    id: "baggerarbeiten",
    title: "Baggerarbeiten",
    description: "Professionelle Baggerarbeiten mit verschiedenen Maschinengrößen.",
    icon: Shovel,
    features: [
      "Mini-Bagger ab 1,8to",
      "Mobilbagger bis 8,5to",
      "Kettenbagger bis 23to",
    ],
    image: "/images/Schratter-images/bagger-arbeit.jpg",
  },
  {
    id: "kelleraushub",
    title: "Kelleraushub",
    description: "Fachgerechter Aushub für Keller und Fundamente.",
    icon: Home,
    features: [
      "Präziser Aushub",
      "Materialabtransport",
      "Verfüllung",
    ],
    image: "/images/Schratter-images/kelleraushub-projekt.jpg",
  },
  {
    id: "aussenanlagen",
    title: "Außenanlagen",
    description: "Gestaltung und Vorbereitung von Außenanlagen.",
    icon: TreePine,
    features: [
      "Geländemodellierung",
      "Pflastervorarbeiten",
      "Entwässerung",
    ],
    image: "/images/Schratter-images/aussenanlagen-gestaltung.jpg",
  },
  {
    id: "schotter-humus",
    title: "Schotter- & Humuslieferung",
    description: "Lieferung von Schotter, Humus und anderen Schüttgütern.",
    icon: Mountain,
    features: [
      "Schotter verschiedener Körnung",
      "Humus",
      "Lieferung frei Baustelle",
    ],
    image: "/images/Schratter-images/schotter-lieferung.jpg",
  },
];
