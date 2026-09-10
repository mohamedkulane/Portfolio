import tailwindcssAnimate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        xs: "480px",
      },

      maxWidth: {
        "8xl": "1440px",
      },

      fontFamily: {
        sans: ["Geist Variable", "sans-serif"],
      },

      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },

        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },

        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },

        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },

        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },

        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },

        destructive: {
          DEFAULT: "var(--destructive)",
        },

        portfolio: {
          background: "#071B1F",
          surface: "#092126",
          card: "#0B252A",
          "card-hover": "#0D2D31",

          green: "#02F5A1",
          "green-bright": "#35FFC0",
          "green-muted": "#073C34",

          border: "#164047",

          text: "#F4FFFC",
          muted: "#92AAA5",
          subtle: "#647D78",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      boxShadow: {
        "green-sm": "0 0 25px rgba(2,245,161,0.10)",
        green: "0 0 40px rgba(2,245,161,0.14)",
        "green-lg": "0 0 80px rgba(2,245,161,0.16)",
      },
    },
  },

  plugins: [tailwindcssAnimate],
}