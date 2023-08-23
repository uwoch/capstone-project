import { StyledForm, StyledHeading, StyledInput, StyledLabel, StyledSaveButton } from "./EditForm.styled";
/* import StyledDatePicker from "..EventForm/StyledDatePicker"; */

export default function EditForm({ onSubmit, title, isEditMode }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledHeading>{isEditMode ? "Bearbeite das Ereignis" : "Add a new Event"}</StyledHeading>
      <StyledLabel htmlFor="title"></StyledLabel>
      <StyledInput
        type="text"
        id="title"
        name="title"
        pattern="[a-zA-Z0-9-]+"
        defaultValue={title}
      />
    {/*    <StyledLabel htmlFor="date">Datum</StyledLabel>
       <StyledDatePicker
            type="date"
            id="date"
            name="date"
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy/MM/dd"
            selected={startDate}
            maxDate={today}
            defaultValue={date}
          /> */}
      <StyledSaveButton type="submit">Speichern</StyledSaveButton>
    </StyledForm>
  );
}