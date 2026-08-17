/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#377860',
        'bg-shade': '#F9F6ED',
        accent: '#8963DC',
        heading: '#25221B',
        body: '#25221B',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      scrollMargin: {
        header: 'var(--header-offset)',
      },
    },
  },
  plugins: [],
}
