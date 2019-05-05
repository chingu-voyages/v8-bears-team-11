import React, { useState, useEffect } from "react";

import { db } from "../../index";

import BigCalendar from "react-big-calendar";

import Event from "./Event";

import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
const localizer = BigCalendar.momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(BigCalendar);

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [actualEvent, setActualEvent] = useState(null);

  // READ FOR EVENTS IN DB
  useEffect(() => {
    db.collection("events").onSnapshot(data => {
      if (!data.empty) {
        let myEvents = [];
        data.forEach(ev => {
          // Convert FB time to Calendar Time
          let calStart = new Date(ev.data().start.toMillis());
          let calEnd = new Date(ev.data().end.toMillis());
          let evn = { ...ev.data(), start: calStart, end: calEnd, uid: ev.id };
          myEvents.push(evn);
        });
        setEvents(myEvents);
      } else {
        console.log("there are no events");
        setEvents([]);
      }
    });
  }, []);

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
        patientid: event.patient.uid
      };
      db.collection("events")
        .add(newEvent)
        .catch(err => console.log("Error addign event: ", err));
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
    let newEvent = { ...event, start, end };
    db.collection("events")
      .doc(event.uid)
      .update(newEvent)
      .catch(err => console.error("Error updating event: ", err));
  };

  const deleteEvent = event => {
    db.collection("events")
      .doc(event.uid)
      .delete()
      .catch(err => console.error("Error removing event: ", err));
  };

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
        step={30}
        messages={{
          previous: "<",
          next: ">",
          noEventsInRange: "There are no patients scheduled for this time range"
        }}
        timeslots={2}
        min={new Date("2019, 1, 1, 08:00")}
        max={new Date("2019, 1, 1, 20:00")}
        style={{ height: "72vh" }}
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
