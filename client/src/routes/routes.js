import Agenda from "../components/Agenda/Agenda";
import Dashboard from "../components/Dashboard/Dashboard";
import Requerimientos from "../components/Requerimientos/Requerimientos";
import Patients from "../components/Patients/Patients";
import Documentos from "../components/Documentos/Documentos";
import Farmacos from "../components/Farmacos/Farmacos";
import PatientProfile from "../components/Patients/PatientProfile/PatientProfile";

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
    path: "/patients",
    component: Patients
  },
  {
    path: "/patient/:uid",
    component: PatientProfile
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
