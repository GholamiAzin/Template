/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '0px', 'max': '768px'},
      // => @media (min-width: 0px and max-width: 768px) { ... }

      'md': {'min': '768px', 'max': '1024px'},
      // => @media (min-width: 768px and max-width: 1024px) { ... }

      'lg': {'min': '1024px', 'max': '1280px'},
      // => @media (min-width: 1024px and max-width: 1280px) { ... }

      'xl': {'min': '1280px', 'max': '1536px'},
      // => @media (min-width: 1280px and max-width: 1536px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      minHeight: {
        'lgh': '1024px',
      }
    },
  },
  plugins: [],
}

