import Image from "next/image";
import { StyledKidProfile, StyledGoBackButton, StyledEditButton, StyledAddEventLink } from "./KidProfile.styled";
import { formatDate } from "../../resources/dateUtils";

export default function KidProfile({
  kidData,
  onGoBack
}) {

  return (
      <StyledKidProfile>
        <Image
          width={200}
          height={200}
          src={kidData.image}
          alt="Kid Photo"
        />
        <h2>{kidData.name} </h2>
        <h3>* {formatDate(kidData.birthDate)}</h3>
  
      <StyledGoBackButton onClick={onGoBack}>Zurück</StyledGoBackButton>
     {/*  <StyledEditButton>Infos bearbeiten</StyledEditButton> */}
      <StyledAddEventLink href={"/addevent"}>Ereignis hinzufügen</StyledAddEventLink>
      </StyledKidProfile>
  );
}