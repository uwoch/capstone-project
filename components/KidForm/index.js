import { StyledForm, StyledLabel, StyledInput, StyledSaveButton, StyledHeading } from "./KidForm.styled";
import { StyledDatePicker } from "../DatePicker/DatePicker.styled";
import { useState } from "react";

export default function KidForm({ onSubmit, isEditMode, name, birthDate }) {
    const today = new Date();
    const [startDate, setStartDate] = useState(new Date());
    
    return (
        <StyledForm onSubmit={onSubmit}>
         <StyledHeading>{isEditMode ? "Infos bearbeiten:" : "Kind hinzufügen:"} </StyledHeading>
        <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledInput 
          type="text" 
          id="name" 
          name="name" 
          required
          defaultValue={name}
          minLength={3}
          maxLength={50}
          pattern="\S+(\s\S+)*"
          placeholder="Wie heißt dein Kind?"
          title="Es müssen mindestens 3 Zeichen eingegebenen werden. Leerzeichen dürfen nicht alleine stehen."  
          />
        <StyledLabel htmlFor="birthDate">Geburtsdatum</StyledLabel>
        <StyledDatePicker
            type="date"
            id="birthDate"
            name="birthDate"
            onChange={(date) => setStartDate(date)}
            selected={startDate}
            required
            maxDate={today}
            defaultValue={birthDate}
            dateFormat="yyyy/MM/dd"
          />
      <StyledSaveButton type="submit">Kind hinzufügen</StyledSaveButton>
      </StyledForm>
    );
  }
