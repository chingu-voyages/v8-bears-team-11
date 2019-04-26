import React from "react";

import Calendar from "./Calendar";

import "./Agenda.scss";

const Agenda = () => {
  return (
    <div className="agenda">
      <h1>Agenda</h1>
      <div className="calendar">
        <Calendar />
      </div>
    </div>
  );
};

export default Agenda;
