/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        "pulse": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fadeIn": "fadeIn 2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "shimmer": "shimmer 2s linear infinite",
        'fade-in-up': 'fadeInUp 2s ease-out forwards',
        'gradient': 'gradient 6s linear infinite',
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        fadeIn: {
          "0%": { 
            opacity: "0", 
            transform: "translateY(50px)" 
          },
          "20%": {
            opacity: "0",
            transform: "translateY(40px)"
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0)" 
          }
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}

