import { useRouter } from "next/router";
import Image from "next/image";
import { StyledKidProfile, StyledGoBackLink } from "./KidProfile.styled";

export default function KidProfile({
  kidData
}) {
  const router = useRouter();

  function handleGoBack() {
    router.back();
  }

  return (
    <>
      <StyledKidProfile>
        <Image
          width={200}
          height={200}
          src={kidData.image}
        />
        <h2>{kidData.name} </h2>
        <h3>* {kidData.birthDate}</h3>
        <p>Erste Krankheit: {kidData.firstIllness}</p>
        <p>Erster Zahn: {kidData.firstToothDate}</p>
      <StyledGoBackLink onClick={handleGoBack}>Zurück</StyledGoBackLink>
      </StyledKidProfile>
    </>
  );
}