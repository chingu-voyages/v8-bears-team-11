import React, { useState, useContext } from "react";

import { UserContext } from "../../Store";

import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Modal
} from "@material-ui/core";

import Draggable from "react-draggable";

import { db } from "../../index";

const NewPatient = props => {
  const [user] = useContext(UserContext);
  const [name, setName] = useState("");
  const [regid, setRegId] = useState(Date.now());
  const [tel, setTel] = useState("");

  const handleSubmit = ev => {
    let created = new Date();
    ev.preventDefault();
    db.collection("patients")
      .add({ name, regid, tel, created: created.getTime(), owner: user })
      .then(docRef => console.log("Doc written with ID: ", docRef.id))
      .catch(err => console.log("Error addign doc: ", err));
    props.onClose();
  };

  const handleClose = () => {
    props.onClose();
  };

  const resetProps = () => {
    setName("");
    setRegId(Date.now());
    setTel("");
  };

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-name"
      onRendered={resetProps}
    >
      <Draggable handle=".header">
        <div className="newPatientModal">
          <div className="header">
            <h3 id="form-dialog-name"> New Patient </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">Patient name</InputLabel>
              <Input
                id="name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="regid">Registration ID</InputLabel>
              <Input
                id="regid"
                name="regid"
                autoComplete="regid"
                onChange={e => setRegId(e.target.value)}
                value={regid}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="tel">Telephone</InputLabel>
              <Input
                id="tel"
                name="tel"
                autoComplete="tel"
                onChange={e => setTel(e.target.value)}
                value={tel}
              />
            </FormControl>
            <div className="pickers" />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Add patient
            </Button>
          </form>
        </div>
      </Draggable>
    </Modal>
  );
};

export default NewPatient;
