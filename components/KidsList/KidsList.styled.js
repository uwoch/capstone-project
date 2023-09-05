import styled from "styled-components";
import Image from "next/image.js";
import Link from "next/link.js";

export const StyledListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;

`;
export const StyledList = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 1rem;
  padding: 0rem;

`;
export const StyledListItem = styled.li`
  text-align: center;
`;
export const StyledImage = styled(Image)`
    width: 60%;
    height: 60%;
    border-radius: 0.5rem;
    margin-bottom: -0.8rem;

`;
export const StyledParagraph = styled.p`
  text-align: center;
  font-weight: bold;
  `;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  `;

export const StyledSection = styled.p`
  text-align: center;
  color: black;
  margin-top: 10rem;
  font-weight: bold;
  `;