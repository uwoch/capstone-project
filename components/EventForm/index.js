import { StyledForm, StyledHeading, StyledLabel, StyledInput, StyledSaveButton, StyledCldUploadButton, StyledGoBackButton } from "./EventForm.styled";
import StyledDatePicker from "./StyledDatePicker";
import { useState } from "react";
/* import Image from "next/image"; */


export default function EventForm({ handleSubmit }) {
  
  const today = new Date();
  const [startDate, setStartDate] = useState(new Date());

/*   const [image, setImage] = useState();
  function onUploadImage(event) {
if (event.event === "success") {
  setImage({
    src: event.info.secure_url,
    height: event.info.height,
    width: event.info.width,
  })
}
} */

  return (
    <StyledForm onSubmit={handleSubmit}>
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
          {/* <p>Hier kannst du ein Bild des Ereignisses hochladen:</p>
       <StyledCldUploadButton onUpload={onUploadImage} uploadPreset="t4c2yyvk">Bild hochladen</StyledCldUploadButton> 
         
       {image && (
        <Image 
        src={image.src}
        height={image.height / 4}
        width={image.width / 4}
        alt=""
        type="image"
        id="image"
        name="image"
        />
       )} */}
      <StyledSaveButton type="submit">Log hinzufügen</StyledSaveButton>
    </StyledForm>
  );
}

