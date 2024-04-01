/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"Lato"', "sans-serif"],
      },
      keyframes: {
        moveX: {
          '0%': { transform: 'translateX(0px)' },
          '50%': { transform:' translateX(50px)' },
          '100%': { transform:' translateX(0px)' },
        },
        moveY: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform:' translateY(50px)' },
          '100%': { transform:' translateY(0px)' },
        },
        moveXRe: {
          '0%': { transform: 'translateX(0px)' },
          '50%': { transform:' translateX(-50px)' },
          '100%': { transform:' translateX(0px)' },
        },
        moveYRe: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform:' translateY(-50px)' },
          '100%': { transform:' translateY(0px)' },
        },
      },
      animation: {
        'moveY': 'moveY 5s linear infinite',
        'moveX': 'moveX 5s linear infinite',
        'moveYRe': 'moveYRe 5s linear infinite',
        'moveXRe': 'moveXRe 5s linear infinite',
      },
      colors: {
        bitterSweet: "#FF6161ff",
        midnightGreen: "#1B4652ff",
        celeste: "#B1EAE2ff",
        tiffanyGreen: "#9CE3DCff",
        gunMetal: "#1D333Dff",
        tiffanyBlue: "#7AC6C3ff",
      },
    },
  },
  plugins: [],
};
