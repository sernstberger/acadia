import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import ReactGA from "react-ga";
import App from "./App";
import theme from "./theme";

ReactGA.initialize("UA-220732746-1");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
