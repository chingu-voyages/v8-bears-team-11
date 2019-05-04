import React from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.scss";
import variables from "../../../main.scss";

const Sidebar = () => {
  return (
    <ul>
      <NavLink
        className="li"
        exact
        to="/"
        activeStyle={{ color: variables.primary }}
      >
        <i className="material-icons">dashboard</i>
        <span>Dashboard</span>
      </NavLink>
      <NavLink
        className="li"
        to="/agenda"
        activeStyle={{ color: variables.primary }}
      >
        <i className="material-icons">event</i>
        <span>Agenda</span>
      </NavLink>
      <NavLink
        className="li"
        to="/patients"
        activeStyle={{ color: variables.primary }}
      >
        <i className="material-icons">people</i>
        <span>Patients</span>
      </NavLink>
      <NavLink
        className="li"
        to="/documentos"
        activeStyle={{ color: variables.primary }}
      >
        <i className="material-icons">description</i>
        <span>Documentos</span>
      </NavLink>
      <NavLink
        className="li"
        to="/farmacos"
        activeStyle={{ color: variables.primary }}
      >
        <i className="material-icons">local_pharmacy</i>
        <span>Fármacos</span>
      </NavLink>
      <span className="spacer" />
      <NavLink
        className="li"
        to="/config"
        activeStyle={{ color: variables.primary }}
      >
        <i className="material-icons">settings</i>
        <span>Configuración</span>
      </NavLink>
      <NavLink
        className="li"
        to="/req"
        activeStyle={{ color: variables.primary }}
      >
        <i className="material-icons">assignment</i>
        <span>Requerimientos</span>
      </NavLink>
    </ul>
  );
};

export default Sidebar;
