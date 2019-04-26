import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.sass";
import defaultPP from "../../../assets/pp.png";

const Navbar = props => {
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
        <Link to="/login">
          <p> John Doe </p>
          <img src={defaultPP} alt="PP" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
