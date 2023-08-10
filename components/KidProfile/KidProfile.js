import Image from "next/image";
import { StyledKidProfile, StyledGoBackButton } from "./KidProfile.styled";
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
        <p>Erste Krankheit: {kidData.firstIllness} {formatDate(kidData.firstIllnessDate)}</p>
        <p>Erster Zahn: {formatDate(kidData.firstToothDate)}</p>
        <p>Erstes großes Event: {kidData.firstBigEvent} {formatDate(kidData.firstBigEventDate)}</p>
        <p>Fahrrad fahren: {formatDate(kidData.ridingTheBikeDate)}</p>

      <StyledGoBackButton onClick={onGoBack}>Zurück</StyledGoBackButton>
      </StyledKidProfile>
  );
}