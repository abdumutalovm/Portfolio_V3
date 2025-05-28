import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",   // 12px
          small: "0.875rem", // 14px
          medium: "0.9375rem", // 15px
          large: "1.125rem", // 18px
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "6px", 
          medium: "8px", 
          large: "12px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        dark: {
          colors: {
            "background": {
              "DEFAULT": "#0a0a0c"
            },
            "content1": {
              "DEFAULT": "#111114",
              "foreground": "#fafafa"
            },
            "content2": {
              "DEFAULT": "#18181c",
              "foreground": "#f4f4f5"
            },
            "content3": {
              "DEFAULT": "#27272e",
              "foreground": "#e4e4e7"
            },
            "content4": {
              "DEFAULT": "#35353d",
              "foreground": "#d4d4d8"
            },
            "divider": {
              "DEFAULT": "rgba(255, 255, 255, 0.1)"
            },
            "focus": {
              "DEFAULT": "#5686F5"
            },
            "foreground": {
              "50": "#18181b",
              "100": "#27272a",
              "200": "#3f3f46",
              "300": "#52525b",
              "400": "#71717a",
              "500": "#a1a1aa",
              "600": "#d4d4d8",
              "700": "#e4e4e7",
              "800": "#f4f4f5",
              "900": "#fafafa",
              "DEFAULT": "#ECEDEE"
            },
            "primary": {
              "50": "#0f172a",
              "100": "#172554",
              "200": "#1e3a8a",
              "300": "#2563eb",
              "400": "#3b82f6",
              "500": "#5686F5",
              "600": "#60a5fa",
              "700": "#93c5fd",
              "800": "#bfdbfe",
              "900": "#dbeafe",
              "DEFAULT": "#5686F5",
              "foreground": "#fff"
            }
          }
        }
      }
    })
  ]
}
