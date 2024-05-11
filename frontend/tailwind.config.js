import { blue } from '@mui/material/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#40095A",
      text: "#F6F7F9",
      secondary: "#7E4396",
      background_default: "#180118",
      secondary2: "#731042",
      blue5: "#3b82f6",
      blue6: "#2563eb",
      emerald8: "#065f46",
      emerald6: "#059669",
      gray9: "#111827",
      gray6: "#4b5563",
      gray3: "#d1d5db",
      slate9: "#0f172a",
      slate8: "#1e293b",
      slate6: "#475569",
      slate4: "#94a3b8"

    },
  },
  plugins: [],
};