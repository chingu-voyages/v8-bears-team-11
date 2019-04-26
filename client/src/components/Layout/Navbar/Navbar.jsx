import React from "react";
import firebase from "firebase/app";
import { Link } from "react-router-dom";

import "./Navbar.sass";
import defaultPP from "../../../assets/pp.png";

const Navbar = props => {
  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <div className="navbar">
      <i className="material-icons" onClick={props.onChange}>
        menu
      </i>
      <div className="brand-logo">
        <Link to="/">
          <h3>ChinguEMR</h3>
        </Link>
      </div>
      <span className="spacer" />
      <div className="user">
        <a href="/" onClick={logout}>
          <p> John Doe </p>
          <img src={defaultPP} alt="PP" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
