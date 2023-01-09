/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
  theme: {
    colors: {
      black: "#000000",
      default: "#333333",
      white: "#ffffff",
    },
    extend: {},
    fontFamily: {
      sans: [
        "Noto Sans JP",
        "游ゴシック体",
        "YuGothic",
        "游ゴシック",
        "Yu Gothic",
        "ヒラギノ角ゴ ProN W3",
        "Hiragino Kaku Gothic ProN",
        "sans-serif",
      ],
    },
    fontWeight: {
      bold: 700,
      light: 300,
      medium: 500,
      normal: 400,
    },
    letterSpacing: {
      lg: "0.1em",
      md: "0.06em",
      sm: "0",
      xl: "0.2em",
    },
    lineHeight: {
      lg: 1.75,
      md: 1.5,
      sm: 1.2,
      xl: 2,
      xs: 1,
      xxl: 2.4,
    },
    screens: {
      "2xl": "1536px", // => @media (min-width: 1536px) { ... }

      lg: "1024px", // => @media (min-width: 1024px) { ... }

      md: "768px", // => @media (min-width: 768px) { ... }
      sm: "640px", // => @media (min-width: 640px) { ... }

      xl: "1280px", // => @media (min-width: 1280px) { ... }
    },
  },
};
