import React, { useState, useEffect } from "react";

import { db } from "../../../index";

import "./PatientProfile.scss";
import Paper from "@material-ui/core/Paper";
import PersonalData from "./PersonalData";
import ClinicalHistory from "./ClinicalHistory";

function PatientProfile(props) {
  const patientID = props.match.params.uid;
  const patRef = db.collection("patients").doc(patientID);
  const [patient, setPatient] = useState(null);

  // READ FOR PATIENT DATA AND UPDATE COMPONENT
  useEffect(() => {
    db.collection("patients")
      .doc(patientID)
      .onSnapshot(snap => {
        let pat = snap.data();
        setPatient(pat);
      });
  }, []);

  return (
    <div className="patientProfile">
      {patient ? (
        <>
          <h1>
            {patient.name}
            {patient.age ? ", " + patient.age + " years old" : null}
          </h1>
          <Paper className="superior">
            <div className="personalData">
              <PersonalData patient={patient} patRef={patRef} />
            </div>
            <div className="clinicalHistory">
              <ClinicalHistory patient={patient} patRef={patRef} />
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
