import {createMuiTheme} from "@material-ui/core/styles";

const themeGlobal = createMuiTheme({
  typography: {
    h1: {
      fontFamily: ["Nanum Gothic"]
    },
    h2: {
      fontFamily: ["Nanum Gothic"]
    },
    h3: {
      fontFamily: ["Nanum Gothic"]
    },
    h4: {
      fontFamily: ["Nanum Gothic"]
    },
    h5: {
      fontFamily: ["Nanum Gothic"]
    },
    h6: {
      fontFamily: ["Nanum Gothic"]
    },
    fontFamily: ["Nanum Gothic Coding"]
  },
  palette: {
    primary: {
      main: "#2f3131",
      submain: "#919191",
      info: "#426e86",
      warning: "#db0000",
      bone: "ffffff",
      baby: "FFFEFC",
      light: "f9f8f4",
      focus: "f9ba32"
    }
  }
});

export default themeGlobal;
