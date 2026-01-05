import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base
        bg: "#0B0F14",
        surface: "#111823",
        text: "#0E1217",
        muted: "#667085",
        border: "#E6E8EC",
        "bg-soft": "#F6F7F9",
        // Brand red
        brand: "#C1121F",
        "brand-dark": "#8F0E18",
        "brand-soft": "#FCE8EA",
        // States
        success: "#12B76A",
        warning: "#F79009",
        error: "#F04438",
        focus: "#2E90FA",
        // Footer text colors
        "footer-text": "#D0D5DD",
        "footer-link": "#F2F4F7",
      },
      fontFamily: {
        heading: ["Montserrat", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
        body: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
      },
      fontSize: {
        // Desktop scale
        h1: ["52px", { lineHeight: "60px", letterSpacing: "-0.02em", fontWeight: "800" }],
        h2: ["36px", { lineHeight: "44px", letterSpacing: "-0.01em", fontWeight: "700" }],
        h3: ["24px", { lineHeight: "32px", fontWeight: "700" }],
        h4: ["18px", { lineHeight: "26px", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        body: ["16px", { lineHeight: "26px", fontWeight: "400" }],
        small: ["14px", { lineHeight: "22px", fontWeight: "400" }],
        micro: ["12px", { lineHeight: "18px", fontWeight: "500" }],
        // Mobile scale
        "h1-mobile": ["34px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "h2-mobile": ["28px", { lineHeight: "34px", letterSpacing: "-0.01em", fontWeight: "700" }],
      },
      spacing: {
        "4": "4px",
        "8": "8px",
        "12": "12px",
        "16": "16px",
        "24": "24px",
        "32": "32px",
        "40": "40px",
        "48": "48px",
        "64": "64px",
        "80": "80px",
        "96": "96px",
      },
      borderRadius: {
        button: "4px",
        card: "4px",
        image: "4px",
        input: "4px",
      },
      boxShadow: {
        card: "0 10px 30px rgba(16, 24, 40, 0.08)",
        "card-hover": "0 18px 40px rgba(16, 24, 40, 0.12)",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
