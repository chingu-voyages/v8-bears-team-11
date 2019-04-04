import React, { Component } from "react";

import { Navbar } from "./Navbar/Navbar";
import LayoutRouter from "./LayoutRouter";
/* Styles */
import "./Layout.sass";

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Navbar />
        <div className="content_main">
          <LayoutRouter />
        </div>
      </div>
    );
  }
}
