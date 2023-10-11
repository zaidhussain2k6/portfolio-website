/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      md: '800px',
      lg: '976px',
      xl: '1440px',
    },

    colors: {
      'darkblue': '#0A1931',
      'liteblue': '#185ADB',
      'gray': '#5D6471',
    },
    
    fontFamily: {
      FontA : ['Clash Display', 'sans-serif'],
      FontB : ['Poppins', 'sans-serif'],
      FontC : ['Inter', 'sans-serif'],
    },
    
    BoxShadow: {
      '2xl': 'rgba(24, 90, 219, 1)' ,
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
      ]
    }
  },
  plugins: [],
}