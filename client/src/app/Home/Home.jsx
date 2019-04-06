import React, { Component } from "react";

import "./Home.sass";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: null
    };
  }

  render() {
    return (
      <div className="home">
        <h1>Home</h1>
      </div>
    );
  }
}
