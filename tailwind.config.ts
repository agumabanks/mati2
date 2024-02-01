import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },



      autoScrollingLogosContainer: {
        display: 'flex',
        overflow: 'hidden'
      }, 

      partnerLogo:{
        width: '150px',
        height: '100px', 
        background: '#ccc',
      }
      
    },
  },
  plugins: [],
}
export default config


// .autoScrollingLogosContainer {
//   display: flex;
//   overflow: hidden;
// }

// .partnerLogo {
//   width: 150px; /* Set your logo width */
//   height: 100px; /* Set your logo height */
//   margin-right: 20px; /* Adjust spacing between logos */
//   background-color: #ccc; /* Set background color or add your logo image */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   animation: scroll 20s linear infinite; /* Adjust the duration as needed */
// }

// @keyframes scroll {
//   0% {
//     transform: translateX(100%);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// }