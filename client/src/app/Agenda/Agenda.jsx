import React, { Component } from "react";
import "./Agenda.sass";

export default class Agenda extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: null
    };
  }

  render() {
    return (
      <div className="agenda">
        <h1>Agenda</h1>
      </div>
    );
  }
}
