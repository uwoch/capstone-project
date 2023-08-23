import { useState } from "react";
import EventForm from "../EventForm";
import { useRouter } from "next/router";
import { StyledListItem } from "./Event.styled";
import { formatDate } from "../../resources/dateUtils";

export default function Event({ event, kidsData, mutate }) {
  const router = useRouter();

  const [isEditMode, setIsEditMode] = useState(false);

  async function handleEditEvent(event) {
    console.log("Event Object in handleEditEvent:", event);
    event.preventDefault();
    const formData = new FormData(event.target);
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
  async function handleDeleteEvent() {
    console.log("Event Object in handleDeleteEvent:", event);
    const responseEvent = await fetch(`/api/events/${event?._id}`, {
      method: "DELETE",
    });
    if (!responseEvent.ok) {
      return <h1>Something went wrong!</h1>;
    }

    if (responseEvent.ok) {
      const responseKid = await fetch(`/api/kids/${kidsData?._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          events: kidsData?.events.filter((oneEvent) => {
            return oneEvent._id == event._id ? false : true;
          }),
        }),
      });
      if (responseKid.ok) {
        mutate();
        router.push(`/kids/${kidsData?._id}`);
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
        <button type="button" onClick={handleDeleteEvent}>
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