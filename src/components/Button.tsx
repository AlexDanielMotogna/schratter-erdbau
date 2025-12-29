import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  target?: "_blank" | "_self";
  rel?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 px-[18px] py-[14px] rounded-button font-body font-semibold text-[16px] transition-all duration-200 min-h-[44px]";

  const variants = {
    primary:
      "bg-brand text-white hover:bg-brand-dark active:bg-brand-dark disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "bg-transparent border border-border text-text hover:bg-bg-soft active:bg-bg-soft disabled:opacity-50 disabled:cursor-not-allowed",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    // Use anchor tag for external links
    if (target === "_blank") {
      return (
        <a
          href={href}
          className={combinedClassName}
          target="_blank"
          rel={rel || "noopener noreferrer"}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
