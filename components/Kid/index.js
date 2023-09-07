import { useState } from "react";
import KidForm from "../KidForm";
import { StyledListItem, StyledParagraph, StyledEditButton, StyledDeleteButton, StyledCancelButton } from "./Kid.styled";
import { formatDate } from "../../resources/dateUtils";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Kid({ event, kidData, mutate }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { data: kidData, isLoading, mutate } = useSWR(`/api/kids/${id}`);

  async function handleEditKid(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const kidData = Object.fromEntries(formData);

    const response = await fetch(`/api/kids/${id}`, {
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
  async function handleDeleteKid(event) {
    const shouldDelete = window.confirm(
      `Möchtest du das Kind wirklich löschen?`
    );
    if (shouldDelete) {
    const responseEvent = await fetch(`/api/kids/${id}`, {
      method: "DELETE"});
    
    if (responseEvent.ok) {
      const responseKid = await fetch(`/api/kids/${kidData?._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          events: kidData?.events.filter((oneEvent) => {
            return oneEvent._id == event._id ? false : true;
          }),
        }),
      });
      if (responseKid.ok) {
        mutate();
      }
    }
  }}
    return (
      <StyledListItem>
        <StyledParagraph><strong>{kidData.name}:</strong> {formatDate(kidData.birthDate)}</StyledParagraph>
        <div>
          {isEditMode && (
            <KidForm
              onSubmit={handleEditKid}
              name={kidData.name}
              birthDate={kidData.birthDate}
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
          <StyledDeleteButton type="button" onClick={() => handleDeleteKid(kidData)}
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
      </StyledListItem>
    );
  }