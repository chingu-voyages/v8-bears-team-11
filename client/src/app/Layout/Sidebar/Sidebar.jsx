import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Sidebar.sass";

export class Sidebar extends Component {
  render() {
    return (
      <ul>
        <Link className="li" to="/db">
          <i className="material-icons">dashboard</i>
          <span>Dashboard</span>
        </Link>
        <Link className="li" to="/">
          <i className="material-icons">event</i>
          <span>Agenda</span>
        </Link>
        <Link className="li" to="/">
          <i className="material-icons">people</i>
          <span>Pacientes</span>
        </Link>
        <Link className="li" to="/sales">
          <i className="material-icons">description</i>
          <span>Documentos</span>
        </Link>
        <Link className="li" to="/">
          <i className="material-icons">local_pharmacy</i>
          <span>Fármacos</span>
        </Link>
        <span className="spacer" />
        <Link className="li" to="/">
          <i className="material-icons">settings</i>
          <span>Configuración</span>
        </Link>
        <Link className="li" to="/req">
          <i className="material-icons">assignment</i>
          <span>Requerimientos</span>
        </Link>
      </ul>
    );
  }
}

export default Sidebar;
