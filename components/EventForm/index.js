import { StyledForm, StyledHeading, StyledLabel, StyledInput, StyledSaveButton, StyledCldUploadButton, StyledGoBackButton } from "./EventForm.styled";
import StyledDatePicker from "./StyledDatePicker";
import { useState } from "react";
import Image from "next/image";
import useSWR from "swr";


export default function EventForm({ kidData }) {
  const { mutate } = useSWR(`/api/kids/${kidData?._id}`);
  
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const eventData = Object.fromEntries(formData);

    const responseEvent = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    if (responseEvent.ok) {
      const data = await responseEvent.json();
      const responseKid = await fetch(`/api/kids/${kidData?._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          events: [...kidData?.events, data.data._id],
        }),
      });

      if (responseKid.ok) {
        mutate();
      }
    }
  }
  
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
        type="title"
        id="title"
        name="title"
        placeholder="1. Zahn, Läuft, Fährt Fahrrad..."
      />
      <StyledLabel htmlFor="date">Datum</StyledLabel>
       <StyledDatePicker
            type="date"
            id="date"
            name="date"
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            selected={startDate}
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
      <StyledSaveButton type="submit">Speichern</StyledSaveButton>
    </StyledForm>
  );
}

