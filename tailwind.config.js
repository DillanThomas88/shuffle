module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        default: ['Montserrat']
      },
      gridTemplateColumns: {
        // custom grid setup
        '50': 'repeat(50, minmax(0, 1fr))',
      },
      animation: {
        appear: 'appear .25s forwards',
        disapear: 'appear .25s reverse forwards',
        slideleft: 'slidehorizontal .1s reverse forwards linear',
        slideright: 'slidehorizontal .1s  forwards linear',
        slideup: 'slidevertical .1s reverse forwards linear',
        slidedown: 'slidevertical .1s forwards linear',
        stick: 'stick .75s forwards',
        click: 'click .75s forwards'
      },
      keyframes: {
        appear: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slidevertical: {
          from: {height: '0em',backgroundColor: '#424949'},
          to: {height: 'full', backgroundColor: '#262626'}
        },
        slidehorizontal: {
          from: {width: '0em',backgroundColor: '#424949'},
          to: {width: 'full', backgroundColor: '#262626'}
        },
        stick: {
          from: {backgroundColor: '#424949'},
          to: {backgroundColor: '#262626'}
        },
        click: {
          from: {color: '#fff'},
          to:{color: '#262626'}
        }


      },
    },
  },
  plugins: [],
}
