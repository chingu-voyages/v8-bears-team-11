import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.sass";

export default class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: null
    };
  }

  render() {
    return (
      <div className="Books">
        <h1>Home</h1>
        <Link to="/db">
          <h1 className="title-brand">To Dashboard</h1>
        </Link>
      </div>
    );
  }
}
