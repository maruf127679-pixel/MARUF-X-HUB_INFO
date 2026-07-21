/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        primary: "#00E5FF",
        secondary: "#8A2BE2",
        dark: "#050816",
        card: "#111827",
        accent: "#00F5A0"
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },

      boxShadow: {
        neon: "0 0 20px rgba(0,229,255,.5)",
        glow: "0 0 40px rgba(138,43,226,.45)"
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        spinSlow: "spin 20s linear infinite"
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-20px)"
          }
        },

        glow: {
          from: {
            filter: "drop-shadow(0 0 5px #00E5FF)"
          },
          to: {
            filter: "drop-shadow(0 0 25px #8A2BE2)"
          }
        }
      }
    }
  },

  plugins: []
};
