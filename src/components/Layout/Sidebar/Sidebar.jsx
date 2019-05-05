import React from "react";
import { NavLink } from "react-router-dom";
import firebase from "firebase/app";

import "./Sidebar.scss";
import variables from "../../../main.scss";

const Sidebar = () => {
  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <ul>
      <NavLink
        className="li"
        exact
        to="/"
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
      <span className="spacer" />
      <div className="li" onClick={logout}>
        <i className="material-icons">exit_to_app</i>
        <span>Logout</span>
      </div>
    </ul>
  );
};

export default Sidebar;
