/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bitterSweet: "#FF6161ff",
        midnightGreen: "#1B4652ff",
        celeste: "#B1EAE2ff",
        tiffanyBlue: "#9CE3DCff",
        gunMetal: "#1D333Dff",
        tiffanyBlue: "#7AC6C3ff",
      },
    },
  },
  plugins: [],
};
