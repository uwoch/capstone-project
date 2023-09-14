import { useState } from "react";
import KidForm from "../KidForm";
import { StyledSection, StyledEditButton, StyledDeleteButton, StyledCancelButton } from "./Kid.styled";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Kid() {
  const router = useRouter();
  const { id } = router.query;
  const { data: kidData, isLoading, mutate } = useSWR(`/api/kids/${id}`);
  const [isEditMode, setIsEditMode] = useState(false);
  
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!kidData) {
    return <h1>No data!</h1>;
  }
  async function handleEditKid(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const kidData = Object.fromEntries(formData);

    const response = await fetch(`/api/kids/${kidData?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(kidData),
    });
    if (response.ok) {
      mutate();
      setIsEditMode(false);
    }
  }
  async function handleDeleteKid() {
    const shouldDelete = window.confirm(
      `Möchtest du das Kind wirklich löschen?`
    );
    if (shouldDelete) {
    const response = await fetch(`/api/kids/${kidData?._id}`, {
      method: "DELETE"});
    
      if (response.ok) {
        mutate();
      }
    }
  }
    return (
      <StyledSection>
        <div>
          {isEditMode && (
            <KidForm
              onSubmit={handleEditKid}
              name={kidData.name}
              birthDate={kidData.birthDate}
              imageId={kidData.imageId}
              isEditMode={true}
            />
          )}
        </div>
        {!isEditMode ? (
          <StyledEditButton
            type="button"
            onClick={() => {
              setIsEditMode(!isEditMode);
            }}>
            ✏️
            </StyledEditButton>
        ) : null}
        {!isEditMode ? (
          <StyledDeleteButton type="button" onClick={handleDeleteKid}
          >
            ❌
          </StyledDeleteButton>
        ) : (
          <StyledCancelButton
            type="button"
            onClick={() => {
              setIsEditMode(!isEditMode);
            }}>
          Abbrechen
          </StyledCancelButton>
        )}
      </StyledSection>
    );
  }