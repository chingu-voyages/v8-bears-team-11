import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// Import Components
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
// Import SCSS files
import variables from "./main.scss";

function NoSigned() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="*" render={() => <Redirect to="/signin" />} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

// Theme config
const theme = createMuiTheme({
  palette: {
    primary: { main: variables.primary, contrastText: "#ffffff" },
    secondary: { main: variables.secondary }
  },
  typography: { useNextVariants: true }
});

export default NoSigned;
