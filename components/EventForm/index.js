import { StyledForm, StyledHeading, StyledLabel, StyledInput, StyledSaveButton, StyledCldUploadButton, StyledGoBackButton } from "./EventForm.styled";
import StyledDatePicker from "./StyledDatePicker";
import { useState } from "react";


export default function EventForm({ onSubmit }) {
  
  const today = new Date();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <StyledForm onSubmit={onSubmit}>
     <StyledHeading>Erstelle ein neues Ereignis</StyledHeading>
      <StyledLabel htmlFor="title">Ereignis</StyledLabel>
      <StyledInput
        type="text"
        id="title"
        name="title"
        placeholder="1. Zahn, Läuft, Fährt Fahrrad..."
        required
        minLength={5}
        maxLength={100}
        pattern="[a-zA-Z0-9-]+"
      />
      <StyledLabel htmlFor="date">Datum</StyledLabel>
       <StyledDatePicker
            type="date"
            id="date"
            name="date"
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy/MM/dd"
            selected={startDate}
            required
            maxDate={today}
          />
      <StyledSaveButton>Log hinzufügen</StyledSaveButton>
    </StyledForm>
  );
}

