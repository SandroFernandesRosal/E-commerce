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
        primary: '#10B981',
        secondary: '#1fb6ff',
        bgprimary: '#09090B',
        bgsecondary: '#18181B',
      },
    },
  },
  plugins: [],
} satisfies Config;
