/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: '#5E3BEE',
        'bg-shade': '#F5FCFF',
        accent: '#E62872',
        heading: '#282938',
        body: '#1C1E53',
  
        // Dark mode colors (primary is same as light mode)
        'bg-shade-dark': '#0B0E14',
        'surface-dark': '#141823',
        'accent-dark': '#FF5CA6',
        'heading-dark': '#F1F3FF',
        'body-dark': '#B3B9D0',
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

