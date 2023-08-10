import Image from "next/image";
import { StyledKidProfile, StyledGoBackButton } from "./KidProfile.styled";

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
        <h3>* {kidData.birthDate}</h3>
        <p>Erste Krankheit: {kidData.firstIllness}</p>
        <p>Erster Zahn: {kidData.firstToothDate}</p>
      <StyledGoBackButton onClick={onGoBack}>Zurück</StyledGoBackButton>
      </StyledKidProfile>
  );
}