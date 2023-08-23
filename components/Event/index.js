import { useState } from "react";
import EditForm from "../EditForm";
import { useRouter } from "next/router";
import { StyledListItem, StyledCancelButton } from "./Event.styled";
import { formatDate } from "../../resources/dateUtils";

export default function Event({ event, kidData }) {
  const router = useRouter();

  const [isEditMode, setIsEditMode] = useState(false);

  async function handleEditEvent(event) {
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
    const responseEvent = await fetch(`/api/events/${event?._id}`, {
      method: "DELETE",
    });
    if (!responseEvent.ok) {
      return <h1>Something went wrong!</h1>;
    }

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
        router.push(`/kids/${kidData?._id}`);
      }
    }
  }

  return (
    <StyledListItem>
      <p>{event.title}</p>{" "}
     {/*  <p>{formatDate(event.date)}</p> */}
      <div>
        {isEditMode && (
          <EditForm
            onSubmit={handleEditEvent}
            title={event.title}
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
        <StyledCancelButton
          type="button"
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}>
        Abbrechen
        </StyledCancelButton>
      )}
    </StyledListItem>
  );
}