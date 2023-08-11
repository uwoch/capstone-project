import { StyledForm, StyledLabel, StyledInput, StyledSaveButton, StyledGoBackButton } from "./AddEventForm.styled";
import StyledDatePicker from "./StyledDatePicker";
import { useState } from "react";
import ChildRadioButtons from "../ChildRadioButtons/ChildRadioButtons";


export default function Form({ onSubmit }) {
  const today = new Date();
  const [startDate, setStartDate] = useState(new Date());
  
  return (
    <StyledForm onSubmit={onSubmit}>
    <h3>Bitte wähle das Kind aus:</h3>
    <ChildRadioButtons /> 
      <StyledLabel htmlFor="event">Ereignis</StyledLabel>
      <StyledInput
        type="text"
        id="event"
        name="event"
        placeholder="1. Zahn, Läuft, Fährt Fahrrad...  "
      />
      <StyledLabel htmlFor="date">Datum</StyledLabel>
      <StyledDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            maxDate={today}
          />
      <StyledSaveButton>Speichern</StyledSaveButton>
    </StyledForm>
  );
}

