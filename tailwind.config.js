/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        oxfordblue200: '#011936',
        oxfordblue100: '#0A3157',
        delfblue: '#23395B',
        uclablue: '#406E8E',
        eggshell: '#fff4ec',
        
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          'base-100': '#ffffff',
        },
      },
    ],
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}