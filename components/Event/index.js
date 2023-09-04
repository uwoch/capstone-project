import { useState } from "react";
import EventForm from "../EventForm";
import { StyledListItem, StyledParagraph, StyledEditButton, StyledDeleteButton, StyledCancelButton } from "./Event.styled";
import { formatDate } from "../../resources/dateUtils";

export default function Event({ event, kidData, mutate }) {

  const [isEditMode, setIsEditMode] = useState(false);

  async function handleEditEvent(e) {
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
    const shouldDelete = window.confirm(
      `Möchtest du das Ereignis wirklich löschen?`
    );
    if (shouldDelete) {
    const responseEvent = await fetch(`/api/events/${event?._id}`, {
      method: "DELETE"});
    
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
      }
    }
  }}
  return (
    <StyledListItem>
      <StyledParagraph>{event.title}: {" "} {formatDate(event.date)}</StyledParagraph>
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
        <StyledEditButton
          type="button"
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}>
          Bearbeiten
          </StyledEditButton>
      ) : null}
      {!isEditMode ? (
        <StyledDeleteButton type="button" onClick={() => handleDeleteEvent(event)}
        >
          Löschen
        </StyledDeleteButton>
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