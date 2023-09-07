import { StyledForm, StyledHeading, StyledLabel, StyledInput, StyledSaveButton } from "./KidForm.styled";
import { StyledDatePicker } from "../DatePicker/DatePicker.styled";
import { useState } from "react";


export default function KidForm({ onSubmit, name, isEditMode, birthDate }) {
    const today = new Date();
    const [startDate, setStartDate] = useState(new Date());
    
    return (
        <StyledForm onSubmit={onSubmit}>
        <StyledHeading>{isEditMode ? "Infos bearbeiten" : "Ein Kind hinzufügen"}</StyledHeading>
        <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledInput 
          type="text" 
          id="name" 
          name="name" 
          defaultValue={name} 
          required
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
            dateFormat="yyyy/MM/dd"
            selected={startDate}
            required
            maxDate={today}
            defaultValue={birthDate}
          />
      <StyledSaveButton type="submit">Speichern</StyledSaveButton>
      </StyledForm>
    );
  }
