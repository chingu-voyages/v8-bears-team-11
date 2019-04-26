import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import "./Pacientes.scss";
import NewPatient from "./newPatient";

const Pacientes = () => {
  const [newPatientModal, setNewPatientModal] = useState(false);

  const closeModal = () => {
    setNewPatientModal(false);
  };

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
          onClick={() => setNewPatientModal(true)}
        >
          + New patient
        </Button>
      </Paper>
      <NewPatient open={newPatientModal} onClose={() => closeModal()} />
    </div>
  );
};

export default Pacientes;
