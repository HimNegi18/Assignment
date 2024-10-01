/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs' : '576px',
      'sm': '768px',   // Custom small breakpoint
      'md': '992px',   // Custom medium breakpoint
      'lg': '1200px',  // Custom large breakpoint
      'xl': '1336px',  // Custom extra large breakpoint
      '2xl':'1440px',
    },
    extend: {
      colors: {
        customRed: '#e41a26',
        customPurple : '#1b1e55'
      },
      backgroundImage: {
        'heroBanner': "url('/assets/Hero/heroBanner.png')", // Define custom background image
        'heroBanner-Mob': "url('/assets/Hero/heroBannerMob.png')",
        'arrow-bg' : "url(/assets/arrow-bg-main.png)",
        'arrow-left-bg' : "url(/assets/arrow-bg.png)",
      },
    },
    container:{
      center: true,
      padding:{
        DEFAULT : '15px',
        lg:'40px',
      }
    }
  },
  plugins: [],
}

