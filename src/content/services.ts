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
    image: "/images/Schratter-images/IMG-20240117-WA0009.jpg",
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
    image: "/images/Schratter-images/IMG-20240117-WA0001-768x672.jpg",
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
    image: "/images/Schratter-images/WhatsApp-Bild-2024-01-17-um-09.04.32_a0cb4574.jpg",
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
    image: "/images/Schratter-images/IMG-20240117-WA0018.jpg",
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
    image: "/images/Schratter-images/IMG-20240117-WA0019.jpg",
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
    image: "/images/Schratter-images/WhatsApp-Bild-2025-05-20-um-13.04.34_b319a7c3-768x1024.jpg",
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
    image: "/images/Schratter-images/1.1-1024x729.jpg",
  },
];
