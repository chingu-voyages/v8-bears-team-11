import React, { useState, useEffect, useContext } from "react";

import "./PatientProfile.scss";

import { db } from "../../../index";
import { UserContext } from "../../../Store";

import PersonalData from "./PersonalData";
import ClinicalHistory from "./ClinicalHistory";
import Appointments from "./Appointments";

import Paper from "@material-ui/core/Paper";

function PatientProfile(props) {
  const patientID = props.match.params.uid;
  const [user] = useContext(UserContext);
  const patRef = db.collection("patients").doc(patientID);
  const [patient, setPatient] = useState(null);
  const [appointments, setAppointments] = useState([]);

  // READ FOR PATIENT DATA AND UPDATE COMPONENT
  useEffect(() => {
    let unsubscribe = db
      .collection("patients")
      .doc(patientID)
      .onSnapshot(snap => {
        let pat = snap.data();
        setPatient(pat);
      });
    return unsubscribe;
  }, []);

  // READ PATIENT APPOINTMENTS
  useEffect(() => {
    let unsubscribe = db
      .collection("events")
      .where("patientid", "==", patientID)
      .onSnapshot(snap => {
        let citas = [];
        snap.forEach(app => {
          citas.push({ ...app.data(), uid: app.id });
        });
        setAppointments(citas);
      });
    return unsubscribe;
  }, []);

  let gridAreasClass = ["superior", "gridAreas"];
  if (appointments.length > 0) {
    gridAreasClass = ["superior", "gridAreasApp"];
  }

  return (
    <div className="patientProfile">
      {patient ? (
        <>
          <h1>
            {patient.name}
            {patient.age ? <small>{patient.age + " years old"} </small> : null}
            {patient.gender ? <span>{patient.gender} </span> : null}
          </h1>
          <Paper className={gridAreasClass.join(" ")}>
            <div className="personalData">
              <PersonalData patient={patient} patRef={patRef} user={user} />
            </div>
            {appointments.length > 0 ? (
              <Appointments appointments={appointments} user={user} />
            ) : null}
            <div className="clinicalHistory">
              <ClinicalHistory patient={patient} patRef={patRef} user={user} />
            </div>
          </Paper>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default PatientProfile;
