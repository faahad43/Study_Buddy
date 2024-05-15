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
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
