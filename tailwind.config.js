module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "white": "#ffffff",
      "brown": "#8c5533",
      "light-brown": "#9d6847",
      "red":"#ff1100",
      "orange":"#ff6a00",
      "yellow":"#fff200",
      "green":"#1eff00",
      "blue":"#0066ff",
    },
    extend: {
      fontFamily: {
        "GoboldBold":"Gobold Bold",
        "GoboldHollowBold":"Gobold Hollow Bold",
        "GoboldHollow":"Gobold Hollow",
        "LEMONMILK":"LEMONMILK",
      }
    },
  },
  plugins: [],
}