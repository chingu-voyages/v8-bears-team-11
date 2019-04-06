import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  StaticRouter,
  Redirect
} from "react-router-dom";

import Layout from "../app/Layout/Layout.jsx";

export default ({ server, location, context }) => {
  // Client Router
  let router = (
    <Router>
      <Switch>
        <Route path="/" component={Layout} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );

  // Server Router
  if (server) {
    router = (
      <StaticRouter location={location} context={context}>
        <Switch>
          <Route path="/" component={Layout} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </StaticRouter>
    );
  }

  return <div>{router}</div>;
};
