import { useState } from "react";
import EventForm from "../EventForm";
import { useRouter } from "next/router";
import { StyledListItem } from "./Event.styled";
import { formatDate } from "../../resources/dateUtils";

export default function Event({ event, kidData, mutate }) {
  const router = useRouter();

  const [isEditMode, setIsEditMode] = useState(false);

  async function handleEditEvent(e) {
    console.log("Event Object in handleEditEvent:", e);
    e.preventDefault();
    const formData = new FormData(e.target);
    const eventData = Object.fromEntries(formData);

    const response = await fetch(`/api/events/${event?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });
    if (response.ok) {
      mutate();
      setIsEditMode(false);
    }
  }
  async function handleDeleteEvent(event) {
    console.log("Event Object in handleDeleteEvent:", event);
    const responseEvent = await fetch(`/api/events/${event?._id}`, {
      method: "DELETE",
    });

    if (responseEvent.ok) {
      const responseKid = await fetch(`/api/kids/${kidData?._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          events: kidData?.events.filter((oneEvent) => {
            return oneEvent._id == event._id ? false : true;
          }),
        }),
      });
      if (responseKid.ok) {
        mutate();
     /*    router.push(`/kids/${kidData?._id}`); */
      }
    }
  }
  return (
    <StyledListItem>
      <p>{event.title}</p>{" "}
      <p>{formatDate(event.date)}</p>
      <div>
        {isEditMode && (
          <EventForm
            onSubmit={handleEditEvent}
            title={event.title}
            date={event.date}
            isEditMode={true}
          />
        )}
      </div>
      {!isEditMode ? (
        <button
          type="button"
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}>
          Bearbeiten
          </button>
      ) : null}
      {!isEditMode ? (
        <button type="button" onClick={() => handleDeleteEvent(event)}
        >
          Ereignis löschen
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}>
        Abbrechen
        </button>
      )}
    </StyledListItem>
  );
}