/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        onLoad: {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        hoverNav: {
          "0%": { opacity: "0", transform: "translateX(-50px) scale(0.8)" },
          "100%": { opacity: "1", transform: "translateX(0) scale(1)" },
        },
        openBorgir: {
          "0%": { opacity: "0", transform: "translateY(100%) translateX(20%) scale(0.8) rotate(-10deg)" },
          "100%": { opacity: "1", transform: "translateY(0%) translateX(0%) scale(1) rotate(0deg)" },
        },
        closeBorgir: {
          "100%": { opacity: "0", transform: "translateY(100%) translateX(20%) scale(0.8) rotate(-10deg)" },
          "0%": { opacity: "1", transform: "translateY(0%) translateX(0%) scale(1) rotate(0deg)" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
        "on-load": "onLoad 1000ms ease-out",
        "hover-nav": "hoverNav 400ms ease-out",
        "open-burgir": "openBorgir 300ms ease-out",
        "close-burgir": "closeBorgir 300ms ease-out",
        "fade-out": "fadeOut 200ms ease-out",
        "fade-in": "fadeIn 300ms ease-out",
      },
      height: {
        "semi-screen": "calc(100vh  - 60px)",
      },
    },
  },
  plugins: [],
};
