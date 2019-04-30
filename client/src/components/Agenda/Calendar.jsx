import React, { Component } from "react";

import BigCalendar from "react-big-calendar";

import Event from "./Event";

import moment from "moment";
import "moment/locale/en-ca";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
const localizer = BigCalendar.momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(BigCalendar);

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      openCreate: false,
      openEdit: false,
      actualEvent: null
    };
    this.createEvent = this.createEvent.bind(this);
    this.editEvent = this.editEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.openCreateModal = this.openCreateModal.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
  }

  //TODO on resize (window for mobile) change calendar view to TODAY or AGENDA
  //   https://codepen.io/jagretz/pen/VWbwOQ?editors=1111

  openCreateModal = ev => {
    this.setState({
      openCreate: true,
      actualEvent: { start: ev.start, end: ev.end, title: "" }
    });
  };
  createEvent = event => {
    this.setState({ openCreate: false });
    if (event.ready) {
      let newEvent = {
        title: event.title,
        start: event.start,
        end: event.end
      };
      this.setState({
        events: this.state.events.concat([newEvent])
      });
    }
  };

  openEditModal = ev => {
    this.setState({ openEdit: true, actualEvent: ev });
  };

  closeEditModal = event => {
    this.setState({ openEdit: false });
    if (event.ready || event.remove) {
      if (event.remove) {
        this.deleteEvent({ event: this.state.actualEvent });
      } else {
        this.editEvent({
          event: this.state.actualEvent,
          start: event.start,
          end: event.end
        });
      }
    }
  };

  editEvent = ({ event, start, end }) => {
    const { events } = this.state;
    const idx = events.indexOf(event);
    let newEvent = { ...event, start, end };
    const nextEvents = [...events];
    nextEvents.splice(idx, 1, newEvent);
    this.setState({
      events: nextEvents
    });
  };

  deleteEvent = ({ event }) => {
    this.setState((prevState, props) => {
      const events = [...prevState.events];
      const idx = events.indexOf(event);
      events.splice(idx, 1);
      return { events };
    });
  };

  render = () => (
    <div>
      <DragAndDropCalendar
        selectable
        localizer={localizer}
        events={this.state.events}
        onEventDrop={this.editEvent}
        onSelectSlot={this.openCreateModal}
        onSelectEvent={this.openEditModal}
        defaultView={BigCalendar.Views.WEEK}
        step={15}
        messages={{
          previous: "<",
          next: ">",
          noEventsInRange: "There are no patients scheduled for this time range"
        }}
        timeslots={4}
        min={new Date("2019, 1, 1, 08:00")}
        max={new Date("2019, 1, 1, 20:00")}
        style={{ height: "100vh" }}
      />
      {this.state.openCreate ? (
        <div>
          <Event
            title="Nueva cita"
            ready={false}
            remove={false}
            delbtn={false}
            open={this.state.openCreate}
            event={this.state.actualEvent}
            onClose={this.createEvent}
          />
        </div>
      ) : this.state.openEdit ? (
        <div>
          <Event
            title="Editar cita"
            ready={false}
            remove={false}
            delbtn={true}
            open={this.state.openEdit}
            event={this.state.actualEvent}
            onClose={this.closeEditModal}
          />
        </div>
      ) : null}
    </div>
  );
}
