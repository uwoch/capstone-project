import useSWR from "swr";
import { StyledList, StyledListContainer,
    StyledListItem, StyledImage, StyledParagraph, StyledLink, StyledSection } from "./KidsList.styled";

export default function KidsList() {
  const { data, isLoading } = useSWR("/api/kids");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data || data.length === 0) {
    return (
      <>
        <StyledSection>Du hast noch kein Kind angelegt, für das du loggen kannst. </StyledSection>
      </>
    );
  }
  return (
    <><StyledSection>Für wen möchtest du loggen?</StyledSection>
      <StyledListContainer>
      <StyledList>
        {data.map((kid) => (
          <StyledLink href={`/${kid._id}`} key={kid._id}>
          <StyledListItem>
          {kid.imageId && (
         <StyledImage 
         src={`https://res.cloudinary.com/dyb6xyd09/image/upload/v1690882027/${kid.imageId}.png`} 
         alt={kid.name} 
        width="250"
        height="250"
          />
         )}
          <StyledParagraph>{kid.name}</StyledParagraph>
          </StyledListItem>
          </StyledLink>
        ))}
      </StyledList>
      </StyledListContainer>
    </>
  );
}
