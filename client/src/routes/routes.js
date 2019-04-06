import Home from "../app/Home/Home";
import Dashboard from "../app/Dashboard/Dashboard";
import Requerimientos from "../app/Requerimientos/Requerimientos";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/db",
    component: Dashboard
  },
  {
    path: "/req",
    component: Requerimientos
  }
];

export default routes;
