// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
      nextui({
        themes: {
          "red-dark": {
            extend: "dark", // <- inherit default values from dark theme
            colors: {
              background: "#0D001A",
              foreground: "#ffffff",
              primary: {
                50: "#ffe2ec",
                100: "#ffb3c5",
                200: "#fc839f",
                300: "#f95278",
                400: "#f62252",
                500: "#dd0939",
                600: "#ad032c",
                700: "#7c001e",
                800: "#4d0012",
                900: "#200005",
                DEFAULT: "#dd0939",
                foreground: "#ffffff",
              },
              focus: "#ad032c",
            },
            layout: {
              disabledOpacity: "0.3",
              radius: {
                small: "4px",
                medium: "6px",
                large: "8px",
              },
              borderWidth: {
                small: "1px",
                medium: "2px",
                large: "3px",
              },
            },
          },
        },
      }),
    ],
  };
};