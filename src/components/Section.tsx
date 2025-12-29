import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "soft" | "dark";
  id?: string;
}

export default function Section({
  children,
  className = "",
  background = "white",
  id,
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    soft: "bg-bg-soft",
    dark: "bg-bg text-white",
  };

  return (
    <section
      id={id}
      className={`py-16 lg:py-24 ${backgrounds[background]} ${className}`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="font-heading text-h2-mobile lg:text-h2 text-text">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-body-lg text-muted max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
