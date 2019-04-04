import React, { Component } from "react";
import { Route } from "react-router-dom";

import routes from "./Routes/LayoutRoutes";

export default class LayoutRouter extends Component {
  render() {
    const routesMap = routes.map((route, i) => (
      <Route key={i} exact {...route} />
    ));

    return <div>{routesMap}</div>;
  }
}
