/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import { db } from "../../index";

function PatientProfile(props) {
  const patientID = props.match.params.uid;
  const [patient, setPatient] = useState(null);

  // READ FOR PATIENT DATA AND UPDATE COMPONENT
  useEffect(() => {
    db.collection("patients")
      .doc(patientID)
      .onSnapshot(snap => {
        let pat = snap.data();
        console.log(pat);
        setPatient(pat);
      });
  }, []);

  return (
    <div>
      {patient ? (
        <div>
          <h1>Que pedo {patient.name} </h1>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default PatientProfile;
