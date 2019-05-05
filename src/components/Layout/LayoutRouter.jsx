import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import routes from "../../routes/routes";

const LayoutRouter = () => {
  const routesMap = routes.map((route, i) => (
    <Route key={i} exact {...route} />
  ));

  return (
    <Switch>
      {routesMap}
      <Route path="*" render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default LayoutRouter;
