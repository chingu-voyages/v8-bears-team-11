import React, { Component } from "react";
import { Route } from "react-router-dom";

import routes from "../../routes/routes";

export default class UiPrivateRouter extends Component {
  render() {
    const routesMap = routes.map((route, i) => (
      <Route key={i} exact {...route} />
    ));

    return <div className="UiPrivateRouter wrapper">{routesMap}</div>;
  }
}
