import useSWR from "swr";
import { StyledList, StyledListContainer,
    StyledListItem, StyledImage, StyledParagraph, StyledLink, StyledSection } from "./KidsList.styled";

export default function KidsList() {
  const { data, isLoading } = useSWR("/api/kids");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return <h1>Where are the kids???</h1>;
  }

  return (
    <><StyledSection>Für wen möchtest du loggen?</StyledSection>
      <StyledListContainer>
      <StyledList>
        {data.map((kid) => (
          <StyledLink href={`/${kid._id}`} key={kid._id}>
          <StyledListItem>
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
