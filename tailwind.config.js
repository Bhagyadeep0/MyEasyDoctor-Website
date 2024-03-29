/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        x: {
          '0%': { transform: 'translateX(0px)' },
          '50%': { transform:' translateX(50px)' },
          '100%': { transform:' translateX(0px)' },
        },
        y: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform:' translateY(50px)' },
          '100%': { transform:' translateY(0px)' },
        },
      },
      animation: {
        'up-down': 'y 5s linear infinite',
        'left-right': 'x 5s linear infinite',
      },
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
