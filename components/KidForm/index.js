import { StyledForm, StyledLabel, StyledInput, StyledSaveButton, StyledHeading, StyledCldUploadButton, StyledImage } from "./KidForm.styled";
import { StyledDatePicker } from "../DatePicker/DatePicker.styled";
import { useState } from "react";
import { useRouter } from "next/router";

export default function KidForm({ isEditMode, name, birthDate }) {
    const today = new Date();
    const [startDate, setStartDate] = useState(new Date());
    const [imageId, setImageId] = useState(null);
    const router = useRouter(); 
    const placeholderImage = "/profile.png";

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
         <StyledHeading>{isEditMode ? "Infos bearbeiten" : "Neues Kind anlegen:"} </StyledHeading>
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
          >Profilbild hochladen</StyledCldUploadButton> 
        {imageId ? (
        <StyledImage
          src={`https://res.cloudinary.com/dyb6xyd09/image/upload/v1690882027/${imageId}.png`}
          alt="Bildvorschau"
          width="50"
          height="50"
        />
      ) : (
        <StyledImage
          src={placeholderImage}
          alt="Platzhalterbild"
          width="50"
          height="50"
        />
      )}
      <StyledSaveButton type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#016e82" viewBox="0 0 16 16">
          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
          </svg></StyledSaveButton>
      </StyledForm>
    );
  }
