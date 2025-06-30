/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'bounce': 'bounce 2s infinite',
        'scroll-indicator': 'scrollIndicator 2s infinite',
        float1: 'float 6s ease-in-out infinite',
        float2: 'float 8s ease-in-out infinite 2s',
        float3: 'float 7s ease-in-out infinite 1s',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollIndicator: {
          '0%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(5px)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '0.4' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      colors: {

      },
      clipPath: {
        rhombus: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
      },
      backgroundColor: {
        'firstbg': 'var(--firstbg)',
        'secondbg': 'var(--secondbg)',
        'inputbg': 'var(--inputbg)',
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
