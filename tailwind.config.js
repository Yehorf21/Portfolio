/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        text: '#FBF5E9',
        background: '#171002',
        'background-light': '#241801',
        primary: '#EBCB7F',
        'primary-light': '#E8D5A9',
        secondary: '#0DB87D',
        'secondary-light': '#BEDCD1',
        accent: '#2BABDE',
        'accent-light': '#7FCAE8',
      },
      fontFamily: {
        main: ['Rye', 'sans-serif'],
        secondary: ['Reggae One', 'sans-serif'],
      },
      fontSize: {
        '390': '390px',
        '248': '248px',
        '200': '200px',
        '160': '160px',
        '140': '140px',
        '128': '128px',
        '112': '112px',
        '80': '80px',
        '64': '64px',
        '48': '48px',
        '32': '32px',
        '28': '28px',
        '24': '24px',
        '20': '20px',
        '26': '16px',
      },
      backgroundImage: {
        'header-bg': `url('/header-bg.jpg')`,
        'my-photo': `url('/my-photo.png')`,
        'gadgets': `url('/gadgets.png')`,
        'lumine': `url('/lumine.png)`,
        'potr-pots': `url('/potr-pots.png')`,
        'roadmap': `url('/roadmap.svg')`,
        'js': `url('/skill-icons/js.svg'`,
      },
      screens: {
        'desktop': '1440px',
        'huge': '1441px'
      }
    },
  },
  plugins: [],
}

