/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#2a0645',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'blob': 'blob 3s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(45px, -60px) scale(1.2)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.8)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        }
      }
    },
    fontFamily: {
      signature: ["Yeseva One"],
    },
  },
  plugins: [],
}

