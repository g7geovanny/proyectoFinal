/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.jsx",],
  theme: {
    fontFamily:{
      pop: ["Poppins", "sans-serif"],
      plus: ["M PLUS Rounded 1c", "sans-serif"] 
    },
    extend: {
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 8px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #7ecf49 ,#04bbf1,#1d4370)',
      },
    },
  },
  plugins: [],
}

