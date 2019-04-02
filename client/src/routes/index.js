import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  StaticRouter
} from "react-router-dom";

import Layout from "../app/Ui-Private/UiPrivate";

export default ({ server, location, context }) => {
  // Client Router
  let router = (
    <Router>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  );

  // Server Router
  if (server) {
    router = (
      <StaticRouter location={location} context={context}>
        <Switch>
          <Route path="/" component={Layout} />
        </Switch>
      </StaticRouter>
    );
  }

  return <div>{router}</div>;
};
