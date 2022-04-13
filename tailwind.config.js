
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#073b4c",
        dark: "#fefefe",
        secondary: '#ffd166',


      },
      maxHeight: {
        116: "29rem",
        /*464px*/
        125: "31.25rem",
        /*500px*/
        140: "35rem",
        /*560px*/
        150: "37.5rem",
        /*600px*/
        190: "47.5rem",
        /*760px*/
      },
      height: {
        116: "29rem",
        /*464px*/
        125: "31.25rem",
        /*500px*/
        140: "35rem",
        /*560px*/
        150: "37.5rem",
        /*600px*/
        200: "50rem",
        /*800px*/
        250: "62.5rem",
        /*800px*/
      },
      minHeight: {
        18: "4.5rem",
        /*72*/
        33: "8.125rem",
        /*132px*/
        62: "15.5rem",
        /*248px*/
        96: "24rem",
        /*384px*/
        150: "37.5rem",
        /*600px*/
      },
      margin: {
        '-100%': '-100%'
      }
    },
    container: {
      center: true
    }
  },
  plugins: [


  ],
}