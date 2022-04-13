module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      peach: "#E7816B",
      black: "#1D1C1E",
      white: "#FFFFFF",
      lightPeach: "#FFAD9B",
      darkGrey: "#333136",
      lightGrey: "#F1F3F5",
    },
    fontFamily: {
      sans: ["JOST"],
    },
    extend: {
      borderRadius: {
        DEFAULT: "8px",
      },
      backgroundImage: {
        "design-pattern":
          "url('../public/assets/app-design/desktop/bg-pattern-intro-app.svg')",
        "logo-dark": "url('../public/assets/shared/desktop/logo-dark.png')",
        "logo-light": "url('../public/assets/shared/desktop/logo-light.png')",
        "call-to-action":
          "url('../public/assets/shared/desktop/bg-pattern-call-to-action.svg')",
        "intro-web":
          "url('../public/assets/web-design/desktop/bg-pattern-intro-web.svg')",
        "intro-app":
          "url('../public/assets/app-design/desktop/bg-pattern-intro-app.svg')",
        "intro-graphic":
          "url('../public/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg')",
        "intro-design-pages-tablet":
          "url('../public/assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg')",
        "intro-design-pages-mobile":
          "url('../public/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg')",
      },
    },
  },
  plugins: [],
};
