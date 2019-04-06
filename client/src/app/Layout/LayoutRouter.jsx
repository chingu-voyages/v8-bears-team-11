import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import routes from "./Routes/LayoutRoutes";

export default class LayoutRouter extends Component {
  render() {
    const routesMap = routes.map((route, i) => (
      <Route key={i} exact {...route} />
    ));

    return (
      <Switch>
        {routesMap}
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    );
  }
}
