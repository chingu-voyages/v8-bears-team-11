import Agenda from "../app/Agenda/Agenda";
import Dashboard from "../app/Dashboard/Dashboard";
import Requerimientos from "../app/Requerimientos/Requerimientos";
import Pacientes from "../app/Pacientes/Pacientes";
import Documentos from "../app/Documentos/Documentos";
import Farmacos from "../app/Farmacos/Farmacos";

const routes = [
  {
    path: "/",
    component: Dashboard
  },
  {
    path: "/agenda",
    component: Agenda
  },
  {
    path: "/pacientes",
    component: Pacientes
  },
  {
    path: "/documentos",
    component: Documentos
  },
  {
    path: "/farmacos",
    component: Farmacos
  },
  {
    path: "/req",
    component: Requerimientos
  }
];

export default routes;
