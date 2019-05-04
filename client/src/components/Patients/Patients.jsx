import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import "./Patients.scss";
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
            <div>
              <div className="gridHead">
                <h3>Name</h3>
                <h3>Phone Number</h3>
              </div>
              {results.map((patient, index) => {
                return (
                  <li key={index} className={index % 2 ? "odd" : "even"}>
                    <Link
                      to={{ pathname: `/patient/${patient.uid}` }}
                      className="gridBody"
                    >
                      <span> {patient.name} </span>
                      <span> {patient.tel} </span>
                    </Link>
                  </li>
                );
              })}
            </div>
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
