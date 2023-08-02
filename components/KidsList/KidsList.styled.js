import styled from "styled-components";
import Image from "next/image.js";

export const StyledHeading = styled.h3`
  text-align: center;
  color: black;
`;
export const StyledListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledList = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 1rem;
  justify-items: center;
  padding: 0px;
  align-items: center;
`;
export const StyledListItem = styled.li`
  flex-shrink: 0;
  margin: 0px;
  text-align: center;
  align-items: center;
`;
export const StyledImage = styled(Image)`
   width: 200px;
   height: 200px;
`;
export const StyledParagraph = styled.p`
  text-align: center;
  color: black;
  `;