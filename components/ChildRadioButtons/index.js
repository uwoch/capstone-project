import useSWR from "swr";
import { StyledContainer, StyledLabel, StyledParagraph } from "./ChildRadioButtons.styled";

function ChildRadioButtons() {
  const { data, isLoading } = useSWR("/api/kids");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return <h1>Where are the kids???</h1>;
  }

  return (
    <StyledContainer>
      {data.map((kid) => (
        <StyledLabel key={kid._id}>
          <input type="radio" name="child" value={kid.name} />
          <StyledParagraph>{kid.name}</StyledParagraph>
        </StyledLabel>
      ))}
    </StyledContainer>
  );
}

export default ChildRadioButtons;

