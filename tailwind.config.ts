import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}", 
    "./components/**/*.{ts,tsx}", 
    "./app/**/*.{ts,tsx}", 
    "./src/**/*.{ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
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
      fontFamily: {
        sans: ['ABC Ginto Plus', 'sans-serif'],
      },
      colors: {
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-accent': 'var(--gradient-accent)',
        'gradient-subtle': 'var(--gradient-subtle)',
        'gradient-mesh': 'var(--gradient-mesh)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'DEFAULT': 'var(--shadow)',
        'lg': 'var(--shadow-lg)',
        'glow': 'var(--shadow-glow)',
        'glass': 'var(--shadow-glass)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" }
        },
        "liquid-morph": {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" }
        },
        "jello": {
          "0%, 100%": { transform: "skewX(0deg) skewY(0deg)" },
          "30%": { transform: "skewX(12.5deg) skewY(12.5deg)" },
          "40%": { transform: "skewX(-6.25deg) skewY(-6.25deg)" },
          "50%": { transform: "skewX(3.125deg) skewY(3.125deg)" },
          "65%": { transform: "skewX(-1.5625deg) skewY(-1.5625deg)" },
          "75%": { transform: "skewX(0.78125deg) skewY(0.78125deg)" }
        },
        "rubber-band": {
          "0%": { transform: "scale(1)" },
          "30%": { transform: "scaleX(1.25) scaleY(0.75)" },
          "40%": { transform: "scaleX(0.75) scaleY(1.25)" },
          "50%": { transform: "scaleX(1.15) scaleY(0.85)" },
          "65%": { transform: "scaleX(0.95) scaleY(1.05)" },
          "75%": { transform: "scaleX(1.05) scaleY(0.95)" },
          "100%": { transform: "scale(1)" }
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%", "background-size": "200% 200%" },
          "50%": { "background-position": "100% 50%", "background-size": "200% 200%" }
        },
        "blob": {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", transform: "rotate(0deg) scale(1)" },
          "33%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%", transform: "rotate(120deg) scale(1.1)" },
          "66%": { borderRadius: "50% 50% 30% 70% / 30% 70% 70% 30%", transform: "rotate(240deg) scale(0.9)" }
        },
        "wiggle": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        },
        "rainbow": {
          "0%": { "background-position": "0%" },
          "100%": { "background-position": "200%" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.3s cubic-bezier(0.87, 0, 0.13, 1)",
        "accordion-up": "accordion-up 0.3s cubic-bezier(0.87, 0, 0.13, 1)",
        "bounce-in": "bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "liquid-morph": "liquid-morph 8s ease-in-out infinite",
        "jello": "jello 0.9s ease-in-out",
        "rubber-band": "rubber-band 0.8s ease-in-out",
        "fade-in": "fade-in 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-in": "scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "float": "float 3s ease-in-out infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        "blob": "blob 10s ease-in-out infinite",
        "wiggle": "wiggle 1s ease-in-out infinite",
        "rainbow": "rainbow var(--speed, 2s) infinite linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), heroui()],
} satisfies Config;
