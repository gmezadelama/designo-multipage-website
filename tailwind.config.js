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
      },
    },
  },
  plugins: [],
};
