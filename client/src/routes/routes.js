import Agenda from "../components/Agenda/Agenda";
import Dashboard from "../components/Dashboard/Dashboard";
import Requerimientos from "../components/Requerimientos/Requerimientos";
import Pacientes from "../components/Pacientes/Pacientes";
import Documentos from "../components/Documentos/Documentos";
import Farmacos from "../components/Farmacos/Farmacos";

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
