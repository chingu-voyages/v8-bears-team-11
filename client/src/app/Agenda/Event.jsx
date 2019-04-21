import React from "react";

import TimeInput from "material-ui-time-picker";

import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Modal,
  IconButton
} from "@material-ui/core";

import Draggable from "react-draggable";

export default class Event extends React.Component {
  state = {
    title: ""
  };

  mapPropsToState = () => {
    this.setState({
      delbtn: this.props.delbtn,
      ready: this.props.ready,
      delete: this.props.delete,
      start: this.props.event.start,
      end: this.props.event.end,
      title: this.props.event.title
    });
  };
  handleTitleChange = ev => {
    this.setState({
      [ev.target.id]: ev.target.value
    });
  };
  handleTimeChange = (date, time) => {
    var mins = date.getMinutes();
    var hours = date.getHours();
    var newDate = new Date(this.state[time]);
    newDate.setHours(hours);
    newDate.setMinutes(mins);
    this.setState({ [time]: newDate });
  };
  handleSubmit = ev => {
    ev.preventDefault();
    this.setState({ open: false, ready: true }, () => {
      this.props.onClose(this.state);
    });
  };
  handleDelete = () => {
    const r = window.confirm("Está por eliminar esta cita, ¿Esta de acuerdo?");
    if (r === true) {
      this.setState({ open: false, delete: true }, () => {
        this.props.onClose(this.state);
      });
    }
  };
  handleClose = () => {
    this.setState({ open: false }, () => {
      this.props.onClose(this.state);
    });
  };

  render() {
    return (
      <Modal
        open={this.props.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
        onRendered={this.mapPropsToState}
      >
        <Draggable handle=".header">
          <div className="eventModal">
            <div className="header">
              <h3 id="form-dialog-title"> {this.props.title} </h3>
              {this.state.delbtn ? (
                <IconButton onClick={this.handleDelete}>
                  <i className="material-icons">delete</i>
                </IconButton>
              ) : (
                <div />
              )}
            </div>
            <form onSubmit={this.handleSubmit}>
              <FormControl
                className="titleinput"
                margin="normal"
                required
                fullWidth
              >
                <InputLabel htmlFor="title">Nombre de paciente</InputLabel>
                <Input
                  id="title"
                  name="title"
                  autoComplete="title"
                  autoFocus
                  onChange={this.handleTitleChange}
                  value={this.state.title}
                />
              </FormControl>
              <div className="pickers">
                <span>Inicio</span>
                <span>Fin</span>
                <TimeInput
                  className="timepicker"
                  value={this.state.start}
                  onChange={date => this.handleTimeChange(date, "start")}
                />
                <TimeInput
                  className="timepicker"
                  value={this.state.end}
                  onChange={date => this.handleTimeChange(date, "end")}
                />
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                {this.props.textbtn}{" "}
              </Button>
            </form>
          </div>
        </Draggable>
      </Modal>
    );
  }
}
