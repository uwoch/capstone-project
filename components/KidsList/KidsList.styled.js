import styled from "styled-components";
import Image from "next/image.js";
import Link from "next/link.js";

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
  margin: 0px;
  text-align: center;
  align-items: center;
`;
export const StyledImage = styled(Image)`
   width: 200px;
   height: 200px;
   border-radius: 10px;

`;
export const StyledParagraph = styled.p`
  text-align: center;
  color: black;
  font-size: 18px;
  `;

export const StyledLink = styled(Link)`
color: black;
text-decoration: none;
  &:hover {
    background-color: #6ffffa;
    border-radius: 10px;
  }
  `;
