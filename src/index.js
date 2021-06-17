import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import HeaderComponent from "./components/common/HeaderComponent";
import FooterComponent from "./components/common/FooterComponent";
import Index from "./components/index/index";
import AboutIndex from "./components/about/index";
import ServiceIndex from "./components/service/index";
import SolutionIndex from "./components/solution/index";
import ProjectIndex from "./components/project/index";

// DarkMode
const isDarkMode = true;
const theme = createMuiTheme({
  palette: {
    type: isDarkMode ? "dark" : "light",
    primary: {
      main: "#f9dc41",
    },
  },
});

// Router
const Routers = () => (
  <div className="contents">
    <Route path="/" exact component={Index} />
    <Route path="/about" exact component={AboutIndex} />
    <Route path="/service" exact component={ServiceIndex} />
    <Route path="/solution" exact component={SolutionIndex} />
    <Route path="/project" exact component={ProjectIndex} />
    <Redirect path="*" to="/" />
  </div>
);

// Render
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline />
      <BrowserRouter>
        <HeaderComponent />
        <Routers />
        <FooterComponent />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
