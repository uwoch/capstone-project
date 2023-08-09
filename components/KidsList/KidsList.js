import Link from "next/link";
import useSWR from "swr";
import { StyledHeading, StyledList, StyledListContainer,
    StyledListItem, StyledImage, StyledParagraph, StyledLink } from "./KidsList.styled";

export default function KidsList() {
  const { data, isLoading } = useSWR("/api/kids");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return <h1>Where are the kids???</h1>;
  }

  return (
    <>
      <StyledHeading>Alle Meilensteine deines Kindes in einer App!</StyledHeading>
      <StyledParagraph>Für wen möchtest du loggen?</StyledParagraph>
      <StyledListContainer>
      <StyledList>
        {data.map((kid) => (
          <StyledLink href={`/kidDetails/${kid._id}`}>
          <StyledListItem key={kid._id}>
          <StyledImage src={kid.image} alt={kid.name} width={500} height={500} /> 
          <StyledParagraph>{kid.name}</StyledParagraph>
          </StyledListItem>
          </StyledLink>
        ))}
      </StyledList>
      </StyledListContainer>
    </>
  );
}
