import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "midnight-black": "#051923",
        "slate-teal": "#587370",
        "dark-slate-teal": "#475d5b",
        "ivory-cream": "var(--ivory-cream)",
        "deep-umber": "#591E08",
        "desert-sand": "#DE9151",
        "burnt-sienna": "#A5673F",
      },
    },
  },
  plugins: [],
} satisfies Config;
