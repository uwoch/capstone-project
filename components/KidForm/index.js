import { StyledForm, StyledLabel, StyledInput, StyledSaveButton, StyledHeading, StyledCldUploadButton } from "./KidForm.styled";
import { StyledDatePicker } from "../DatePicker/DatePicker.styled";
import { useState } from "react";
import { useRouter } from "next/router";
import { StyledParagraph } from "../KidsList/KidsList.styled";

export default function KidForm({ isEditMode, name, birthDate }) {
    const today = new Date();
    const [startDate, setStartDate] = useState(new Date());
    const [imageId, setImageId] = useState(null);
    const router = useRouter(); 

    async function handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const kidData = Object.fromEntries(formData);

    const newKid = {
      name: kidData.name,
      birthDate: kidData.birthDate,
      imageId: imageId,
    };
    const response = await fetch("/api/kids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newKid),
    });

    if (response.ok) {
      router.push("/");
    }
    }
    return (
        <StyledForm onSubmit={handleSubmit}>
         <StyledHeading>{isEditMode ? "Infos bearbeiten" : "Kind hinzufügen"} </StyledHeading>
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
          <StyledParagraph>Hier kannst du ein Bild deines Kindes hochladen:</StyledParagraph>
          <StyledCldUploadButton  
          uploadPreset="t4c2yyvk"
          onUpload={({ info }) => setImageId(info.public_id)}
          ><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#016e82" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg></StyledCldUploadButton> 
      <StyledSaveButton type="submit">Kind hinzufügen</StyledSaveButton>
      </StyledForm>
    );
  }
