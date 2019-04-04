import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.sass";

export class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="wrapper nav__bar">
          <div className="brand-logo">
            <Link to="/">Test</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
