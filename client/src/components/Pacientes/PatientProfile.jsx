import React, { useState, useEffect } from "react";

import { db } from "../../index";

import "./PatientProfile.scss";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function PatientProfile(props) {
  const patientID = props.match.params.uid;
  const [patient, setPatient] = useState(null);
  const [mydate, setMyDate] = useState(null);
  const [disabledFlag, setDisabledFlag] = useState(true);

  // READ FOR PATIENT DATA AND UPDATE COMPONENT
  useEffect(() => {
    db.collection("patients")
      .doc(patientID)
      .onSnapshot(snap => {
        let pat = snap.data();
        setPatient(pat);
      });
  }, []);

  const handlePersonalData = () => {
    if (disabledFlag) {
      setDisabledFlag(false);
    } else {
      setDisabledFlag(true);
      if (mydate) {
        calculateAge(mydate);
      }
      db.collection("patients")
        .doc(patientID)
        .update({ ...patient });
    }
  };

  const calculateAge = birthday => {
    let dob = new Date(birthday);
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    if (
      today.getMonth() < dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
    ) {
      age--;
    }
    let offset = dob.getTimezoneOffset();
    let dobFl = dob.getTime() + offset * 60 * 1000;
    let correct = new Date(dobFl);
    db.collection("patients")
      .doc(patientID)
      .update({ ...patient, dob: correct, age });
  };

  const renderDate = () => {
    let fbdate = patient.dob.toDate();
    let day = ("0" + fbdate.getDate()).slice(-2);
    let month = ("0" + (fbdate.getMonth() + 1)).slice(-2);
    return fbdate.getFullYear() + "-" + month + "-" + day;
  };

  return (
    <div className="patientProfile">
      {patient ? (
        <>
          <h1>
            {patient.name} {patient.age ? patient.age + " years" : null}
          </h1>
          <Paper className="superior">
            <div className="personalData">
              <div className="sectionHeader">
                <p>Personal Data</p>
                <Button variant="contained" onClick={handlePersonalData}>
                  {disabledFlag ? "Edit" : "Save"}
                </Button>
              </div>
              <form className="sectionContent">
                <TextField
                  label="Telephone"
                  variant="outlined"
                  disabled={disabledFlag ? true : false}
                  value={patient.tel ? patient.tel : ""}
                  onChange={e =>
                    setPatient({ ...patient, tel: e.target.value })
                  }
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  disabled={disabledFlag ? true : false}
                  value={patient.email ? patient.email : ""}
                  onChange={e =>
                    setPatient({ ...patient, email: e.target.value })
                  }
                />
                <TextField
                  label="Address"
                  variant="outlined"
                  disabled={disabledFlag ? true : false}
                  value={patient.address ? patient.address : ""}
                  onChange={e =>
                    setPatient({ ...patient, address: e.target.value })
                  }
                />
                <FormControl
                  className="selectGender"
                  variant="outlined"
                  disabled={disabledFlag ? true : false}
                >
                  <InputLabel htmlFor="gender">Gender</InputLabel>
                  <Select
                    value={patient.gender ? patient.gender : ""}
                    onChange={e =>
                      setPatient({ ...patient, gender: e.target.value })
                    }
                    input={
                      <OutlinedInput
                        labelWidth={50}
                        name="gender"
                        id="gender"
                      />
                    }
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  className="dob"
                  label="Birthday"
                  variant="outlined"
                  disabled={disabledFlag ? true : false}
                  type="date"
                  defaultValue={patient.dob ? renderDate() : ""}
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={e => {
                    setMyDate(e.target.value);
                  }}
                />
              </form>
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
