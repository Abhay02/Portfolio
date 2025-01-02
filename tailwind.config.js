/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadowOne: "10px 10px 90px #1c1e22, -10px -10px 10px #262a2e",
      },

      animation: {
        "spin-slow": "spin 20s linear infinite",
        glow: "glow 4s infinite",
        border: "borderGlow 4s infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px 5px rgba(255, 0, 0, 0.4)" },
          "25%": { boxShadow: "0 0 20px 5px rgba(0, 255, 0, 0.4)" },
          "50%": { boxShadow: "0 0 20px 5px rgba(0, 0, 255, 0.4)" },
          "75%": { boxShadow: "0 0 20px 5px rgba(255, 255, 0, 0.4)" },
        },
        borderGlow: {
          "0%": { borderColor: "rgba(255, 0, 0, 0.7)" },
          "25%": { borderColor: "rgba(0, 255, 0, 0.7)" },
          "50%": { borderColor: "rgba(0, 0, 255, 0.7)" },
          "75%": { borderColor: "rgba(255, 255, 0, 0.7)" },
          "100%": { borderColor: "rgba(255, 0, 0, 0.7)" },
        },
      },
    },
  },
  plugins: [],
};
