import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Import Material theme provider
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// Import Components
import Store from "./Store";
import Layout from "./components/Layout/Layout";
import variables from "./main.scss";

const App = () => {
  return (
    <Store>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route component={Layout} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </Store>
  );
};

// Theme config
const theme = createMuiTheme({
  palette: {
    primary: { main: variables.primary, contrastText: "#ffffff" },
    secondary: { main: variables.secondary }
  },
  typography: {
    useNextVariants: true
  }
});

export default App;
