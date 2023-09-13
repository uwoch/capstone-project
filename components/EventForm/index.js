import { StyledForm, StyledHeading, StyledLabel, StyledInput, StyledSaveButton } from "./EventForm.styled";
import { StyledDatePicker } from "../DatePicker/DatePicker.styled";
import { useState } from "react";


export default function EventForm({ onSubmit, title, isEditMode, date }) {
  
  const today = new Date();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledHeading>{isEditMode ? "Log bearbeiten:" : "Was möchtest du loggen?"} </StyledHeading>
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
            showYearDropdown
          />
      <StyledSaveButton type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#016e82" viewBox="0 0 16 16">
          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
          </svg></StyledSaveButton>
    </StyledForm>
  );
}

