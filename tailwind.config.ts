import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "#facc15",
        zinc: {
          150: "#e4e4e7",
          250: "#d4d4d8",
          350: "#b4b4bd",
          450: "#85858e",
          455: "#82828b",
          550: "#62626b",
          555: "#5f5f68",
          650: "#484850",
          750: "#323236",
          850: "#202023",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
export default config;
