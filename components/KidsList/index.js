import useSWR from "swr";
import { StyledHeading, StyledList, StyledListContainer,
    StyledListItem } from "./KidsList.styled";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function KidsList() {
  const { data, isLoading } = useSWR("/api/kids", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>Where are the kids???</h1>;
  }

  return (
    <>
      <StyledHeading>All Kids</StyledHeading>
      <StyledListContainer>
      <StyledList>
        {data.map((kid) => (
          <StyledListItem key={kid._id}>
          {kid.name} <br /> {kid.dob}
          </StyledListItem>
        ))}
      </StyledList>
      </StyledListContainer>
    </>
  );
}
