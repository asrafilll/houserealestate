module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        '3.5xl' : '28px',
      },
      colors : {
        gray: {
          850: '#232323',
        },
        blue: {
          450: '#739AD4',
        }
      }
    },
  },
  variants: {
    extend: {
      colors : ['active'],
    },
  },
  plugins: [],
}
