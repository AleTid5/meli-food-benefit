import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#fff159",
      dark: "#fde703",
    },
  },
  overrides: {
    MuiInput: {
      focused: {
        color: "red",
      },
    },
  },
});
