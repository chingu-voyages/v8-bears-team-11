import React, { useState } from "react";

// Material
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputAdornment from "@material-ui/core/InputAdornment";

function ClinicalHistory(props) {
  const [patient, setPatient] = useState(props.patient);
  const [disabledFlag, setDisabledFlag] = useState(true);

  const handlePersonalData = () => {
    if (disabledFlag) {
      setDisabledFlag(false);
    } else {
      setDisabledFlag(true);
      console.log(patient);
      props.patRef.update({ ...patient });
    }
  };

  return (
    <>
      <div className="sectionHeader">
        <span>Clinical History</span>
        <IconButton aria-label="Delete" onClick={handlePersonalData}>
          {disabledFlag ? (
            <i className="material-icons">edit</i>
          ) : (
            <i className="material-icons">save</i>
          )}
        </IconButton>
      </div>
      <form className="sectionContent">
        <div className="content">
          <div className="row1">
            <div className="left">
              <TextField
                label="Weight"
                variant="outlined"
                disabled={disabledFlag ? true : false}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Kg</InputAdornment>
                  )
                }}
                value={patient.weight ? patient.weight : ""}
                onChange={e =>
                  setPatient({ ...patient, weight: e.target.value })
                }
              />
              <TextField
                label="Height"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">cms</InputAdornment>
                  )
                }}
                disabled={disabledFlag ? true : false}
                value={patient.height ? patient.height : ""}
                onChange={e =>
                  setPatient({ ...patient, height: e.target.value })
                }
              />
              <FormControl
                className="selectGender"
                variant="outlined"
                disabled={disabledFlag ? true : false}
              >
                <InputLabel htmlFor="bloodGroup">Blood Group</InputLabel>
                <Select
                  value={patient.bloodGroup ? patient.bloodGroup : ""}
                  onChange={e =>
                    setPatient({ ...patient, bloodGroup: e.target.value })
                  }
                  input={
                    <OutlinedInput
                      labelWidth={80}
                      name="bloodGroup"
                      id="bloodGroup"
                    />
                  }
                >
                  <MenuItem value="">
                    <em>Unknown</em>
                  </MenuItem>
                  <MenuItem value="O-">O-</MenuItem>
                  <MenuItem value="O+">O+</MenuItem>
                  <MenuItem value="B-">B-</MenuItem>
                  <MenuItem value="B+">B+</MenuItem>
                  <MenuItem value="A-">A-</MenuItem>
                  <MenuItem value="A+">B+</MenuItem>
                  <MenuItem value="AB-">AB-</MenuItem>
                  <MenuItem value="AB+">AB+</MenuItem>
                </Select>
              </FormControl>
            </div>
            <TextField
              className="area"
              label="Allergies"
              variant="outlined"
              multiline
              rows="8"
              disabled={disabledFlag ? true : false}
              value={patient.allergies ? patient.allergies : ""}
              onChange={e =>
                setPatient({ ...patient, allergies: e.target.value })
              }
            />
            <TextField
              className="area"
              label="Medications"
              variant="outlined"
              multiline
              rows="8"
              disabled={disabledFlag ? true : false}
              value={patient.medications ? patient.medications : ""}
              onChange={e =>
                setPatient({ ...patient, medications: e.target.value })
              }
            />
          </div>
          <div className="row2">
            <TextField
              label="Congenital disorders"
              variant="outlined"
              multiline
              rows="6"
              disabled={disabledFlag ? true : false}
              value={patient.disorders ? patient.disorders : ""}
              onChange={e =>
                setPatient({ ...patient, disorders: e.target.value })
              }
            />
            <TextField
              label="Notes"
              variant="outlined"
              multiline
              rows="6"
              disabled={disabledFlag ? true : false}
              value={patient.notes ? patient.notes : ""}
              onChange={e => setPatient({ ...patient, notes: e.target.value })}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default ClinicalHistory;
