import React, { useState, useContext, useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import "./Patients.scss";
import NewPatient from "./newPatient";
import { PatientsContext, UserContext } from "../../Store";
import { db } from "../../index";

const Pacientes = () => {
  const [newPatientModal, setNewPatientModal] = useState(false);
  const [results, setResults] = useState([]);
  const [recents, setRecents] = useState([]);
  const [patients] = useContext(PatientsContext);
  const [user] = useContext(UserContext);

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

  useEffect(() => {
    let unsubcribe = db
      .collection("patients")
      .where("owner", "==", user)
      .orderBy("created", "desc")
      .limit(5)
      .onSnapshot(pats => {
        let recentPatients = [];
        pats.forEach(patient => {
          let pat = { ...patient.data(), uid: patient.id };
          recentPatients.push(pat);
        });
        console.log(recentPatients);

        setRecents(recentPatients);
      });
    return unsubcribe;
  }, []);

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
          ) : recents.length > 0 ? (
            <>
              <h3>Last Created by {user} </h3>
              {recents.map((pat, index) => {
                return (
                  <li key={index} className={index % 2 ? "odd" : "even"}>
                    <Link
                      to={{ pathname: `/patient/${pat.uid}` }}
                      className="gridBody"
                    >
                      <span> {pat.name} </span>
                      <span>
                        {moment(pat.created).format("MMMM Do YYYY, h:mm:ss a")}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </>
          ) : (
            <span> Search for a patient or create a new patient </span>
          )}
        </ul>
      </Paper>

      <NewPatient open={newPatientModal} onClose={() => closeModal()} />
    </div>
  );
};

export default Pacientes;
