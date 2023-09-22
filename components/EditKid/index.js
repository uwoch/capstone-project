import { useState } from "react";
import KidForm from "../KidForm";
import {
  StyledSection,
  StyledEditButton,
  StyledDeleteButton,
  StyledCancelButton,
  StyledContainer,
} from "./EditKid.styled";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function EditKid() {
  const router = useRouter();
  const { id } = router.query;
  const { data: kidData, isLoading, mutate } = useSWR(`/api/kids/${id}`);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleEditKid(editedKid) {
    const response = await fetch(`/api/kids/${kidData?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedKid),
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
      setIsDeleting(true);

      const response = await fetch(`/api/kids/${kidData?._id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        router.push("/");
      } else {
        console.error("Error deleting kid");
      }
      setIsDeleting(false);
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!kidData) {
    return <h1>No data!</h1>;
  }

  return (
    <StyledSection>
      <StyledContainer>
        <StyledEditButton
          type="button"
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}
        >
          {" "}
          <span role="img" aria-label="A pencil">
            ✏️
          </span>
        </StyledEditButton>
        <StyledDeleteButton
          type="button"
          onClick={() => handleDeleteKid()}
          disabled={isEditMode}
        >
          <span role="img" aria-label="A cross indicating deletion">
            ❌
          </span>
        </StyledDeleteButton>
      </StyledContainer>
      {isEditMode && (
        <KidForm
          $active={isEditMode}
          onSubmit={handleEditKid}
          name={kidData.name}
          birthDate={kidData.birthDate}
          image_id={kidData.imageId}
          isEditMode={true}
        />
      )}
      {isEditMode && (
        <StyledCancelButton
          type="button"
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}
        >
          Abbrechen
        </StyledCancelButton>
      )}
    </StyledSection>
  );
}
