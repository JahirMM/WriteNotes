import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        left: "left",
      },
      colors: {
        // ************
        // LIGHT
        // ************
        backgroundNavBarOption: "#F9F6F3",
        backgroundTopUserImage: "#F3EDE5",
        backgroundBottomUserImage: "#fff",
        backgroundUserModal: "#FFFFFF",
        backgroundSecondary: "#F9F6F3",
        backgroundNotes: "#FFFFFF",
        backgroundPage: "#F3EDE5",
        backgroundIcon: "#E3D5C5",

        colorLineSeparatorUser: "#E5E7EB",
        colorLineSeparator: "#B1805E",
        colorTextPointer: "#B1805E",
        colorMemoPad: "#FBE3BB",
        colorBorder: "#B1805E",
        colorNote: "#F3EDE5",
        colorText: "#000",

        // ************
        // DARK
        // ************
        backgroundBottomUserImageDark: "#1F1F1F",
        backgroundTopUserImageDark: "#0D0D0D",
        backgroundNavBarOptionDark: "#252933",
        backgroundUserModalDark: "#1F1F1F",
        backgroundSecondaryDark: "#191919",
        backgroundNotesDark: "#1F1F1F",
        backgroundIconDark: "#191919",
        backgroundPageDark: "#0D0D0D",

        colorLineSeparatorUserDark: "#0D0D0D",
        colorTextPointerDark: "#E3D5C5",
        colorNoteDark: "#252933",
        colorTextDrak: "#fff",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".small-note-dimensions": {
          // min 158
          minHeight: "142px",
          minWidth: "192px",
          maxHeight: "142px",
          maxWidth: "192px",
        },
        ".medium-note-dimensions": {
          minHeight: "256px",
          minWidth: "192px",
          maxHeight: "256px",
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
