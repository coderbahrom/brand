/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: { max: '676px' },
      // => @media (min-width: 576px) { ... }
      ms: { max: '800px' },
      md: { max: '960px' },
      // => @media (min-width: 960px) { ... }

      lg: { max: '1023px' },
      // => @media (min-width: 1440px) { ... }
    },
  },

  plugins: [],
};
