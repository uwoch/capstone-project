import Link from "next/link";
import useSWR from "swr";
import { StyledHeading, StyledList, StyledListContainer,
    StyledListItem, StyledImage, StyledParagraph, StyledDetailsBtn } from "./KidsList.styled";

/* const fetcher = (url) => fetch(url).then((res) => res.json()); */

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
      <StyledParagraph>Für welches Kind möchtest du loggen?</StyledParagraph>
      <StyledListContainer>
      <StyledList>
        {data.map((kid) => (
          <StyledListItem key={kid._id}>
          <StyledImage src={kid.image} alt={kid.name} width={500} height={500} /> 
          <p>{kid.name}</p>
          <Link href={`/kidDetails/${kid._id}`}>
              <StyledDetailsBtn>Details</StyledDetailsBtn>
            </Link>
          </StyledListItem>
        ))}
      </StyledList>
      </StyledListContainer>
    </>
  );
}
