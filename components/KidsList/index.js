import useSWR from "swr";
import { StyledHeading, StyledList } from "./KidsList.styled";

export default function KidsList() {
  const { data, isLoading } = useSWR("/api/kids");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <StyledHeading>All Kids</StyledHeading>
      <StyledList>
        {data.map((kid) => (
          <li key={kid._id}>
          </li>
        ))}
      </StyledList>
    </>
  );
}
