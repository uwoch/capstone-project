import { StyledForm, StyledLabel, StyledInput, StyledSaveButton, StyledCldUploadButton, StyledGoBackButton } from "./AddEventForm.styled";
import StyledDatePicker from "./StyledDatePicker";
import { useState } from "react";
import ChildRadioButtons from "../ChildRadioButtons/ChildRadioButtons";
import Image from "next/image";


export default function Form({ onSubmit }) {
  const today = new Date();
  const [startDate, setStartDate] = useState(new Date());
  
  const [image, setImage] = useState();
  function onUploadImage(event) {
if (event.event === "success") {
  setImage({
    src: event.info.secure_url,
    height: event.info.height,
    width: event.info.width,
  })
}
}

  return (
    <StyledForm onSubmit={onSubmit}>
    <h3>Bitte wähle erst ein Kind aus:</h3>
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
          <p>Hier kannst du ein Bild des Ereignisses hochladen:</p>
       <StyledCldUploadButton onUpload={onUploadImage} uploadPreset="t4c2yyvk">Bild hochladen</StyledCldUploadButton> 
       {image && (
        <Image 
        src={image.src}
        height={image.height / 4}
        width={image.width / 4}
        alt=""
        />
       )}
      <StyledSaveButton>Speichern</StyledSaveButton>
    </StyledForm>
  );
}

