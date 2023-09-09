import useSWR from "swr";
import { StyledList, StyledListContainer,
    StyledListItem, StyledImage, StyledParagraph, StyledLink, StyledSection, StyledHeadline, StyledAddChildLink } from "./KidsList.styled";

export default function KidsList() {
  const { data, isLoading } = useSWR("/api/kids");

  if (isLoading) {
    return <StyledSection>Loading...</StyledSection>;
  }

  if (!data || data.length === 0) {
    return (
      <StyledSection>
        <StyledHeadline>Du hast noch kein Kind angelegt, für das du loggen kannst. Du kannst hier ein Kind anlegen:</StyledHeadline>
        <StyledAddChildLink href="/addchild">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#016e82" viewBox="0 0 16 16">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            <path d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
            </svg>
            </StyledAddChildLink>
       </StyledSection>
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
