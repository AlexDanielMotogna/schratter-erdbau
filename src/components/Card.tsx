import { ReactNode } from "react";
import Link from "next/link";

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  href,
  className = "",
  hover = true,
}: CardProps) {
  const baseStyles =
    "bg-white border border-border rounded-card p-6 lg:p-8 shadow-card";

  const hoverStyles = hover
    ? "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
    : "";

  const combinedClassName = `${baseStyles} ${hoverStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${combinedClassName}`}>
        {children}
      </Link>
    );
  }

  return <div className={combinedClassName}>{children}</div>;
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return (
    <h4 className={`font-heading font-bold text-h4 text-text ${className}`}>
      {children}
    </h4>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({
  children,
  className = "",
}: CardDescriptionProps) {
  return (
    <p className={`text-small text-muted mt-2 ${className}`}>{children}</p>
  );
}
