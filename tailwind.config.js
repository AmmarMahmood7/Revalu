/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: '#fbfbf9',
        customGray: "#D9D9D6",
        customText: "#77776E",
        bgGrayCustom: "#ECE6FA",
        addNewCard: "#f1f1ee",
        plusBg: "#E5E5E1",
        bgBlue: "#8C66E0",
        disabledtext: "#CBBAF1"
      },
    },
  },
  plugins: [],
}