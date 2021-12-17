module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'atlas': {
          700: '#202020',
          600: '#3e0e62',
          500: '#4b077c',
          400: '#7a1abe',
          300: '#b784db',
          200: '#d5b9ea',
          100: '#f3eef8',
        },
      },
    },
  },
  plugins: [],
}