import React from "react";

import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Modal
} from "@material-ui/core";

import Draggable from "react-draggable";

export default class NewPatient extends React.Component {
  state = {
    name: "",
    regid: Date.now(),
    tel: ""
  };

  mapPropsToState = () => {};

  handleInputChange = ev => {
    this.setState({
      [ev.target.id]: ev.target.value
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();
  };

  handleClose = () => {
    this.props.onClose();
  };

  render() {
    return (
      <Modal
        open={this.props.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-name"
        onRendered={this.mapPropsToState}
      >
        <Draggable handle=".header">
          <div className="newPatientModal">
            <div className="header">
              <h3 id="form-dialog-name"> New Patient </h3>
            </div>
            <form onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">Patient name</InputLabel>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  onChange={this.handleInputChange}
                  value={this.state.name}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="regid">Registration ID</InputLabel>
                <Input
                  id="regid"
                  name="regid"
                  autoComplete="regid"
                  onChange={this.handleInputChange}
                  value={this.state.regid}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="tel">Telephone</InputLabel>
                <Input
                  id="tel"
                  name="tel"
                  autoComplete="tel"
                  onChange={this.handleInputChange}
                  value={this.state.tel}
                />
              </FormControl>
              <div className="pickers" />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Add patient
              </Button>
            </form>
          </div>
        </Draggable>
      </Modal>
    );
  }
}
