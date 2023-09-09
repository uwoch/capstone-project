import { StyledForm, StyledLabel, StyledInput, StyledSaveButton, StyledHeading, StyledCldUploadButton } from "./KidForm.styled";
import { StyledDatePicker } from "../DatePicker/DatePicker.styled";
import { useState } from "react";
import { useRouter } from "next/router";

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
          <StyledCldUploadButton 
          uploadPreset="t4c2yyvk"
          onUpload={({ info }) => setImageId(info.public_id)}
          >Bild hochladen</StyledCldUploadButton> 
      <StyledSaveButton type="submit">Kind hinzufügen</StyledSaveButton>
      </StyledForm>
    );
  }
