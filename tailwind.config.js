// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: { "train-img": "url('./Trainimg.jpeg')" },
      colors: {
        // Primary greens
        vrgreen: "#7AC143", // Main accent
        vrgreenDark: "#4C9A2A", // Secondary accent
        vrgreenHover: "#6CAF3E", // Button hover

        // backgrounds
        vrgray: "#E5E5E5", // slightly darker neutral background
        vrgrayDark: "#2B2B2B", // dark background option
        vrgrayMid: "#3F3F3F", // medium gray for cards

        // Text colors
        vrtextDark: "#EAEAEA", // Updated: light text for dark backgrounds
        vrtextMid: "#CCCCCC", // Subtle text
        vrtextMuted: "#888888", // Placeholder text

        // Utility
        white: "#FFFFFF",
        black: "#000000",
      },
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
