import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#8B4513", // Saddle Brown - отражает работу с деревом
          foreground: "#FFFFFF",
          50: "#FDF8F6",
          100: "#F2E8E5",
          200: "#EADDD7",
          300: "#E0C2B6",
          400: "#D69E86",
          500: "#CD7F47",
          600: "#B8651B",
          700: "#8B4513",
          800: "#723A0F",
          900: "#5D2F0C",
        },
        secondary: {
          DEFAULT: "#F5F5DC", // Beige - нейтральный цвет для интерьеров
          foreground: "#2C1810",
        },
        accent: {
          DEFAULT: "#D2691E", // Chocolate - акцентный цвет
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F8F6F0",
          foreground: "#6B5B47",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
