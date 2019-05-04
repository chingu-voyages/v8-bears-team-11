import React, { useState, useEffect, useContext } from "react";

import { db } from "../../../index";

import "./PatientProfile.scss";
import Paper from "@material-ui/core/Paper";
import PersonalData from "./PersonalData";
import ClinicalHistory from "./ClinicalHistory";
import { UserContext } from "../../../Store";

function PatientProfile(props) {
  const patientID = props.match.params.uid;
  const patRef = db.collection("patients").doc(patientID);
  const [patient, setPatient] = useState(null);
  const [user] = useContext(UserContext);

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

  return (
    <div className="patientProfile">
      {patient ? (
        <>
          <h1>
            {patient.name}
            {patient.age ? <small>{patient.age + " years old"} </small> : null}
            {patient.gender ? <span>{patient.gender} </span> : null}
          </h1>
          <Paper className="superior">
            <div className="personalData">
              <PersonalData patient={patient} patRef={patRef} user={user} />
            </div>
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
