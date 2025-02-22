import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        variant: "var(--variant)",
        border: "var(--border)",
        grays: "var(--gray)",
        navbg: "var(--navbg)",
      },
    },
  },
  plugins: [],
} satisfies Config;
