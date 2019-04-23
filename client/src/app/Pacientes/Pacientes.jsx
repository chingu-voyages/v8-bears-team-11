import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import "./Pacientes.scss";
import NewPatient from "./newPatient";

export class Pacientes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openNewPatientModal: false
    };
    this.openNewPatientModal = this.openNewPatientModal.bind(this);
  }

  openNewPatientModal = () => {
    this.setState({
      openNewPatientModal: true
    });
  };

  closeNewPatientModal = () => {
    this.setState({ openNewPatientModal: false });
  };
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
          <Button
            className="newPatientBtn"
            variant="contained"
            color="primary"
            onClick={this.openNewPatientModal}
          >
            + New patient
          </Button>
        </Paper>
        {this.state.openNewPatientModal ? (
          <NewPatient
            open={this.state.openNewPatientModal}
            onClose={this.closeNewPatientModal}
          />
        ) : null}
      </div>
    );
  }
}

export default Pacientes;
