import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import "./Pacientes.scss";
import NewPatient from "./newPatient";
import { PatientsContext } from "../../Store";

const Pacientes = () => {
  const [newPatientModal, setNewPatientModal] = useState(false);
  const [results, setResults] = useState([]);
  const [patients] = useContext(PatientsContext);

  const closeModal = () => {
    setNewPatientModal(false);
  };

  const filterPatients = val => {
    val = val.trim().toLowerCase();
    if (val === "") {
      setResults([]);
    } else {
      setResults(filterAllProperties([...patients], val));
    }
  };

  const filterAllProperties = (array, value) => {
    let filtrado = [];
    for (let i = 0; i < array.length; i++) {
      let obj = JSON.stringify(array[i]);
      if (obj.toLowerCase().indexOf(value) >= 0) {
        filtrado.push(JSON.parse(obj));
      }
    }
    return filtrado;
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
          onChange={e => filterPatients(e.target.value)}
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
      <Paper className="paperPatientsList">
        <ul>
          {results.length > 0 ? (
            results.map(patient => {
              return (
                <Link
                  key={patient.regid}
                  to={{ pathname: `/patient/${patient.uid}` }}
                >
                  {patient.name}
                </Link>
              );
            })
          ) : (
            <span>Try searching for name or phone</span>
          )}
        </ul>
      </Paper>
      <NewPatient open={newPatientModal} onClose={() => closeModal()} />
    </div>
  );
};

export default Pacientes;
