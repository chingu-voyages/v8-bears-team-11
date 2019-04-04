import React, { Component } from "react";

import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import LayoutRouter from "./LayoutRouter";
/* Styles */
import "./Layout.sass";

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Navbar />
        <Sidebar />
        <div className="Main">
          <LayoutRouter />
        </div>
      </div>
    );
  }
}
