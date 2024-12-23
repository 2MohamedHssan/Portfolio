/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        
      },
      clipPath: {
        rhombus: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
      },
      backgroundColor:{
        'firstbg':'var(--firstbg)',
        'secondbg':'var(--secondbg)',
        'inputbg':'var(--inputbg)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #1E88E5, #9C27B0)',
        'tow-gradient': 'linear-gradient(135deg, #4FC3F7, #00ACC1)',
        'three-gradient': 'linear-gradient(135deg, #FF8A80, #FFB74D)',
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
  
};
