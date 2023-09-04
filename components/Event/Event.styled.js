import styled from "styled-components";

export const StyledListItem = styled.li`
  padding: 0.5em;
  align-items: center;
  
`;

export const StyledParagraph = styled.p`
  height: 30px;
  padding: 0.2rem;
  box-shadow: 0px 1px 5px -2px #7f8487;
  border-radius: 0.5em;
  font-size: 1em;
`;

export const StyledEditButton = styled.button`
  background-color: #f0f0f0;
  font-size: 1em;
  border: none;
  border-radius: 0.5em;
  padding: 8px 8px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

export const StyledDeleteButton = styled.button`
  background-color: #f0f0f0;
  font-size: 1em;
  border: none;
  border-radius: 0.5em;
  padding: 8px 8px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: #DB7093;
  }
`;

export const StyledCancelButton = styled.button`
  background-color: #f0f0f0;
  font-size: 1em;
  border: none;
  border-radius: 0.5em;
  padding: 8px 16px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: #DB7093;
  }
`;