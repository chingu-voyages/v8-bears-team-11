import React, { useState, useEffect } from "react";

import { db } from "../../../index";
import moment from "moment";

import SwipeableViews from "react-swipeable-views";
// Material
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function Appointments(props) {
  const [tabIndex, setTabIndex] = useState(0);
  const [appointments, setAppointments] = useState(props.appointments);

  useEffect(() => {
    setAppointments(props.appointments);
  }, [props]);

  function handleTabChange(event, nexTab) {
    setTabIndex(nexTab);
  }
  function handleTabChangeIndex(index) {
    setTabIndex(index);
  }

  return (
    <div className="appointments">
      <h3>Appointments</h3>
      <Tabs
        className="tabsbar"
        value={tabIndex}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {appointments.map((ap, i) => {
          return <Tab key={i} label={moment(ap.start.toDate()).format("L")} />;
        })}
      </Tabs>
      <SwipeableViews index={tabIndex} onChangeIndex={handleTabChangeIndex}>
        {props.appointments.map((cita, i) => {
          return (
            <div key={i}>
              <Consultation cita={cita} user={props.user} />
            </div>
          );
        })}
      </SwipeableViews>
    </div>
  );
}

function Consultation(props) {
  const [cita, setCita] = useState(props.cita);
  const [disabledFlag, setDisabledFlag] = useState(true);

  useEffect(() => {
    setCita(props.cita);
  }, [props]);

  const handleConsultation = () => {
    if (disabledFlag) {
      setDisabledFlag(false);
    } else {
      setDisabledFlag(true);
      db.collection("events")
        .doc(cita.uid)
        .update({
          ...cita,
          edited: new Date(),
          editedBy: props.user
        });
    }
  };

  return (
    <div className="consultation">
      <div className="sectionHeader">
        <span>
          Consultation of {moment(cita.start.toDate()).format("LLLL")}{" "}
        </span>
        <IconButton aria-label="Delete" onClick={handleConsultation}>
          {disabledFlag ? (
            <i className="material-icons">edit</i>
          ) : (
            <i className="material-icons">save</i>
          )}
        </IconButton>
      </div>
      <form className="sectionContent">
        <div className="content">
          <div className="vitalsigns">
            <TextField
              label="Temp"
              variant="outlined"
              disabled={disabledFlag ? true : false}
              InputProps={{
                endAdornment: <InputAdornment position="end">°C</InputAdornment>
              }}
              value={cita.temp ? cita.temp : ""}
              onChange={e => setCita({ ...cita, temp: e.target.value })}
            />
            <TextField
              label="Heart rate"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">bpm</InputAdornment>
                )
              }}
              disabled={disabledFlag ? true : false}
              value={cita.hr ? cita.hr : ""}
              onChange={e => setCita({ ...cita, hr: e.target.value })}
            />
            <TextField
              label="Systolic"
              variant="outlined"
              disabled={disabledFlag ? true : false}
              value={cita.systolic ? cita.systolic : ""}
              onChange={e => setCita({ ...cita, systolic: e.target.value })}
            />
            <TextField
              label="Diastolic"
              variant="outlined"
              disabled={disabledFlag ? true : false}
              value={cita.diastolic ? cita.diastolic : ""}
              onChange={e => setCita({ ...cita, diastolic: e.target.value })}
            />
            <TextField
              label="SpO2"
              variant="outlined"
              disabled={disabledFlag ? true : false}
              value={cita.spo2 ? cita.spo2 : ""}
              onChange={e => setCita({ ...cita, spo2: e.target.value })}
            />
          </div>
          <div className="row1">
            <TextField
              label="Symptoms"
              variant="outlined"
              multiline
              rows="8"
              disabled={disabledFlag ? true : false}
              value={cita.symptoms ? cita.symptoms : ""}
              onChange={e => setCita({ ...cita, symptoms: e.target.value })}
            />
            <TextField
              label="Clinical findings"
              variant="outlined"
              multiline
              rows="8"
              disabled={disabledFlag ? true : false}
              value={cita.findings ? cita.findings : ""}
              onChange={e => setCita({ ...cita, findings: e.target.value })}
            />
          </div>
          <div className="row2">
            <TextField
              label="Diagnosis"
              variant="outlined"
              multiline
              rows="8"
              disabled={disabledFlag ? true : false}
              value={cita.diagnosis ? cita.diagnosis : ""}
              onChange={e => setCita({ ...cita, diagnosis: e.target.value })}
            />
            <TextField
              label="Prescription"
              variant="outlined"
              multiline
              rows="8"
              disabled={disabledFlag ? true : false}
              value={cita.prescription ? cita.prescription : ""}
              onChange={e => setCita({ ...cita, prescription: e.target.value })}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Appointments;
