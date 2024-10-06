import type { Config } from "tailwindcss";

const config: Config = {
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
        clinkYellow:'#F1C357',
        clinkOrange:'#ff5e0f',
        clinkBlue:'#003466ff',
        clinkSilver:'#C0C0C0',
        clinkGrey:'#4F577A66',
        clinkAccent:{
          DEFAULT:'#005F73',
          100:'#0A9396'
        }
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        'conic-gradient': 'conic-gradient(from 0deg, transparent 0deg 340deg, rgba(255, 255, 255, 0.1) 340deg 360deg)',
      },
    },
  },
  plugins: [],
};
export default config;
