import React, { Component } from "react";

import Calendar from "./Calendar";

import "./Agenda.scss";

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
        <div className="calendar">
          <Calendar />
        </div>
      </div>
    );
  }
}
