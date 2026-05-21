/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f8f4",
          100: "#e0ece3",
          200: "#c3d9c9",
          300: "#9bc0a5",
          400: "#6fa07d",
          500: "#50855f",
          600: "#3f6b4c",
          700: "#34563f",
          800: "#2c4535",
          900: "#25392d",
          950: "#132019",
        },
        cream: "#faf7f2",
        parchment: "#f0ebe3",
        ink: "#1c1917",
        brass: "#b8860b",
      },
      fontFamily: {
        display: ["\"Playfair Display\"", "Georgia", "serif"],
        sans: ["\"DM Sans\"", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(28, 25, 23, 0.08), 0 2px 8px -2px rgba(28, 25, 23, 0.04)",
        "card-hover": "0 12px 40px -8px rgba(28, 25, 23, 0.14), 0 4px 16px -4px rgba(28, 25, 23, 0.06)",
        header: "0 1px 0 rgba(28, 25, 23, 0.06), 0 4px 20px -4px rgba(28, 25, 23, 0.08)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
