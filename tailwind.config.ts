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
        primary: '#65a4b9',
        secondary:'#f782a0',
        bgprimary:'#f9f9f9',
        bgsecondary:'#a3d4da',
        textsecondary: '#EEEEEE',
        textprimary: '#262626'
       
      },
    },
  },
  plugins: [],
} satisfies Config;
