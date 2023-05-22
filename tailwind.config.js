/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bg_primary: "#0f172a",
        bg_secondary: "#172547",
        text_primary: "#8697b6",
        text_secondary: "#ccc",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
      },
    },
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1280px",
    },
  },
  plugins: [],
};
