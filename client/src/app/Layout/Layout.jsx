import React, { Component } from "react";

import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import LayoutRouter from "./LayoutRouter";
/* Styles */
import "./Layout.sass";

export default class Layout extends Component {
  state = {
    sidebarPos: 2
  };

  handleSidebar = () => {
    if (this.state.sidebarPos < 2) {
      this.setState(state => ({
        sidebarPos: state.sidebarPos + 1
      }));
    } else {
      this.setState({
        sidebarPos: 0
      });
    }
  };

  render() {
    let sidebarClass = ["sidebar"];
    let mainClass = ["main"];

    if (this.state.sidebarPos === 1) {
      sidebarClass.push("sidebarMin");
      mainClass.push("mainMin");
    }
    if (this.state.sidebarPos === 2) {
      sidebarClass.push("sidebarOpen");
      mainClass.push("mainOpen");
    }

    return (
      <div className="layout">
        <Navbar onChange={this.handleSidebar} />
        <div className={sidebarClass.join(" ")}>
          <Sidebar />
        </div>
        <div className={mainClass.join(" ")}>
          <LayoutRouter />
        </div>
      </div>
    );
  }
}
