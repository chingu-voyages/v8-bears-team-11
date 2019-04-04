import React, { Component } from "react";
import "./Sidebar.sass";

export class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <ul>
          <li>
            <i className="material-icons">dashboard</i>
            <span>Dashboard</span>
          </li>
          <li>
            <i className="material-icons">people</i>
            <span>Clients</span>
          </li>
          <li>
            <i className="material-icons">show_chart</i>
            <span>Sales</span>
          </li>
          <li>
            <i className="material-icons">table_chart</i>
            <span>Others</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
