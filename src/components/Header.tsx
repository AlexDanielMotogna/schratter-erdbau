"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/fuhrpark", label: "Fuhrpark" },
  { href: "/galerie", label: "Galerie" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/jobs", label: "Jobs" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <Image
                src="/images/logo-icon/Schratter-icon.png"
                alt="Schratter Erdbau Logo"
                width={44}
                height={44}
                className="w-10 h-10 lg:w-11 lg:h-11"
                priority
              />
              <div className="ml-2">
                <span className="font-heading font-bold text-base sm:text-lg text-text">SCHRATTER</span>
                <span className="block text-micro text-muted -mt-1">ERDBAU GmbH</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-body font-body text-text hover:text-brand transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button href="/kontakt" variant="primary">
              Angebot anfordern
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+436642050460"
              className="flex items-center justify-center w-11 h-11 rounded-button border border-border hover:bg-bg-soft transition-colors"
              aria-label="Anrufen"
            >
              <Phone className="w-5 h-5 text-brand" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center w-11 h-11 rounded-button border border-border hover:bg-bg-soft transition-colors"
              aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-text" />
              ) : (
                <Menu className="w-5 h-5 text-text" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="max-w-[1200px] mx-auto px-4 py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-3 px-4 text-body font-body text-text hover:text-brand hover:bg-bg-soft rounded-button transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border">
                <Button href="/kontakt" variant="primary" className="w-full justify-center">
                  Angebot anfordern
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
