module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      '3xl' : '28px',
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
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
