import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import TimeInput from "material-ui-time-picker";

import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Modal,
  IconButton,
  Stepper,
  Step,
  StepLabel
} from "@material-ui/core";

import Draggable from "react-draggable";
import { PatientsContext } from "../../Store";

const Event = props => {
  const [patient, setPatient] = useState({});
  const [delbtn, setDelBtn] = useState(props.delbtn);
  const [ready, setReady] = useState(props.ready);
  const [open, setOpen] = useState(props.open);
  const [remove, setRemove] = useState(props.remove);
  const [start, setStart] = useState(props.event.start);
  const [end, setEnd] = useState(props.event.end);
  const [patients] = useContext(PatientsContext);
  const [results, setResults] = useState([]);
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["Search", "Set times"];

  useEffect(() => {
    if (ready === true) {
      props.onClose({ start, end, ready, remove, patient });
    }
  }, [ready]);

  useEffect(() => {
    if (remove === true) {
      props.onClose({ start, end, ready, remove, patient });
    }
  }, [remove]);

  useEffect(() => {
    if (open === false) {
      props.onClose({ start, end, ready, remove, patient });
    }
  }, [open]);

  const mapPropsToState = () => {
    if (props.delbtn) {
      patients.forEach(pat => {
        let res = pat.uid.localeCompare(props.event.patientid);
        if (res === 0) {
          setPatient(pat);
        }
      });
    }
    setDelBtn(props.delbtn);
    setReady(props.ready);
    setOpen(props.open);
    setRemove(props.remove);
    setStart(props.event.start);
    setEnd(props.event.end);
  };

  const handleTimeChange = (date, time) => {
    let mins = date.getMinutes();
    let hours = date.getHours();
    if (time === "start") {
      let newDate = new Date(start);
      newDate.setHours(hours);
      newDate.setMinutes(mins);
      setStart(newDate);
    }
    if (time === "end") {
      let newDate = new Date(end);
      newDate.setHours(hours);
      newDate.setMinutes(mins);
      setEnd(newDate);
    }
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    setReady(true);
  };
  const handleRemove = () => {
    const r = window.confirm(
      "Are you sure you want to remove this scheduled patient?"
    );
    if (r === true) {
      setRemove(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  // FIlter
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

  const selectPatient = pat => {
    setPatient(pat);
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  // Stepper
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div className="case0">
            <FormControl
              className="titleinput"
              margin="normal"
              required
              fullWidth
            >
              <InputLabel htmlFor="title">
                Search and select a patient
              </InputLabel>
              <Input
                id="title"
                name="title"
                autoComplete="title"
                autoFocus
                onChange={e => filterPatients(e.target.value)}
              />
            </FormControl>
            <ul className="patientList">
              {results.length > 0 ? (
                <div>
                  {results.map((patient, index) => {
                    return (
                      <li
                        key={index}
                        className={index % 2 ? "even" : "odd"}
                        onClick={() => selectPatient(patient)}
                      >
                        <span> {patient.name} </span>
                      </li>
                    );
                  })}
                </div>
              ) : null}
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="case1">
            {delbtn ? (
              <Link to={{ pathname: `/patient/${patient.uid}` }}>
                <h3>{patient.name}</h3>
              </Link>
            ) : (
              <h3>{patient.name}</h3>
            )}
            <div className="pickers">
              <span>Start</span>
              <span>End</span>
              <TimeInput
                className="timepicker"
                value={start}
                onChange={date => handleTimeChange(date, "start")}
              />
              <TimeInput
                className="timepicker"
                value={end}
                onChange={date => handleTimeChange(date, "end")}
              />
            </div>
          </div>
        );
      default:
        return "Uknown stepIndex";
    }
  }

  function handleBack() {
    setResults([]);
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      disableAutoFocus={delbtn}
      onRendered={mapPropsToState}
    >
      <Draggable handle=".header">
        <div className="eventModal">
          <div className="header">
            <h3 id="form-dialog-title"> {props.title} </h3>
            {delbtn ? (
              <IconButton onClick={handleRemove}>
                <i className="material-icons">delete</i>
              </IconButton>
            ) : (
              <div />
            )}
          </div>
          {delbtn ? (
            <div className="editContent">
              {getStepContent(1)}
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                fullWidth
              >
                Edit
              </Button>
            </div>
          ) : (
            <div className="newContent">
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {getStepContent(activeStep)}
              {activeStep === 0 ? (
                <div />
              ) : (
                <div className="btns">
                  <Button
                    variant="contained"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Save
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </Draggable>
    </Modal>
  );
};

export default Event;
