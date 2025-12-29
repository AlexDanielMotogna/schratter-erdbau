import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Schratter Erdbau GmbH | Transport & Erdbau aus Kapfenberg",
    template: "%s | Schratter Erdbau GmbH",
  },
  description:
    "Ihr verlässlicher Partner für Baustellen-Transporte, Tieflader, Kran- und Baggerarbeiten in der Obersteiermark. Schotter & Humus Lieferungen aus Kapfenberg.",
  keywords: [
    "Transport",
    "Erdbau",
    "Kapfenberg",
    "Obersteiermark",
    "Baggerarbeiten",
    "Kranarbeiten",
    "Tieflader",
    "Schotter",
    "Humus",
  ],
  authors: [{ name: "Schratter Erdbau GmbH" }],
  creator: "Schratter Erdbau GmbH",
  icons: {
    icon: "/images/logo-icon/Schratter-icon.png",
    apple: "/images/logo-icon/Schratter-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://schratter-erdbau.at",
    siteName: "Schratter Erdbau GmbH",
    title: "Schratter Erdbau GmbH | Transport & Erdbau aus Kapfenberg",
    description:
      "Ihr verlässlicher Partner für Baustellen-Transporte, Tieflader, Kran- und Baggerarbeiten in der Obersteiermark.",
    images: [
      {
        url: "/images/logo-icon/Schratter-icon.png",
        width: 512,
        height: 512,
        alt: "Schratter Erdbau GmbH Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schratter Erdbau GmbH | Transport & Erdbau",
    description:
      "Baustellen-Transporte, Tieflader, Kran- und Baggerarbeiten in der Obersteiermark.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
