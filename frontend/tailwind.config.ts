import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundNavBarOption: "#F9F6F3",
        backgroundSecondary: "#F9F6F3",
        backgroundNotes: "#FFFFFF",
        backgroundPage: "#F3EDE5",
        backgroundIcon: "#E3D5C5",
        colorTextPointer: "#B1805E",
        colorMemoPad: "#FBE3BB",
        colorBorder: "#B1805E",
        colorNote: "#F3EDE5",
        colorText: "#000000",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }: PluginAPI) {
      addUtilities({
        ".after-custom-icon::after": {
          content: "''",
          position: "absolute",
          left: "-0.25rem",
          top: "20%",
          width: "20px",
          height: "20px",
          borderRadius: "2px",
          backgroundColor: theme("colors.backgroundIcon"),
          transform: "rotate(45deg)",
          zIndex: "-1",
        },
        ".small-note-dimensions": {
          // min 158
          minHeight: "142px",
          minWidth: "192px",
          maxHeight: "142px",
          maxWidth: "192px",
        },
        ".medium-note-dimensions": {
          minHeight: "228px",
          minWidth: "192px",
          maxHeight: "228px",
          maxWidth: "192px",
        },
        ".large-note-dimensions": {
          minHeight: "192px",
          maxHeight: "192px",
          minWidth: "95%",
          maxWidth: "95%",
        },
        ".navbar-text-transition": {
          whiteSpace: "nowrap",
          transitionProperty: "opacity",
          transitionDuration: "0.5s",
          transitionTimingFunction: "ease",
        },
      });
    },
  ],
};
export default config;
