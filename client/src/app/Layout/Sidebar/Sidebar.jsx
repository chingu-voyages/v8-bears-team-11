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
          <i className="material-icons">people</i>
          <span>Clients</span>
        </Link>
        <Link className="li" to="/sales">
          <i className="material-icons">show_chart</i>
          <span>Sales</span>
        </Link>
        <Link className="li" to="/">
          <i className="material-icons">table_chart</i>
          <span>Others</span>
        </Link>
        <span className="spacer" />
        <Link className="li" to="/">
          <i className="material-icons">settings</i>
          <span>Configuration</span>
        </Link>
        <Link className="li" to="/">
          <i className="material-icons">settings</i>
          <span>Configur</span>
        </Link>
      </ul>
    );
  }
}

export default Sidebar;
