import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Import Material theme provider
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// Import Components
import Layout from "./app/Layout/Layout";
import variables from "./main.scss";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" component={Layout} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

// Theme config
const theme = createMuiTheme({
  palette: {
    primary: { main: variables.primary },
    secondary: { main: variables.secondary }
  }
});

export default App;
