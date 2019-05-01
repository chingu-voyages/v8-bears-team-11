import React, { useState, useEffect } from "react";

import BigCalendar from "react-big-calendar";

import Event from "./Event";

import moment from "moment";
// import "moment/locale/en-ca";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
const localizer = BigCalendar.momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(BigCalendar);

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [actualEvent, setActualEvent] = useState(null);

  const openCreateModal = ev => {
    setActualEvent({ start: ev.start, end: ev.end, title: "" });
    setOpenCreate(true);
  };
  const createEvent = event => {
    setOpenCreate(false);
    if (event.ready) {
      let newEvent = {
        title: event.patient.name,
        start: event.start,
        end: event.end,
        puid: event.patient.uid
      };
      setEvents(events => events.concat([newEvent]));
    }
  };

  const openEditModal = ev => {
    setActualEvent(ev);
    setOpenEdit(true);
  };

  const closeEditModal = event => {
    setOpenEdit(false);
    if (event.ready || event.remove) {
      if (event.remove) {
        deleteEvent(actualEvent);
      } else {
        editEvent({
          event: actualEvent,
          start: event.start,
          end: event.end
        });
      }
    }
  };

  const editEvent = ({ event, start, end }) => {
    const idx = events.indexOf(event);
    let newEvent = { ...event, start, end };
    const nextEvents = [...events];
    nextEvents.splice(idx, 1, newEvent);
    setEvents(nextEvents);
  };

  const deleteEvent = event => {
    const myEvents = [...events];
    const idx = myEvents.indexOf(event);
    myEvents.splice(idx, 1);
    setEvents(myEvents);
  };

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <div>
      <DragAndDropCalendar
        selectable
        localizer={localizer}
        events={events}
        onEventDrop={editEvent}
        onSelectSlot={openCreateModal}
        onSelectEvent={openEditModal}
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
      {openCreate ? (
        <div>
          <Event
            title="New appointment"
            ready={false}
            remove={false}
            delbtn={false}
            open={openCreate}
            event={actualEvent}
            onClose={createEvent}
          />
        </div>
      ) : openEdit ? (
        <div>
          <Event
            title="Edit appointment"
            ready={false}
            remove={false}
            delbtn={true}
            open={openEdit}
            event={actualEvent}
            onClose={closeEditModal}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Calendar;
