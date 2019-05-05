import Agenda from "../components/Agenda/Agenda";
import Patients from "../components/Patients/Patients";
import PatientProfile from "../components/Patients/PatientProfile/PatientProfile";

const routes = [
  {
    path: "/",
    component: Agenda
  },
  {
    path: "/patients",
    component: Patients
  },
  {
    path: "/patient/:uid",
    component: PatientProfile
  }
];

export default routes;
