/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          dark: "#4F2C19",
          medium: "#B0A27B",
          light: "#E2DFD5",
        },
      },
      fontFamily: {
        lale: "lale",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
