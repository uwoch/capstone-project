import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 0.5rem;
 ${'' /*  align-items: center; */}
  
`;

export const StyledParagraph = styled.p`
  height: 100%;
  padding: 0.5rem;
  box-shadow: 0px 1px 5px -2px #7f8487;
  border-radius: 0.5rem;
  font-size: 1em;
  max-width: 60%;
  margin-left: 20%;
  margin-right: 20%;
`;

export const StyledEditButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  cursor: pointer;
`;

export const StyledDeleteButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  cursor: pointer;
`;

export const StyledCancelButton = styled.button`
  background-color: #ffe0e0;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 2rem 0.5rem 0.5rem 0.5rem;
  cursor: pointer;
`;