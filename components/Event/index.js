import { useState } from "react";
import EventForm from "../EventForm";
import { StyledListItem, StyledParagraph, StyledEditButton, StyledDeleteButton, StyledCancelButton } from "./Event.styled";
import { formatDate } from "../../resources/dateUtils";
import { handleEditEvent, handleDeleteEvent } from "../../pages/EventPage";


export default function Event({ event, kidData, mutate }) {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <StyledListItem>
      <StyledParagraph><strong>{event.title}:</strong> {formatDate(event.date)}</StyledParagraph>
      <div>
        {isEditMode && (
          <EventForm
            onSubmit={(e) => handleEditEvent(e, event, mutate, setIsEditMode)}
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
          ✏️
          </StyledEditButton>
      ) : null}
      {!isEditMode ? (
        <StyledDeleteButton 
        type="button" 
        onClick={() => handleDeleteEvent(event, kidData, mutate)}
        >
          ❌
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