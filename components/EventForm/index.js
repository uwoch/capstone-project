import { StyledForm, StyledHeading, StyledLabel, StyledInput, StyledSaveButton } from "./EventForm.styled";
import { StyledDatePicker } from "../DatePicker/DatePicker.styled";
import { useState } from "react";


export default function EventForm({ onSubmit, title, isEditMode, date }) {
  
  const today = new Date();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledHeading>{isEditMode ? "Ereignis bearbeiten:" : "Erstelle ein neues Ereignis:"} </StyledHeading>
      <StyledLabel htmlFor="title">Ereignis</StyledLabel>
      <StyledInput
        type="text"
        id="title"
        name="title"
        required
        defaultValue={title}
        minLength={3}
        maxLength={50}
        pattern="\S+(\s\S+)*"
        placeholder="1. Zahn, Laufen, Schläft durch..."
        title="Es müssen mindestens 3 Zeichen eingegebenen werden. Leerzeichen dürfen nicht alleine stehen."
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
      <StyledSaveButton type="submit">Log speichern</StyledSaveButton>
    </StyledForm>
  );
}

