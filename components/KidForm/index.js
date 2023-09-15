import { StyledForm, StyledLabel, StyledInput, StyledSaveButton, StyledHeading, StyledCldUploadButton, StyledImage } from "./KidForm.styled";
import { StyledDatePicker } from "../DatePicker/DatePicker.styled";
import { useState } from "react";
import { useRouter } from "next/router";

export default function KidForm({ isEditMode, kidData }) {
    const today = new Date();
    const [startDate, setStartDate] = useState(new Date());
    const [imageId, setImageId] = useState(null);
    const router = useRouter(); 
    const placeholderImage = "/avatar.png";

    async function handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const kidData = Object.fromEntries(formData);

    const newKid = {
      name: kidData.name,
      birthDate: kidData.birthDate,
      imageId: imageId || placeholderImage,
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
         <StyledHeading>{isEditMode ? "Kindinfos bearbeiten" : "Infos zu deinem Kind"} </StyledHeading>
        <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledInput 
          type="text" 
          id="name" 
          name="name" 
          required
          defaultValue={kidData.name}
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
            defaultValue={kidData.birthDate}
            dateFormat="yyyy/MM/dd"
            showYearDropdown
          />
         
           <StyledCldUploadButton 
          uploadPreset="t4c2yyvk"
          onUpload={({ info }) => setImageId(info.public_id)}
          ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
          <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
          </svg> Profilbild hinzufügen</StyledCldUploadButton> 
          <StyledLabel htmlFor="imageId">Profilbild</StyledLabel>
          <StyledImage 
          src={imageId ? `https://res.cloudinary.com/dyb6xyd09/image/upload/v1690882027/${imageId}.png` : placeholderImage}
          alt={imageId ? "Bildvorschau" : "Platzhalterbild"}
          width="250"
          height="250"
          imageId={kidData.imageId}
        />
      <StyledSaveButton type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#016e82" viewBox="0 0 16 16">
          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
          </svg></StyledSaveButton>
      </StyledForm>
    );
  }
