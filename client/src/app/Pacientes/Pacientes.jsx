import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import "./Pacientes.scss";

export class Pacientes extends Component {
  render() {
    return (
      <div className="pacientes">
        <div className="superior">
          <h1>Patients</h1>
        </div>
        <Paper className="paperSearch">
          <TextField
            className="searchInput"
            type="search"
            label="Search patient"
            variant="outlined"
            autoFocus
          />
          <span className="spacer" />
          <Button variant="contained" color="primary">
            + New patient
          </Button>
        </Paper>
      </div>
    );
  }
}

export default Pacientes;
