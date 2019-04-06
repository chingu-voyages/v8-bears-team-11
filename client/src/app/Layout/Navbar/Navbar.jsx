import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.sass";
import defaultPP from "../../../assets/pp.png";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <i className="material-icons" onClick={this.props.onChange}>
          menu
        </i>
        <div className="brand-logo">
          <Link to="/">
            <h3>ChinguEMR</h3>
          </Link>
        </div>
        <span className="spacer" />
        <div className="user">
          <p> John Doe </p>
          <img src={defaultPP} alt="PP" />
        </div>
      </div>
    );
  }
}

export default Navbar;
