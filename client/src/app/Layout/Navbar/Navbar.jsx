import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.sass";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <i className="material-icons" onClick={this.props.onChange}>
          menu
        </i>
        <div className="brand-logo">
          <Link to="/">Test</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
