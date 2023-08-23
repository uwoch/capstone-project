import { StyledForm, StyledHeading, StyledLabel, StyledInput, StyledSaveButton, StyledCldUploadButton, StyledGoBackButton } from "./EventForm.styled";
import StyledDatePicker from "./StyledDatePicker";
import { useState } from "react";


export default function EventForm({ onSubmit, title, isEditMode, date }) {
  
  const today = new Date();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledHeading>{isEditMode ? "Ereignis bearbeiten:" : "Erstelle ein neues Ereignis"} </StyledHeading>
      <StyledLabel htmlFor="title">Ereignis</StyledLabel>
      <StyledInput
        type="text"
        id="title"
        name="title"
        required
        defaultValue={title}
        minLength={3}
        maxLength={100}
        pattern="[A-Za-z0-9.\s]*"
        placeholder="1. Zahn, Laufen, Schläft durch..."
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
            defaultValue={date}
          />
      <StyledSaveButton type="submit">Speichern</StyledSaveButton>
    </StyledForm>
  );
}

